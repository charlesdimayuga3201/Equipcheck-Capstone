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
export default function FE_CIT_4th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE119, setFE119] = useState([]);
  useEffect(() => {
    const Fe119Data = [];
    const FE119Collections = collection(firebase, "FE119");
    const fetchFe119Data = async () => {
      try {
        const q119 = query(
          FE119Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot119 = await getDocs(q119);
        querySnapshot119.forEach((doc) => {
          const data119 = doc.data();
          Fe119Data.push(data119);
          // Use the data as needed
        });

        setFE119(Fe119Data);
      } catch (error) {}
    };
    fetchFe119Data();
  }, []);

  const [FE120, setFE120] = useState([]);
  useEffect(() => {
    const Fe120Data = [];
    const FE120Collections = collection(firebase, "FE120");
    const fetchFe120Data = async () => {
      try {
        const q120 = query(
          FE120Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot120 = await getDocs(q120);
        querySnapshot120.forEach((doc) => {
          const data120 = doc.data();
          Fe120Data.push(data120);
          // Use the data as needed
        });

        setFE120(Fe120Data);
      } catch (error) {}
    };
    fetchFe120Data();
  }, []);
  const [FE121, setFE121] = useState([]);
  useEffect(() => {
    const Fe121Data = [];
    const FE121Collections = collection(firebase, "FE121");
    const fetchFe121Data = async () => {
      try {
        const q121 = query(
          FE121Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot121 = await getDocs(q121);
        querySnapshot121.forEach((doc) => {
          const data121 = doc.data();
          Fe121Data.push(data121);
          // Use the data as needed
        });

        setFE121(Fe121Data);
      } catch (error) {}
    };
    fetchFe121Data();
  }, []);
  const [FE122, setFE122] = useState([]);
  useEffect(() => {
    const Fe122Data = [];
    const FE122Collections = collection(firebase, "FE122");
    const fetchFe122Data = async () => {
      try {
        const q122 = query(
          FE122Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot122 = await getDocs(q122);
        querySnapshot122.forEach((doc) => {
          const data122 = doc.data();
          Fe122Data.push(data122);
          // Use the data as needed
        });

        setFE122(Fe122Data);
      } catch (error) {}
    };
    fetchFe122Data();
  }, []);
  const [FE123, setFE123] = useState([]);
  useEffect(() => {
    const Fe123Data = [];
    const FE123Collections = collection(firebase, "FE123");
    const fetchFe123Data = async () => {
      try {
        const q123 = query(
          FE123Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot123 = await getDocs(q123);
        querySnapshot123.forEach((doc) => {
          const data123 = doc.data();
          Fe123Data.push(data123);
          // Use the data as needed
        });

        setFE123(Fe123Data);
      } catch (error) {}
    };
    fetchFe123Data();
  }, []);
  const [FE124, setFE124] = useState([]);
  useEffect(() => {
    const Fe124Data = [];
    const FE124Collections = collection(firebase, "FE124");
    const fetchFe124Data = async () => {
      try {
        const q124 = query(
          FE124Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot124 = await getDocs(q124);
        querySnapshot124.forEach((doc) => {
          const data124 = doc.data();
          Fe124Data.push(data124);
          // Use the data as needed
        });

        setFE124(Fe124Data);
      } catch (error) {}
    };
    fetchFe124Data();
  }, []);
  const refreshData = async () => {
    const Fe124Data = [];
    const FE124Collections = collection(firebase, "FE124");
    const fetchFe124Data = async () => {
      try {
        const q124 = query(
          FE124Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot124 = await getDocs(q124);
        querySnapshot124.forEach((doc) => {
          const data124 = doc.data();
          Fe124Data.push(data124);
          // Use the data as needed
        });

        setFE124(Fe124Data);
      } catch (error) {}
    };
    fetchFe124Data();
    const Fe123Data = [];
    const FE123Collections = collection(firebase, "FE123");
    const fetchFe123Data = async () => {
      try {
        const q123 = query(
          FE123Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot123 = await getDocs(q123);
        querySnapshot123.forEach((doc) => {
          const data123 = doc.data();
          Fe123Data.push(data123);
          // Use the data as needed
        });

        setFE123(Fe123Data);
      } catch (error) {}
    };
    fetchFe123Data();
    const Fe122Data = [];
    const FE122Collections = collection(firebase, "FE122");
    const fetchFe122Data = async () => {
      try {
        const q122 = query(
          FE122Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot122 = await getDocs(q122);
        querySnapshot122.forEach((doc) => {
          const data122 = doc.data();
          Fe122Data.push(data122);
          // Use the data as needed
        });

        setFE122(Fe122Data);
      } catch (error) {}
    };
    fetchFe122Data();
    const Fe121Data = [];
    const FE121Collections = collection(firebase, "FE121");
    const fetchFe121Data = async () => {
      try {
        const q121 = query(
          FE121Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot121 = await getDocs(q121);
        querySnapshot121.forEach((doc) => {
          const data121 = doc.data();
          Fe121Data.push(data121);
          // Use the data as needed
        });

        setFE121(Fe121Data);
      } catch (error) {}
    };
    fetchFe121Data();
    const Fe120Data = [];
    const FE120Collections = collection(firebase, "FE120");
    const fetchFe120Data = async () => {
      try {
        const q120 = query(
          FE120Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot120 = await getDocs(q120);
        querySnapshot120.forEach((doc) => {
          const data120 = doc.data();
          Fe120Data.push(data120);
          // Use the data as needed
        });

        setFE120(Fe120Data);
      } catch (error) {}
    };
    fetchFe120Data();
    const Fe119Data = [];
    const FE119Collections = collection(firebase, "FE119");
    const fetchFe119Data = async () => {
      try {
        const q119 = query(
          FE119Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot119 = await getDocs(q119);
        querySnapshot119.forEach((doc) => {
          const data119 = doc.data();
          Fe119Data.push(data119);
          // Use the data as needed
        });

        setFE119(Fe119Data);
      } catch (error) {}
    };
    fetchFe119Data();
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
          source={require("../../assets/images/CIT_4th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {FE119.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE21}
              onPress={() => showModal("119")}
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
            {FE120.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("120")}
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
            {FE121.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("121")}
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

            {FE122.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("122")}
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

            <View style={styles.fE13Stack}>
              {FE123.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE13}
                  onPress={() => showModal("123")}
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
              {FE124.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE17}
                  onPress={() => showModal("124")}
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
    width: 1204,
    height: 417,
    flexDirection: "row",
    marginLeft: 47,
  },
  image_imageStyle: {},
  fE21: {
    width: 30,
    height: 31,
    marginLeft: 1078,
    marginTop: 87,
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
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
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
    marginLeft: 161,
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
    marginLeft: 161,
    marginTop: 1,
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
    top: 0,
    left: 0,
    width: 30,
    height: 31,
    position: "absolute",
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
    top: 1,
    left: 29,
    width: 30,
    height: 31,
    position: "absolute",
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
  fE13Stack: {
    width: 59,
    height: 32,
    marginLeft: 161,
    marginTop: 2,
  },
  fE1Row: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 287,
    marginLeft: -822,
    marginTop: 199,
  },
});
