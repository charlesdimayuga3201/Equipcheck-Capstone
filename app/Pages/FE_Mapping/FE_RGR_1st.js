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
export default function FE_RGR_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE136, setFE136] = useState([]);
  useEffect(() => {
    const Fe136Data = [];
    const FE136Collections = collection(firebase, "FE136");
    const fetchFe136Data = async () => {
      try {
        const q136 = query(
          FE136Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot136 = await getDocs(q136);
        querySnapshot136.forEach((doc) => {
          const data136 = doc.data();
          Fe136Data.push(data136);
          // Use the data as needed
        });

        setFE136(Fe136Data);
      } catch (error) {}
    };
    fetchFe136Data();
  }, []);
  const [FE137, setFE137] = useState([]);
  useEffect(() => {
    const Fe137Data = [];
    const FE137Collections = collection(firebase, "FE137");
    const fetchFe137Data = async () => {
      try {
        const q137 = query(
          FE137Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot137 = await getDocs(q137);
        querySnapshot137.forEach((doc) => {
          const data137 = doc.data();
          Fe137Data.push(data137);
          // Use the data as needed
        });

        setFE137(Fe137Data);
      } catch (error) {}
    };
    fetchFe137Data();
  }, []);
  const [FE138, setFE138] = useState([]);
  useEffect(() => {
    const Fe138Data = [];
    const FE138Collections = collection(firebase, "FE138");
    const fetchFe138Data = async () => {
      try {
        const q138 = query(
          FE138Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot138 = await getDocs(q138);
        querySnapshot138.forEach((doc) => {
          const data138 = doc.data();
          Fe138Data.push(data138);
          // Use the data as needed
        });

        setFE138(Fe138Data);
      } catch (error) {}
    };
    fetchFe138Data();
  }, []);
  const [FE139, setFE139] = useState([]);
  useEffect(() => {
    const Fe139Data = [];
    const FE139Collections = collection(firebase, "FE139");
    const fetchFe139Data = async () => {
      try {
        const q139 = query(
          FE139Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot139 = await getDocs(q139);
        querySnapshot139.forEach((doc) => {
          const data139 = doc.data();
          Fe139Data.push(data139);
          // Use the data as needed
        });

        setFE139(Fe139Data);
      } catch (error) {}
    };
    fetchFe139Data();
  }, []);
  const [FE140, setFE140] = useState([]);
  useEffect(() => {
    const Fe140Data = [];
    const FE140Collections = collection(firebase, "FE140");
    const fetchFe140Data = async () => {
      try {
        const q140 = query(
          FE140Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot140 = await getDocs(q140);
        querySnapshot140.forEach((doc) => {
          const data140 = doc.data();
          Fe140Data.push(data140);
          // Use the data as needed
        });

        setFE140(Fe140Data);
      } catch (error) {}
    };
    fetchFe140Data();
  }, []);
  const [FE141, setFE141] = useState([]);
  useEffect(() => {
    const Fe141Data = [];
    const FE141Collections = collection(firebase, "FE141");
    const fetchFe141Data = async () => {
      try {
        const q141 = query(
          FE141Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot141 = await getDocs(q141);
        querySnapshot141.forEach((doc) => {
          const data141 = doc.data();
          Fe141Data.push(data141);
          // Use the data as needed
        });

        setFE141(Fe141Data);
      } catch (error) {}
    };
    fetchFe141Data();
  }, []);
  const [FE142, setFE142] = useState([]);
  useEffect(() => {
    const Fe142Data = [];
    const FE142Collections = collection(firebase, "FE142");
    const fetchFe142Data = async () => {
      try {
        const q142 = query(
          FE142Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot142 = await getDocs(q142);
        querySnapshot142.forEach((doc) => {
          const data142 = doc.data();
          Fe142Data.push(data142);
          // Use the data as needed
        });

        setFE142(Fe142Data);
      } catch (error) {}
    };
    fetchFe142Data();
  }, []);
  const refreshData = async () => {
    const Fe142Data = [];
    const FE142Collections = collection(firebase, "FE142");
    const fetchFe142Data = async () => {
      try {
        const q142 = query(
          FE142Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot142 = await getDocs(q142);
        querySnapshot142.forEach((doc) => {
          const data142 = doc.data();
          Fe142Data.push(data142);
          // Use the data as needed
        });

        setFE142(Fe142Data);
      } catch (error) {}
    };
    fetchFe142Data();
    const Fe141Data = [];
    const FE141Collections = collection(firebase, "FE141");
    const fetchFe141Data = async () => {
      try {
        const q141 = query(
          FE141Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot141 = await getDocs(q141);
        querySnapshot141.forEach((doc) => {
          const data141 = doc.data();
          Fe141Data.push(data141);
          // Use the data as needed
        });

        setFE141(Fe141Data);
      } catch (error) {}
    };
    fetchFe141Data();
    const Fe140Data = [];
    const FE140Collections = collection(firebase, "FE140");
    const fetchFe140Data = async () => {
      try {
        const q140 = query(
          FE140Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot140 = await getDocs(q140);
        querySnapshot140.forEach((doc) => {
          const data140 = doc.data();
          Fe140Data.push(data140);
          // Use the data as needed
        });

        setFE140(Fe140Data);
      } catch (error) {}
    };
    fetchFe140Data();
    const Fe139Data = [];
    const FE139Collections = collection(firebase, "FE139");
    const fetchFe139Data = async () => {
      try {
        const q139 = query(
          FE139Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot139 = await getDocs(q139);
        querySnapshot139.forEach((doc) => {
          const data139 = doc.data();
          Fe139Data.push(data139);
          // Use the data as needed
        });

        setFE139(Fe139Data);
      } catch (error) {}
    };
    fetchFe139Data();
    const Fe138Data = [];
    const FE138Collections = collection(firebase, "FE138");
    const fetchFe138Data = async () => {
      try {
        const q138 = query(
          FE138Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot138 = await getDocs(q138);
        querySnapshot138.forEach((doc) => {
          const data138 = doc.data();
          Fe138Data.push(data138);
          // Use the data as needed
        });

        setFE138(Fe138Data);
      } catch (error) {}
    };
    fetchFe138Data();
    const Fe137Data = [];
    const FE137Collections = collection(firebase, "FE137");
    const fetchFe137Data = async () => {
      try {
        const q137 = query(
          FE137Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot137 = await getDocs(q137);
        querySnapshot137.forEach((doc) => {
          const data137 = doc.data();
          Fe137Data.push(data137);
          // Use the data as needed
        });

        setFE137(Fe137Data);
      } catch (error) {}
    };
    fetchFe137Data();
    const Fe136Data = [];
    const FE136Collections = collection(firebase, "FE136");
    const fetchFe136Data = async () => {
      try {
        const q136 = query(
          FE136Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot136 = await getDocs(q136);
        querySnapshot136.forEach((doc) => {
          const data136 = doc.data();
          Fe136Data.push(data136);
          // Use the data as needed
        });

        setFE136(Fe136Data);
      } catch (error) {}
    };
    fetchFe136Data();
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
          source={require("../../assets/images/FERGR_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {FE136.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE25}
              onPress={() => showModal("136")}
            >
              <View style={styles.fE26StackStack}>
                <View style={styles.fE26Stack}>
                  <View
                    style={[
                      styles.fE26,
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
                    style={styles.fE28}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE27,
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
          <View style={styles.fE25Filler}>
            <View style={styles.fE1Row}>
              {FE137.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE1}
                  onPress={() => showModal("137")}
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
              {FE138.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE9}
                  onPress={() => showModal("138")}
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
              {FE139.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE17}
                  onPress={() => showModal("139")}
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
            <View style={styles.fE5Row}>
              {FE140.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE5}
                  onPress={() => showModal("140")}
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
              {FE141.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE13}
                  onPress={() => showModal("141")}
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
              {FE142.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE21}
                  onPress={() => showModal("142")}
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
    width: 899,
    height: 450,

    // flexDirection: "row",

    // marginLeft: 145,
  },
  image_imageStyle: {},
  fE25: {
    width: 30,
    height: 31,
    marginLeft: 803,
    marginTop: 191,
  },
  fE26: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE28: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  fE26Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE27: {
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
  fE26StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1: {
    width: 30,
    height: 31,
    // backgroundColor: "rgba(255,255,255,1)",
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
    color: "rgba(35,151,69,1)",
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
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 175,
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
  fE17: {
    width: 30,
    height: 31,
    marginLeft: 178,
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
    color: "rgba(35,151,69,1)",
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
    top: 25,
    left: 143,
    right: 313,
    height: 31,
    position: "absolute",
    flexDirection: "row",
  },
  fE5: {
    width: 30,
    height: 31,
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
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 177,
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
  fE21: {
    width: 30,
    height: 31,
    marginLeft: 175,
    marginTop: 1,
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
  fE5Row: {
    top: 65,
    left: 229,
    right: 228,
    height: 32,
    position: "absolute",
    flexDirection: "row",
  },
  fE25Filler: {
    flex: 1,
  },
});
