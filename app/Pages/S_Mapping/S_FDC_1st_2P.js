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
export default function S_FDC_1st_2P({
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
        source={require("../../assets/images/SFDC_1st_P2.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.button35Row}>
          <TouchableOpacity
            style={styles.button35}
            onPress={() => showModal("148")}
          >
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
          <TouchableOpacity
            style={styles.button34}
            onPress={() => showModal("149")}
          >
            <View style={styles.b2StackStack}>
              <View style={styles.b2Stack}>
                <View style={styles.b2}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb1}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb1}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button55}
            onPress={() => showModal("150")}
          >
            <View style={styles.b23StackStack}>
              <View style={styles.b23Stack}>
                <View style={styles.b23}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb22}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb22}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button56}
            onPress={() => showModal("151")}
          >
            <View style={styles.b24StackStack}>
              <View style={styles.b24Stack}>
                <View style={styles.b24}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb23}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb23}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button36Row}>
          <TouchableOpacity
            style={styles.button36}
            onPress={() => showModal("152")}
          >
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
          <TouchableOpacity
            style={styles.button57}
            onPress={() => showModal("153")}
          >
            <View style={styles.b25StackStack}>
              <View style={styles.b25Stack}>
                <View style={styles.b25}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb24}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb24}></View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button58}
          onPress={() => showModal("154")}
        >
          <View style={styles.b26StackStack}>
            <View style={styles.b26Stack}>
              <View style={styles.b26}></View>
              <MaterialIconsIcon
                name="location-on"
                style={styles.bbb25}
              ></MaterialIconsIcon>
            </View>
            <View style={styles.bb25}></View>
          </View>
        </TouchableOpacity>
        <View style={styles.button38Row}>
          <TouchableOpacity
            style={styles.button38}
            onPress={() => showModal("155")}
          >
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
          <TouchableOpacity
            style={styles.button37}
            onPress={() => showModal("156")}
          >
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
          <TouchableOpacity
            style={styles.button59}
            onPress={() => showModal("157")}
          >
            <View style={styles.b27StackStack}>
              <View style={styles.b27Stack}>
                <View style={styles.b27}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb26}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb26}></View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button39}
          onPress={() => showModal("158")}
        >
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
        <View style={styles.button40Row}>
          <TouchableOpacity
            style={styles.button40}
            onPress={() => showModal("159")}
          >
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
          <TouchableOpacity
            style={styles.button60}
            onPress={() => showModal("160")}
          >
            <View style={styles.b28StackStack}>
              <View style={styles.b28Stack}>
                <View style={styles.b28}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb27}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb27}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button43ColumnRow}>
          <View style={styles.button43Column}>
            <TouchableOpacity
              style={styles.button43}
              onPress={() => showModal("161")}
            >
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
            <TouchableOpacity
              style={styles.button45}
              onPress={() => showModal("162")}
            >
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
          </View>
          <View style={styles.button42Column}>
            <TouchableOpacity
              style={styles.button42}
              onPress={() => showModal("163")}
            >
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
            <TouchableOpacity
              style={styles.button44}
              onPress={() => showModal("164")}
            >
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
          </View>
          <TouchableOpacity
            style={styles.button46}
            onPress={() => showModal("165")}
          >
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
          <TouchableOpacity
            style={styles.button41}
            onPress={() => showModal("168")}
          >
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
          <TouchableOpacity
            style={styles.button61}
            onPress={() => showModal("169")}
          >
            <View style={styles.b29StackStack}>
              <View style={styles.b29Stack}>
                <View style={styles.b29}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb28}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb28}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button47Row}>
          <TouchableOpacity
            style={styles.button47}
            onPress={() => showModal("170")}
          >
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
          <TouchableOpacity
            style={styles.button62}
            onPress={() => showModal("171")}
          >
            <View style={styles.b30StackStack}>
              <View style={styles.b30Stack}>
                <View style={styles.b30}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb29}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb29}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button49Row}>
          <TouchableOpacity
            style={styles.button49}
            onPress={() => showModal("172")}
          >
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
          <TouchableOpacity
            style={styles.button48}
            onPress={() => showModal("173")}
          >
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
          <TouchableOpacity
            style={styles.button63}
            onPress={() => showModal("174")}
          >
            <View style={styles.b31StackStack}>
              <View style={styles.b31Stack}>
                <View style={styles.b31}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb30}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb30}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button50Row}>
          <TouchableOpacity
            style={styles.button50}
            onPress={() => showModal("175")}
          >
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
          <TouchableOpacity
            style={styles.button51}
            onPress={() => showModal("176")}
          >
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
        <View style={styles.button54Row}>
          <TouchableOpacity
            style={styles.button54}
            onPress={() => showModal("177")}
          >
            <View style={styles.b22StackStack}>
              <View style={styles.b22Stack}>
                <View style={styles.b22}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb21}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb21}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button53}
            onPress={() => showModal("178")}
          >
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
          <TouchableOpacity
            style={styles.button52}
            onPress={() => showModal("179")}
          >
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
          <TouchableOpacity
            style={styles.button66}
            onPress={() => showModal("180")}
          >
            <View style={styles.b34StackStack}>
              <View style={styles.b34Stack}>
                <View style={styles.b34}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb33}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb33}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button65}
            onPress={() => showModal("181")}
          >
            <View style={styles.b33StackStack}>
              <View style={styles.b33Stack}>
                <View style={styles.b33}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb32}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb32}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button64}
            onPress={() => showModal("182")}
          >
            <View style={styles.b32StackStack}>
              <View style={styles.b32Stack}>
                <View style={styles.b32}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb31}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb31}></View>
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
    width: 491,
    height: 743,
    marginTop: 25,
    marginLeft: 394,
  },
  image_imageStyle: {},
  button35: {
    width: 18,
    height: 20,
    marginTop: 10,
  },
  b3: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb2: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b3Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb2: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b3StackStack: {
    width: 18,
    height: 20,
  },
  button34: {
    width: 18,
    height: 20,
    marginLeft: 11,
  },
  b2: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb1: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b2Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb1: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b2StackStack: {
    width: 18,
    height: 20,
  },
  button55: {
    width: 18,
    height: 20,
    marginLeft: 198,
  },
  b23: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb22: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b23Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb22: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b23StackStack: {
    width: 18,
    height: 20,
  },
  button56: {
    width: 18,
    height: 20,
    marginLeft: 13,
    marginTop: 16,
  },
  b24: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb23: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b24Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb23: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b24StackStack: {
    width: 18,
    height: 20,
  },
  button35Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 111,
    marginRight: 86,
  },
  button36: {
    width: 18,
    height: 20,
    marginTop: 6,
  },
  b4: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb3: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b4Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb3: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b4StackStack: {
    width: 18,
    height: 20,
  },
  button57: {
    width: 18,
    height: 20,
    marginLeft: 280,
  },
  b25: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb24: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b25Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb24: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b25StackStack: {
    width: 18,
    height: 20,
  },
  button36Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 90,
    marginRight: 85,
  },
  button58: {
    width: 18,
    height: 20,
    marginTop: 19,
    marginLeft: 388,
  },
  b26: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb25: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b26Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb25: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b26StackStack: {
    width: 18,
    height: 20,
  },
  button38: {
    width: 18,
    height: 20,
    marginTop: 19,
  },
  b6: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb5: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b6Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb5: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b6StackStack: {
    width: 18,
    height: 20,
  },
  button37: {
    width: 18,
    height: 20,
    marginLeft: 17,
  },
  b5: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb4: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b5Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb4: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b5StackStack: {
    width: 18,
    height: 20,
  },
  button59: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 34,
  },
  b27: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb26: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b27Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb26: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b27StackStack: {
    width: 18,
    height: 20,
  },
  button38Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 90,
    marginRight: 85,
  },
  button39: {
    width: 18,
    height: 20,
    marginLeft: 107,
  },
  b7: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb6: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b7Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb6: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b7StackStack: {
    width: 18,
    height: 20,
  },
  button40: {
    width: 18,
    height: 20,
  },
  b8: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb7: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b8Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb7: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b8StackStack: {
    width: 18,
    height: 20,
  },
  button60: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 10,
  },
  b28: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb27: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b28Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb27: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b28StackStack: {
    width: 18,
    height: 20,
  },
  button40Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 125,
    marginRight: 85,
  },
  button43: {
    width: 18,
    height: 20,
  },
  b11: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb10: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b11Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb10: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b11StackStack: {
    width: 18,
    height: 20,
  },
  button45: {
    width: 18,
    height: 20,
    marginTop: 37,
    marginLeft: 4,
  },
  b13: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb12: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b13Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb12: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b13StackStack: {
    width: 18,
    height: 20,
  },
  button43Column: {
    width: 22,
    marginTop: 19,
  },
  button42: {
    width: 18,
    height: 20,
  },
  b10: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb9: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b10Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb9: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b10StackStack: {
    width: 18,
    height: 20,
  },
  button44: {
    width: 18,
    height: 20,
    marginTop: 23,
  },
  b12: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb11: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b12Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb11: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b12StackStack: {
    width: 18,
    height: 20,
  },
  button42Column: {
    width: 18,
    marginLeft: 5,
    marginBottom: 33,
  },
  button46: {
    width: 18,
    height: 20,
    marginLeft: 8,
    marginTop: 63,
  },
  b14: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb13: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b14Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb13: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b14StackStack: {
    width: 18,
    height: 20,
  },
  button41: {
    width: 18,
    height: 20,
    marginLeft: 18,
    marginTop: 33,
  },
  b9: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb8: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b9Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb8: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b9StackStack: {
    width: 18,
    height: 20,
  },
  button61: {
    width: 18,
    height: 20,
    marginLeft: 263,
    marginTop: 53,
  },
  b29: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb28: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b29Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb28: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b29StackStack: {
    width: 18,
    height: 20,
  },
  button43ColumnRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 36,
    marginRight: 67,
  },
  button47: {
    width: 18,
    height: 20,
    marginTop: 11,
  },
  b15: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb14: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b15Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb14: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b15StackStack: {
    width: 18,
    height: 20,
  },
  button62: {
    width: 18,
    height: 20,
    marginLeft: 241,
  },
  b30: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb29: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b30Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb29: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b30StackStack: {
    width: 18,
    height: 20,
  },
  button47Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 125,
    marginRight: 89,
  },
  button49: {
    width: 18,
    height: 20,
  },
  b17: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb16: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b17Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb16: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b17StackStack: {
    width: 18,
    height: 20,
  },
  button48: {
    width: 18,
    height: 20,
    marginLeft: 14,
    marginTop: 19,
  },
  b16: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb15: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b16Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb15: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b16StackStack: {
    width: 18,
    height: 20,
  },
  button63: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 3,
  },
  b31: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb30: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b31Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb30: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b31StackStack: {
    width: 18,
    height: 20,
  },
  button49Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 90,
    marginRight: 88,
  },
  button50: {
    width: 18,
    height: 20,
    marginTop: 9,
  },
  b18: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb17: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b18Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb17: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b18StackStack: {
    width: 18,
    height: 20,
  },
  button51: {
    width: 18,
    height: 20,
    marginLeft: 32,
  },
  b19: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb18: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b19Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb18: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b19StackStack: {
    width: 18,
    height: 20,
  },
  button50Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 90,
    marginRight: 333,
  },
  button54: {
    width: 18,
    height: 20,
  },
  b22: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb21: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b22Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb21: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b22StackStack: {
    width: 18,
    height: 20,
  },
  button53: {
    width: 18,
    height: 20,
    marginLeft: 22,
  },
  b21: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb20: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b21Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb20: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b21StackStack: {
    width: 18,
    height: 20,
  },
  button52: {
    width: 18,
    height: 20,
    marginLeft: 15,
  },
  b20: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb19: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b20Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb19: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b20StackStack: {
    width: 18,
    height: 20,
  },
  button66: {
    width: 18,
    height: 20,
    marginLeft: 90,
  },
  b34: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb33: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b34Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb33: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b34StackStack: {
    width: 18,
    height: 20,
  },
  button65: {
    width: 18,
    height: 20,
    marginLeft: 14,
  },
  b33: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb32: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b33Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb32: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b33StackStack: {
    width: 18,
    height: 20,
  },
  button64: {
    width: 18,
    height: 20,
    marginLeft: 21,
  },
  b32: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb31: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
  },
  b32Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb31: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b32StackStack: {
    width: 18,
    height: 20,
  },
  button54Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 125,
    marginRight: 96,
  },
});
