import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Conteudo from "./conteudo";
import Sobre from "./sobre";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela inicial</Text>
      <Pressable
        style={{ padding: 10, backgroundColor: '#007bff', borderRadius: 5, marginTop: 10 }}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={{ color: 'white' }}>Conteúdo</Text>
      </Pressable>
      <Pressable
        style={{ padding: 10, backgroundColor: '#007bff', borderRadius: 5, marginTop: 10 }}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={{ color: 'white' }}>Sobre</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conteudo" component={Conteudo} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
