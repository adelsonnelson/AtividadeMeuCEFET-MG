//Dupla: Carlos Alexandre e Thiago Lucas

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type HomeScreenNavigationProp = {
  navigate: (screen: string, params?: object) => void;
};

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const studentName = 'Ana';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="school" size={40} color="#005A9C" />
        <Text style={styles.title}>Bem-vindo(a) ao Meu CEFET-MG!</Text>
      </View>

      <Text style={styles.welcomeText}>Olá, {studentName}! É um prazer ter você aqui.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Horários', { studentName: studentName })}
      >
        <Text style={styles.buttonText}>Ver meus horários</Text>
      </TouchableOpacity>

      <View style={styles.newsSection}>
        <Text style={styles.sectionTitle}>Últimas Notícias</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.cefetmg.br/noticias/')}>
          <Text style={styles.newsItem}>• CEFET-MG abre inscrições para cursos técnicos.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.cefetmg.br/noticias/')}>
          <Text style={styles.newsItem}>• Alunos são premiados em olimpíada de matemática.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.cefetmg.br/noticias/')}>
           <Text style={styles.newsItem}>• Confira o calendário acadêmico de 2025.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005A9C',
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#F39C12',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  newsItem: {
    fontSize: 16,
    color: '#005A9C', 
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});