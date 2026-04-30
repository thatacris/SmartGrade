import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'; 

export default function TelaLogin({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Login</Text>
        
        <Text style={styles.label}>E-mail</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Seu e-mail" 
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Sua senha" 
          secureTextEntry 
          placeholderTextColor="#999"
        />

        <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.textoBotaoLogin}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}