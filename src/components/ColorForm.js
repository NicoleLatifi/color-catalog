import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";

const ColorForm = ({ onNewColor = (f) => f }) => {
  const [inputValue, setInputValue] = useState("");
  const input = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.textInput}
        value={inputValue}
        onChangeText={setInputValue}
        autoCapitalize="none"
        placeholder="enter a color..."
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setInputValue("");
        }}
      >
        <Text style={styles.buttonText}>add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4fc3f7",
    borderRadius: 5,
    color: "black",
    margin: 5,
    padding: 5,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 2,
    flex: 1,
    fontSize: 20,
    margin: 5,
    padding: 5,
  },
});

export default ColorForm;
