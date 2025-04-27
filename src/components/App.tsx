import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Aleatorio from './Aleatorio';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Gerador de Número Aleatório</Text>
      <Aleatorio min={1} max={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#082032',
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
});

