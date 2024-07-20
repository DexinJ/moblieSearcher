import React, { useState } from "react";
import { Image, View, Button, Text, StyleSheet } from "react-native";
export default function RecipeNode({ image, name, onCLick }) {
  return (
    <View onCLick={onCLick} style={styles.container}>
      {/* <Image
        source={image ? { uri: image } : require("../../../assets/splash.png")}
        style={styles.image}
      /> */}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 8,
    backgroundColor: "#EFFAC1",
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});
