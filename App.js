import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorButton from "./src/components/ColorButton";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f4f1de");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="a" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="b" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="c" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="d" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="e" onPress={setBackgroundColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
