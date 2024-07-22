import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import RecipeNode from "../components/RecipeNode/RecipeNode";

export default function FoodList({
  title = "Title",
  items = ["aa", "aa", "aa"],
}) {
  count = 0;
  rend = [];
  items.forEach((item) => {
    rend.push({ id: count, name: item });
    count++;
  });
  const renderItem = ({ item }) => <RecipeNode name={item.name} />;
  return (
    <View style={styles.container}>
      <Text style={styles.recipeTitle}>{title}</Text>
      <View style={styles.recipesFlatList}>
        <FlatList
          data={rend}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.recipesList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  recipeTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  recipesFlatList: {
    flex: 1,
    padding: 20,
  },
  recipesList: {
    gap: 24,
  },
});
