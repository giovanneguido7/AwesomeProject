import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [mais, setMais] = useState(0);

  const incrementCounter = () => {
    setMais(mais + 1);
  };
  const decrementCounter = () => {
    setMais(mais - 1);
  };

  const zerarCounter = () => {
    setMais(0);
  };

  const adicionar = () => {
    setMais(mais + 10);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mais}</Text>
      <View style={styles.button}>
        <Button onPress={incrementCounter} title="+" />
        <View style={styles.button2}></View>
        <Button onPress={decrementCounter} title="-" />
      </View>
      <View style={styles.zero}>
        <Button onPress={zerarCounter} title="Zerar" />
      </View>
      <View style={styles.add}>
        <Button onPress={adicionar} title="Add 10" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 60,
  },
  button:
   {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    flexDirection: 'column',
  },

  button2: {
    margin: 15,
  },

  add: {
    padding: 10,
  },
  
  zero: {
    marginTop: 250,
    fontSize: 40,
  },
});
