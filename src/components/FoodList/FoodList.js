import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import FoodNode from "../FoodNode/FoodNode";

export default function FoodList({
  title = "Title",
  items = ["aa", "aa", "aa"],
  selected,
  setSelected,
}) {
  count = 0;
  c2 = 0;
  rend = [];
  items.forEach((item) => {
    rend.push({ id: count, name: item });
    count++;
  });
  const renderItem = ({ item }) => (
    <FoodNode
      name={item.name}
      onClick={() => handleSelectItem(item.name)}
      list={selected}
    />
  );
  const handleSelectItem = (name) => {
    if (selected.includes(name)) {
      setSelected((selected) => selected.filter((n) => n != name));
      c2 -= 1;
    } else {
      setSelected((selected) => [...selected, name]);
      c2 += 1;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.recipeTitle}>{title}</Text>
      <View style={styles.recipesFlatList}>
        <FlatList
          data={rend}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.recipesList}
          extraData={c2}
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
