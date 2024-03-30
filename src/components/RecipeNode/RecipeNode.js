import React, { useState } from "react";
import { Image, View, Button, Text } from "react-native";
export default function RecipeNode({ image, name, onCLick }) {
  return (
    <View onCLick={onCLick}>
      <Image
        source={image ? { uri: image } : require("../../../assets/splash.png")}
      />
      <Text>{name}</Text>
    </View>
  );
}
