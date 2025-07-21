//Dupla: Carlos Alexandre e Thiago Lucas

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Help() {

  const handleContactPress = () => {
    Alert.alert(
        "Fale Conosco",
        "Entre em contato pelo e-mail suporte@cefetmg.br",
        [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
       <Ionicons name="help-circle-outline" size={40} color="#005A9C" style={{ marginBottom: 15 }}/>
      <Text style={styles.title}>Perguntas Frequentes (FAQ)</Text>

      <View style={styles.faqList}>
        <Text style={styles.faqItem}>• Como acessar o SIGAA? </Text>
        <Text style={styles.faqItem}>• Como solicitar declaração de matrícula?</Text>
        <Text style={styles.faqItem}>• Onde consultar minhas notas? </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContactPress}>
        <Text style={styles.buttonText}>Fale conosco</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  faqList: {
    width: '100%',
    marginBottom: 40,
  },
  faqItem: {
    fontSize: 17,
    color: '#555',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#005A9C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});