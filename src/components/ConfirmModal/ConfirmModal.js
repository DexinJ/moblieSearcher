import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { Icon } from "@rneui/themed";
import FoodList from "../FoodList/FoodList";

const ConfirmModal = ({
  response,
  visible,
  isLoading,
  closeModal,
  searchModal,
}) => {
  const [selected, setSelected] = useState([]);
  res = [];
  if (response.slice(-1) == ".") {
    res = response.slice(0, -1).split(", ");
  } else {
    res = response.split(", ");
  }
  return (
    <Modal
      animationType="slide"
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
              <FoodList
                title="Ingredients:"
                items={res}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </View>
          <View style={styles.modalButtons}>
            <Pressable
              style={[styles.button, styles.buttonSearch]}
              onPress={() => {
                searchModal(selected.toString());
                setSelected([]);
              }}
            >
              <Text style={styles.textStyle}>Search</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setSelected([]);
                closeModal();
              }}
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
    flexDirection: "row",
    justifyContent: "space-around",
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

export default ConfirmModal;
