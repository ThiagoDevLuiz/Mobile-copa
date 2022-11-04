import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Renata";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name} é linda!</Text>
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
    color: "#dedede",
  },
});
