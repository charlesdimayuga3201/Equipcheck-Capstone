import React, { Component, useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { firebase } from "../../../firebaseConfig";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";

import {
  QuerySnapshot,
  doc,
  getDocs,
  collection,
  todoRef,
  query,
  orderBy,
  limit,
  where,
  addDoc,
} from "firebase/firestore";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { format, isSameMonth, isSameYear, parse } from "date-fns";
export default function S_CIT_4th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/SCIT_4th.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.button4Row}>
          <TouchableOpacity style={styles.button4}>
            <View style={styles.b5StackStack}>
              <View style={styles.b5Stack}>
                <View style={styles.b5}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb4}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb4}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button3}>
            <View style={styles.b4StackStack}>
              <View style={styles.b4Stack}>
                <View style={styles.b4}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb3}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb3}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button7}>
            <View style={styles.b8StackStack}>
              <View style={styles.b8Stack}>
                <View style={styles.b8}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb7}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb7}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button8}>
            <View style={styles.b9StackStack}>
              <View style={styles.b9Stack}>
                <View style={styles.b9}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb8}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb8}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button11}>
            <View style={styles.b12StackStack}>
              <View style={styles.b12Stack}>
                <View style={styles.b12}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb11}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb11}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button12}>
            <View style={styles.b13StackStack}>
              <View style={styles.b13Stack}>
                <View style={styles.b13}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb12}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb12}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button15}>
            <View style={styles.b16StackStack}>
              <View style={styles.b16Stack}>
                <View style={styles.b16}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb15}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb15}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button16}>
            <View style={styles.b17StackStack}>
              <View style={styles.b17Stack}>
                <View style={styles.b17}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb16}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb16}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button19}>
            <View style={styles.b20StackStack}>
              <View style={styles.b20Stack}>
                <View style={styles.b20}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb19}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb19}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button20}>
            <View style={styles.b21StackStack}>
              <View style={styles.b21Stack}>
                <View style={styles.b21}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb20}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb20}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button1Row}>
          <TouchableOpacity style={styles.button1}>
            <View style={styles.b1StackStack}>
              <View style={styles.b1Stack}>
                <View style={styles.b1}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb1}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb1}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.b3StackStack}>
              <View style={styles.b3Stack}>
                <View style={styles.b3}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb2}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb2}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button5}>
            <View style={styles.b6StackStack}>
              <View style={styles.b6Stack}>
                <View style={styles.b6}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb5}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb5}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6}>
            <View style={styles.b7StackStack}>
              <View style={styles.b7Stack}>
                <View style={styles.b7}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb6}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb6}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button9}>
            <View style={styles.b10StackStack}>
              <View style={styles.b10Stack}>
                <View style={styles.b10}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb9}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb9}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button10}>
            <View style={styles.b11StackStack}>
              <View style={styles.b11Stack}>
                <View style={styles.b11}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb10}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb10}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button13}>
            <View style={styles.b14StackStack}>
              <View style={styles.b14Stack}>
                <View style={styles.b14}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb13}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb13}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button14}>
            <View style={styles.b15StackStack}>
              <View style={styles.b15Stack}>
                <View style={styles.b15}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb14}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb14}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button17}>
            <View style={styles.b18StackStack}>
              <View style={styles.b18Stack}>
                <View style={styles.b18}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb17}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb17}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button18}>
            <View style={styles.b19StackStack}>
              <View style={styles.b19Stack}>
                <View style={styles.b19}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb18}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb18}></View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    width: 1144,
    height: 444,
    marginTop: 118,
    marginLeft: 68,
  },
  image_imageStyle: {},
  button4: {
    width: 30,
    height: 31,
    marginTop: 1,
  },
  b5: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb4: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b5Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb4: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b5StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button3: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 1,
  },
  b4: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb3: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b4Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb3: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b4StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button7: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 1,
  },
  b8: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb7: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b8Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb7: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b8StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button8: {
    width: 30,
    height: 31,
    marginLeft: 64,
  },
  b9: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb8: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b9Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb8: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b9StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button11: {
    width: 30,
    height: 31,
    marginLeft: 58,
  },
  b12: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb11: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b12Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb11: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b12StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button12: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b13: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb12: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b13Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb12: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b13StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button15: {
    width: 30,
    height: 31,
    marginLeft: 58,
    marginTop: 3,
  },
  b16: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb15: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b16Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb15: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b16StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button16: {
    width: 30,
    height: 31,
    marginLeft: 62,
    marginTop: 3,
  },
  b17: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb16: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b17Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb16: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b17StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button19: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 3,
  },
  b20: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb19: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b20Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb19: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b20StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button20: {
    width: 30,
    height: 31,
    marginLeft: 63,
    marginTop: 3,
  },
  b21: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb20: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b21Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb20: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b21StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button4Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 149,
    marginRight: 149,
  },
  button1: {
    width: 30,
    height: 31,
    marginTop: 5,
  },
  b1: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb1: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b1Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb1: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b1StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button2: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 3,
  },
  b3: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb2: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b3Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb2: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b3StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button5: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 2,
  },
  b6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb5: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb5: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button6: {
    width: 30,
    height: 31,
    marginLeft: 63,
  },
  b7: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb6: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b7Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb6: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b7StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button9: {
    width: 30,
    height: 31,
    marginLeft: 59,
  },
  b10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb9: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb9: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button10: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b11: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb10: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b11Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb10: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b11StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button13: {
    width: 30,
    height: 31,
    marginLeft: 58,
    marginTop: 2,
  },
  b14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb13: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b14Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb13: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button14: {
    width: 30,
    height: 31,
    marginLeft: 62,
  },
  b15: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb14: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b15Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb14: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b15StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button17: {
    width: 30,
    height: 31,
    marginLeft: 60,
  },
  b18: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb17: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b18Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb17: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b18StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button18: {
    width: 30,
    height: 31,
    marginLeft: 63,
  },
  b19: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb18: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b19Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb18: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b19StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 149,
    marginRight: 149,
  },
});
