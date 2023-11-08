import React from "react";
import { View, StyleSheet } from "react-native";
import Mapping from "../Pages/Mapping";

import HistoryS from "../Pages/HistoryS";
import HistoryFe from "../Pages/HistoryFe";
import HistorySd from "../Pages/HistorySd";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // You can use any icon library you prefer
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Icony } from "@iconify/react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { Icon } from "react-native-iconify";
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Import your screen components

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      {/* <View styles={styles.container}> */}
      <Tab.Navigator
        initialRouteName="FireExinguisher"
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          backgroundColor: "transparent",
          tabBarLabelStyle: {
            fontSize: wp("1.4%"),
          },
          tabBarStyle: [
            {
              position: "absolute",
              // bottom: 10,
              // borderRadius: 100,
              // width: "60%",
              // left: "23%",
              // height: 70,
              elevation: 5,
              borderTopWidth: 0,
              backgroundColor: "white",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="FireExinguisher"
          component={HistoryFe}
          options={{
            title: null,
            tabBarLabel: "Fire Extinguisher", // Tab label
            tabBarIcon: ({ color, size }) => (
              <Icon name="flame-outline" color={color} size={wp("2%")} /> // Icon for the tab
            ),
          }}
        />
        <Tab.Screen
          name="Sprinkler"
          component={HistoryS}
          options={{
            title: null,
            tabBarLabel: "Sprinkler",
            tabBarIcon: ({ color, size }) => (
              <Icon name="water-outline" color={color} size={wp("2%")} />
            ),
          }}
        />
        <Tab.Screen
          name="SmokeDetector"
          component={HistorySd}
          options={{
            title: null,
            tabBarLabel: "Smoke Detector",
            tabBarIcon: ({ color, size }) => (
              <Icon name="disc-outline" color={color} size={wp("2%")} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
