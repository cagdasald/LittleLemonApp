import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const menuItemsToDisplay = [
  { name: "Humus", id: "1A" },
  { name: "Moutabal", id: "2B" },
  { name: "Falafel", id: "3C" },
  { name: "Marinated Olives", id: "4D" },
  { name: "Kofte", id: "5E" },
  { name: "Eggplant", id: "6F" },
  { name: "Lentil Burger", id: "7G" },
  { name: "Smoked Salmon", id: "8H" },
  { name: "Kofta Burger", id: "9I" },
  { name: "Turkish Kebab", id: "10J" },
  { name: "Fries", id: "11K" },
  { name: "Butterd Rice", id: "12L" },
  { name: "Bread Sticks", id: "13M" },
  { name: "Pita Pocket", id: "14N" },
  { name: "Lentil Soup", id: "15O" },
  { name: "Greek Salad", id: "16Q" },
  { name: "Rice Pilaf", id: "17R" },
  { name: "Baklava", id: "18S" },
  { name: "Tartufo", id: "19T" },
  { name: "Tiramisu", id: "20U" },
  { name: "Milfoy", id: "21V" },
  { name: "Panna Cotta", id: "22W" },
];

const Item = ({ name }: { name: string }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

const PriceList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={(itemData) => <Item name={itemData.item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PriceList;

const styles = StyleSheet.create({
    listContainer: {
        padding: 20
    },
    item: {
        paddingVertical: 5,
    },
    itemText: {
        color: '#f99e14',
        fontSize: 20,
        fontWeight: '500',
    }
});
