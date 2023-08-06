import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PriceList from "./components/PriceList";
import { useState } from "react";
import PriceSectionList from "./components/PriceSectionList";

export default function App() {
  const [page, setPage] = useState<string>("PriceList");

  let screen = (
    <View style={styles.list}>
      <PriceList sectionListBtn={() => setPage("SectionList")} />
    </View>
  );

  if (page === "SectionList") {
    screen = (
      <View style={styles.list}>
        <PriceSectionList priceListBtn={() => setPage("PriceList")}/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      {screen}
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
  header: {
    width: "100%",
  },
  list: {
    flex: 1,
  },
  footer: {
    width: "100%",
  },
});
