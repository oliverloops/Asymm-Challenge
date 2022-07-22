import React from "react";
import { Text, Pressable, Image, StyleSheet } from "react-native";
//Context API
import { globalContext } from "../../screens/Home";

export default function Card({ title, img, route }) {
  const consumer = React.useContext(globalContext);

  return (
    <Pressable
      style={styles.container}
      onPress={() => consumer.navigation.navigate(route)}
    >
      <Image style={styles.img} source={{ uri: img }} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    backgroundColor: "rgb(20, 191, 140)",
    borderRadius: 14,
    padding: 25,
  },
  title: {
    fontSize: 16,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
});
