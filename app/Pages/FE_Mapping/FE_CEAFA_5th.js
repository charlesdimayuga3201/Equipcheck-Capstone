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
export default function FE_CEAFA_5th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [FE96, setFE96] = useState([]);
  useEffect(() => {
    const Fe96Data = [];
    const FE96Collections = collection(firebase, "FE96");
    const fetchFe96Data = async () => {
      try {
        const q96 = query(
          FE96Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot96 = await getDocs(q96);
        querySnapshot96.forEach((doc) => {
          const data96 = doc.data();
          Fe96Data.push(data96);
          // Use the data as needed
        });

        setFE96(Fe96Data);
      } catch (error) {}
    };
    fetchFe96Data();
  }, []);

  const [FE97, setFE97] = useState([]);
  useEffect(() => {
    const Fe97Data = [];
    const FE97Collections = collection(firebase, "FE97");
    const fetchFe97Data = async () => {
      try {
        const q97 = query(
          FE97Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot97 = await getDocs(q97);
        querySnapshot97.forEach((doc) => {
          const data97 = doc.data();
          Fe97Data.push(data97);
          // Use the data as needed
        });

        setFE97(Fe97Data);
      } catch (error) {}
    };
    fetchFe97Data();
  }, []);

  const [FE98, setFE98] = useState([]);
  useEffect(() => {
    const Fe98Data = [];
    const FE98Collections = collection(firebase, "FE98");
    const fetchFe98Data = async () => {
      try {
        const q98 = query(
          FE98Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot98 = await getDocs(q98);
        querySnapshot98.forEach((doc) => {
          const data98 = doc.data();
          Fe98Data.push(data98);
          // Use the data as needed
        });

        setFE98(Fe98Data);
      } catch (error) {}
    };
    fetchFe98Data();
  }, []);
  const [FE99, setFE99] = useState([]);
  useEffect(() => {
    const Fe99Data = [];
    const FE99Collections = collection(firebase, "FE99");
    const fetchFe99Data = async () => {
      try {
        const q99 = query(
          FE99Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot99 = await getDocs(q99);
        querySnapshot99.forEach((doc) => {
          const data99 = doc.data();
          Fe99Data.push(data99);
          // Use the data as needed
        });

        setFE99(Fe99Data);
      } catch (error) {}
    };
    fetchFe99Data();
  }, []);
  const [FE100, setFE100] = useState([]);
  useEffect(() => {
    const Fe100Data = [];
    const FE100Collections = collection(firebase, "FE100");
    const fetchFe100Data = async () => {
      try {
        const q100 = query(
          FE100Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot100 = await getDocs(q100);
        querySnapshot100.forEach((doc) => {
          const data100 = doc.data();
          Fe100Data.push(data100);
          // Use the data as needed
        });

        setFE100(Fe100Data);
      } catch (error) {}
    };
    fetchFe100Data();
  }, []);

  const refreshData = async () => {
    const Fe100Data = [];
    const FE100Collections = collection(firebase, "FE100");
    const fetchFe100Data = async () => {
      try {
        const q100 = query(
          FE100Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot100 = await getDocs(q100);
        querySnapshot100.forEach((doc) => {
          const data100 = doc.data();
          Fe100Data.push(data100);
          // Use the data as needed
        });

        setFE100(Fe100Data);
      } catch (error) {}
    };
    fetchFe100Data();
    const Fe99Data = [];
    const FE99Collections = collection(firebase, "FE99");
    const fetchFe99Data = async () => {
      try {
        const q99 = query(
          FE99Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot99 = await getDocs(q99);
        querySnapshot99.forEach((doc) => {
          const data99 = doc.data();
          Fe99Data.push(data99);
          // Use the data as needed
        });

        setFE99(Fe99Data);
      } catch (error) {}
    };
    fetchFe99Data();
    const Fe98Data = [];
    const FE98Collections = collection(firebase, "FE98");
    const fetchFe98Data = async () => {
      try {
        const q98 = query(
          FE98Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot98 = await getDocs(q98);
        querySnapshot98.forEach((doc) => {
          const data98 = doc.data();
          Fe98Data.push(data98);
          // Use the data as needed
        });

        setFE98(Fe98Data);
      } catch (error) {}
    };
    fetchFe98Data();
    const Fe97Data = [];
    const FE97Collections = collection(firebase, "FE97");
    const fetchFe97Data = async () => {
      try {
        const q97 = query(
          FE97Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot97 = await getDocs(q97);
        querySnapshot97.forEach((doc) => {
          const data97 = doc.data();
          Fe97Data.push(data97);
          // Use the data as needed
        });

        setFE97(Fe97Data);
      } catch (error) {}
    };
    fetchFe97Data();
    const Fe96Data = [];
    const FE96Collections = collection(firebase, "FE96");
    const fetchFe96Data = async () => {
      try {
        const q96 = query(
          FE96Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot96 = await getDocs(q96);
        querySnapshot96.forEach((doc) => {
          const data96 = doc.data();
          Fe96Data.push(data96);
          // Use the data as needed
        });

        setFE96(Fe96Data);
      } catch (error) {}
    };
    fetchFe96Data();
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
          source={require("../../assets/images/CEAFA_5th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.fE1Row}>
            {FE96.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("96")}
              >
                <View style={styles.fE1_circleStackStack}>
                  <View style={styles.fE1_circleStack}>
                    <View
                      style={[
                        styles.fE1_circle,
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
                      style={styles.fE1_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE1_downcircle,
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
            {FE97.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("97")}
              >
                <View style={styles.fE4_circleStackStack}>
                  <View style={styles.fE4_circleStack}>
                    <View
                      style={[
                        styles.fE4_circle,
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
                      style={styles.fE4_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE4_downcircle,
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
          {FE98.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE3}
              onPress={() => showModal("98")}
            >
              <View style={styles.fE3_circleStackStack}>
                <View style={styles.fE3_circleStack}>
                  <View
                    style={[
                      styles.fE3_circle,
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
                    style={styles.fE3_icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE3_downcircle,
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
          <View style={styles.fE2Row}>
            {FE99.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("99")}
              >
                <View style={styles.fE2_circleStackStack}>
                  <View style={styles.fE2_circleStack}>
                    <View
                      style={[
                        styles.fE2_circle,
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
                      style={styles.fE2_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE2_downcircle,
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
            {FE100.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("100")}
              >
                <View style={styles.fE5_circleStackStack}>
                  <View style={styles.fE5_circleStack}>
                    <View
                      style={[
                        styles.fE5_circle,
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
                      style={styles.fE5_icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE5_downcircle,
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
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    height: wp("150%"),
  },
  image: {
    width: 751,
    height: 746,
    marginTop: 23,
    marginLeft: 265,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
  },
  fE1_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE1_icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE1_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE1_downcircle: {
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
  fE1_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE4: {
    width: 30,
    height: 31,
    marginLeft: 525,
  },
  fE4_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE4_icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE4_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE4_downcircle: {
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
  fE4_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 181,
    marginLeft: 82,
    marginRight: 84,
  },
  fE3: {
    width: 30,
    height: 31,
    marginTop: 178,
    marginLeft: 365,
  },
  fE3_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE3_icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE3_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE3_downcircle: {
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
  fE3_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE2: {
    width: 30,
    height: 31,
    marginTop: 2,
  },
  fE2_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE2_icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE2_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE2_downcircle: {
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
  fE2_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 525,
  },
  fE5_circle: {
    top: 5,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE5_icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE5_circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE5_downcircle: {
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
  fE5_circleStackStack: {
    width: 30,
    height: 34,
    marginTop: -3,
  },
  fE2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 190,
    marginLeft: 82,
    marginRight: 84,
  },
});
