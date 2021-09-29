import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import colors from "../data/colors.json";

const ColorButton = ({ backgroundColor, onPress = (f) => f }) => {
  const color = colors[backgroundColor];

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(color.hexValue)}
      underlayColor="orange"
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor: color.hexValue }]} />
        <Text style={styles.buttonText}>{color.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    backgroundColor: "rgba(255,255,255, .8)",
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 30,
    marginLeft: 10,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  sample: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    margin: 5,
    width: 50,
  },
});

export default ColorButton;
