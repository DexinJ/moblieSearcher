import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import UploadImage from "../UploadImage/UploadImage";
import { runAI } from "../../utils/googleAPI";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

function ImageSearch({ navigation, route }) {
  const [response, setResponse] = useState("Upload an Image!");
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSearch = (file) => {
    setIsLoading(true);
    setModalVisible(true);
    runAI(file)
      .then((res) => {
        // console.log(res);
        setResponse(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleRecipeSearch = (ingredients) => {
    navigation.navigate("Recipe", { ingredients: ingredients });
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <UploadImage onSearch={handleSearch} />
      <ConfirmModal
        response={response}
        isLoading={isLoading}
        visible={modalVisible}
        closeModal={() => {
          setModalVisible(false);
        }}
        searchModal={handleRecipeSearch}
      />
    </View>
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

export default ImageSearch;
