import { View, Text, StyleSheet, SafeAreaView } from "react-native";

function Recipe() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content />
    </SafeAreaView>
  );
}

function Content() {
  return (
    <View>
      <Text>Here goes the recipe</Text>
    </View>
  );
}

export default Recipe;
