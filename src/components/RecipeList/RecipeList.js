import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import RecipeNode from "../RecipeNode/RecipeNode";
import { getRecipe, getRecipeInfo } from "../../utils/spoonacularAPI";
import RecipeModal from "../RecipeModal/RecipeModal";

export default function RecipeList({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleRecipeSearch = () => {
    if (route.params) {
      setIsLoading(true);
      getRecipe(route.params.ingredients)
        .then((res) => {
          setRecipeList(res);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleSelectedRecipe = (item) => {
    console.log("CLICKED!");
    setIsCardLoading(true);
    setModalVisible(true);
    getRecipeInfo(item.id)
      .then((res) => {
        setCurrentRecipe(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsCardLoading(false);
      });
  };

  count = 0;
  rend = [];
  title = "Search result:";
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
    handleRecipeSearch();
  }, [route.params]);
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
      <RecipeModal
        isLoading={isCardLoading}
        visible={modalVisible}
        content={currentRecipe}
        closeModal={() => {
          setModalVisible(false);
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
