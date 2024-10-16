import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export default OpenLoading = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../../assets/icon.png')} // Substitua pelo caminho da sua imagem de logo
        style={styles.logo}
      />

      {/* Nome da aplicação */}
      <Text style={styles.appName}>SmartClamps</Text>

      {/* Slogan */}
      <Text style={styles.slogan}>OTIMIZANDO O TEMPO E SALVANDO VIDAS</Text>

      {/* Spinner de carregamento */}
      <ActivityIndicator size="large" color="#000" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120, // Defina o tamanho da logo
    height: 120,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  slogan: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  spinner: {
    marginTop: 20,
  },
});

