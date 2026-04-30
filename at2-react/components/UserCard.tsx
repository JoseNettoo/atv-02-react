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
  const accentColor = status === 'Online' ? '#4CAF50' : '#9E9E9E';

  const toggleStatus = () => {
    setStatus(status === 'Offline' ? 'Online' : 'Offline');
  };

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: cardBackground }]}
      activeOpacity={0.8}
    >
      {/* Avatar + Info */}
      <View style={styles.content}>
        {/* Avatar Indicador */}
        <View style={[styles.avatar, { backgroundColor: accentColor, opacity: 0.2 }]}>
          <View style={[styles.statusIndicator, { backgroundColor: accentColor }]} />
        </View>

        {/* Informações do Usuário */}
        <View style={styles.info}>
          <Text style={[styles.name, { color: textColor }]} numberOfLines={1}>
            {nome}
          </Text>
          <Text style={[styles.profession, { color: textColor, opacity: 0.6 }]} numberOfLines={1}>
            {profissao}
          </Text>
          <View style={styles.statusContainer}>
            <View style={[styles.statusDot, { backgroundColor: accentColor }]} />
            <Text style={[styles.statusText, { color: accentColor }]}>
              {status}
            </Text>
          </View>
        </View>
      </View>

      {/* Botão de Ação */}
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: accentColor }]}
        onPress={toggleStatus}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {status === 'Online' ? '🟢' : '⚫'} {status === 'Online' ? 'Online' : 'Offline'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  profession: {
    fontSize: 13,
    marginBottom: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});