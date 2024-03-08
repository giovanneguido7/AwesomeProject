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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mais}</Text>
      <View style={styles.button}>
        <Button onPress={incrementCounter} title="+" />
        <Button onPress={decrementCounter} title="-" />
      </View>
      <View style={styles.zero}>
        <Button onPress={zerarCounter} title="Zerar" />
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
  button: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    width: 250,
  },
  zero: {
    fontSize: 40,
  },
});