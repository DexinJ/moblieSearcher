import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import RecipeNode from "../RecipeNode/RecipeNode";

export default function ShoppingList({ title }) {
  const [item, setItem] = useState("");
  const [list, setList] = useState([
    { id: 123, name: "item 1" },
    { id: 124, name: "item" },
    { id: 125, name: "item" },
    { id: 126, name: "item" },
  ]);

  const renderItem = ({ item }) => <RecipeNode name={item.name} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
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
    backgroundColor: "#000",
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
