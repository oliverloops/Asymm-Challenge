import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default function SearchBar() {
  const [input, setInput] = React.useState("");

  console.log(input);

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        placeholder="Search for a recipe..."
        onChangeText={(text) => setInput(text)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 45,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
});
