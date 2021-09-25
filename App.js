import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f4f1de");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.button} onPress={() => setBackgroundColor("#0f4c5c")}>
        eagle green
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("#3c096c")}>
        persian indigo
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("#011627")}>
        rich black
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("#eb5e28")}>
        mineral orange
      </Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("#003f88")}>
        cornflower blue
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignSelf: "stretch",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    color: "#fff",
    fontSize: 30,
    margin: 10,
    textAlign: "center",
    padding: 10,
  },
});
