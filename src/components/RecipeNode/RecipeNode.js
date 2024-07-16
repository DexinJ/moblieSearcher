import React, { useState } from "react";
import { Image, View, Button, Text, StyleSheet } from "react-native";
export default function RecipeNode({ image, name, onCLick }) {
  return (
    <View onCLick={onCLick} style={styles.container}>
      <Image
        source={image ? { uri: image } : require("../../../assets/splash.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
  },
  text: {
    fontSize: 40,
    textAlignVertical: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
