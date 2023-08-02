import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PriceList from "./components/PriceList";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.list}>
        <PriceList/>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  header:{
    width: "100%",
  },
  list: {
    flex: 1,
  },
  footer: {
    width: "100%",
  }
});
