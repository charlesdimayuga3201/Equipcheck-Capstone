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
export default function FE_CIT_3rd({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [FE113, setFE113] = useState([]);
  useEffect(() => {
    const Fe113Data = [];
    const FE113Collections = collection(firebase, "FE113");
    const fetchFe113Data = async () => {
      try {
        const q113 = query(
          FE113Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot113 = await getDocs(q113);
        querySnapshot113.forEach((doc) => {
          const data113 = doc.data();
          Fe113Data.push(data113);
          // Use the data as needed
        });

        setFE113(Fe113Data);
      } catch (error) {}
    };
    fetchFe113Data();
  }, []);

  const [FE114, setFE114] = useState([]);
  useEffect(() => {
    const Fe114Data = [];
    const FE114Collections = collection(firebase, "FE114");
    const fetchFe114Data = async () => {
      try {
        const q114 = query(
          FE114Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot114 = await getDocs(q114);
        querySnapshot114.forEach((doc) => {
          const data114 = doc.data();
          Fe114Data.push(data114);
          // Use the data as needed
        });

        setFE114(Fe114Data);
      } catch (error) {}
    };
    fetchFe114Data();
  }, []);
  const [FE115, setFE115] = useState([]);
  useEffect(() => {
    const Fe115Data = [];
    const FE115Collections = collection(firebase, "FE115");
    const fetchFe115Data = async () => {
      try {
        const q115 = query(
          FE115Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot115 = await getDocs(q115);
        querySnapshot115.forEach((doc) => {
          const data115 = doc.data();
          Fe115Data.push(data115);
          // Use the data as needed
        });

        setFE115(Fe115Data);
      } catch (error) {}
    };
    fetchFe115Data();
  }, []);
  const [FE116, setFE116] = useState([]);
  useEffect(() => {
    const Fe116Data = [];
    const FE116Collections = collection(firebase, "FE116");
    const fetchFe116Data = async () => {
      try {
        const q116 = query(
          FE116Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot116 = await getDocs(q116);
        querySnapshot116.forEach((doc) => {
          const data116 = doc.data();
          Fe116Data.push(data116);
          // Use the data as needed
        });

        setFE116(Fe116Data);
      } catch (error) {}
    };
    fetchFe116Data();
  }, []);
  const [FE117, setFE117] = useState([]);
  useEffect(() => {
    const Fe117Data = [];
    const FE117Collections = collection(firebase, "FE117");
    const fetchFe117Data = async () => {
      try {
        const q117 = query(
          FE117Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot117 = await getDocs(q117);
        querySnapshot117.forEach((doc) => {
          const data117 = doc.data();
          Fe117Data.push(data117);
          // Use the data as needed
        });

        setFE117(Fe117Data);
      } catch (error) {}
    };
    fetchFe117Data();
  }, []);
  const [FE118, setFE118] = useState([]);
  useEffect(() => {
    const Fe118Data = [];
    const FE118Collections = collection(firebase, "FE118");
    const fetchFe118Data = async () => {
      try {
        const q118 = query(
          FE118Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot118 = await getDocs(q118);
        querySnapshot118.forEach((doc) => {
          const data118 = doc.data();
          Fe118Data.push(data118);
          // Use the data as needed
        });

        setFE118(Fe118Data);
      } catch (error) {}
    };
    fetchFe118Data();
  }, []);
  const refreshData = async () => {
    const Fe118Data = [];
    const FE118Collections = collection(firebase, "FE118");
    const fetchFe118Data = async () => {
      try {
        const q118 = query(
          FE118Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot118 = await getDocs(q118);
        querySnapshot118.forEach((doc) => {
          const data118 = doc.data();
          Fe118Data.push(data118);
          // Use the data as needed
        });

        setFE118(Fe118Data);
      } catch (error) {}
    };
    fetchFe118Data();
    const Fe117Data = [];
    const FE117Collections = collection(firebase, "FE117");
    const fetchFe117Data = async () => {
      try {
        const q117 = query(
          FE117Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot117 = await getDocs(q117);
        querySnapshot117.forEach((doc) => {
          const data117 = doc.data();
          Fe117Data.push(data117);
          // Use the data as needed
        });

        setFE117(Fe117Data);
      } catch (error) {}
    };
    fetchFe117Data();
    const Fe116Data = [];
    const FE116Collections = collection(firebase, "FE116");
    const fetchFe116Data = async () => {
      try {
        const q116 = query(
          FE116Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot116 = await getDocs(q116);
        querySnapshot116.forEach((doc) => {
          const data116 = doc.data();
          Fe116Data.push(data116);
          // Use the data as needed
        });

        setFE116(Fe116Data);
      } catch (error) {}
    };
    fetchFe116Data();
    const Fe115Data = [];
    const FE115Collections = collection(firebase, "FE115");
    const fetchFe115Data = async () => {
      try {
        const q115 = query(
          FE115Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot115 = await getDocs(q115);
        querySnapshot115.forEach((doc) => {
          const data115 = doc.data();
          Fe115Data.push(data115);
          // Use the data as needed
        });

        setFE115(Fe115Data);
      } catch (error) {}
    };
    fetchFe115Data();
    const Fe114Data = [];
    const FE114Collections = collection(firebase, "FE114");
    const fetchFe114Data = async () => {
      try {
        const q114 = query(
          FE114Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot114 = await getDocs(q114);
        querySnapshot114.forEach((doc) => {
          const data114 = doc.data();
          Fe114Data.push(data114);
          // Use the data as needed
        });

        setFE114(Fe114Data);
      } catch (error) {}
    };
    fetchFe114Data();
    const Fe113Data = [];
    const FE113Collections = collection(firebase, "FE113");
    const fetchFe113Data = async () => {
      try {
        const q113 = query(
          FE113Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot113 = await getDocs(q113);
        querySnapshot113.forEach((doc) => {
          const data113 = doc.data();
          Fe113Data.push(data113);
          // Use the data as needed
        });

        setFE113(Fe113Data);
      } catch (error) {}
    };
    fetchFe113Data();
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
          source={require("../../assets/images/CIT_3rd.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {FE113.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE21}
              onPress={() => showModal("113")}
            >
              <View style={styles.fE22StackStack}>
                <View style={styles.fE22Stack}>
                  <View
                    style={[
                      styles.fE22,
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
                    style={styles.fE24}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE23,
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
          <View style={styles.fE1Row}>
            {FE114.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("114")}
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
            {FE115.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("115")}
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
            {FE116.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("116")}
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
            {FE117.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("117")}
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
            {FE118.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE17}
                onPress={() => showModal("118")}
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
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    height: wp("150%"),
  },
  image: {
    width: 1197,
    height: 419,

    marginLeft: 42,
  },
  image_imageStyle: {},
  fE21: {
    width: 30,
    height: 31,
    marginTop: 89,
    marginLeft: 1070,
  },
  fE22: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE24: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE22Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE23: {
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
  fE22StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1: {
    width: 30,
    height: 31,
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
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
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
    marginLeft: 161,
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
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
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
    marginLeft: 159,
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
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
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
    marginLeft: 159,
    marginTop: 1,
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
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
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
    marginLeft: 159,
    marginTop: 1,
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
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
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
    marginTop: 80,
    marginLeft: 283,
    marginRight: 126,
  },
});
