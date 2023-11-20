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
import { format } from "date-fns";
export default function FE_CIT_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE101, setFE101] = useState([]);
  useEffect(() => {
    const Fe101Data = [];
    const FE101Collections = collection(firebase, "FE101");
    const fetchFe101Data = async () => {
      try {
        const q101 = query(
          FE101Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot101 = await getDocs(q101);
        querySnapshot101.forEach((doc) => {
          const data101 = doc.data();
          Fe101Data.push(data101);
          // Use the data as needed
        });

        setFE101(Fe101Data);
      } catch (error) {}
    };
    fetchFe101Data();
  }, []);

  const [FE102, setFE102] = useState([]);
  useEffect(() => {
    const Fe102Data = [];
    const FE102Collections = collection(firebase, "FE102");
    const fetchFe102Data = async () => {
      try {
        const q102 = query(
          FE102Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot102 = await getDocs(q102);
        querySnapshot102.forEach((doc) => {
          const data102 = doc.data();
          Fe102Data.push(data102);
          // Use the data as needed
        });

        setFE102(Fe102Data);
      } catch (error) {}
    };
    fetchFe102Data();
  }, []);

  const [FE103, setFE103] = useState([]);
  useEffect(() => {
    const Fe103Data = [];
    const FE103Collections = collection(firebase, "FE103");
    const fetchFe103Data = async () => {
      try {
        const q103 = query(
          FE103Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot103 = await getDocs(q103);
        querySnapshot103.forEach((doc) => {
          const data103 = doc.data();
          Fe103Data.push(data103);
          // Use the data as needed
        });

        setFE103(Fe103Data);
      } catch (error) {}
    };
    fetchFe103Data();
  }, []);

  const [FE104, setFE104] = useState([]);
  useEffect(() => {
    const Fe104Data = [];
    const FE104Collections = collection(firebase, "FE104");
    const fetchFe104Data = async () => {
      try {
        const q104 = query(
          FE104Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot104 = await getDocs(q104);
        querySnapshot104.forEach((doc) => {
          const data104 = doc.data();
          Fe104Data.push(data104);
          // Use the data as needed
        });

        setFE104(Fe104Data);
      } catch (error) {}
    };
    fetchFe104Data();
  }, []);

  const [FE105, setFE105] = useState([]);
  useEffect(() => {
    const Fe105Data = [];
    const FE105Collections = collection(firebase, "FE105");
    const fetchFe105Data = async () => {
      try {
        const q105 = query(
          FE105Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot105 = await getDocs(q105);
        querySnapshot105.forEach((doc) => {
          const data105 = doc.data();
          Fe105Data.push(data105);
          // Use the data as needed
        });

        setFE105(Fe105Data);
      } catch (error) {}
    };
    fetchFe105Data();
  }, []);

  const [FE106, setFE106] = useState([]);
  useEffect(() => {
    const Fe106Data = [];
    const FE106Collections = collection(firebase, "FE106");
    const fetchFe106Data = async () => {
      try {
        const q106 = query(
          FE106Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot106 = await getDocs(q106);
        querySnapshot106.forEach((doc) => {
          const data106 = doc.data();
          Fe106Data.push(data106);
          // Use the data as needed
        });

        setFE106(Fe106Data);
      } catch (error) {}
    };
    fetchFe106Data();
  }, []);
  const refreshData = async () => {
    const Fe106Data = [];
    const FE106Collections = collection(firebase, "FE106");
    const fetchFe106Data = async () => {
      try {
        const q106 = query(
          FE106Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot106 = await getDocs(q106);
        querySnapshot106.forEach((doc) => {
          const data106 = doc.data();
          Fe106Data.push(data106);
          // Use the data as needed
        });

        setFE106(Fe106Data);
      } catch (error) {}
    };
    fetchFe106Data();
    const Fe105Data = [];
    const FE105Collections = collection(firebase, "FE105");
    const fetchFe105Data = async () => {
      try {
        const q105 = query(
          FE105Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot105 = await getDocs(q105);
        querySnapshot105.forEach((doc) => {
          const data105 = doc.data();
          Fe105Data.push(data105);
          // Use the data as needed
        });

        setFE105(Fe105Data);
      } catch (error) {}
    };
    fetchFe105Data();
    const Fe104Data = [];
    const FE104Collections = collection(firebase, "FE104");
    const fetchFe104Data = async () => {
      try {
        const q104 = query(
          FE104Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot104 = await getDocs(q104);
        querySnapshot104.forEach((doc) => {
          const data104 = doc.data();
          Fe104Data.push(data104);
          // Use the data as needed
        });

        setFE104(Fe104Data);
      } catch (error) {}
    };
    fetchFe104Data();
    const Fe103Data = [];
    const FE103Collections = collection(firebase, "FE103");
    const fetchFe103Data = async () => {
      try {
        const q103 = query(
          FE103Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot103 = await getDocs(q103);
        querySnapshot103.forEach((doc) => {
          const data103 = doc.data();
          Fe103Data.push(data103);
          // Use the data as needed
        });

        setFE103(Fe103Data);
      } catch (error) {}
    };
    fetchFe103Data();
    const Fe102Data = [];
    const FE102Collections = collection(firebase, "FE102");
    const fetchFe102Data = async () => {
      try {
        const q102 = query(
          FE102Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot102 = await getDocs(q102);
        querySnapshot102.forEach((doc) => {
          const data102 = doc.data();
          Fe102Data.push(data102);
          // Use the data as needed
        });

        setFE102(Fe102Data);
      } catch (error) {}
    };
    fetchFe102Data();
    const Fe101Data = [];
    const FE101Collections = collection(firebase, "FE101");
    const fetchFe101Data = async () => {
      try {
        const q101 = query(
          FE101Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot101 = await getDocs(q101);
        querySnapshot101.forEach((doc) => {
          const data101 = doc.data();
          Fe101Data.push(data101);
          // Use the data as needed
        });

        setFE101(Fe101Data);
      } catch (error) {}
    };
    fetchFe101Data();
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
                        item.date === formattedToday ? "#7FCD91" : "#FF6464",
                    },
                  ]}
                >
                  <View style={styles.cont}>
                    {item.date === formattedToday ? (
                      <>
                        <Icon
                          name="checkmark-circle-outline"
                          style={styles.check}
                        ></Icon>
                        <Text style={styles.inspected}>INSPECTED TODAY</Text>
                      </>
                    ) : (
                      <>
                        <Icon
                          name="close-circle-outline"
                          style={styles.check}
                        ></Icon>
                        <Text style={styles.inspected}>
                          NOT INSPECTED TODAY
                        </Text>
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
          source={require("../../assets/images/CIT_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {FE101.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE21}
              onPress={() => showModal("101")}
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
                        item.date === formattedToday ? "#7FCD91" : "#FF6464",
                    },
                  ]}
                ></View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={styles.fE1Row}>
            {FE102.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("102")}
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
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE103.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("103")}
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
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE104.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("104")}
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
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE105.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("105")}
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
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
                      },
                    ]}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
            {FE106.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE17}
                onPress={() => showModal("106")}
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
                          item.date === formattedToday ? "#7FCD91" : "#FF6464",
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
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "#F5F5F5",

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
    height: wp("150%"),
  },
  image: {
    width: 1164,
    height: 472,

    marginLeft: 58,
  },
  image_imageStyle: {},
  fE21: {
    width: 30,
    height: 31,
    marginTop: 86,
    marginLeft: 1040,
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
    top: 7,
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
    color: "rgba(35,151,69,1)",
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
  fE2StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 232,
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
    color: "rgba(35,151,69,1)",
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
    marginLeft: 154,
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
    color: "rgba(35,151,69,1)",
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
    marginLeft: 154,
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
    color: "rgba(35,151,69,1)",
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
    marginLeft: 233,
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
    color: "rgba(35,151,69,1)",
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
    marginTop: 82,
    marginLeft: 120,
    marginRight: 121,
  },
});
