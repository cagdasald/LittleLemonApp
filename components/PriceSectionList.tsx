import {
  Button,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Footer from "./Footer";

interface IProps {
  priceListBtn: () => void;
}

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }: { name: string, price: string }) => {
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
  const renderItem = ({ item }: { item: any }) => {
    return <Item name={item.name} price={item.price} />;
  };

  const renderSectionHeader = ({ section }: { section: any }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  const renderSectionFooter = () => {
    return <Text style={styles.sectionFooter}>~Buon Appetito~</Text>;
  }

  return (
    <View style={styles.listContainer}>
      <Text style={styles.menuText}>Menu</Text>
      <Button title="Flat List" onPress={props.priceListBtn} />
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(index) => index.name}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Seperator}
        ListFooterComponent={renderSectionFooter}
      />
    </View>
  );
};

export default PriceSectionList;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 20,
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
    paddingHorizontal: 20,
  },
  itemText: {
    color: "#f99e14",
    fontSize: 20,
    fontWeight: "500",
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: "#eb3455",
    textAlign: "center",
  },
  sectionFooter: {
    fontSize: 20,
    backgroundColor: "#333455",
    textAlign: "center",
  },
});
