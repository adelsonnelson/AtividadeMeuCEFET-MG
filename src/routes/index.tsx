//Dupla: Carlos Alexandre e Thiago Lucas

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Schedules from '../screens/Schedule';
import Help from '../screens/Help';

const Tab = createBottomTabNavigator();

const Cores = {
  azul: '#005A9C',
  cinzaClaro: '#D3D3D3',
  branco: '#FFFFFF'
};

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Cores.azul,
          borderTopColor: 'transparent',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Cores.branco,
        tabBarInactiveTintColor: Cores.cinzaClaro,
        
        tabBarIcon: ({ focused, color }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          const iconSize = 28;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Horários') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else { 
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }
          
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Horários" component={Schedules} initialParams={{ studentName: undefined }} />
      <Tab.Screen name="Ajuda" component={Help} />
    </Tab.Navigator>
  );
}