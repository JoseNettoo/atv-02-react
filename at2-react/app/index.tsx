import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';
import UserCard from '../components/UserCard';

const users = [
  { nome: 'José Neto', profissao: 'Suporte técnico' },
  { nome: 'Junior', profissao: 'Coordenador' },
];

export default function Index() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Lista de Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <UserCard nome={item.nome} profissao={item.profissao} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
});