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
export default function FE_CEAFA_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [FE45, setFE45] = useState([]);
  useEffect(() => {
    const Fe45Data = [];
    const FE45Collections = collection(firebase, "FE45");
    const fetchFe45Data = async () => {
      try {
        const q45 = query(
          FE45Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot45 = await getDocs(q45);
        querySnapshot45.forEach((doc) => {
          const data45 = doc.data();
          Fe45Data.push(data45);
          // Use the data as needed
        });
        console.log(Fe45Data);
        setFE45(Fe45Data);
      } catch (error) {}
    };
    fetchFe45Data();
  }, []);

  const [FE46, setFE46] = useState([]);
  useEffect(() => {
    const Fe46Data = [];
    const FE46Collections = collection(firebase, "FE46");
    const fetchFe46Data = async () => {
      try {
        const q46 = query(
          FE46Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot46 = await getDocs(q46);
        querySnapshot46.forEach((doc) => {
          const data46 = doc.data();
          Fe46Data.push(data46);
          // Use the data as needed
        });
        console.log(Fe46Data);
        setFE46(Fe46Data);
      } catch (error) {}
    };
    fetchFe46Data();
  }, []);

  const [FE47, setFE47] = useState([]);
  useEffect(() => {
    const Fe47Data = [];
    const FE47Collections = collection(firebase, "FE47");
    const fetchFe47Data = async () => {
      try {
        const q47 = query(
          FE47Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot47 = await getDocs(q47);
        querySnapshot47.forEach((doc) => {
          const data47 = doc.data();
          Fe47Data.push(data47);
          // Use the data as needed
        });
        console.log(Fe47Data);
        setFE47(Fe47Data);
      } catch (error) {}
    };
    fetchFe47Data();
  }, []);

  const [FE48, setFE48] = useState([]);
  useEffect(() => {
    const Fe48Data = [];
    const FE48Collections = collection(firebase, "FE48");
    const fetchFe48Data = async () => {
      try {
        const q48 = query(
          FE48Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot48 = await getDocs(q48);
        querySnapshot48.forEach((doc) => {
          const data48 = doc.data();
          Fe48Data.push(data48);
          // Use the data as needed
        });
        console.log(Fe48Data);
        setFE48(Fe48Data);
      } catch (error) {}
    };
    fetchFe48Data();
  }, []);

  const [FE49, setFE49] = useState([]);
  useEffect(() => {
    const Fe49Data = [];
    const FE49Collections = collection(firebase, "FE49");
    const fetchFe49Data = async () => {
      try {
        const q49 = query(
          FE49Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot49 = await getDocs(q49);
        querySnapshot49.forEach((doc) => {
          const data49 = doc.data();
          Fe49Data.push(data49);
          // Use the data as needed
        });

        setFE49(Fe49Data);
      } catch (error) {}
    };
    fetchFe49Data();
  }, []);

  const [FE50, setFE50] = useState([]);
  useEffect(() => {
    const Fe50Data = [];
    const FE50Collections = collection(firebase, "FE50");
    const fetchFe50Data = async () => {
      try {
        const q50 = query(
          FE50Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot50 = await getDocs(q50);
        querySnapshot50.forEach((doc) => {
          const data50 = doc.data();
          Fe50Data.push(data50);
          // Use the data as needed
        });

        setFE50(Fe50Data);
      } catch (error) {}
    };
    fetchFe50Data();
  }, []);

  const [FE51, setFE51] = useState([]);
  useEffect(() => {
    const Fe51Data = [];
    const FE51Collections = collection(firebase, "FE51");
    const fetchFe51Data = async () => {
      try {
        const q51 = query(
          FE51Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot51 = await getDocs(q51);
        querySnapshot51.forEach((doc) => {
          const data51 = doc.data();
          Fe51Data.push(data51);
          // Use the data as needed
        });

        setFE51(Fe51Data);
      } catch (error) {}
    };
    fetchFe51Data();
  }, []);

  const [FE52, setFE52] = useState([]);
  useEffect(() => {
    const Fe52Data = [];
    const FE52Collections = collection(firebase, "FE52");
    const fetchFe52Data = async () => {
      try {
        const q52 = query(
          FE52Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot52 = await getDocs(q52);
        querySnapshot52.forEach((doc) => {
          const data52 = doc.data();
          Fe52Data.push(data52);
          // Use the data as needed
        });

        setFE52(Fe52Data);
      } catch (error) {}
    };
    fetchFe52Data();
  }, []);

  const [FE53, setFE53] = useState([]);
  useEffect(() => {
    const Fe53Data = [];
    const FE53Collections = collection(firebase, "FE53");
    const fetchFe53Data = async () => {
      try {
        const q53 = query(
          FE53Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot53 = await getDocs(q53);
        querySnapshot53.forEach((doc) => {
          const data53 = doc.data();
          Fe53Data.push(data53);
          // Use the data as needed
        });

        setFE53(Fe53Data);
      } catch (error) {}
    };
    fetchFe53Data();
  }, []);

  const [FE54, setFE54] = useState([]);
  useEffect(() => {
    const Fe54Data = [];
    const FE54Collections = collection(firebase, "FE54");
    const fetchFe54Data = async () => {
      try {
        const q54 = query(
          FE54Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot54 = await getDocs(q54);
        querySnapshot54.forEach((doc) => {
          const data54 = doc.data();
          Fe54Data.push(data54);
          // Use the data as needed
        });

        setFE54(Fe54Data);
      } catch (error) {}
    };
    fetchFe54Data();
  }, []);

  const [FE55, setFE55] = useState([]);
  useEffect(() => {
    const Fe55Data = [];
    const FE55Collections = collection(firebase, "FE55");
    const fetchFe55Data = async () => {
      try {
        const q55 = query(
          FE55Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot55 = await getDocs(q55);
        querySnapshot55.forEach((doc) => {
          const data55 = doc.data();
          Fe55Data.push(data55);
          // Use the data as needed
        });

        setFE55(Fe55Data);
      } catch (error) {}
    };
    fetchFe55Data();
  }, []);

  const [FE56, setFE56] = useState([]);
  useEffect(() => {
    const Fe56Data = [];
    const FE56Collections = collection(firebase, "FE56");
    const fetchFe56Data = async () => {
      try {
        const q56 = query(
          FE56Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot56 = await getDocs(q56);
        querySnapshot56.forEach((doc) => {
          const data56 = doc.data();
          Fe56Data.push(data56);
          // Use the data as needed
        });

        setFE56(Fe56Data);
      } catch (error) {}
    };
    fetchFe56Data();
  }, []);

  const [FE57, setFE57] = useState([]);
  useEffect(() => {
    const Fe57Data = [];
    const FE57Collections = collection(firebase, "FE57");
    const fetchFe57Data = async () => {
      try {
        const q57 = query(
          FE57Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot57 = await getDocs(q57);
        querySnapshot57.forEach((doc) => {
          const data57 = doc.data();
          Fe57Data.push(data57);
          // Use the data as needed
        });

        setFE57(Fe57Data);
      } catch (error) {}
    };
    fetchFe57Data();
  }, []);

  const [FE58, setFE58] = useState([]);
  useEffect(() => {
    const Fe58Data = [];
    const FE58Collections = collection(firebase, "FE58");
    const fetchFe58Data = async () => {
      try {
        const q58 = query(
          FE58Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot58 = await getDocs(q58);
        querySnapshot58.forEach((doc) => {
          const data58 = doc.data();
          Fe58Data.push(data58);
          // Use the data as needed
        });

        setFE58(Fe58Data);
      } catch (error) {}
    };
    fetchFe58Data();
  }, []);

  const [FE59, setFE59] = useState([]);
  useEffect(() => {
    const Fe59Data = [];
    const FE59Collections = collection(firebase, "FE59");
    const fetchFe59Data = async () => {
      try {
        const q59 = query(
          FE59Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot59 = await getDocs(q59);
        querySnapshot59.forEach((doc) => {
          const data59 = doc.data();
          Fe59Data.push(data59);
          // Use the data as needed
        });

        setFE59(Fe59Data);
      } catch (error) {}
    };
    fetchFe59Data();
  }, []);

  const [FE60, setFE60] = useState([]);
  useEffect(() => {
    const Fe60Data = [];
    const FE60Collections = collection(firebase, "FE60");
    const fetchFe60Data = async () => {
      try {
        const q60 = query(
          FE60Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot60 = await getDocs(q60);
        querySnapshot60.forEach((doc) => {
          const data60 = doc.data();
          Fe60Data.push(data60);
          // Use the data as needed
        });

        setFE60(Fe60Data);
      } catch (error) {}
    };
    fetchFe60Data();
  }, []);

  const [FE61, setFE61] = useState([]);
  useEffect(() => {
    const Fe61Data = [];
    const FE61Collections = collection(firebase, "FE61");
    const fetchFe61Data = async () => {
      try {
        const q61 = query(
          FE61Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot61 = await getDocs(q61);
        querySnapshot61.forEach((doc) => {
          const data61 = doc.data();
          Fe61Data.push(data61);
          // Use the data as needed
        });

        setFE61(Fe61Data);
      } catch (error) {}
    };
    fetchFe61Data();
  }, []);

  const [FE62, setFE62] = useState([]);
  useEffect(() => {
    const Fe62Data = [];
    const FE62Collections = collection(firebase, "FE62");
    const fetchFe62Data = async () => {
      try {
        const q62 = query(
          FE62Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot62 = await getDocs(q62);
        querySnapshot62.forEach((doc) => {
          const data62 = doc.data();
          Fe62Data.push(data62);
          // Use the data as needed
        });

        setFE62(Fe62Data);
      } catch (error) {}
    };
    fetchFe62Data();
  }, []);
  const refreshData = async () => {
    const Fe62Data = [];
    const FE62Collections = collection(firebase, "FE62");
    const fetchFe62Data = async () => {
      try {
        const q62 = query(
          FE62Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot62 = await getDocs(q62);
        querySnapshot62.forEach((doc) => {
          const data62 = doc.data();
          Fe62Data.push(data62);
          // Use the data as needed
        });

        setFE62(Fe62Data);
      } catch (error) {}
    };
    fetchFe62Data();

    const Fe61Data = [];
    const FE61Collections = collection(firebase, "FE61");
    const fetchFe61Data = async () => {
      try {
        const q61 = query(
          FE61Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot61 = await getDocs(q61);
        querySnapshot61.forEach((doc) => {
          const data61 = doc.data();
          Fe61Data.push(data61);
          // Use the data as needed
        });

        setFE61(Fe61Data);
      } catch (error) {}
    };
    fetchFe61Data();
    const Fe60Data = [];
    const FE60Collections = collection(firebase, "FE60");
    const fetchFe60Data = async () => {
      try {
        const q60 = query(
          FE60Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot60 = await getDocs(q60);
        querySnapshot60.forEach((doc) => {
          const data60 = doc.data();
          Fe60Data.push(data60);
          // Use the data as needed
        });

        setFE60(Fe60Data);
      } catch (error) {}
    };
    fetchFe60Data();

    const Fe59Data = [];
    const FE59Collections = collection(firebase, "FE59");
    const fetchFe59Data = async () => {
      try {
        const q59 = query(
          FE59Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot59 = await getDocs(q59);
        querySnapshot59.forEach((doc) => {
          const data59 = doc.data();
          Fe59Data.push(data59);
          // Use the data as needed
        });

        setFE59(Fe59Data);
      } catch (error) {}
    };
    fetchFe59Data();
    const Fe58Data = [];
    const FE58Collections = collection(firebase, "FE58");
    const fetchFe58Data = async () => {
      try {
        const q58 = query(
          FE58Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot58 = await getDocs(q58);
        querySnapshot58.forEach((doc) => {
          const data58 = doc.data();
          Fe58Data.push(data58);
          // Use the data as needed
        });

        setFE58(Fe58Data);
      } catch (error) {}
    };
    fetchFe58Data();

    const Fe57Data = [];
    const FE57Collections = collection(firebase, "FE57");
    const fetchFe57Data = async () => {
      try {
        const q57 = query(
          FE57Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot57 = await getDocs(q57);
        querySnapshot57.forEach((doc) => {
          const data57 = doc.data();
          Fe57Data.push(data57);
          // Use the data as needed
        });

        setFE57(Fe57Data);
      } catch (error) {}
    };
    fetchFe57Data();

    const Fe56Data = [];
    const FE56Collections = collection(firebase, "FE56");
    const fetchFe56Data = async () => {
      try {
        const q56 = query(
          FE56Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot56 = await getDocs(q56);
        querySnapshot56.forEach((doc) => {
          const data56 = doc.data();
          Fe56Data.push(data56);
          // Use the data as needed
        });

        setFE56(Fe56Data);
      } catch (error) {}
    };
    fetchFe56Data();

    const Fe55Data = [];
    const FE55Collections = collection(firebase, "FE55");
    const fetchFe55Data = async () => {
      try {
        const q55 = query(
          FE55Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot55 = await getDocs(q55);
        querySnapshot55.forEach((doc) => {
          const data55 = doc.data();
          Fe55Data.push(data55);
          // Use the data as needed
        });

        setFE55(Fe55Data);
      } catch (error) {}
    };
    fetchFe55Data();

    const Fe54Data = [];
    const FE54Collections = collection(firebase, "FE54");
    const fetchFe54Data = async () => {
      try {
        const q54 = query(
          FE54Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot54 = await getDocs(q54);
        querySnapshot54.forEach((doc) => {
          const data54 = doc.data();
          Fe54Data.push(data54);
          // Use the data as needed
        });

        setFE54(Fe54Data);
      } catch (error) {}
    };
    fetchFe54Data();

    const Fe53Data = [];
    const FE53Collections = collection(firebase, "FE53");
    const fetchFe53Data = async () => {
      try {
        const q53 = query(
          FE53Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot53 = await getDocs(q53);
        querySnapshot53.forEach((doc) => {
          const data53 = doc.data();
          Fe53Data.push(data53);
          // Use the data as needed
        });

        setFE53(Fe53Data);
      } catch (error) {}
    };
    fetchFe53Data();

    const Fe52Data = [];
    const FE52Collections = collection(firebase, "FE52");
    const fetchFe52Data = async () => {
      try {
        const q52 = query(
          FE52Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot52 = await getDocs(q52);
        querySnapshot52.forEach((doc) => {
          const data52 = doc.data();
          Fe52Data.push(data52);
          // Use the data as needed
        });

        setFE52(Fe52Data);
      } catch (error) {}
    };
    fetchFe52Data();

    const Fe51Data = [];
    const FE51Collections = collection(firebase, "FE51");
    const fetchFe51Data = async () => {
      try {
        const q51 = query(
          FE51Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot51 = await getDocs(q51);
        querySnapshot51.forEach((doc) => {
          const data51 = doc.data();
          Fe51Data.push(data51);
          // Use the data as needed
        });

        setFE51(Fe51Data);
      } catch (error) {}
    };
    fetchFe51Data();

    const Fe50Data = [];
    const FE50Collections = collection(firebase, "FE50");
    const fetchFe50Data = async () => {
      try {
        const q50 = query(
          FE50Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot50 = await getDocs(q50);
        querySnapshot50.forEach((doc) => {
          const data50 = doc.data();
          Fe50Data.push(data50);
          // Use the data as needed
        });

        setFE50(Fe50Data);
      } catch (error) {}
    };
    fetchFe50Data();

    const Fe49Data = [];
    const FE49Collections = collection(firebase, "FE49");
    const fetchFe49Data = async () => {
      try {
        const q49 = query(
          FE49Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot49 = await getDocs(q49);
        querySnapshot49.forEach((doc) => {
          const data49 = doc.data();
          Fe49Data.push(data49);
          // Use the data as needed
        });

        setFE49(Fe49Data);
      } catch (error) {}
    };
    fetchFe49Data();

    const Fe48Data = [];
    const FE48Collections = collection(firebase, "FE48");
    const fetchFe48Data = async () => {
      try {
        const q48 = query(
          FE48Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot48 = await getDocs(q48);
        querySnapshot48.forEach((doc) => {
          const data48 = doc.data();
          Fe48Data.push(data48);
          // Use the data as needed
        });
        console.log(Fe48Data);
        setFE48(Fe48Data);
      } catch (error) {}
    };
    fetchFe48Data();

    const Fe47Data = [];
    const FE47Collections = collection(firebase, "FE47");
    const fetchFe47Data = async () => {
      try {
        const q47 = query(
          FE47Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot47 = await getDocs(q47);
        querySnapshot47.forEach((doc) => {
          const data47 = doc.data();
          Fe47Data.push(data47);
          // Use the data as needed
        });
        console.log(Fe47Data);
        setFE47(Fe47Data);
      } catch (error) {}
    };
    fetchFe47Data();

    const Fe46Data = [];
    const FE46Collections = collection(firebase, "FE46");
    const fetchFe46Data = async () => {
      try {
        const q46 = query(
          FE46Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot46 = await getDocs(q46);
        querySnapshot46.forEach((doc) => {
          const data46 = doc.data();
          Fe46Data.push(data46);
          // Use the data as needed
        });
        console.log(Fe46Data);
        setFE46(Fe46Data);
      } catch (error) {}
    };
    fetchFe46Data();

    const Fe45Data = [];
    const FE45Collections = collection(firebase, "FE45");
    const fetchFe45Data = async () => {
      try {
        const q = query(
          FE45Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot45 = await getDocs(q45);
        querySnapshot45.forEach((doc) => {
          const data45 = doc.data();
          Fe45Data.push(data45);
          // Use the data as needed
        });
        console.log(Fe45Data);
        setFE45(Fe45Data);
      } catch (error) {}
    };
    fetchFe45Data();
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
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
          source={require("../../assets/images/CEAFA_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.fE1Row}>
            {FE45.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE1}
                onPress={() => showModal("45")}
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
                              ? "#FFA33C"
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

            {FE46.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE3}
                onPress={() => showModal("46")}
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

            {FE47.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE14}
                onPress={() => showModal("47")}
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
          <View style={styles.fE4Row}>
            {FE48.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE4}
                onPress={() => showModal("48")}
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

            {FE49.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE13}
                onPress={() => showModal("49")}
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
          <View style={styles.fE2Row}>
            {FE50.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE2}
                onPress={() => showModal("50")}
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

            {FE51.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE6}
                onPress={() => showModal("51")}
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

          {FE52.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE15}
              onPress={() => showModal("52")}
            >
              <View style={styles.fE15circleStackStack}>
                <View style={styles.fE15circleStack}>
                  <View
                    style={[
                      styles.fE15circle,
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
                    style={styles.fE15icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE15downcircle,
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
          <View style={styles.fE8Row}>
            {FE53.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE8}
                onPress={() => showModal("53")}
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
            {FE54.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE10}
                onPress={() => showModal("54")}
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
          <View style={styles.fE5Row}>
            {FE55.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE5}
                onPress={() => showModal("55")}
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
            {FE56.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE7}
                onPress={() => showModal("56")}
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
            {FE57.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE9}
                onPress={() => showModal("57")}
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

            {FE58.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE11}
                onPress={() => showModal("58")}
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

            {FE59.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fE12}
                onPress={() => showModal("59")}
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
          </View>
          {FE60.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE16}
              onPress={() => showModal("60")}
            >
              <View style={styles.fE16circleStackStack}>
                <View style={styles.fE16circleStack}>
                  <View
                    style={[
                      styles.fE16circle,
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
                    style={styles.fE16icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE16downcircle,
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

          {FE61.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE17}
              onPress={() => showModal("61")}
            >
              <View style={styles.fE17circleStackStack}>
                <View style={styles.fE17circleStack}>
                  <View
                    style={[
                      styles.fE17circle,
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
                    style={styles.fE17icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE17downcircle,
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
          {FE62.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.fE18}
              onPress={() => showModal("62")}
            >
              <View style={styles.fE18circleStackStack}>
                <View style={styles.fE18circleStack}>
                  <View
                    style={[
                      styles.fE18circle,
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
                    style={styles.fE18icon}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.fE18downcircle,
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
    // padding: 30,
    height: wp("150%"),
  },
  image: {
    width: 762,
    height: 780,
    marginTop: 10,
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 24,
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
  fE3: {
    width: 30,
    height: 31,
    marginLeft: 92,
    marginTop: 39,
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
  fE14: {
    width: 30,
    height: 31,
    marginLeft: 495,
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
    zIndex: 10,
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
  fE1Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 86,
    marginLeft: 29,
    marginRight: 56,
  },
  fE4: {
    width: 30,
    height: 31,
    marginTop: 3,
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
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 398,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
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
  fE4Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 201,
    marginRight: 103,
  },
  fE2: {
    width: 30,
    height: 31,
    marginTop: 5,
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
  fE6: {
    width: 30,
    height: 31,
    marginLeft: 232,
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
  fE2Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 55,
    marginRight: 415,
  },
  fE15: {
    width: 30,
    height: 31,
    marginTop: 38,
    marginLeft: 678,
  },
  fE15circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE15icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE15circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE15downcircle: {
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
  fE15circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE8: {
    width: 30,
    height: 31,
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
  fE10: {
    width: 30,
    height: 31,
    marginLeft: 86,
    marginTop: 16,
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
    zIndex: 10,
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
  fE8Row: {
    height: 47,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 407,
    marginRight: 209,
  },
  fE5: {
    width: 30,
    height: 31,
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
    color: "rgba(35,151,69,1)",
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
  fE7: {
    width: 30,
    height: 31,
    marginLeft: 156,
    marginTop: 1,
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
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 95,
    marginTop: 1,
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
    color: "rgba(35,151,69,1)",
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
  fE11: {
    width: 30,
    height: 31,
    marginLeft: 108,
    marginTop: 1,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
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
  fE12: {
    width: 30,
    height: 31,
    marginLeft: 22,
    marginTop: 1,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
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
  fE5Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 106,
    marginRight: 125,
  },
  fE16: {
    width: 30,
    height: 31,
    marginTop: 39,
    marginLeft: 678,
  },
  fE16circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE16icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE16circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE16downcircle: {
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
  fE16circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE17: {
    width: 30,
    height: 31,
    marginTop: 83,
    marginLeft: 676,
  },
  fE17circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE17icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0,
  },
  fE17circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE17downcircle: {
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
  fE17circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  fE18: {
    width: 30,
    height: 31,
    marginTop: 108,
    marginLeft: 676,
  },
  fE18circle: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  fE18icon: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(35,151,69,1)",
    fontSize: 30,
    left: 0,
  },
  fE18circleStack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  fE18downcircle: {
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
  fE18circleStackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
});
