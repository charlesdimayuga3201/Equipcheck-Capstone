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
export default function FE_CEAFA_2nd({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  console.log(formattedToday);

  const [FE63, setFE63] = useState([]);
  useEffect(() => {
    const Fe63Data = [];
    const FE63Collections = collection(firebase, "FE63");
    const fetchFe63Data = async () => {
      try {
        const q63 = query(
          FE63Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot63 = await getDocs(q63);
        querySnapshot63.forEach((doc) => {
          const data63 = doc.data();
          Fe63Data.push(data63);
          // Use the data as needed
        });

        setFE63(Fe63Data);
      } catch (error) {}
    };
    fetchFe63Data();
  }, []);

  const [FE64, setFE64] = useState([]);
  useEffect(() => {
    const Fe64Data = [];
    const FE64Collections = collection(firebase, "FE64");
    const fetchFe64Data = async () => {
      try {
        const q64 = query(
          FE64Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot64 = await getDocs(q64);
        querySnapshot64.forEach((doc) => {
          const data64 = doc.data();
          Fe64Data.push(data64);
          // Use the data as needed
        });

        setFE64(Fe64Data);
      } catch (error) {}
    };
    fetchFe64Data();
  }, []);

  const [FE65, setFE65] = useState([]);
  useEffect(() => {
    const Fe65Data = [];
    const FE65Collections = collection(firebase, "FE65");
    const fetchFe65Data = async () => {
      try {
        const q65 = query(
          FE65Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot65 = await getDocs(q65);
        querySnapshot65.forEach((doc) => {
          const data65 = doc.data();
          Fe65Data.push(data65);
          // Use the data as needed
        });

        setFE65(Fe65Data);
      } catch (error) {}
    };
    fetchFe65Data();
  }, []);

  const [FE66, setFE66] = useState([]);
  useEffect(() => {
    const Fe66Data = [];
    const FE66Collections = collection(firebase, "FE66");
    const fetchFe66Data = async () => {
      try {
        const q66 = query(
          FE66Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot66 = await getDocs(q66);
        querySnapshot66.forEach((doc) => {
          const data66 = doc.data();
          Fe66Data.push(data66);
          // Use the data as needed
        });

        setFE66(Fe66Data);
      } catch (error) {}
    };
    fetchFe66Data();
  }, []);

  const [FE67, setFE67] = useState([]);
  useEffect(() => {
    const Fe67Data = [];
    const FE67Collections = collection(firebase, "FE67");
    const fetchFe67Data = async () => {
      try {
        const q67 = query(
          FE67Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot67 = await getDocs(q67);
        querySnapshot67.forEach((doc) => {
          const data67 = doc.data();
          Fe67Data.push(data67);
          // Use the data as needed
        });

        setFE67(Fe67Data);
      } catch (error) {}
    };
    fetchFe67Data();
  }, []);

  const [FE68, setFE68] = useState([]);
  useEffect(() => {
    const Fe68Data = [];
    const FE68Collections = collection(firebase, "FE68");
    const fetchFe68Data = async () => {
      try {
        const q68 = query(
          FE68Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot68 = await getDocs(q68);
        querySnapshot68.forEach((doc) => {
          const data68 = doc.data();
          Fe68Data.push(data68);
          // Use the data as needed
        });

        setFE68(Fe68Data);
      } catch (error) {}
    };
    fetchFe68Data();
  }, []);

  const [FE69, setFE69] = useState([]);
  useEffect(() => {
    const Fe69Data = [];
    const FE69Collections = collection(firebase, "FE69");
    const fetchFe69Data = async () => {
      try {
        const q69 = query(
          FE69Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot69 = await getDocs(q69);
        querySnapshot69.forEach((doc) => {
          const data69 = doc.data();
          Fe69Data.push(data69);
          // Use the data as needed
        });

        setFE69(Fe69Data);
      } catch (error) {}
    };
    fetchFe69Data();
  }, []);

  const [FE70, setFE70] = useState([]);
  useEffect(() => {
    const Fe70Data = [];
    const FE70Collections = collection(firebase, "FE70");
    const fetchFe70Data = async () => {
      try {
        const q70 = query(
          FE70Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot70 = await getDocs(q70);
        querySnapshot70.forEach((doc) => {
          const data70 = doc.data();
          Fe70Data.push(data70);
          // Use the data as needed
        });

        setFE70(Fe70Data);
      } catch (error) {}
    };
    fetchFe70Data();
  }, []);

  const [FE71, setFE71] = useState([]);
  useEffect(() => {
    const Fe71Data = [];
    const FE71Collections = collection(firebase, "FE71");
    const fetchFe71Data = async () => {
      try {
        const q71 = query(
          FE71Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot71 = await getDocs(q71);
        querySnapshot71.forEach((doc) => {
          const data71 = doc.data();
          Fe71Data.push(data71);
          // Use the data as needed
        });

        setFE71(Fe71Data);
      } catch (error) {}
    };
    fetchFe71Data();
  }, []);
  const refreshData = async () => {
    const Fe71Data = [];
    const FE71Collections = collection(firebase, "FE71");
    const fetchFe71Data = async () => {
      try {
        const q71 = query(
          FE71Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot71 = await getDocs(q71);
        querySnapshot71.forEach((doc) => {
          const data71 = doc.data();
          Fe71Data.push(data71);
          // Use the data as needed
        });

        setFE71(Fe71Data);
      } catch (error) {}
    };
    fetchFe71Data();
    const Fe70Data = [];
    const FE70Collections = collection(firebase, "FE70");
    const fetchFe70Data = async () => {
      try {
        const q70 = query(
          FE70Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot70 = await getDocs(q70);
        querySnapshot70.forEach((doc) => {
          const data70 = doc.data();
          Fe70Data.push(data70);
          // Use the data as needed
        });

        setFE70(Fe70Data);
      } catch (error) {}
    };
    fetchFe70Data();
    const Fe69Data = [];
    const FE69Collections = collection(firebase, "FE69");
    const fetchFe69Data = async () => {
      try {
        const q69 = query(
          FE69Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot69 = await getDocs(q69);
        querySnapshot69.forEach((doc) => {
          const data69 = doc.data();
          Fe69Data.push(data69);
          // Use the data as needed
        });

        setFE69(Fe69Data);
      } catch (error) {}
    };
    fetchFe69Data();
    const Fe68Data = [];
    const FE68Collections = collection(firebase, "FE68");
    const fetchFe68Data = async () => {
      try {
        const q68 = query(
          FE68Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot68 = await getDocs(q68);
        querySnapshot68.forEach((doc) => {
          const data68 = doc.data();
          Fe68Data.push(data68);
          // Use the data as needed
        });

        setFE68(Fe68Data);
      } catch (error) {}
    };
    fetchFe68Data();
    const Fe67Data = [];
    const FE67Collections = collection(firebase, "FE67");
    const fetchFe67Data = async () => {
      try {
        const q67 = query(
          FE67Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot67 = await getDocs(q67);
        querySnapshot67.forEach((doc) => {
          const data67 = doc.data();
          Fe67Data.push(data67);
          // Use the data as needed
        });

        setFE67(Fe67Data);
      } catch (error) {}
    };
    fetchFe67Data();
    const Fe66Data = [];
    const FE66Collections = collection(firebase, "FE66");
    const fetchFe66Data = async () => {
      try {
        const q66 = query(
          FE66Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot66 = await getDocs(q66);
        querySnapshot66.forEach((doc) => {
          const data66 = doc.data();
          Fe66Data.push(data66);
          // Use the data as needed
        });

        setFE66(Fe66Data);
      } catch (error) {}
    };
    fetchFe66Data();
    const Fe65Data = [];
    const FE65Collections = collection(firebase, "FE65");
    const fetchFe65Data = async () => {
      try {
        const q65 = query(
          FE65Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot65 = await getDocs(q65);
        querySnapshot65.forEach((doc) => {
          const data65 = doc.data();
          Fe65Data.push(data65);
          // Use the data as needed
        });

        setFE65(Fe65Data);
      } catch (error) {}
    };
    fetchFe65Data();

    const Fe64Data = [];
    const FE64Collections = collection(firebase, "FE64");
    const fetchFe64Data = async () => {
      try {
        const q64 = query(
          FE64Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot64 = await getDocs(q64);
        querySnapshot64.forEach((doc) => {
          const data64 = doc.data();
          Fe64Data.push(data64);
          // Use the data as needed
        });

        setFE64(Fe64Data);
      } catch (error) {}
    };
    fetchFe64Data();

    const Fe63Data = [];
    const FE63Collections = collection(firebase, "FE63");
    const fetchFe63Data = async () => {
      try {
        const q63 = query(
          FE63Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot63 = await getDocs(q63);
        querySnapshot63.forEach((doc) => {
          const data63 = doc.data();
          Fe63Data.push(data63);
          // Use the data as needed
        });

        setFE63(Fe63Data);
      } catch (error) {}
    };
    fetchFe63Data();
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", left: wp("4%"), bottom: wp("2%") }}>
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
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../../assets/images/CEAFA_2nd.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.fE6Row}>
              {FE63.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE6}
                  onPress={() => showModal("63")}
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

              {FE64.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE9}
                  onPress={() => showModal("64")}
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
            </View>
            <View style={styles.fE2Row}>
              {FE65.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE2}
                  onPress={() => showModal("65")}
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

              {FE66.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE4}
                  onPress={() => showModal("66")}
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
            <View style={styles.fE3Row}>
              {FE67.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE3}
                  onPress={() => showModal("67")}
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

              {FE68.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE5}
                  onPress={() => showModal("68")}
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
            {FE69.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("69")}
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
          </ImageBackground>
          {FE70.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE7}
              onPress={() => showModal("70")}
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
          {FE71.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE8}
              onPress={() => showModal("71")}
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
    right: hp("9%"),
  },
  image: {
    top: 2,
    left: 0,
    width: 757,
    height: 773,
    position: "absolute",
  },
  image_imageStyle: {},
  fE6: {
    width: 30,
    height: 31,
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
    color: "rgba(225,47,35,1)",
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
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 158,
    marginTop: 6,
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
    zIndex: 10,
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
  fE6Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 117,
    marginLeft: 319,
    marginRight: 220,
  },
  fE2: {
    width: 30,
    height: 31,
    marginTop: 16,
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
    zIndex: 10,
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
  fE4: {
    width: 30,
    height: 31,
    marginLeft: 107,
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
    zIndex: 10,
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
  fE2Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 211,
    marginLeft: 296,
    marginRight: 294,
  },
  fE3: {
    width: 30,
    height: 31,
    marginTop: 4,
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
    zIndex: 10,
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
  fE5: {
    width: 30,
    height: 31,
    marginLeft: 184,
  },
  fE5_circle: {
    top: 8,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE5_icon: {
    zIndex: 10,
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
  fE3Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 314,
    marginRight: 199,
  },
  fE1: {
    width: 30,
    height: 31,
    marginLeft: 86,
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
    zIndex: 10,
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
  fE7: {
    top: 1,
    left: 313,
    width: 30,
    height: 31,
    position: "absolute",
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
    color: "rgba(225,47,35,1)",
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
    top: 0,
    left: 342,
    width: 30,
    height: 31,
    position: "absolute",
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
  imageStack: {
    width: 757,
    height: 775,
    marginTop: 8,
    marginLeft: 337,
  },
});
