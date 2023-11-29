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
export default function FE_CIT_5th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE125, setFE125] = useState([]);
  useEffect(() => {
    const Fe125Data = [];
    const FE125Collections = collection(firebase, "FE125");
    const fetchFe125Data = async () => {
      try {
        const q125 = query(
          FE125Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot125 = await getDocs(q125);
        querySnapshot125.forEach((doc) => {
          const data125 = doc.data();
          Fe125Data.push(data125);
          // Use the data as needed
        });

        setFE125(Fe125Data);
      } catch (error) {}
    };
    fetchFe125Data();
  }, []);

  const [FE126, setFE126] = useState([]);
  useEffect(() => {
    const Fe126Data = [];
    const FE126Collections = collection(firebase, "FE126");
    const fetchFe126Data = async () => {
      try {
        const q126 = query(
          FE126Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot126 = await getDocs(q126);
        querySnapshot126.forEach((doc) => {
          const data126 = doc.data();
          Fe126Data.push(data126);
          // Use the data as needed
        });

        setFE126(Fe126Data);
      } catch (error) {}
    };
    fetchFe126Data();
  }, []);

  const [FE127, setFE127] = useState([]);
  useEffect(() => {
    const Fe127Data = [];
    const FE127Collections = collection(firebase, "FE127");
    const fetchFe127Data = async () => {
      try {
        const q127 = query(
          FE127Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot127 = await getDocs(q127);
        querySnapshot127.forEach((doc) => {
          const data127 = doc.data();
          Fe127Data.push(data127);
          // Use the data as needed
        });

        setFE127(Fe127Data);
      } catch (error) {}
    };
    fetchFe127Data();
  }, []);
  const [FE128, setFE128] = useState([]);
  useEffect(() => {
    const Fe128Data = [];
    const FE128Collections = collection(firebase, "FE128");
    const fetchFe128Data = async () => {
      try {
        const q128 = query(
          FE128Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot128 = await getDocs(q128);
        querySnapshot128.forEach((doc) => {
          const data128 = doc.data();
          Fe128Data.push(data128);
          // Use the data as needed
        });

        setFE128(Fe128Data);
      } catch (error) {}
    };
    fetchFe128Data();
  }, []);
  const [FE129, setFE129] = useState([]);
  useEffect(() => {
    const Fe129Data = [];
    const FE129Collections = collection(firebase, "FE129");
    const fetchFe129Data = async () => {
      try {
        const q129 = query(
          FE129Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot129 = await getDocs(q129);
        querySnapshot129.forEach((doc) => {
          const data129 = doc.data();
          Fe129Data.push(data129);
          // Use the data as needed
        });

        setFE129(Fe129Data);
      } catch (error) {}
    };
    fetchFe129Data();
  }, []);
  const refreshData = async () => {
    const Fe129Data = [];
    const FE129Collections = collection(firebase, "FE129");
    const fetchFe129Data = async () => {
      try {
        const q129 = query(
          FE129Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot129 = await getDocs(q129);
        querySnapshot129.forEach((doc) => {
          const data129 = doc.data();
          Fe129Data.push(data129);
          // Use the data as needed
        });

        setFE129(Fe129Data);
      } catch (error) {}
    };
    fetchFe129Data();
    const Fe128Data = [];
    const FE128Collections = collection(firebase, "FE128");
    const fetchFe128Data = async () => {
      try {
        const q128 = query(
          FE128Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot128 = await getDocs(q128);
        querySnapshot128.forEach((doc) => {
          const data128 = doc.data();
          Fe128Data.push(data128);
          // Use the data as needed
        });

        setFE128(Fe128Data);
      } catch (error) {}
    };
    fetchFe128Data();
    const Fe127Data = [];
    const FE127Collections = collection(firebase, "FE127");
    const fetchFe127Data = async () => {
      try {
        const q127 = query(
          FE127Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot127 = await getDocs(q127);
        querySnapshot127.forEach((doc) => {
          const data127 = doc.data();
          Fe127Data.push(data127);
          // Use the data as needed
        });

        setFE127(Fe127Data);
      } catch (error) {}
    };
    fetchFe127Data();
    const Fe126Data = [];
    const FE126Collections = collection(firebase, "FE126");
    const fetchFe126Data = async () => {
      try {
        const q126 = query(
          FE126Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot126 = await getDocs(q126);
        querySnapshot126.forEach((doc) => {
          const data126 = doc.data();
          Fe126Data.push(data126);
          // Use the data as needed
        });

        setFE126(Fe126Data);
      } catch (error) {}
    };
    const Fe125Data = [];
    const FE125Collections = collection(firebase, "FE125");
    const fetchFe125Data = async () => {
      try {
        const q125 = query(
          FE125Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot125 = await getDocs(q125);
        querySnapshot125.forEach((doc) => {
          const data125 = doc.data();
          Fe125Data.push(data125);
          // Use the data as needed
        });

        setFE125(Fe125Data);
      } catch (error) {}
    };
    fetchFe125Data();
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", bottom: wp("2%") }}>
        <TouchableOpacity
          onPress={refreshData}
          style={{
            backgroundColor: "#7FCD91",
            padding: 10,
            borderRadius: 5,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Icon
            name="refresh-circle-outline"
            style={{ color: "white", fontSize: 20 }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Refresh </Text>
          </Icon>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedIcon &&
              selectedIcon.map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.linetop,
                    {
                      backgroundColor:
                        item.date &&
                        isSameMonth(
                          parse(item.date, "MM/d/yyyy", new Date()),
                          today
                        ) &&
                        isSameYear(
                          parse(item.date, "MM/d/yyyy", new Date()),
                          today
                        )
                          ? "#7FCD91"
                          : "#FF6464",
                    },
                  ]}
                >
                  <View style={styles.cont}>
                    {item.date &&
                    isSameMonth(
                      parse(item.date, "MM/d/yyyy", new Date()),
                      today
                    ) &&
                    isSameYear(
                      parse(item.date, "MM/d/yyyy", new Date()),
                      today
                    ) ? (
                      <>
                        <Icon
                          name="checkmark-circle-outline"
                          style={styles.check}
                        ></Icon>
                        <Text style={styles.inspected}>INSPECTED</Text>
                      </>
                    ) : (
                      <>
                        <Icon
                          name="close-circle-outline"
                          style={styles.check}
                        ></Icon>
                        <Text style={styles.inspected}>NOT INSPECTED</Text>
                      </>
                    )}
                  </View>
                </View>
              ))}

            {selectedIcon &&
              selectedIcon.map((item, index) => (
                <Text key={index} style={styles.modalText}>
                  Fire Extinguisher ID: {item.id}
                </Text>
              ))}

            {selectedIcon &&
              selectedIcon.map((item, index) => (
                <View key={index} style={styles.textcont}>
                  <Text style={styles.modalText1}>Conditon: </Text>
                  <Text
                    style={[
                      styles.modalText1,
                      {
                        color:
                          item.condition === "Good Condition"
                            ? "#7FCD91"
                            : item.condition === "Slightly Damage"
                            ? "#FFA33C"
                            : "#FF6464",
                      },
                    ]}
                  >
                    {item.condition}
                  </Text>
                </View>
              ))}

            <View style={styles.line}></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButtonY} onPress={hideModal}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView horizontal>
        <ImageBackground
          source={require("../../assets/images/CIT_5th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.fE1Row}>
            {FE125.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("125")}
              >
                <View style={styles.fE2StackStack}>
                  <View style={styles.fE2Stack}>
                    <View
                      style={[
                        styles.fE2,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FF9209"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE4}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE3,
                      {
                        backgroundColor:
                          item.date &&
                          isSameMonth(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          ) &&
                          isSameYear(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          )
                            ? "#7FCD91"
                            : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE126.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("126")}
              >
                <View style={styles.fE6StackStack}>
                  <View style={styles.fE6Stack}>
                    <View
                      style={[
                        styles.fE6,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FF9209"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE8}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE7,
                      {
                        backgroundColor:
                          item.date &&
                          isSameMonth(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          ) &&
                          isSameYear(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          )
                            ? "#7FCD91"
                            : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE127.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("127")}
              >
                <View style={styles.fE10StackStack}>
                  <View style={styles.fE10Stack}>
                    <View
                      style={[
                        styles.fE10,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FF9209"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE12}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE11,
                      {
                        backgroundColor:
                          item.date &&
                          isSameMonth(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          ) &&
                          isSameYear(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          )
                            ? "#7FCD91"
                            : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE128.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("128")}
              >
                <View style={styles.fE14StackStack}>
                  <View style={styles.fE14Stack}>
                    <View
                      style={[
                        styles.fE14,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FF9209"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE16}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE15,
                      {
                        backgroundColor:
                          item.date &&
                          isSameMonth(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          ) &&
                          isSameYear(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          )
                            ? "#7FCD91"
                            : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE129.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE17}
                onPress={() => showModal("129")}
              >
                <View style={styles.fE18StackStack}>
                  <View style={styles.fE18Stack}>
                    <View
                      style={[
                        styles.fE18,
                        {
                          backgroundColor:
                            item.condition === "Good Condition"
                              ? "#7FCD91"
                              : item.condition === "Slightly Damage"
                              ? "#FF9209"
                              : "#FF6464",
                        },
                      ]}
                    ></View>
                    <MaterialIconsIcon
                      name="location-on"
                      style={styles.fE20}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE19,
                      {
                        backgroundColor:
                          item.date &&
                          isSameMonth(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          ) &&
                          isSameYear(
                            parse(item.date, "MM/d/yyyy", new Date()),
                            today
                          )
                            ? "#7FCD91"
                            : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textcont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cont: {
    // backgroundColor: "#F1EFEF",
    // flexDirection: "row",
    // justifyContent: "space-between",
    top: 15,
    alignItems: "center",
    // height: 50, // Set the desired height of the row
    // paddingHorizontal: 10,
    // marginBottom: 15,
  },
  closeicon: {
    // top: 2,
    marginLeft: 400,
    zIndex: 5,
  },
  close: {
    // color: "#45474B",
    color: "#F9F5F6",
    fontSize: 40,
  },
  checkicon: {
    width: 150,
    height: 150,
    // marginVertical: 35,
    top: 20,
  },
  check: {
    color: "white",
    fontSize: wp("6%"),
    alignSelf: "center",
    // backgroundColor: "#7FCD91",
  },
  linetop: {
    // borderRadius: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: 0,
    height: wp("14%"),
    width: wp("40%"),
    zIndex: 1,
    backgroundColor: "#7FCD91",
    // backgroundColor: "#3085C3",
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomWidth: 2,
    elevation: 1,
    // borderBottomColor: "red", // You can change the color of the line
  },

  line: {
    top: hp("6%"),
    height: 2,
    width: "100%",
    backgroundColor: "#B4B4B3",
    // borderBottomWidth: 2,

    // borderBottomColor: "red", // You can change the color of the line
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#F5F5F5",
    elevation: 8,
    borderRadius: 10,
    alignItems: "center",
    top: wp("-2%"),
    width: wp("40%"), // Adjust the width as needed
    height: wp("40%"), // Adjust the height as needed
  },
  inspected: {
    color: "white",
    // fontWeight: "500",
    height: 50,
    fontSize: RFValue(14),
    // top: 20,
    // marginBottom: 15,
  },
  modalText1: {
    color: "#454545",
    fontSize: RFValue(15),
    marginBottom: 20,
    textAlign: "center",
    top: 20,
    fontWeight: "500",
  },
  modalText: {
    color: "#454545",
    fontWeight: "500",
    fontSize: RFValue(15),
    marginBottom: 40,
    top: 40,
    textAlign: "center",
  },
  buttonContainer: {
    top: wp("-2%"),
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButtonY: {
    width: wp("25%"),
    elevation: 2,
    backgroundColor: "#EEEDED",

    padding: 13,
    borderRadius: 10,
    top: hp("13%"),
    alignItems: "center",
  },
  modalButtonN: {
    width: "35%",
    // elevation: 4,
    backgroundColor: "#FF6464",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#454545",
    fontWeight: "900",
    fontFamily: "poppins-bold",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    height: wp("150%"),
  },
  image: {
    width: 1218,
    height: 472,
    flexDirection: "row",

    marginLeft: 31,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 1,
  },
  fE2: {
    top: 5,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE4: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE2Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE3: {
    top: 23,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  fE2StackStack: {
    width: 30,
    height: 34,
    marginTop: -3,
  },
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 244,
    marginTop: 1,
  },
  fE6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE8: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE7: {
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
  fE6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 163,
  },
  fE10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE12: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE11: {
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
  fE10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 163,
  },
  fE14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE16: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE14Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE15: {
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
  fE14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE17: {
    width: 30,
    height: 31,
    marginLeft: 245,
  },
  fE18: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE20: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE18Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE19: {
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
  fE18StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1Row: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 126,
    marginLeft: 127,
    marginTop: 228,
  },
});
