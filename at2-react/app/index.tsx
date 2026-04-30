import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';
import UserCard from '../components/UserCard';

const users = [
  { id: '1', nome: 'José Neto', profissao: 'Suporte técnico' },
  { id: '2', nome: 'Junior', profissao: 'Coordenador' },
  { id: '3', nome: 'Maria Silva', profissao: 'Desenvolvedora' },
  { id: '4', nome: 'Pedro Santos', profissao: 'Designer' },
  { id: '5', nome: 'Ana Costa', profissao: 'Product Manager' },
];

export default function Index() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({ light: '#E5E5E5', dark: '#3C3C3C' }, 'text');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: textColor }]}>👥 Usuários</Text>
          <Text style={[styles.subtitle, { color: textColor, opacity: 0.6 }]}>
            {users.length} usuários cadastrados
          </Text>
        </View>

        {/* Lista de Usuários */}
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCard nome={item.nome} profissao={item.profissao} />
          )}
          contentContainerStyle={styles.list}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 0,
  },
  list: {
    paddingBottom: 24,
    gap: 12,
  },
});