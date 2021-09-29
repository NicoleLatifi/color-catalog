import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ColorButton from "./src/components/ColorButton";
import colors from "./src/data/colors.json";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f4f1de");

  return (
    <FlatList
      style={[styles.container, { backgroundColor }]}
      data={Object.values(colors)}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <ColorButton
            key={item.id}
            backgroundColor={item.id}
            onPress={setBackgroundColor}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    marginTop: 50,
  },
});

export default App;
