import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = ({ onMenuPress, onBackPress }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={onMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
  },
});

export default Footer;
