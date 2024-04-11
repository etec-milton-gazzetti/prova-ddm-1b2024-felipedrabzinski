import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>Luís Felipe de Lima Drabzinski</Text>
      <Text style={styles.text}>3º Info</Text>

      <Pressable style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10, width: '50%', alignSelf: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Home")}><Text style={{ color: 'white' }}>Voltar</Text></Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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
