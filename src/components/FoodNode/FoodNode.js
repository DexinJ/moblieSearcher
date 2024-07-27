import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
export default RecipeNode = memo(function FoodNode({ name, onClick, list }) {
  backgroundColor = list.includes(name) ? "#3c4220" : "#EFFAC1";
  color = list.includes(name) ? "white" : "black";

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onClick}
    >
      <Text style={[styles.text, { color: color }]}>{name}</Text>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 8,

    borderRadius: 15,
    minHeight: 20,
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
