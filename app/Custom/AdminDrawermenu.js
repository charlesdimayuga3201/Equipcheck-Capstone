import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Button,
  Alert,
  BackHandler,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AppNavigator1 from "./AppNavigator1";
import AppNavigator2 from "./AppNavigator2";
import AppNavigator3 from "./AppNavigator3";
import AppNavigator4 from "./AppNavigator4";
import Setting from "../Pages/Setting";
import Login from "../Pages/Login";
import UpdateRole from "../Pages/UpdateRole";
import { StatusBar } from "expo-status-bar";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/Ionicons";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function AdminDrawermenu() {
  const navigation = useNavigation();
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false); // State to control the modal
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const hideModal3 = () => {
    setIsModalVisible3(false);
  };

  const logout = () => {
    navigation.navigate("Login");
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  };
  const handleLogout = () => {
    Alert.alert(
      "Logout Confirmation",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Perform logout or go back to the login page as needed
            // For instance, you might navigate back to the login page
            navigation.navigate("Login");
          },
        },
      ],
      { cancelable: false }
    );
    return true;
  };
  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert(
          "Logout Confirmation",
          "Are you sure you want to log out?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            {
              text: "Confirm",
              onPress: () => {
                // Perform logout or go back to the login page as needed
                // For instance, you might navigate back to the login page
                navigation.navigate("Login");
              },
            },
          ],
          { cancelable: false }
        );
        return true; // Prevent default back button behavior
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener on unmount
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="MappingFe"
        drawerContent={(props) => {
          return (
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={require("../assets/images/menu-bg9.png")}
                style={{ padding: wp("1") }}
              >
                {/* <TouchableOpacity>
                  <View style={{ alignSelf: "flex-end" }}>
                    <FeatherIcon name="bell" size={22} color="white" />
                  </View>
                </TouchableOpacity> */}
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/images/eqc_logo3.png")}
                    style={{
                      height: hp("24%"),
                      width: wp("14%"),
                      left: wp("2%"),
                      borderRadius: wp("10%"),
                      alignSelf: "center",
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: wp("2%"),
                    fontFamily: "poppins-regular",
                    marginBottom: hp("1%"),
                    left: wp("1.5%"),
                  }}
                >
                  EquipCheck
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: wp("1.5%"),
                      color: "#fff",
                      fontFamily: "poppins-regular",
                      marginRight: wp("1%"),
                      left: wp("1.5%"),
                    }}
                  >
                    Head Admin
                  </Text>
                </View>
              </ImageBackground>
              <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                  flexGrow: 1,
                  top: 0,
                  paddingTop: hp("-20%"),
                }}
              >
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible3}
                onRequestClose={hideModal3}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContentC}>
                    <View style={styles.closeiconC}>
                      <TouchableOpacity onPress={hideModal3}>
                        <Icon
                          name="close-circle-outline"
                          style={styles.closeB}
                        ></Icon>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.modalText2}>Confirm Logout?</Text>
                    <Text style={styles.modalText2}>
                      Do you really want to logout?
                    </Text>

                    <View style={styles.line}></View>
                    <View style={styles.buttonContainerB}>
                      <TouchableOpacity
                        style={styles.modalButtonC}
                        onPress={() => {
                          // Handle "Yes" button press here
                          logout();
                          hideModal3();

                          // Add your update logic here
                        }}
                      >
                        <Text style={styles.buttonTextB}>Logout</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity
                onPress={showModal3}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  paddingVertical: hp("5%"),
                  paddingHorizontal: wp("1%"),
                  // left: wp("2%"),
                  borderTopColor: "#f4f4f4",
                  borderTopWidth: 1,
                }}
              >
                <FeatherIcon
                  name="log-out"
                  left={wp("1%")}
                  size={wp("1.5%")}
                  color="rgba(255,89,79,1)"
                />
                <Text
                  style={{
                    left: wp("3%"),
                    fontSize: wp("1.3%"),
                    color: "rgba(255,89,79,1)",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        screenOptions={{
          headerTransparent: true,
          drawerStyle: {
            backgroundColor: "#fff",
            width: wp("25%"),
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#111",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "#111",
          },
        }}
      >
        <Drawer.Screen
          name="MappingFe"
          options={{
            drawerLabel: "Mapping",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="map-pin"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={AppNavigator4}
        />
        <Drawer.Screen
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
          name="ViewEquipment"
          options={{
            drawerLabel: "View",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="search"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={AppNavigator}
        />

        <Drawer.Screen
          name="Update"
          options={{
            drawerLabel: "Update",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="refresh-cw"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={AppNavigator1}
        />
        <Drawer.Screen
          name="History"
          options={{
            drawerLabel: "History",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="clock"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={AppNavigator2}
        />
        <Drawer.Screen
          name="Add Users"
          options={{
            drawerLabel: "Add Users",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="users"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={UpdateRole}
        />
        <Drawer.Screen
          name="Review All Equipment"
          options={{
            drawerLabel: "Review All Equipment",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="file-text"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={AppNavigator3}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: null,
            drawerIcon: () => (
              <FeatherIcon
                name="settings"
                size={wp("1.5%")}
                color="#808080"
              ></FeatherIcon>
            ),
            drawerLabelStyle: {
              color: "#454545",
              fontSize: wp("1.3%"), // Adjust the font size as per your requirement
            },
          }}
          component={Setting}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  buttonTextB: {
    fontWeight: "600",
    color: "white",
    fontSize: RFValue(12),
  },
  modalButtonC: {
    width: hp("40%"),
    top: hp("10%"),
    // elevation: 4,
    backgroundColor: "#FF6464",
    padding: 20,
    borderRadius: 5,

    alignItems: "center",
  },
  buttonContainerB: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalText2: {
    color: "#7D7C7C",
    fontSize: RFValue(13),

    textAlign: "center",
  },
  closeB: {
    // color: "#45474B",
    color: "#FF6464",
    fontSize: RFValue(26),
  },
  closeiconC: {
    // top: 2,
    marginLeft: wp("33%"),
    zIndex: 5,
  },
  modalContentC: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,
    top: -20,
    width: wp("40%"), // Adjust the width as needed
    height: wp("28%"), // Adjust the height as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  subMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
  },
  subMenuItemText: {
    marginLeft: 8,
  },
  subMenuItemActive: {
    backgroundColor: "#f4f4f4",
  },
});
