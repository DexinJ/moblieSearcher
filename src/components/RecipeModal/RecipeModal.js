import React, { useCallback } from "react";
import {
  Image,
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
  Linking,
  Button,
} from "react-native";

const OpenURLButton = ({ url, children, style }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} style={style} />;
};

const RecipeModal = ({ content, visible, isLoading, closeModal, saveItem }) => {
  const PRICE = content.pricePerServing / 100;
  const TEXT = `View in ${content?.sourceName}`;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        closeModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalItems}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                style={{
                  transform: [{ scaleX: 2 }, { scaleY: 2 }],
                  alignSelf: "center",
                }}
              />
            ) : (
              <View style={styles.contentView}>
                <Image
                  source={{
                    uri: content.image,
                  }}
                  alert={`${content?.title} © ${content?.sourceName}`}
                  style={styles.image}
                />

                <Text>Image source © {content?.sourceName}</Text>
                <Text>{content?.title}</Text>
                <View>
                  <Text>${PRICE?.toFixed(2)} per serving</Text>
                  <Text>Ready in {content?.readyInMinutes} minutes.</Text>
                  <Text>
                    Spoonacular score: {content?.spoonacularScore?.toFixed(2)}%
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.modalButtons}>
            <OpenURLButton
              style={[styles.button, styles.buttonSearch]}
              onPress={() => saveItem()}
            >
              Save to Favorite
            </OpenURLButton>
            <OpenURLButton
              style={[styles.button, styles.buttonSearch]}
              url={content?.sourceUrl}
            >
              {TEXT}
            </OpenURLButton>

            <OpenURLButton
              style={[styles.button, styles.buttonSearch]}
              url={content?.spoonacularSourceUrl}
            >
              View in Spoonacular
            </OpenURLButton>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModal()}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: "100%",
  },
  contentView: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  image: {
    width: "100%",
    height: "40%",
    backgroundColor: "black",
  },
  modalView: {
    marginVertical: 25,
    marginHorizontal: 10,
    padding: 10,
    paddingBottom: 20,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItems: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  modalButtons: {
    display: "flex",
    gap: 30,
    width: "100%",
    paddingTop: 10,
  },
  button: {
    borderRadius: 30,
    padding: 15,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#498B1B",
  },
  buttonSearch: {
    backgroundColor: "#80971E",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default RecipeModal;
