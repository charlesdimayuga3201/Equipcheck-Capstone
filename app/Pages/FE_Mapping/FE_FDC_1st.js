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
export default function FE_FDC_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE130, setFE130] = useState([]);
  useEffect(() => {
    const Fe130Data = [];
    const FE130Collections = collection(firebase, "FE130");
    const fetchFe130Data = async () => {
      try {
        const q130 = query(
          FE130Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot130 = await getDocs(q130);
        querySnapshot130.forEach((doc) => {
          const data130 = doc.data();
          Fe130Data.push(data130);
          // Use the data as needed
        });

        setFE130(Fe130Data);
      } catch (error) {}
    };
    fetchFe130Data();
  }, []);
  const [FE131, setFE131] = useState([]);
  useEffect(() => {
    const Fe131Data = [];
    const FE131Collections = collection(firebase, "FE131");
    const fetchFe131Data = async () => {
      try {
        const q131 = query(
          FE131Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot131 = await getDocs(q131);
        querySnapshot131.forEach((doc) => {
          const data131 = doc.data();
          Fe131Data.push(data131);
          // Use the data as needed
        });

        setFE131(Fe131Data);
      } catch (error) {}
    };
    fetchFe131Data();
  }, []);
  const [FE132, setFE132] = useState([]);
  useEffect(() => {
    const Fe132Data = [];
    const FE132Collections = collection(firebase, "FE132");
    const fetchFe132Data = async () => {
      try {
        const q132 = query(
          FE132Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot132 = await getDocs(q132);
        querySnapshot132.forEach((doc) => {
          const data132 = doc.data();
          Fe132Data.push(data132);
          // Use the data as needed
        });

        setFE132(Fe132Data);
      } catch (error) {}
    };
    fetchFe132Data();
  }, []);
  const [FE133, setFE133] = useState([]);
  useEffect(() => {
    const Fe133Data = [];
    const FE133Collections = collection(firebase, "FE133");
    const fetchFe133Data = async () => {
      try {
        const q133 = query(
          FE133Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot133 = await getDocs(q133);
        querySnapshot133.forEach((doc) => {
          const data133 = doc.data();
          Fe133Data.push(data133);
          // Use the data as needed
        });

        setFE133(Fe133Data);
      } catch (error) {}
    };
    fetchFe133Data();
  }, []);
  const [FE134, setFE134] = useState([]);
  useEffect(() => {
    const Fe134Data = [];
    const FE134Collections = collection(firebase, "FE134");
    const fetchFe134Data = async () => {
      try {
        const q134 = query(
          FE134Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot134 = await getDocs(q134);
        querySnapshot134.forEach((doc) => {
          const data134 = doc.data();
          Fe134Data.push(data134);
          // Use the data as needed
        });

        setFE134(Fe134Data);
      } catch (error) {}
    };
    fetchFe134Data();
  }, []);
  const [FE135, setFE135] = useState([]);
  useEffect(() => {
    const Fe135Data = [];
    const FE135Collections = collection(firebase, "FE135");
    const fetchFe135Data = async () => {
      try {
        const q135 = query(
          FE135Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot135 = await getDocs(q135);
        querySnapshot135.forEach((doc) => {
          const data135 = doc.data();
          Fe135Data.push(data135);
          // Use the data as needed
        });

        setFE135(Fe135Data);
      } catch (error) {}
    };
    fetchFe135Data();
  }, []);
  const refreshData = async () => {
    const Fe135Data = [];
    const FE135Collections = collection(firebase, "FE135");
    const fetchFe135Data = async () => {
      try {
        const q135 = query(
          FE135Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot135 = await getDocs(q135);
        querySnapshot135.forEach((doc) => {
          const data135 = doc.data();
          Fe135Data.push(data135);
          // Use the data as needed
        });

        setFE135(Fe135Data);
      } catch (error) {}
    };
    fetchFe135Data();
    const Fe134Data = [];
    const FE134Collections = collection(firebase, "FE134");
    const fetchFe134Data = async () => {
      try {
        const q134 = query(
          FE134Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot134 = await getDocs(q134);
        querySnapshot134.forEach((doc) => {
          const data134 = doc.data();
          Fe134Data.push(data134);
          // Use the data as needed
        });

        setFE134(Fe134Data);
      } catch (error) {}
    };
    fetchFe134Data();
    const Fe133Data = [];
    const FE133Collections = collection(firebase, "FE133");
    const fetchFe133Data = async () => {
      try {
        const q133 = query(
          FE133Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot133 = await getDocs(q133);
        querySnapshot133.forEach((doc) => {
          const data133 = doc.data();
          Fe133Data.push(data133);
          // Use the data as needed
        });

        setFE133(Fe133Data);
      } catch (error) {}
    };
    fetchFe133Data();
    const Fe132Data = [];
    const FE132Collections = collection(firebase, "FE132");
    const fetchFe132Data = async () => {
      try {
        const q132 = query(
          FE132Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot132 = await getDocs(q132);
        querySnapshot132.forEach((doc) => {
          const data132 = doc.data();
          Fe132Data.push(data132);
          // Use the data as needed
        });

        setFE132(Fe132Data);
      } catch (error) {}
    };
    fetchFe132Data();
    const Fe131Data = [];
    const FE131Collections = collection(firebase, "FE131");
    const fetchFe131Data = async () => {
      try {
        const q131 = query(
          FE131Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot131 = await getDocs(q131);
        querySnapshot131.forEach((doc) => {
          const data131 = doc.data();
          Fe131Data.push(data131);
          // Use the data as needed
        });

        setFE131(Fe131Data);
      } catch (error) {}
    };
    fetchFe131Data();
    const Fe130Data = [];
    const FE130Collections = collection(firebase, "FE130");
    const fetchFe130Data = async () => {
      try {
        const q130 = query(
          FE130Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot130 = await getDocs(q130);
        querySnapshot130.forEach((doc) => {
          const data130 = doc.data();
          Fe130Data.push(data130);
          // Use the data as needed
        });

        setFE130(Fe130Data);
      } catch (error) {}
    };
    fetchFe130Data();
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
          source={require("../../assets/images/FEFDC_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.fE1Row}>
            {FE130.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("130")}
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
            {FE131.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("131")}
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
          </View>
          <View style={styles.fE9Row}>
            {FE132.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("132")}
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
            {FE133.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("133")}
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
          </View>
          <View style={styles.fE17Row}>
            {FE134.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE17}
                onPress={() => showModal("134")}
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
            {FE135.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE21}
                onPress={() => showModal("135")}
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

    flex: 1,
    height: wp("150%"),
  },
  image: {
    width: 464,
    height: 748,
  },
  image_imageStyle: {},
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
    marginLeft: 197,
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
  fE1Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 115,
    marginRight: 92,
  },
  fE9: {
    width: 30,
    height: 31,
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
    marginLeft: 245,
    marginTop: 16,
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
  fE9Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 286,
    marginLeft: 67,
    marginRight: 92,
  },
  fE17: {
    width: 30,
    height: 31,
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
  fE21: {
    width: 30,
    height: 31,
    marginLeft: 218,
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
  fE17Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 133,
    marginLeft: 106,
    marginRight: 80,
  },
});
