import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={[styles.text, styles.selectedText]}>green</Text>
      <Text style={styles.text}>blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#DDD",
    marginTop: 40,
  },
  text: {
    backgroundColor: "yellow",
    color: "red",
    fontSize: 22,
    margin: 10,
    padding: 5,
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  },
});
