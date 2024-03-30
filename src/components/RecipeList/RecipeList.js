import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function RecipeList() {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  const renderItem = ({ item }) => (
    <View style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
    </View>
  );

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
    backgroundColor: "#fff",
    padding: 20,
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
    flexGrow: 1,
  },
});
