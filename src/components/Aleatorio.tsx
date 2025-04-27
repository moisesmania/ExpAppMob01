import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface AleatorioProps {
  min: number;
  max: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ min, max }) => {
  const gerarNumero = (): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [numero, setNumero] = useState<number>(gerarNumero());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Número aleatório entre {min} e {max}: {numero}
      </Text>

      <Button
        title="Gerar Novo Número"
        onPress={() => setNumero(gerarNumero())}
        color="#006400" // Verde escuro
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#334756',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});

export default Aleatorio;
