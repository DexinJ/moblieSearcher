import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import RecipeNode from "../RecipeNode/RecipeNode";
import { getRecipeInfo } from "../../utils/spoonacularAPI";
import RecipeModal from "../RecipeModal/RecipeModal";
import { clear, getItem, setItem } from "../../utils/AsyncStorage";
import { useIsFocused } from "@react-navigation/native";
import SavedModal from "../SavedModal/SavedModal";

export default function SavedList({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const isFocused = useIsFocused();

  const handleSelectedRecipe = (item) => {
    //console.log("CLICKED!");
    setModalVisible(true);
    setCurrentRecipe(item);
  };

  const handleSaveRecipe = async (item) => {
    //console.log(item);
    setIsCardLoading(true);
    old = await getItem("favorite");
    await setItem(
      (key = "favorite"),
      (value = old.filter((i) => {
        return i.id != item.id;
      }))
    ).finally(() => {
      setRecipeList(
        old.filter((i) => {
          return i.id != item.id;
        })
      );
      setIsCardLoading(false);
      setModalVisible(false);
    });
  };

  const handlePage = async () => {
    const list = await getItem("favorite");
    setRecipeList(list);
    //console.log(list);
  };
  count = 0;
  rend = [];
  title = "Saved Recipes:";
  const renderItem = ({ item }) => (
    <RecipeNode
      image={item.image}
      name={item.title}
      onSearch={() => {
        handleSelectedRecipe(item);
      }}
    />
  );
  useEffect(() => {
    if (isFocused) {
      handlePage();
    }
    //console.log("sdadsf");
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
            alignSelf: "center",
          }}
        />
      ) : (
        <View style={styles.vie}>
          <Text style={styles.recipeTitle}>{title}</Text>
          <View style={styles.recipesFlatList}>
            <FlatList
              data={recipeList}
              initialNumToRender={7}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.recipesList}
            />
          </View>
        </View>
      )}
      <SavedModal
        isLoading={isCardLoading}
        visible={modalVisible}
        content={currentRecipe}
        closeModal={() => {
          setModalVisible(false);
        }}
        saveItem={() => {
          handleSaveRecipe(currentRecipe);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  vie: {
    margin: 0,
    padding: 0,
    flex: 1,
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
