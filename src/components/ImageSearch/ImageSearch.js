import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import UploadImage from "../UploadImage/UploadImage";
import { runAI } from "../../utils/googleAPI";

function ImageSearch() {
  const [response, setResponse] = useState("Upload an Image!");
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = (file) => {
    setIsLoading(true);
    runAI(file)
      .then((res) => {
        console.log(res);
        setResponse(res);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <View style={styles.container}>
      <UploadImage onSearch={handleSearch} />
      <View style={styles.container}>
        <Text style={styles.text}>{isLoading ? "Loading..." : response}</Text>
      </View>
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
