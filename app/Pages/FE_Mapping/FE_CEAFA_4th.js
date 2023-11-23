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
export default function FE_CEAFA_4th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [FE82, setFE82] = useState([]);
  useEffect(() => {
    const Fe82Data = [];
    const FE82Collections = collection(firebase, "FE82");
    const fetchFe82Data = async () => {
      try {
        const q82 = query(
          FE82Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot82 = await getDocs(q82);
        querySnapshot82.forEach((doc) => {
          const data82 = doc.data();
          Fe82Data.push(data82);
          // Use the data as needed
        });

        setFE82(Fe82Data);
      } catch (error) {}
    };
    fetchFe82Data();
  }, []);

  const [FE83, setFE83] = useState([]);
  useEffect(() => {
    const Fe83Data = [];
    const FE83Collections = collection(firebase, "FE83");
    const fetchFe83Data = async () => {
      try {
        const q83 = query(
          FE83Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot83 = await getDocs(q83);
        querySnapshot83.forEach((doc) => {
          const data83 = doc.data();
          Fe83Data.push(data83);
          // Use the data as needed
        });

        setFE83(Fe83Data);
      } catch (error) {}
    };
    fetchFe83Data();
  }, []);

  const [FE84, setFE84] = useState([]);
  useEffect(() => {
    const Fe84Data = [];
    const FE84Collections = collection(firebase, "FE84");
    const fetchFe84Data = async () => {
      try {
        const q84 = query(
          FE84Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot84 = await getDocs(q84);
        querySnapshot84.forEach((doc) => {
          const data84 = doc.data();
          Fe84Data.push(data84);
          // Use the data as needed
        });

        setFE84(Fe84Data);
      } catch (error) {}
    };
    fetchFe84Data();
  }, []);

  const [FE85, setFE85] = useState([]);
  useEffect(() => {
    const Fe85Data = [];
    const FE85Collections = collection(firebase, "FE85");
    const fetchFe85Data = async () => {
      try {
        const q85 = query(
          FE85Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot85 = await getDocs(q85);
        querySnapshot85.forEach((doc) => {
          const data85 = doc.data();
          Fe85Data.push(data85);
          // Use the data as needed
        });

        setFE85(Fe85Data);
      } catch (error) {}
    };
    fetchFe85Data();
  }, []);

  const [FE86, setFE86] = useState([]);
  useEffect(() => {
    const Fe86Data = [];
    const FE86Collections = collection(firebase, "FE86");
    const fetchFe86Data = async () => {
      try {
        const q86 = query(
          FE86Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot86 = await getDocs(q86);
        querySnapshot86.forEach((doc) => {
          const data86 = doc.data();
          Fe86Data.push(data86);
          // Use the data as needed
        });

        setFE86(Fe86Data);
      } catch (error) {}
    };
    fetchFe86Data();
  }, []);
  const [FE87, setFE87] = useState([]);
  useEffect(() => {
    const Fe87Data = [];
    const FE87Collections = collection(firebase, "FE87");
    const fetchFe87Data = async () => {
      try {
        const q87 = query(
          FE87Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot87 = await getDocs(q87);
        querySnapshot87.forEach((doc) => {
          const data87 = doc.data();
          Fe87Data.push(data87);
          // Use the data as needed
        });

        setFE87(Fe87Data);
      } catch (error) {}
    };
    fetchFe87Data();
  }, []);

  const [FE88, setFE88] = useState([]);
  useEffect(() => {
    const Fe88Data = [];
    const FE88Collections = collection(firebase, "FE88");
    const fetchFe88Data = async () => {
      try {
        const q88 = query(
          FE88Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot88 = await getDocs(q88);
        querySnapshot88.forEach((doc) => {
          const data88 = doc.data();
          Fe88Data.push(data88);
          // Use the data as needed
        });

        setFE88(Fe88Data);
      } catch (error) {}
    };
    fetchFe88Data();
  }, []);
  const [FE89, setFE89] = useState([]);
  useEffect(() => {
    const Fe89Data = [];
    const FE89Collections = collection(firebase, "FE89");
    const fetchFe89Data = async () => {
      try {
        const q89 = query(
          FE89Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot89 = await getDocs(q89);
        querySnapshot89.forEach((doc) => {
          const data89 = doc.data();
          Fe89Data.push(data89);
          // Use the data as needed
        });

        setFE89(Fe89Data);
      } catch (error) {}
    };
    fetchFe89Data();
  }, []);

  const [FE90, setFE90] = useState([]);
  useEffect(() => {
    const Fe90Data = [];
    const FE90Collections = collection(firebase, "FE90");
    const fetchFe90Data = async () => {
      try {
        const q90 = query(
          FE90Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot90 = await getDocs(q90);
        querySnapshot90.forEach((doc) => {
          const data90 = doc.data();
          Fe90Data.push(data90);
          // Use the data as needed
        });

        setFE90(Fe90Data);
      } catch (error) {}
    };
    fetchFe90Data();
  }, []);

  const [FE91, setFE91] = useState([]);
  useEffect(() => {
    const Fe91Data = [];
    const FE91Collections = collection(firebase, "FE91");
    const fetchFe91Data = async () => {
      try {
        const q91 = query(
          FE91Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot91 = await getDocs(q91);
        querySnapshot91.forEach((doc) => {
          const data91 = doc.data();
          Fe91Data.push(data91);
          // Use the data as needed
        });

        setFE91(Fe91Data);
      } catch (error) {}
    };
    fetchFe91Data();
  }, []);
  const [FE92, setFE92] = useState([]);
  useEffect(() => {
    const Fe92Data = [];
    const FE92Collections = collection(firebase, "FE92");
    const fetchFe92Data = async () => {
      try {
        const q92 = query(
          FE92Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot92 = await getDocs(q92);
        querySnapshot92.forEach((doc) => {
          const data92 = doc.data();
          Fe92Data.push(data92);
          // Use the data as needed
        });

        setFE92(Fe92Data);
      } catch (error) {}
    };
    fetchFe92Data();
  }, []);
  const [FE93, setFE93] = useState([]);
  useEffect(() => {
    const Fe93Data = [];
    const FE93Collections = collection(firebase, "FE93");
    const fetchFe93Data = async () => {
      try {
        const q93 = query(
          FE93Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot93 = await getDocs(q93);
        querySnapshot93.forEach((doc) => {
          const data93 = doc.data();
          Fe93Data.push(data93);
          // Use the data as needed
        });

        setFE93(Fe93Data);
      } catch (error) {}
    };
    fetchFe93Data();
  }, []);

  const [FE94, setFE94] = useState([]);
  useEffect(() => {
    const Fe94Data = [];
    const FE94Collections = collection(firebase, "FE94");
    const fetchFe94Data = async () => {
      try {
        const q94 = query(
          FE94Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot94 = await getDocs(q94);
        querySnapshot94.forEach((doc) => {
          const data94 = doc.data();
          Fe94Data.push(data94);
          // Use the data as needed
        });

        setFE94(Fe94Data);
      } catch (error) {}
    };
    fetchFe94Data();
  }, []);

  const [FE95, setFE95] = useState([]);
  useEffect(() => {
    const Fe95Data = [];
    const FE95Collections = collection(firebase, "FE95");
    const fetchFe95Data = async () => {
      try {
        const q95 = query(
          FE95Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot95 = await getDocs(q95);
        querySnapshot95.forEach((doc) => {
          const data95 = doc.data();
          Fe95Data.push(data95);
          // Use the data as needed
        });

        setFE95(Fe95Data);
      } catch (error) {}
    };
    fetchFe95Data();
  }, []);

  const refreshData = async () => {
    const Fe95Data = [];
    const FE95Collections = collection(firebase, "FE95");
    const fetchFe95Data = async () => {
      try {
        const q95 = query(
          FE95Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot95 = await getDocs(q95);
        querySnapshot95.forEach((doc) => {
          const data95 = doc.data();
          Fe95Data.push(data95);
          // Use the data as needed
        });

        setFE95(Fe95Data);
      } catch (error) {}
    };
    fetchFe95Data();
    const Fe94Data = [];
    const FE94Collections = collection(firebase, "FE94");
    const fetchFe94Data = async () => {
      try {
        const q94 = query(
          FE94Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot94 = await getDocs(q94);
        querySnapshot94.forEach((doc) => {
          const data94 = doc.data();
          Fe94Data.push(data94);
          // Use the data as needed
        });

        setFE94(Fe94Data);
      } catch (error) {}
    };
    fetchFe94Data();
    const Fe93Data = [];
    const FE93Collections = collection(firebase, "FE93");
    const fetchFe93Data = async () => {
      try {
        const q93 = query(
          FE93Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot93 = await getDocs(q93);
        querySnapshot93.forEach((doc) => {
          const data93 = doc.data();
          Fe93Data.push(data93);
          // Use the data as needed
        });

        setFE93(Fe93Data);
      } catch (error) {}
    };
    fetchFe93Data();
    const Fe92Data = [];
    const FE92Collections = collection(firebase, "FE92");
    const fetchFe92Data = async () => {
      try {
        const q92 = query(
          FE92Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot92 = await getDocs(q92);
        querySnapshot92.forEach((doc) => {
          const data92 = doc.data();
          Fe92Data.push(data92);
          // Use the data as needed
        });

        setFE92(Fe92Data);
      } catch (error) {}
    };
    fetchFe92Data();
    const Fe91Data = [];
    const FE91Collections = collection(firebase, "FE91");
    const fetchFe91Data = async () => {
      try {
        const q91 = query(
          FE91Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot91 = await getDocs(q91);
        querySnapshot91.forEach((doc) => {
          const data91 = doc.data();
          Fe91Data.push(data91);
          // Use the data as needed
        });

        setFE91(Fe91Data);
      } catch (error) {}
    };
    fetchFe91Data();
    const Fe90Data = [];
    const FE90Collections = collection(firebase, "FE90");
    const fetchFe90Data = async () => {
      try {
        const q90 = query(
          FE90Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot90 = await getDocs(q90);
        querySnapshot90.forEach((doc) => {
          const data90 = doc.data();
          Fe90Data.push(data90);
          // Use the data as needed
        });

        setFE90(Fe90Data);
      } catch (error) {}
    };
    fetchFe90Data();
    const Fe89Data = [];
    const FE89Collections = collection(firebase, "FE89");
    const fetchFe89Data = async () => {
      try {
        const q89 = query(
          FE89Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot89 = await getDocs(q89);
        querySnapshot89.forEach((doc) => {
          const data89 = doc.data();
          Fe89Data.push(data89);
          // Use the data as needed
        });

        setFE89(Fe89Data);
      } catch (error) {}
    };
    fetchFe89Data();
    const Fe88Data = [];
    const FE88Collections = collection(firebase, "FE88");
    const fetchFe88Data = async () => {
      try {
        const q88 = query(
          FE88Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot88 = await getDocs(q88);
        querySnapshot88.forEach((doc) => {
          const data88 = doc.data();
          Fe88Data.push(data88);
          // Use the data as needed
        });

        setFE88(Fe88Data);
      } catch (error) {}
    };
    fetchFe88Data();
    const Fe87Data = [];
    const FE87Collections = collection(firebase, "FE87");
    const fetchFe87Data = async () => {
      try {
        const q87 = query(
          FE87Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot87 = await getDocs(q87);
        querySnapshot87.forEach((doc) => {
          const data87 = doc.data();
          Fe87Data.push(data87);
          // Use the data as needed
        });

        setFE87(Fe87Data);
      } catch (error) {}
    };
    fetchFe87Data();
    const Fe86Data = [];
    const FE86Collections = collection(firebase, "FE86");
    const fetchFe86Data = async () => {
      try {
        const q86 = query(
          FE86Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot86 = await getDocs(q86);
        querySnapshot86.forEach((doc) => {
          const data86 = doc.data();
          Fe86Data.push(data86);
          // Use the data as needed
        });

        setFE86(Fe86Data);
      } catch (error) {}
    };
    fetchFe86Data();
    const Fe85Data = [];
    const FE85Collections = collection(firebase, "FE85");
    const fetchFe85Data = async () => {
      try {
        const q85 = query(
          FE85Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot85 = await getDocs(q85);
        querySnapshot85.forEach((doc) => {
          const data85 = doc.data();
          Fe85Data.push(data85);
          // Use the data as needed
        });

        setFE85(Fe85Data);
      } catch (error) {}
    };
    fetchFe85Data();
    const Fe84Data = [];
    const FE84Collections = collection(firebase, "FE84");
    const fetchFe84Data = async () => {
      try {
        const q84 = query(
          FE84Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot84 = await getDocs(q84);
        querySnapshot84.forEach((doc) => {
          const data84 = doc.data();
          Fe84Data.push(data84);
          // Use the data as needed
        });

        setFE84(Fe84Data);
      } catch (error) {}
    };
    fetchFe84Data();
    const Fe83Data = [];
    const FE83Collections = collection(firebase, "FE83");
    const fetchFe83Data = async () => {
      try {
        const q83 = query(
          FE83Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot83 = await getDocs(q83);
        querySnapshot83.forEach((doc) => {
          const data83 = doc.data();
          Fe83Data.push(data83);
          // Use the data as needed
        });

        setFE83(Fe83Data);
      } catch (error) {}
    };
    fetchFe83Data();
    const Fe82Data = [];
    const FE82Collections = collection(firebase, "FE82");
    const fetchFe82Data = async () => {
      try {
        const q82 = query(
          FE82Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot82 = await getDocs(q82);
        querySnapshot82.forEach((doc) => {
          const data82 = doc.data();
          Fe82Data.push(data82);
          // Use the data as needed
        });

        setFE82(Fe82Data);
      } catch (error) {}
    };
    fetchFe82Data();
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
          source={require("../../assets/images/CEAFA_4th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {FE82.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE1}
              onPress={() => showModal("82")}
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
          <View style={styles.fE2Row}>
            {FE83.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("83")}
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
            {FE84.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE8}
                onPress={() => showModal("84")}
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

            {FE85.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE14}
                onPress={() => showModal("85")}
              >
                <View style={styles.fE14circleStackStack}>
                  <View style={styles.fE14circleStack}>
                    <View
                      style={[
                        styles.fE14circle,
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
                      style={styles.fE14icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE14downcircle,
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
          <View style={styles.fE3ColumnRow}>
            <View style={styles.fE3Column}>
              {FE86.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE3}
                  onPress={() => showModal("86")}
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
              {FE87.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.fE4}
                  onPress={() => showModal("87")}
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
            {FE88.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("88")}
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
            {FE89.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("89")}
              >
                <View style={styles.fE13circleStackStack}>
                  <View style={styles.fE13circleStack}>
                    <View
                      style={[
                        styles.fE13circle,
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
                      style={styles.fE13icon}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.fE13downcircle,
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
          <View style={styles.fE7Row}>
            {FE90.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE7}
                onPress={() => showModal("90")}
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
            {FE91.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE10}
                onPress={() => showModal("91")}
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
          {FE92.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE12}
              onPress={() => showModal("92")}
            >
              <View style={styles.fE12circleStackStack}>
                <View style={styles.fE12circleStack}>
                  <View
                    style={[
                      styles.fE12circle,
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
                    style={styles.fE12icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE12downcircle,
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
          {FE93.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE11}
              onPress={() => showModal("93")}
            >
              <View style={styles.fE11circleStackStack}>
                <View style={styles.fE11circleStack}>
                  <View
                    style={[
                      styles.fE11circle,
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
                    style={styles.fE11icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE11downcircle,
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
          {FE94.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE5}
              onPress={() => showModal("94")}
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
          {FE95.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE6}
              onPress={() => showModal("95")}
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
    width: 770,
    height: 765,
    marginTop: 20,
    marginLeft: 255,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 85,
    marginLeft: 68,
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
  fE2: {
    width: 30,
    height: 31,
    marginTop: 38,
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
  fE8: {
    width: 30,
    height: 31,
    marginLeft: 170,
    marginTop: 11,
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
    zIndex: 9999,
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
  fE14: {
    width: 30,
    height: 31,
    marginLeft: 378,
  },
  fE14circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE14icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE14circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE14downcircle: {
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
  fE14circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE2Row: {
    height: 69,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 66,
    marginRight: 66,
  },
  fE3: {
    width: 30,
    height: 31,
    backgroundColor: "#fff",
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
  fE4: {
    width: 30,
    height: 31,
    marginTop: 16,
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
  fE3Column: {
    width: 30,
  },
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 387,
    marginTop: 43,
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
    zIndex: 9999,
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
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 162,
    marginTop: 28,
  },
  fE13circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE13icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE13circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE13downcircle: {
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
  fE13circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE3ColumnRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 81,
    marginLeft: 66,
    marginRight: 65,
  },
  fE7: {
    width: 30,
    height: 31,
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
    zIndex: 9999,
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
  fE10: {
    width: 30,
    height: 31,
    marginLeft: 271,
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
    zIndex: 9999,
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
  fE7Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 218,
    marginRight: 221,
  },
  fE12: {
    width: 30,
    height: 31,
    marginTop: 7,
    marginLeft: 675,
  },
  fE12circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE12icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE12circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE12downcircle: {
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
  fE12circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE11: {
    width: 30,
    height: 31,
    marginTop: 122,
    marginLeft: 672,
  },
  fE11circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE11icon: {
    zIndex: 9999,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE11circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE11downcircle: {
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
  fE11circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE5: {
    width: 30,
    height: 31,
    marginTop: 13,
    marginLeft: 66,
  },
  fE5_circle: {
    top: 6,
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
  fE6: {
    width: 30,
    height: 31,
    marginTop: 87,
    marginLeft: 66,
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
    zIndex: 9999,
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
});
