import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RecipeList from "../RecipeList/RecipeList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageSearch from "../ImageSearch/ImageSearch";
import SavedList from "../SavedList/SavedList";

const Stack = createNativeStackNavigator();
export default function Main() {
  //take context
  return (
    <View style={styles.main}>
      <Stack.Navigator>
        <Stack.Screen name="RecipeList" component={RecipeList} />
        <Stack.Screen name="ImageSearch" component={ImageSearch} />
        <Stack.Screen name="ItemList" component={SavedList} />
        <Stack.Screen name="ShoppingList" component={RecipeList} />
      </Stack.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
  },
});
