import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

import bgCoffeeImg from "@/assets/images/coffee.jpg";

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={bgCoffeeImg}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 45,
    color: "gold",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
});
