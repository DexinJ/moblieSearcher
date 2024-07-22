import React, { useState } from "react";
import { Image, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage({ onSearch }) {
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const pickImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.5,
    });
    if (!_image.canceled) {
      // console.log(_image.assets[0].type);
      setImage(_image.assets[0].uri);
      setBase64(_image.assets[0].base64);
    }
  };

  const cameraImage = async () => {
    await requestPermission();
    let _image = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      quality: 0.8,
    });
    if (!_image.canceled) {
      // console.log(_image.assets[0].type);
      setImage(_image.assets[0].uri);
      setBase64(_image.assets[0].base64);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: "40%",
      }}
    >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a new Picture" onPress={cameraImage} />
      <Image
        source={image ? { uri: image } : require("../../../assets/splash.png")}
        style={{ width: 200, height: 200 }}
      />
      <Button
        title="Search!"
        onPress={() => {
          onSearch({ inlineData: { data: base64, mimeType: "image/jpeg" } });
        }}
        disabled={image === null}
      />
    </View>
  );
}
