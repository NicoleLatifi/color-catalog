import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import lilypads from "./assets/lilypads.jpeg";
import turtleneck from "./assets/turtleneck.jpeg";

export default function App() {
  return (
    <View style={styles.page}>
      <View style={styles.nav}>
        <Text style={styles.text}>red</Text>
        <Text style={[styles.text, styles.selectedText]}>green</Text>
        <Text style={styles.text}>blue</Text>
      </View>
      <Image style={styles.image} source={lilypads} />
      <Image style={styles.image} source={turtleneck} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    height: Dimensions.get("window").height - 500,
    marginTop: 50,
    width: Dimensions.get("window").width - 10,
    // resizeMode: "center",
  },
  nav: {
    flexDirection: "row",
  },
  page: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    marginTop: 40,
  },
  text: {
    flex: 1,
    backgroundColor: "yellow",
    color: "red",
    fontSize: 22,
    margin: 10,
    textAlign: "center",
    padding: 5,
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
    textAlign: "center",
  },
});
