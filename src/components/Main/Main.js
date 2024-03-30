import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RecipeList from "../RecipeList/RecipeList";

export default function Main() {
  //take context
  return (
    <View>
      <RecipeList />
    </View>
  );
}
