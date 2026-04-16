import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';

interface UserCardProps {
  nome: string;
  profissao: string;
}

export default function UserCard({ nome, profissao }: UserCardProps) {
  const [status, setStatus] = useState<'Offline' | 'Online'>('Offline');
  const cardBackground = useThemeColor({ light: '#ffffff', dark: '#2c2c2c' }, 'background');
  const textColor = useThemeColor({}, 'text');

  const toggleStatus = () => {
    setStatus(status === 'Offline' ? 'Online' : 'Offline');
  };

  return (
    <View style={[styles.card, { backgroundColor: cardBackground }]}>
      <Text style={[styles.name, { color: textColor }]}>{nome}</Text>
      <Text style={[styles.profession, { color: textColor }]}>{profissao}</Text>
      <Text style={[styles.status, { color: textColor }]}>Status: {status}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleStatus}>
        <Text style={styles.buttonText}>Alterar status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 350,
    borderRadius: 16,
    padding: 20,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profession: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});