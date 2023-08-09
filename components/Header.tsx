import { Image, StyleSheet, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../assets/images/LittleLemonLogo.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 10,
    width: "100%",
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 40,
    resizeMode: "contain",
  },
});
