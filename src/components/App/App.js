import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import UploadImage from "../UploadImage/UploadImage";
import { registerRootComponent } from "expo";
import { runAI } from "../../utils/googleAPI";
import Main from "../Main/Main";
import RecipeList from "../RecipeList/RecipeList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Header title="What's in my fridge" />
        <Main />
        <Footer />
      </SafeAreaView>
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
