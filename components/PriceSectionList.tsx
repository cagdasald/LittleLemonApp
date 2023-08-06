import { Button, FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  priceListBtn: () => void;
}

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Item = ({ name, price }: { name: string; price: string }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  );
};

const Seperator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
      }}
    />
  );
};

const PriceSectionList = (props: IProps) => {
  const renderItem = ({ item }: { item: string}) => {
    return (
      <Item
        name={item}
        price={item}
      />
    );
  };


  return (
    <View style={styles.listContainer}>
      <Text style={styles.menuText}>Menu</Text>
      <Button title="Flat List" onPress={props.priceListBtn} />
      <SectionList sections={menuItemsToDisplay} renderItem={renderItem}/>
    </View>
  );
};

export default PriceSectionList;

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  menuText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#f99e14",
    fontSize: 20,
    fontWeight: "500",
  },
});
