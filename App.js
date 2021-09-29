import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import ColorButton from "./src/components/ColorButton";
import ColorForm from "./src/components/ColorForm";
import colors from "./src/data/colors.json";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f4f1de");

  return (
    <>
      <ColorForm
        onNewColor={(newColor) => Alert.alert(`TODO: add color ${newColor}`)}
      />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={Object.values(colors)}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.id}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
});

export default App;
