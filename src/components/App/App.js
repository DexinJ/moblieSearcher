import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import UploadImage from "../UploadImage/UploadImage";
import { registerRootComponent } from "expo";
import { runAI } from "../../utils/googleAPI";

function App() {
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
    <SafeAreaView style={styles.container}>
      <UploadImage onSearch={handleSearch} />
      <View style={styles.container}>
        <Text style={styles.text}>{isLoading ? "Loading..." : response}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default registerRootComponent(App);
