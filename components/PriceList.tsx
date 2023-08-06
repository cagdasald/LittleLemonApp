import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IProps {
  sectionListBtn: () => void;
}

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
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
}

const PriceList = (props: IProps) => {
  return (
    <View style={styles.listContainer}>
    <Text style={styles.menuText}>Menu</Text>
    <Button title="Section List" onPress={props.sectionListBtn} /> 
      <FlatList
        data={menuItemsToDisplay}
        renderItem={(itemData) => (
          <Item price={itemData.item.price} name={itemData.item.name} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};

export default PriceList;

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
