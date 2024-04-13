import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import RecipeNode from "../RecipeNode/RecipeNode";

export default function RecipeList() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([
    { id: 123, name: "aa" },
    { id: 124, name: "aa" },
    { id: 125, name: "aa" },
    { id: 126, name: "aa" },
  ]);

  const renderItem = ({ item }) => <RecipeNode name={item.name} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.recipesList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  recipeContainer: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  recipeTitle: {
    fontSize: 16,
  },
  recipesList: {
    gap: 24,
  },
});
