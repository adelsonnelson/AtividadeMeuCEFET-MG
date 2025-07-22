//Dupla: Carlos Alexandre e Thiago Lucas

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <AppRoutes/>
    </NavigationContainer>
  );
}