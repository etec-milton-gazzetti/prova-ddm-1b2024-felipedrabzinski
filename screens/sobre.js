import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>Luís Felipe de Lima Drabzinski</Text>

      <Pressable style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10 }} onPress={() => navigation.navigate("Home")}><Text style={{ color: 'white' }}>Voltar</Text></Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },

});
