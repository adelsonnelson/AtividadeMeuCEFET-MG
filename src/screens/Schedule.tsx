//Dupla: Carlos Alexandre e Thiago Lucas

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type SchedulesRouteParams = {
  Schedules: { studentName?: string; };
};
type ScheduleScreenRouteProp = RouteProp<SchedulesRouteParams, 'Schedules'>;

export default function Schedules() {
  const route = useRoute<ScheduleScreenRouteProp>();
  const studentName = route.params?.studentName;

  return (
    <View style={styles.container}>
      <Ionicons name="calendar-outline" size={40} color="#005A9C" style={{ marginBottom: 15 }} />
      {studentName ? (
        <Text style={styles.title}>
          Olá, {studentName}. Aqui estão seus horários:
        </Text>
      ) : (
        <Text style={styles.title}>Horários de aula não personalizados.</Text>
      )}

      <View style={styles.scheduleList}>
        <Text style={styles.scheduleItem}> Segunda: Matemática - 08h às 09h40 </Text>
        <Text style={styles.scheduleItem}> Terça: Física - 10h às 11h40 </Text>
        <Text style={styles.scheduleItem}> Quarta: Programação - 13h às 14h40 </Text>
        <Text style={styles.scheduleItem}> Quinta: Inglês Técnico - 08h às 09h40</Text>
        <Text style={styles.scheduleItem}> Sexta: Projeto Aplicado - 15h às 16h40</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleList: {
    width: '100%',
    paddingHorizontal: 10,
  },
  scheduleItem: {
    fontSize: 17,
    color: '#555',
    marginBottom: 12,
    lineHeight: 24,
  },
});