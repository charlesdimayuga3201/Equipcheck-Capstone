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
export default function S_CIT_3rd({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [S41, setS41] = useState([]);
  useEffect(() => {
    const S41Data = [];
    const S41Collections = collection(firebase, "S41");
    const fetchS41Data = async () => {
      try {
        const q41 = query(
          S41Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot41 = await getDocs(q41);
        querySnapshot41.forEach((doc) => {
          const data41 = doc.data();
          S41Data.push(data41);
        });

        setS41(S41Data);
      } catch (error) {
        console.error("Error fetching S41:", error);
      }
    };
    fetchS41Data();
  }, []);

  const [S42, setS42] = useState([]);
  useEffect(() => {
    const S42Data = [];
    const S42Collections = collection(firebase, "S42");
    const fetchS42Data = async () => {
      try {
        const q42 = query(
          S42Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot42 = await getDocs(q42);
        querySnapshot42.forEach((doc) => {
          const data42 = doc.data();
          S42Data.push(data42);
        });

        setS42(S42Data);
      } catch (error) {
        console.error("Error fetching S42:", error);
      }
    };
    fetchS42Data();
  }, []);

  const [S43, setS43] = useState([]);
  useEffect(() => {
    const S43Data = [];
    const S43Collections = collection(firebase, "S43");
    const fetchS43Data = async () => {
      try {
        const q43 = query(
          S43Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot43 = await getDocs(q43);
        querySnapshot43.forEach((doc) => {
          const data43 = doc.data();
          S43Data.push(data43);
        });

        setS43(S43Data);
      } catch (error) {
        console.error("Error fetching S43:", error);
      }
    };
    fetchS43Data();
  }, []);

  const [S44, setS44] = useState([]);
  useEffect(() => {
    const S44Data = [];
    const S44Collections = collection(firebase, "S44");
    const fetchS44Data = async () => {
      try {
        const q44 = query(
          S44Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot44 = await getDocs(q44);
        querySnapshot44.forEach((doc) => {
          const data44 = doc.data();
          S44Data.push(data44);
        });

        setS44(S44Data);
      } catch (error) {
        console.error("Error fetching S44:", error);
      }
    };
    fetchS44Data();
  }, []);

  const [S45, setS45] = useState([]);
  useEffect(() => {
    const S45Data = [];
    const S45Collections = collection(firebase, "S45");
    const fetchS45Data = async () => {
      try {
        const q45 = query(
          S45Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot45 = await getDocs(q45);
        querySnapshot45.forEach((doc) => {
          const data45 = doc.data();
          S45Data.push(data45);
        });

        setS45(S45Data);
      } catch (error) {
        console.error("Error fetching S45:", error);
      }
    };
    fetchS45Data();
  }, []);
  const [S46, setS46] = useState([]);
  useEffect(() => {
    const S46Data = [];
    const S46Collections = collection(firebase, "S46");
    const fetchS46Data = async () => {
      try {
        const q46 = query(
          S46Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot46 = await getDocs(q46);
        querySnapshot46.forEach((doc) => {
          const data46 = doc.data();
          S46Data.push(data46);
        });

        setS46(S46Data);
      } catch (error) {
        console.error("Error fetching S46:", error);
      }
    };
    fetchS46Data();
  }, []);
  const [S47, setS47] = useState([]);
  useEffect(() => {
    const S47Data = [];
    const S47Collections = collection(firebase, "S47");
    const fetchS47Data = async () => {
      try {
        const q47 = query(
          S47Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot47 = await getDocs(q47);
        querySnapshot47.forEach((doc) => {
          const data47 = doc.data();
          S47Data.push(data47);
        });

        setS47(S47Data);
      } catch (error) {
        console.error("Error fetching S47:", error);
      }
    };
    fetchS47Data();
  }, []);
  const [S48, setS48] = useState([]);
  useEffect(() => {
    const S48Data = [];
    const S48Collections = collection(firebase, "S48");
    const fetchS48Data = async () => {
      try {
        const q48 = query(
          S48Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot48 = await getDocs(q48);
        querySnapshot48.forEach((doc) => {
          const data48 = doc.data();
          S48Data.push(data48);
        });

        setS48(S48Data);
      } catch (error) {
        console.error("Error fetching S48:", error);
      }
    };
    fetchS48Data();
  }, []);
  const [S49, setS49] = useState([]);
  useEffect(() => {
    const S49Data = [];
    const S49Collections = collection(firebase, "S49");
    const fetchS49Data = async () => {
      try {
        const q49 = query(
          S49Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot49 = await getDocs(q49);
        querySnapshot49.forEach((doc) => {
          const data49 = doc.data();
          S49Data.push(data49);
        });

        setS49(S49Data);
      } catch (error) {
        console.error("Error fetching S49:", error);
      }
    };
    fetchS49Data();
  }, []);
  const [S50, setS50] = useState([]);
  useEffect(() => {
    const S50Data = [];
    const S50Collections = collection(firebase, "S50");
    const fetchS50Data = async () => {
      try {
        const q50 = query(
          S50Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot50 = await getDocs(q50);
        querySnapshot50.forEach((doc) => {
          const data50 = doc.data();
          S50Data.push(data50);
        });

        setS50(S50Data);
      } catch (error) {
        console.error("Error fetching S50:", error);
      }
    };
    fetchS50Data();
  }, []);
  const [S51, setS51] = useState([]);
  useEffect(() => {
    const S51Data = [];
    const S51Collections = collection(firebase, "S51");
    const fetchS51Data = async () => {
      try {
        const q51 = query(
          S51Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot51 = await getDocs(q51);
        querySnapshot51.forEach((doc) => {
          const data51 = doc.data();
          S51Data.push(data51);
        });

        setS51(S51Data);
      } catch (error) {
        console.error("Error fetching S51:", error);
      }
    };
    fetchS51Data();
  }, []);
  const [S52, setS52] = useState([]);
  useEffect(() => {
    const S52Data = [];
    const S52Collections = collection(firebase, "S52");
    const fetchS52Data = async () => {
      try {
        const q52 = query(
          S52Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot52 = await getDocs(q52);
        querySnapshot52.forEach((doc) => {
          const data52 = doc.data();
          S52Data.push(data52);
        });

        setS52(S52Data);
      } catch (error) {
        console.error("Error fetching S52:", error);
      }
    };
    fetchS52Data();
  }, []);
  const [S53, setS53] = useState([]);
  useEffect(() => {
    const S53Data = [];
    const S53Collections = collection(firebase, "S53");
    const fetchS53Data = async () => {
      try {
        const q53 = query(
          S53Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot53 = await getDocs(q53);
        querySnapshot53.forEach((doc) => {
          const data53 = doc.data();
          S53Data.push(data53);
        });

        setS53(S53Data);
      } catch (error) {
        console.error("Error fetching S53:", error);
      }
    };
    fetchS53Data();
  }, []);
  const [S54, setS54] = useState([]);
  useEffect(() => {
    const S54Data = [];
    const S54Collections = collection(firebase, "S54");
    const fetchS54Data = async () => {
      try {
        const q54 = query(
          S54Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot54 = await getDocs(q54);
        querySnapshot54.forEach((doc) => {
          const data54 = doc.data();
          S54Data.push(data54);
        });

        setS54(S54Data);
      } catch (error) {
        console.error("Error fetching S54:", error);
      }
    };
    fetchS54Data();
  }, []);
  const [S55, setS55] = useState([]);
  useEffect(() => {
    const S55Data = [];
    const S55Collections = collection(firebase, "S55");
    const fetchS55Data = async () => {
      try {
        const q55 = query(
          S55Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot55 = await getDocs(q55);
        querySnapshot55.forEach((doc) => {
          const data55 = doc.data();
          S55Data.push(data55);
        });

        setS55(S55Data);
      } catch (error) {
        console.error("Error fetching S55:", error);
      }
    };
    fetchS55Data();
  }, []);
  const [S56, setS56] = useState([]);
  useEffect(() => {
    const S56Data = [];
    const S56Collections = collection(firebase, "S56");
    const fetchS56Data = async () => {
      try {
        const q56 = query(
          S56Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot56 = await getDocs(q56);
        querySnapshot56.forEach((doc) => {
          const data56 = doc.data();
          S56Data.push(data56);
        });

        setS56(S56Data);
      } catch (error) {
        console.error("Error fetching S56:", error);
      }
    };
    fetchS56Data();
  }, []);
  const [S57, setS57] = useState([]);
  useEffect(() => {
    const S57Data = [];
    const S57Collections = collection(firebase, "S57");
    const fetchS57Data = async () => {
      try {
        const q57 = query(
          S57Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot57 = await getDocs(q57);
        querySnapshot57.forEach((doc) => {
          const data57 = doc.data();
          S57Data.push(data57);
        });

        setS57(S57Data);
      } catch (error) {
        console.error("Error fetching S57:", error);
      }
    };
    fetchS57Data();
  }, []);
  const [S58, setS58] = useState([]);
  useEffect(() => {
    const S58Data = [];
    const S58Collections = collection(firebase, "S58");
    const fetchS58Data = async () => {
      try {
        const q58 = query(
          S58Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot58 = await getDocs(q58);
        querySnapshot58.forEach((doc) => {
          const data58 = doc.data();
          S58Data.push(data58);
        });

        setS58(S58Data);
      } catch (error) {
        console.error("Error fetching S58:", error);
      }
    };
    fetchS58Data();
  }, []);
  const [S59, setS59] = useState([]);
  useEffect(() => {
    const S59Data = [];
    const S59Collections = collection(firebase, "S59");
    const fetchS59Data = async () => {
      try {
        const q59 = query(
          S59Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot59 = await getDocs(q59);
        querySnapshot59.forEach((doc) => {
          const data59 = doc.data();
          S59Data.push(data59);
        });

        setS59(S59Data);
      } catch (error) {
        console.error("Error fetching S59:", error);
      }
    };
    fetchS59Data();
  }, []);
  const [S60, setS60] = useState([]);
  useEffect(() => {
    const S60Data = [];
    const S60Collections = collection(firebase, "S60");
    const fetchS60Data = async () => {
      try {
        const q60 = query(
          S60Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot60 = await getDocs(q60);
        querySnapshot60.forEach((doc) => {
          const data60 = doc.data();
          S60Data.push(data60);
        });

        setS60(S60Data);
      } catch (error) {
        console.error("Error fetching S60:", error);
      }
    };
    fetchS60Data();
  }, []);
  const refreshData = async () => {
    const S60Data = [];
    const S60Collections = collection(firebase, "S60");
    const fetchS60Data = async () => {
      try {
        const q60 = query(
          S60Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot60 = await getDocs(q60);
        querySnapshot60.forEach((doc) => {
          const data60 = doc.data();
          S60Data.push(data60);
        });

        setS60(S60Data);
      } catch (error) {
        console.error("Error fetching S60:", error);
      }
    };
    fetchS60Data();
    const S59Data = [];
    const S59Collections = collection(firebase, "S59");
    const fetchS59Data = async () => {
      try {
        const q59 = query(
          S59Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot59 = await getDocs(q59);
        querySnapshot59.forEach((doc) => {
          const data59 = doc.data();
          S59Data.push(data59);
        });

        setS59(S59Data);
      } catch (error) {
        console.error("Error fetching S59:", error);
      }
    };
    fetchS59Data();
    const S58Data = [];
    const S58Collections = collection(firebase, "S58");
    const fetchS58Data = async () => {
      try {
        const q58 = query(
          S58Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot58 = await getDocs(q58);
        querySnapshot58.forEach((doc) => {
          const data58 = doc.data();
          S58Data.push(data58);
        });

        setS58(S58Data);
      } catch (error) {
        console.error("Error fetching S58:", error);
      }
    };
    fetchS58Data();
    const S57Data = [];
    const S57Collections = collection(firebase, "S57");
    const fetchS57Data = async () => {
      try {
        const q57 = query(
          S57Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot57 = await getDocs(q57);
        querySnapshot57.forEach((doc) => {
          const data57 = doc.data();
          S57Data.push(data57);
        });

        setS57(S57Data);
      } catch (error) {
        console.error("Error fetching S57:", error);
      }
    };
    fetchS57Data();
    const S56Data = [];
    const S56Collections = collection(firebase, "S56");
    const fetchS56Data = async () => {
      try {
        const q56 = query(
          S56Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot56 = await getDocs(q56);
        querySnapshot56.forEach((doc) => {
          const data56 = doc.data();
          S56Data.push(data56);
        });

        setS56(S56Data);
      } catch (error) {
        console.error("Error fetching S56:", error);
      }
    };
    fetchS56Data();
    const S55Data = [];
    const S55Collections = collection(firebase, "S55");
    const fetchS55Data = async () => {
      try {
        const q55 = query(
          S55Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot55 = await getDocs(q55);
        querySnapshot55.forEach((doc) => {
          const data55 = doc.data();
          S55Data.push(data55);
        });

        setS55(S55Data);
      } catch (error) {
        console.error("Error fetching S55:", error);
      }
    };
    fetchS55Data();
    const S54Data = [];
    const S54Collections = collection(firebase, "S54");
    const fetchS54Data = async () => {
      try {
        const q54 = query(
          S54Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot54 = await getDocs(q54);
        querySnapshot54.forEach((doc) => {
          const data54 = doc.data();
          S54Data.push(data54);
        });

        setS54(S54Data);
      } catch (error) {
        console.error("Error fetching S54:", error);
      }
    };
    fetchS54Data();
    const S53Data = [];
    const S53Collections = collection(firebase, "S53");
    const fetchS53Data = async () => {
      try {
        const q53 = query(
          S53Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot53 = await getDocs(q53);
        querySnapshot53.forEach((doc) => {
          const data53 = doc.data();
          S53Data.push(data53);
        });

        setS53(S53Data);
      } catch (error) {
        console.error("Error fetching S53:", error);
      }
    };
    fetchS53Data();
    const S52Data = [];
    const S52Collections = collection(firebase, "S52");
    const fetchS52Data = async () => {
      try {
        const q52 = query(
          S52Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot52 = await getDocs(q52);
        querySnapshot52.forEach((doc) => {
          const data52 = doc.data();
          S52Data.push(data52);
        });

        setS52(S52Data);
      } catch (error) {
        console.error("Error fetching S52:", error);
      }
    };
    fetchS52Data();
    const S51Data = [];
    const S51Collections = collection(firebase, "S51");
    const fetchS51Data = async () => {
      try {
        const q51 = query(
          S51Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot51 = await getDocs(q51);
        querySnapshot51.forEach((doc) => {
          const data51 = doc.data();
          S51Data.push(data51);
        });

        setS51(S51Data);
      } catch (error) {
        console.error("Error fetching S51:", error);
      }
    };
    fetchS51Data();
    const S50Data = [];
    const S50Collections = collection(firebase, "S50");
    const fetchS50Data = async () => {
      try {
        const q50 = query(
          S50Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot50 = await getDocs(q50);
        querySnapshot50.forEach((doc) => {
          const data50 = doc.data();
          S50Data.push(data50);
        });

        setS50(S50Data);
      } catch (error) {
        console.error("Error fetching S50:", error);
      }
    };
    fetchS50Data();
    const S49Data = [];
    const S49Collections = collection(firebase, "S49");
    const fetchS49Data = async () => {
      try {
        const q49 = query(
          S49Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot49 = await getDocs(q49);
        querySnapshot49.forEach((doc) => {
          const data49 = doc.data();
          S49Data.push(data49);
        });

        setS49(S49Data);
      } catch (error) {
        console.error("Error fetching S49:", error);
      }
    };
    fetchS49Data();
    const S48Data = [];
    const S48Collections = collection(firebase, "S48");
    const fetchS48Data = async () => {
      try {
        const q48 = query(
          S48Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot48 = await getDocs(q48);
        querySnapshot48.forEach((doc) => {
          const data48 = doc.data();
          S48Data.push(data48);
        });

        setS48(S48Data);
      } catch (error) {
        console.error("Error fetching S48:", error);
      }
    };
    fetchS48Data();
    const S47Data = [];
    const S47Collections = collection(firebase, "S47");
    const fetchS47Data = async () => {
      try {
        const q47 = query(
          S47Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot47 = await getDocs(q47);
        querySnapshot47.forEach((doc) => {
          const data47 = doc.data();
          S47Data.push(data47);
        });

        setS47(S47Data);
      } catch (error) {
        console.error("Error fetching S47:", error);
      }
    };
    fetchS47Data();
    const S46Data = [];
    const S46Collections = collection(firebase, "S46");
    const fetchS46Data = async () => {
      try {
        const q46 = query(
          S46Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot46 = await getDocs(q46);
        querySnapshot46.forEach((doc) => {
          const data46 = doc.data();
          S46Data.push(data46);
        });

        setS46(S46Data);
      } catch (error) {
        console.error("Error fetching S46:", error);
      }
    };
    fetchS46Data();
    const S45Data = [];
    const S45Collections = collection(firebase, "S45");
    const fetchS45Data = async () => {
      try {
        const q45 = query(
          S45Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot45 = await getDocs(q45);
        querySnapshot45.forEach((doc) => {
          const data45 = doc.data();
          S45Data.push(data45);
        });

        setS45(S45Data);
      } catch (error) {
        console.error("Error fetching S45:", error);
      }
    };
    fetchS45Data();
    const S44Data = [];
    const S44Collections = collection(firebase, "S44");
    const fetchS44Data = async () => {
      try {
        const q44 = query(
          S44Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot44 = await getDocs(q44);
        querySnapshot44.forEach((doc) => {
          const data44 = doc.data();
          S44Data.push(data44);
        });

        setS44(S44Data);
      } catch (error) {
        console.error("Error fetching S44:", error);
      }
    };
    fetchS44Data();
    const S43Data = [];
    const S43Collections = collection(firebase, "S43");
    const fetchS43Data = async () => {
      try {
        const q43 = query(
          S43Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot43 = await getDocs(q43);
        querySnapshot43.forEach((doc) => {
          const data43 = doc.data();
          S43Data.push(data43);
        });

        setS43(S43Data);
      } catch (error) {
        console.error("Error fetching S43:", error);
      }
    };
    fetchS43Data();
    const S42Data = [];
    const S42Collections = collection(firebase, "S42");
    const fetchS42Data = async () => {
      try {
        const q42 = query(
          S42Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot42 = await getDocs(q42);
        querySnapshot42.forEach((doc) => {
          const data42 = doc.data();
          S42Data.push(data42);
        });

        setS42(S42Data);
      } catch (error) {
        console.error("Error fetching S42:", error);
      }
    };
    fetchS42Data();
    const S41Data = [];
    const S41Collections = collection(firebase, "S41");
    const fetchS41Data = async () => {
      try {
        const q41 = query(
          S41Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot41 = await getDocs(q41);
        querySnapshot41.forEach((doc) => {
          const data41 = doc.data();
          S41Data.push(data41);
        });

        setS41(S41Data);
      } catch (error) {
        console.error("Error fetching S41:", error);
      }
    };
    fetchS41Data();
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
                  Sprinkler ID: {item.id}
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
          source={require("../../assets/images/SCIT_3rd.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.button4Row}>
            {S41.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button4}
                onPress={() => showModal("41")}
              >
                <View style={styles.b5StackStack}>
                  <View style={styles.b5Stack}>
                    <View
                      style={[
                        styles.b5,
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
                      style={styles.bbb4}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb4,
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
            {S42.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button3}
                onPress={() => showModal("42")}
              >
                <View style={styles.b4StackStack}>
                  <View style={styles.b4Stack}>
                    <View
                      style={[
                        styles.b4,
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
                      style={styles.bbb3}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb3,
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
            {S43.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button7}
                onPress={() => showModal("43")}
              >
                <View style={styles.b8StackStack}>
                  <View style={styles.b8Stack}>
                    <View
                      style={[
                        styles.b8,
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
                      style={styles.bbb7}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb7,
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
            {S44.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button8}
                onPress={() => showModal("44")}
              >
                <View style={styles.b9StackStack}>
                  <View style={styles.b9Stack}>
                    <View
                      style={[
                        styles.b9,
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
                      style={styles.bbb8}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb8,
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
            {S45.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button11}
                onPress={() => showModal("45")}
              >
                <View style={styles.b12StackStack}>
                  <View style={styles.b12Stack}>
                    <View
                      style={[
                        styles.b12,
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
                      style={styles.bbb11}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb11,
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
            {S46.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button12}
                onPress={() => showModal("46")}
              >
                <View style={styles.b13StackStack}>
                  <View style={styles.b13Stack}>
                    <View
                      style={[
                        styles.b13,
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
                      style={styles.bbb12}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb12,
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
            {S47.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button15}
                onPress={() => showModal("47")}
              >
                <View style={styles.b16StackStack}>
                  <View style={styles.b16Stack}>
                    <View
                      style={[
                        styles.b16,
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
                      style={styles.bbb15}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb15,
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
            {S48.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button16}
                onPress={() => showModal("48")}
              >
                <View style={styles.b17StackStack}>
                  <View style={styles.b17Stack}>
                    <View
                      style={[
                        styles.b17,
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
                      style={styles.bbb16}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb16,
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
            {S49.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button19}
                onPress={() => showModal("49")}
              >
                <View style={styles.b20StackStack}>
                  <View style={styles.b20Stack}>
                    <View
                      style={[
                        styles.b20,
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
                      style={styles.bbb19}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb19,
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
            {S50.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button20}
                onPress={() => showModal("50")}
              >
                <View style={styles.b21StackStack}>
                  <View style={styles.b21Stack}>
                    <View
                      style={[
                        styles.b21,
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
                      style={styles.bbb20}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb20,
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
          <View style={styles.button1Row}>
            {S51.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button1}
                onPress={() => showModal("51")}
              >
                <View style={styles.b1StackStack}>
                  <View style={styles.b1Stack}>
                    <View
                      style={[
                        styles.b1,
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
                      style={styles.bbb1}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb1,
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
            {S52.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button2}
                onPress={() => showModal("52")}
              >
                <View style={styles.b3StackStack}>
                  <View style={styles.b3Stack}>
                    <View
                      style={[
                        styles.b3,
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
                      style={styles.bbb2}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb2,
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
            {S53.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button5}
                onPress={() => showModal("53")}
              >
                <View style={styles.b6StackStack}>
                  <View style={styles.b6Stack}>
                    <View
                      style={[
                        styles.b6,
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
                      style={styles.bbb5}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb5,
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
            {S54.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button6}
                onPress={() => showModal("54")}
              >
                <View style={styles.b7StackStack}>
                  <View style={styles.b7Stack}>
                    <View
                      style={[
                        styles.b7,
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
                      style={styles.bbb6}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb6,
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
            {S55.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button9}
                onPress={() => showModal("55")}
              >
                <View style={styles.b10StackStack}>
                  <View style={styles.b10Stack}>
                    <View
                      style={[
                        styles.b10,
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
                      style={styles.bbb9}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb9,
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
            {S56.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button10}
                onPress={() => showModal("56")}
              >
                <View style={styles.b11StackStack}>
                  <View style={styles.b11Stack}>
                    <View
                      style={[
                        styles.b11,
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
                      style={styles.bbb10}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb10,
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
            {S57.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button13}
                onPress={() => showModal("57")}
              >
                <View style={styles.b14StackStack}>
                  <View style={styles.b14Stack}>
                    <View
                      style={[
                        styles.b14,
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
                      style={styles.bbb13}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb13,
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
            {S58.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button14}
                onPress={() => showModal("58")}
              >
                <View style={styles.b15StackStack}>
                  <View style={styles.b15Stack}>
                    <View
                      style={[
                        styles.b15,
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
                      style={styles.bbb14}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb14,
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
            {S59.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button17}
                onPress={() => showModal("59")}
              >
                <View style={styles.b18StackStack}>
                  <View style={styles.b18Stack}>
                    <View
                      style={[
                        styles.b18,
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
                      style={styles.bbb17}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb17,
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
            {S60.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button18}
                onPress={() => showModal("60")}
              >
                <View style={styles.b19StackStack}>
                  <View style={styles.b19Stack}>
                    <View
                      style={[
                        styles.b19,
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
                      style={styles.bbb18}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb18,
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
    width: 1088,
    height: 420,
  },
  image_imageStyle: {},
  button4: {
    width: 30,
    height: 31,
    marginTop: 1,
  },
  b5: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb4: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b5Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb4: {
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
  b5StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button3: {
    width: 30,
    height: 31,
    marginLeft: 57,
    marginTop: 1,
  },
  b4: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb3: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b4Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb3: {
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
  b4StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button7: {
    width: 30,
    height: 31,
    marginLeft: 52,
    marginTop: 1,
  },
  b8: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb7: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b8Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb7: {
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
  b8StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button8: {
    width: 30,
    height: 31,
    marginLeft: 60,
  },
  b9: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb8: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b9Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb8: {
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
  b9StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button11: {
    width: 30,
    height: 31,
    marginLeft: 53,
  },
  b12: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb11: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b12Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb11: {
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
  b12StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button12: {
    width: 30,
    height: 31,
    marginLeft: 59,
  },
  b13: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb12: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b13Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb12: {
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
  b13StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button15: {
    width: 30,
    height: 31,
    marginLeft: 51,
    marginTop: 3,
  },
  b16: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb15: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b16Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb15: {
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
  b16StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button16: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 3,
  },
  b17: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb16: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b17Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb16: {
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
  b17StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button19: {
    width: 30,
    height: 31,
    marginLeft: 55,
    marginTop: 3,
  },
  b20: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb19: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b20Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb19: {
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
  b20StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button20: {
    width: 30,
    height: 31,
    marginLeft: 58,
    marginTop: 3,
  },
  b21: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb20: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b21Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb20: {
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
  b21StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button4Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 73,
    marginLeft: 142,
    marginRight: 141,
  },
  button1: {
    width: 30,
    height: 31,
    marginTop: 5,
  },
  b1: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb1: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b1Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb1: {
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
  b1StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button2: {
    width: 30,
    height: 31,
    marginLeft: 57,
    marginTop: 3,
  },
  b3: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb2: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b3Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb2: {
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
  b3StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button5: {
    width: 30,
    height: 31,
    marginLeft: 52,
    marginTop: 2,
  },
  b6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb5: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb5: {
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
  b6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button6: {
    width: 30,
    height: 31,
    marginLeft: 59,
  },
  b7: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb6: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b7Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb6: {
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
  b7StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button9: {
    width: 30,
    height: 31,
    marginLeft: 54,
  },
  b10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb9: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb9: {
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
  b10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button10: {
    width: 30,
    height: 31,
    marginLeft: 59,
  },
  b11: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb10: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b11Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb10: {
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
  b11StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button13: {
    width: 30,
    height: 31,
    marginLeft: 51,
    marginTop: 2,
  },
  b14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb13: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b14Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb13: {
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
  b14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button14: {
    width: 30,
    height: 31,
    marginLeft: 60,
  },
  b15: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb14: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b15Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb14: {
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
  b15StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button17: {
    width: 30,
    height: 31,
    marginLeft: 55,
  },
  b18: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb17: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b18Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb17: {
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
  b18StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button18: {
    width: 30,
    height: 31,
    marginLeft: 58,
  },
  b19: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb18: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
    zIndex: 100,
  },
  b19Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb18: {
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
  b19StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 142,
    marginRight: 141,
  },
});
