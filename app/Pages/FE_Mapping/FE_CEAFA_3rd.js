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
export default function FE_CEAFA_3rd({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE72, setFE72] = useState([]);
  useEffect(() => {
    const Fe72Data = [];
    const FE72Collections = collection(firebase, "FE72");
    const fetchFe72Data = async () => {
      try {
        const q72 = query(
          FE72Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot72 = await getDocs(q72);
        querySnapshot72.forEach((doc) => {
          const data72 = doc.data();
          Fe72Data.push(data72);
          // Use the data as needed
        });

        setFE72(Fe72Data);
      } catch (error) {}
    };
    fetchFe72Data();
  }, []);

  const [FE73, setFE73] = useState([]);
  useEffect(() => {
    const Fe73Data = [];
    const FE73Collections = collection(firebase, "FE73");
    const fetchFe73Data = async () => {
      try {
        const q73 = query(
          FE73Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot73 = await getDocs(q73);
        querySnapshot73.forEach((doc) => {
          const data73 = doc.data();
          Fe73Data.push(data73);
          // Use the data as needed
        });

        setFE73(Fe73Data);
      } catch (error) {}
    };
    fetchFe73Data();
  }, []);

  const [FE74, setFE74] = useState([]);
  useEffect(() => {
    const Fe74Data = [];
    const FE74Collections = collection(firebase, "FE74");
    const fetchFe74Data = async () => {
      try {
        const q74 = query(
          FE74Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot74 = await getDocs(q74);
        querySnapshot74.forEach((doc) => {
          const data74 = doc.data();
          Fe74Data.push(data74);
          // Use the data as needed
        });

        setFE74(Fe74Data);
      } catch (error) {}
    };
    fetchFe74Data();
  }, []);
  const [FE75, setFE75] = useState([]);
  useEffect(() => {
    const Fe75Data = [];
    const FE75Collections = collection(firebase, "FE75");
    const fetchFe75Data = async () => {
      try {
        const q75 = query(
          FE75Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot75 = await getDocs(q75);
        querySnapshot75.forEach((doc) => {
          const data75 = doc.data();
          Fe75Data.push(data75);
          // Use the data as needed
        });

        setFE75(Fe75Data);
      } catch (error) {}
    };
    fetchFe75Data();
  }, []);
  const [FE76, setFE76] = useState([]);
  useEffect(() => {
    const Fe76Data = [];
    const FE76Collections = collection(firebase, "FE76");
    const fetchFe76Data = async () => {
      try {
        const q76 = query(
          FE76Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot76 = await getDocs(q76);
        querySnapshot76.forEach((doc) => {
          const data76 = doc.data();
          Fe76Data.push(data76);
          // Use the data as needed
        });

        setFE76(Fe76Data);
      } catch (error) {}
    };
    fetchFe76Data();
  }, []);
  const [FE77, setFE77] = useState([]);
  useEffect(() => {
    const Fe77Data = [];
    const FE77Collections = collection(firebase, "FE77");
    const fetchFe77Data = async () => {
      try {
        const q77 = query(
          FE77Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot77 = await getDocs(q77);
        querySnapshot77.forEach((doc) => {
          const data77 = doc.data();
          Fe77Data.push(data77);
          // Use the data as needed
        });

        setFE77(Fe77Data);
      } catch (error) {}
    };
    fetchFe77Data();
  }, []);

  const [FE78, setFE78] = useState([]);
  useEffect(() => {
    const Fe78Data = [];
    const FE78Collections = collection(firebase, "FE78");
    const fetchFe78Data = async () => {
      try {
        const q78 = query(
          FE78Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot78 = await getDocs(q78);
        querySnapshot78.forEach((doc) => {
          const data78 = doc.data();
          Fe78Data.push(data78);
          // Use the data as needed
        });

        setFE78(Fe78Data);
      } catch (error) {}
    };
    fetchFe78Data();
  }, []);
  const [FE79, setFE79] = useState([]);
  useEffect(() => {
    const Fe79Data = [];
    const FE79Collections = collection(firebase, "FE79");
    const fetchFe79Data = async () => {
      try {
        const q79 = query(
          FE79Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot79 = await getDocs(q79);
        querySnapshot79.forEach((doc) => {
          const data79 = doc.data();
          Fe79Data.push(data79);
          // Use the data as needed
        });

        setFE79(Fe79Data);
      } catch (error) {}
    };
    fetchFe79Data();
  }, []);

  const [FE80, setFE80] = useState([]);
  useEffect(() => {
    const Fe80Data = [];
    const FE80Collections = collection(firebase, "FE80");
    const fetchFe80Data = async () => {
      try {
        const q80 = query(
          FE80Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot80 = await getDocs(q80);
        querySnapshot80.forEach((doc) => {
          const data80 = doc.data();
          Fe80Data.push(data80);
          // Use the data as needed
        });

        setFE80(Fe80Data);
      } catch (error) {}
    };
    fetchFe80Data();
  }, []);

  const [FE81, setFE81] = useState([]);
  useEffect(() => {
    const Fe81Data = [];
    const FE81Collections = collection(firebase, "FE81");
    const fetchFe81Data = async () => {
      try {
        const q81 = query(
          FE81Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot81 = await getDocs(q81);
        querySnapshot81.forEach((doc) => {
          const data81 = doc.data();
          Fe81Data.push(data81);
          // Use the data as needed
        });

        setFE81(Fe81Data);
      } catch (error) {}
    };
    fetchFe81Data();
  }, []);

  const refreshData = async () => {
    const Fe81Data = [];
    const FE81Collections = collection(firebase, "FE81");
    const fetchFe81Data = async () => {
      try {
        const q81 = query(
          FE81Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot81 = await getDocs(q81);
        querySnapshot81.forEach((doc) => {
          const data81 = doc.data();
          Fe81Data.push(data81);
          // Use the data as needed
        });

        setFE81(Fe81Data);
      } catch (error) {}
    };
    fetchFe81Data();

    const Fe80Data = [];
    const FE80Collections = collection(firebase, "FE80");
    const fetchFe80Data = async () => {
      try {
        const q80 = query(
          FE80Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot80 = await getDocs(q80);
        querySnapshot80.forEach((doc) => {
          const data80 = doc.data();
          Fe80Data.push(data80);
          // Use the data as needed
        });

        setFE80(Fe80Data);
      } catch (error) {}
    };
    fetchFe80Data();
    const Fe79Data = [];
    const FE79Collections = collection(firebase, "FE79");
    const fetchFe79Data = async () => {
      try {
        const q79 = query(
          FE79Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot79 = await getDocs(q79);
        querySnapshot79.forEach((doc) => {
          const data79 = doc.data();
          Fe79Data.push(data79);
          // Use the data as needed
        });

        setFE79(Fe79Data);
      } catch (error) {}
    };
    fetchFe79Data();
    const Fe78Data = [];
    const FE78Collections = collection(firebase, "FE78");
    const fetchFe78Data = async () => {
      try {
        const q78 = query(
          FE78Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot78 = await getDocs(q78);
        querySnapshot78.forEach((doc) => {
          const data78 = doc.data();
          Fe78Data.push(data78);
          // Use the data as needed
        });

        setFE78(Fe78Data);
      } catch (error) {}
    };
    fetchFe78Data();
    const Fe77Data = [];
    const FE77Collections = collection(firebase, "FE77");
    const fetchFe77Data = async () => {
      try {
        const q77 = query(
          FE77Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot77 = await getDocs(q77);
        querySnapshot77.forEach((doc) => {
          const data77 = doc.data();
          Fe77Data.push(data77);
          // Use the data as needed
        });

        setFE77(Fe77Data);
      } catch (error) {}
    };
    fetchFe77Data();
    const Fe76Data = [];
    const FE76Collections = collection(firebase, "FE76");
    const fetchFe76Data = async () => {
      try {
        const q76 = query(
          FE76Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot76 = await getDocs(q76);
        querySnapshot76.forEach((doc) => {
          const data76 = doc.data();
          Fe76Data.push(data76);
          // Use the data as needed
        });

        setFE76(Fe76Data);
      } catch (error) {}
    };
    fetchFe76Data();
    const Fe75Data = [];
    const FE75Collections = collection(firebase, "FE75");
    const fetchFe75Data = async () => {
      try {
        const q75 = query(
          FE75Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot75 = await getDocs(q75);
        querySnapshot75.forEach((doc) => {
          const data75 = doc.data();
          Fe75Data.push(data75);
          // Use the data as needed
        });

        setFE75(Fe75Data);
      } catch (error) {}
    };
    fetchFe75Data();
    const Fe74Data = [];
    const FE74Collections = collection(firebase, "FE74");
    const fetchFe74Data = async () => {
      try {
        const q74 = query(
          FE74Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot74 = await getDocs(q74);
        querySnapshot74.forEach((doc) => {
          const data74 = doc.data();
          Fe74Data.push(data74);
          // Use the data as needed
        });

        setFE74(Fe74Data);
      } catch (error) {}
    };
    fetchFe74Data();
    const Fe73Data = [];
    const FE73Collections = collection(firebase, "FE73");
    const fetchFe73Data = async () => {
      try {
        const q73 = query(
          FE73Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot73 = await getDocs(q73);
        querySnapshot73.forEach((doc) => {
          const data73 = doc.data();
          Fe73Data.push(data73);
          // Use the data as needed
        });

        setFE73(Fe73Data);
      } catch (error) {}
    };
    fetchFe73Data();

    const Fe72Data = [];
    const FE72Collections = collection(firebase, "FE72");
    const fetchFe72Data = async () => {
      try {
        const q72 = query(
          FE72Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot72 = await getDocs(q72);
        querySnapshot72.forEach((doc) => {
          const data72 = doc.data();
          Fe72Data.push(data72);
          // Use the data as needed
        });

        setFE72(Fe72Data);
      } catch (error) {}
    };
    fetchFe72Data();
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
          source={require("../../assets/images/CEAFA_3rd.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.fE1Row}>
            {FE72.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("72")}
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
            {FE73.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE10}
                onPress={() => showModal("73")}
              >
                <View style={styles.fE10circleStackStack}>
                  <View style={styles.fE10circleStack}>
                    <View
                      style={[
                        styles.fE10circle,
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
                      style={styles.fE10icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE10downcircle,
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
          <View style={styles.fE2Row}>
            {FE74.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("74")}
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

            {FE75.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("75")}
              >
                <View style={styles.fE9circleStackStack}>
                  <View style={styles.fE9circleStack}>
                    <View
                      style={[
                        styles.fE9circle,
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
                      style={styles.fE9icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE9downcircle,
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
            {FE76.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("76")}
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
            {FE77.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE7}
                onPress={() => showModal("77")}
              >
                <View style={styles.fE7circleStackStack}>
                  <View style={styles.fE7circleStack}>
                    <View
                      style={[
                        styles.fE7circle,
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
                      style={styles.fE7icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE7downcircle,
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
            {FE78.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE8}
                onPress={() => showModal("78")}
              >
                <View style={styles.fE8circleStackStack}>
                  <View style={styles.fE8circleStack}>
                    <View
                      style={[
                        styles.fE8circle,
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
                      style={styles.fE8icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE8downcircle,
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
          <View style={styles.fE4Row}>
            {FE79.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("79")}
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
            {FE80.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE6}
                onPress={() => showModal("80")}
              >
                <View style={styles.fE6circleStackStack}>
                  <View style={styles.fE6circleStack}>
                    <View
                      style={[
                        styles.fE6circle,
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
                      style={styles.fE6icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE6downcircle,
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
          {FE81.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE3}
              onPress={() => showModal("81")}
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
    width: 739,
    height: 755,
    marginTop: 16,
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
    zIndex: 999999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
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
  fE10: {
    width: 30,
    height: 31,
    marginLeft: 594,
    marginTop: 18,
  },
  fE10circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE10icon: {
    zIndex: 999999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE10circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE10downcircle: {
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
  fE10circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE1Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 103,
    marginLeft: 52,
    marginRight: 33,
  },
  fE2: {
    width: 30,
    height: 31,
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
    zIndex: 999999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
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
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 571,
  },
  fE9circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE9icon: {
    zIndex: 999999,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE9circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE9downcircle: {
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
  fE9circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE2Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 146,
    marginLeft: 53,
    marginRight: 55,
  },
  fE5: {
    width: 30,
    height: 31,
    marginTop: 15,
  },
  fE5_circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE5_icon: {
    zIndex: 999999,
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
  fE5_circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE7: {
    width: 30,
    height: 31,
    marginLeft: 45,
  },
  fE7circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE7icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE7circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE7downcircle: {
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
  fE7circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE8: {
    width: 30,
    height: 31,
    marginLeft: 109,
    marginTop: 16,
  },
  fE8circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE8icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE8circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE8downcircle: {
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
  fE8circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 294,
    marginRight: 201,
  },
  fE4: {
    width: 30,
    height: 31,
    marginTop: 2,
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
    zIndex: 999999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
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
  fE6: {
    width: 30,
    height: 31,
    marginLeft: 86,
  },
  fE6circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE6icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE6circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE6downcircle: {
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
  fE6circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE4Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 190,
    marginRight: 403,
  },
  fE3: {
    width: 30,
    height: 31,
    marginTop: 144,
    marginLeft: 53,
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
    zIndex: 999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
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
});
