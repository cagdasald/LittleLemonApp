import { StyleSheet, View } from "react-native";
import PriceList from "./components/PriceList";
import PriceSectionList from "./components/PriceSectionList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Login";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    // ------------------ Stack Navigation ------------------
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       initialRouteName="Login"
    //       screenOptions={{
    //         headerStyle: { backgroundColor: "#333333" },
    //         headerTintColor: "#fff",
    //         headerTitleStyle: { fontWeight: "bold" },
    //       }}
    //     >
    //       <Stack.Screen
    //         name="Login"
    //         component={Login}
    //         options={{ title: "Login", headerTitle: () => <Header /> }}
    //       />
    //       <Stack.Screen
    //         name="PriceList"
    //         component={PriceList}
    //         options={{ title: "Menu" }}
    //       />
    //       <Stack.Screen
    //         name="PriceSectionList"
    //         component={PriceSectionList}
    //         options={{ title: "Menu" }}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </View>

    // ------------------ Tab Navigation ------------------
    // <NavigationContainer>
    //   <Tab.Navigator screenOptions={({route}) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       let iconName;
    //       if (route.name === "Login") {
    //         iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
    //       } else if (route.name === "PriceList") {
    //         iconName = focused ? "ios-list" : "ios-list-outline";
    //       } else if (route.name === "PriceSectionList") {
    //         iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
    //       }
    //       return <Ionicons name={iconName as any} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: "tomato",
    //     tabBarInactiveTintColor: "gray",
    //   })}>
    //     <Tab.Screen name="Login" component={Login} />
    //     <Tab.Screen name="PriceList" component={PriceList} />
    //     <Tab.Screen name="PriceSectionList" component={PriceSectionList} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // ------------------ Drawer Navigation ------------------
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" screenOptions={{drawerPosition: 'right'}}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="PriceList" component={PriceList} />
        <Drawer.Screen name="PriceSectionList" component={PriceSectionList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});

export default App;
