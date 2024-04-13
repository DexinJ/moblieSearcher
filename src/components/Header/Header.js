import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Header = ({ title, onMenuPress, onBackPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={onBackPress}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={onMenuPress}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default Header;
