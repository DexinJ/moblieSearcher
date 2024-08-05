import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { registerRootComponent } from "expo";
import RecipeList from "../RecipeList/RecipeList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageSearch from "../ImageSearch/ImageSearch";
import Ionicons from "react-native-vector-icons/Ionicons";
import SavedList from "../SavedList/SavedList";
import { getItem, setItem } from "../../utils/AsyncStorage";
const Tab = createBottomTabNavigator();

function App() {
  handleOpenApp = async () => {
    if ((await getItem("favorite")) == null) {
      setItem("favorite", []);
    }
  };
  useEffect(() => {
    handleOpenApp();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipe") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Shopping") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Items") {
              iconName = focused ? "fast-food" : "fast-food-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
        initialRouteName="Search"
      >
        <Tab.Screen name="Recipe" component={RecipeList} />
        <Tab.Screen name="Search" component={ImageSearch} />
        <Tab.Screen name="Shopping" component={RecipeList} />
        <Tab.Screen name="Items" component={SavedList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default registerRootComponent(App);
