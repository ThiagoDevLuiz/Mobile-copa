import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NativeBaseProvider, Text, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="fuchsia.400">
        <Text color="black" fontSize="25">
          Hello React Native!
        </Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 25,
    color: "#fff",
  },
});
