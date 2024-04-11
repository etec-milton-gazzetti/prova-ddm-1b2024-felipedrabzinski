import React from 'react';
import { Text, View, Pressable, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Conteudo from "./conteudo";
import Sobre from "./sobre";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Revolução Russa</Text>
      <Pressable
        style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10, width: '50%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={{ color: 'white' }}>Conteúdo</Text>
      </Pressable>
      <Pressable
        style={{ padding: 10, backgroundColor: '#000000', borderRadius: 5, marginTop: 10, width: '50%', alignItems: 'center' }}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={{ color: 'white' }}>Sobre</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '50',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },

});

