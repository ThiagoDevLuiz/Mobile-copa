import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Thiago";
  const age = "23"

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name} se cadastrou</Text>
      <Text style={styles.text}>{name} tem {age} anos.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 50,
    color: "green",
  },
});
