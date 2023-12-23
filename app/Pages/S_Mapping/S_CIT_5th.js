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
export default function S_CIT_5th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  const [S81, setS81] = useState([]);
  useEffect(() => {
    const S81Data = [];
    const S81Collections = collection(firebase, "S81");
    const fetchS81Data = async () => {
      try {
        const q81 = query(
          S81Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot81 = await getDocs(q81);
        querySnapshot81.forEach((doc) => {
          const data81 = doc.data();
          S81Data.push(data81);
        });

        setS81(S81Data);
      } catch (error) {
        console.error("Error fetching S81:", error);
      }
    };
    fetchS81Data();
  }, []);
  const [S82, setS82] = useState([]);
  useEffect(() => {
    const S82Data = [];
    const S82Collections = collection(firebase, "S82");
    const fetchS82Data = async () => {
      try {
        const q82 = query(
          S82Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot82 = await getDocs(q82);
        querySnapshot82.forEach((doc) => {
          const data82 = doc.data();
          S82Data.push(data82);
        });

        setS82(S82Data);
      } catch (error) {
        console.error("Error fetching S82:", error);
      }
    };
    fetchS82Data();
  }, []);
  const [S83, setS83] = useState([]);
  useEffect(() => {
    const S83Data = [];
    const S83Collections = collection(firebase, "S83");
    const fetchS83Data = async () => {
      try {
        const q83 = query(
          S83Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot83 = await getDocs(q83);
        querySnapshot83.forEach((doc) => {
          const data83 = doc.data();
          S83Data.push(data83);
        });

        setS83(S83Data);
      } catch (error) {
        console.error("Error fetching S83:", error);
      }
    };
    fetchS83Data();
  }, []);
  const [S84, setS84] = useState([]);
  useEffect(() => {
    const S84Data = [];
    const S84Collections = collection(firebase, "S84");
    const fetchS84Data = async () => {
      try {
        const q84 = query(
          S84Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot84 = await getDocs(q84);
        querySnapshot84.forEach((doc) => {
          const data84 = doc.data();
          S84Data.push(data84);
        });

        setS84(S84Data);
      } catch (error) {
        console.error("Error fetching S84:", error);
      }
    };
    fetchS84Data();
  }, []);
  const [S85, setS85] = useState([]);
  useEffect(() => {
    const S85Data = [];
    const S85Collections = collection(firebase, "S85");
    const fetchS85Data = async () => {
      try {
        const q85 = query(
          S85Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot85 = await getDocs(q85);
        querySnapshot85.forEach((doc) => {
          const data85 = doc.data();
          S85Data.push(data85);
        });

        setS85(S85Data);
      } catch (error) {
        console.error("Error fetching S85:", error);
      }
    };
    fetchS85Data();
  }, []);
  const [S86, setS86] = useState([]);
  useEffect(() => {
    const S86Data = [];
    const S86Collections = collection(firebase, "S86");
    const fetchS86Data = async () => {
      try {
        const q86 = query(
          S86Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot86 = await getDocs(q86);
        querySnapshot86.forEach((doc) => {
          const data86 = doc.data();
          S86Data.push(data86);
        });

        setS86(S86Data);
      } catch (error) {
        console.error("Error fetching S86:", error);
      }
    };
    fetchS86Data();
  }, []);
  const [S87, setS87] = useState([]);
  useEffect(() => {
    const S87Data = [];
    const S87Collections = collection(firebase, "S87");
    const fetchS87Data = async () => {
      try {
        const q87 = query(
          S87Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot87 = await getDocs(q87);
        querySnapshot87.forEach((doc) => {
          const data87 = doc.data();
          S87Data.push(data87);
        });

        setS87(S87Data);
      } catch (error) {
        console.error("Error fetching S87:", error);
      }
    };
    fetchS87Data();
  }, []);
  const [S88, setS88] = useState([]);
  useEffect(() => {
    const S88Data = [];
    const S88Collections = collection(firebase, "S88");
    const fetchS88Data = async () => {
      try {
        const q88 = query(
          S88Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot88 = await getDocs(q88);
        querySnapshot88.forEach((doc) => {
          const data88 = doc.data();
          S88Data.push(data88);
        });

        setS88(S88Data);
      } catch (error) {
        console.error("Error fetching S88:", error);
      }
    };
    fetchS88Data();
  }, []);
  const [S89, setS89] = useState([]);
  useEffect(() => {
    const S89Data = [];
    const S89Collections = collection(firebase, "S89");
    const fetchS89Data = async () => {
      try {
        const q89 = query(
          S89Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot89 = await getDocs(q89);
        querySnapshot89.forEach((doc) => {
          const data89 = doc.data();
          S89Data.push(data89);
        });

        setS89(S89Data);
      } catch (error) {
        console.error("Error fetching S89:", error);
      }
    };
    fetchS89Data();
  }, []);
  const [S90, setS90] = useState([]);
  useEffect(() => {
    const S90Data = [];
    const S90Collections = collection(firebase, "S90");
    const fetchS90Data = async () => {
      try {
        const q90 = query(
          S90Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot90 = await getDocs(q90);
        querySnapshot90.forEach((doc) => {
          const data90 = doc.data();
          S90Data.push(data90);
        });

        setS90(S90Data);
      } catch (error) {
        console.error("Error fetching S90:", error);
      }
    };
    fetchS90Data();
  }, []);
  const [S91, setS91] = useState([]);
  useEffect(() => {
    const S91Data = [];
    const S91Collections = collection(firebase, "S91");
    const fetchS91Data = async () => {
      try {
        const q91 = query(
          S91Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot91 = await getDocs(q91);
        querySnapshot91.forEach((doc) => {
          const data91 = doc.data();
          S91Data.push(data91);
        });

        setS91(S91Data);
      } catch (error) {
        console.error("Error fetching S91:", error);
      }
    };
    fetchS91Data();
  }, []);
  const [S92, setS92] = useState([]);
  useEffect(() => {
    const S92Data = [];
    const S92Collections = collection(firebase, "S92");
    const fetchS92Data = async () => {
      try {
        const q92 = query(
          S92Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot92 = await getDocs(q92);
        querySnapshot92.forEach((doc) => {
          const data92 = doc.data();
          S92Data.push(data92);
        });

        setS92(S92Data);
      } catch (error) {
        console.error("Error fetching S92:", error);
      }
    };
    fetchS92Data();
  }, []);
  const [S93, setS93] = useState([]);
  useEffect(() => {
    const S93Data = [];
    const S93Collections = collection(firebase, "S93");
    const fetchS93Data = async () => {
      try {
        const q93 = query(
          S93Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot93 = await getDocs(q93);
        querySnapshot93.forEach((doc) => {
          const data93 = doc.data();
          S93Data.push(data93);
        });

        setS93(S93Data);
      } catch (error) {
        console.error("Error fetching S93:", error);
      }
    };
    fetchS93Data();
  }, []);
  const [S94, setS94] = useState([]);
  useEffect(() => {
    const S94Data = [];
    const S94Collections = collection(firebase, "S94");
    const fetchS94Data = async () => {
      try {
        const q94 = query(
          S94Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot94 = await getDocs(q94);
        querySnapshot94.forEach((doc) => {
          const data94 = doc.data();
          S94Data.push(data94);
        });

        setS94(S94Data);
      } catch (error) {
        console.error("Error fetching S94:", error);
      }
    };
    fetchS94Data();
  }, []);
  const [S95, setS95] = useState([]);
  useEffect(() => {
    const S95Data = [];
    const S95Collections = collection(firebase, "S95");
    const fetchS95Data = async () => {
      try {
        const q95 = query(
          S95Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot95 = await getDocs(q95);
        querySnapshot95.forEach((doc) => {
          const data95 = doc.data();
          S95Data.push(data95);
        });

        setS95(S95Data);
      } catch (error) {
        console.error("Error fetching S95:", error);
      }
    };
    fetchS95Data();
  }, []);
  const [S96, setS96] = useState([]);
  useEffect(() => {
    const S96Data = [];
    const S96Collections = collection(firebase, "S96");
    const fetchS96Data = async () => {
      try {
        const q96 = query(
          S96Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot96 = await getDocs(q96);
        querySnapshot96.forEach((doc) => {
          const data96 = doc.data();
          S96Data.push(data96);
        });

        setS96(S96Data);
      } catch (error) {
        console.error("Error fetching S96:", error);
      }
    };
    fetchS96Data();
  }, []);
  const [S97, setS97] = useState([]);
  useEffect(() => {
    const S97Data = [];
    const S97Collections = collection(firebase, "S97");
    const fetchS97Data = async () => {
      try {
        const q97 = query(
          S97Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot97 = await getDocs(q97);
        querySnapshot97.forEach((doc) => {
          const data97 = doc.data();
          S97Data.push(data97);
        });

        setS97(S97Data);
      } catch (error) {
        console.error("Error fetching S97:", error);
      }
    };
    fetchS97Data();
  }, []);
  const [S98, setS98] = useState([]);
  useEffect(() => {
    const S98Data = [];
    const S98Collections = collection(firebase, "S98");
    const fetchS98Data = async () => {
      try {
        const q98 = query(
          S98Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot98 = await getDocs(q98);
        querySnapshot98.forEach((doc) => {
          const data98 = doc.data();
          S98Data.push(data98);
        });

        setS98(S98Data);
      } catch (error) {
        console.error("Error fetching S98:", error);
      }
    };
    fetchS98Data();
  }, []);
  const [S99, setS99] = useState([]);
  useEffect(() => {
    const S99Data = [];
    const S99Collections = collection(firebase, "S99");
    const fetchS99Data = async () => {
      try {
        const q99 = query(
          S99Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot99 = await getDocs(q99);
        querySnapshot99.forEach((doc) => {
          const data99 = doc.data();
          S99Data.push(data99);
        });

        setS99(S99Data);
      } catch (error) {
        console.error("Error fetching S99:", error);
      }
    };
    fetchS99Data();
  }, []);
  const [S100, setS100] = useState([]);
  useEffect(() => {
    const S100Data = [];
    const S100Collections = collection(firebase, "S100");
    const fetchS100Data = async () => {
      try {
        const q100 = query(
          S100Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot100 = await getDocs(q100);
        querySnapshot100.forEach((doc) => {
          const data100 = doc.data();
          S100Data.push(data100);
        });

        setS100(S100Data);
      } catch (error) {
        console.error("Error fetching S100:", error);
      }
    };
    fetchS100Data();
  }, []);
  const refreshData = async () => {
    const S100Data = [];
    const S100Collections = collection(firebase, "S100");
    const fetchS100Data = async () => {
      try {
        const q100 = query(
          S100Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot100 = await getDocs(q100);
        querySnapshot100.forEach((doc) => {
          const data100 = doc.data();
          S100Data.push(data100);
        });

        setS100(S100Data);
      } catch (error) {
        console.error("Error fetching S100:", error);
      }
    };
    fetchS100Data();
    const S99Data = [];
    const S99Collections = collection(firebase, "S99");
    const fetchS99Data = async () => {
      try {
        const q99 = query(
          S99Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot99 = await getDocs(q99);
        querySnapshot99.forEach((doc) => {
          const data99 = doc.data();
          S99Data.push(data99);
        });

        setS99(S99Data);
      } catch (error) {
        console.error("Error fetching S99:", error);
      }
    };
    fetchS99Data();
    const S98Data = [];
    const S98Collections = collection(firebase, "S98");
    const fetchS98Data = async () => {
      try {
        const q98 = query(
          S98Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot98 = await getDocs(q98);
        querySnapshot98.forEach((doc) => {
          const data98 = doc.data();
          S98Data.push(data98);
        });

        setS98(S98Data);
      } catch (error) {
        console.error("Error fetching S98:", error);
      }
    };
    fetchS98Data();
    const S97Data = [];
    const S97Collections = collection(firebase, "S97");
    const fetchS97Data = async () => {
      try {
        const q97 = query(
          S97Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot97 = await getDocs(q97);
        querySnapshot97.forEach((doc) => {
          const data97 = doc.data();
          S97Data.push(data97);
        });

        setS97(S97Data);
      } catch (error) {
        console.error("Error fetching S97:", error);
      }
    };
    fetchS97Data();
    const S96Data = [];
    const S96Collections = collection(firebase, "S96");
    const fetchS96Data = async () => {
      try {
        const q96 = query(
          S96Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot96 = await getDocs(q96);
        querySnapshot96.forEach((doc) => {
          const data96 = doc.data();
          S96Data.push(data96);
        });

        setS96(S96Data);
      } catch (error) {
        console.error("Error fetching S96:", error);
      }
    };
    fetchS96Data();
    const S95Data = [];
    const S95Collections = collection(firebase, "S95");
    const fetchS95Data = async () => {
      try {
        const q95 = query(
          S95Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot95 = await getDocs(q95);
        querySnapshot95.forEach((doc) => {
          const data95 = doc.data();
          S95Data.push(data95);
        });

        setS95(S95Data);
      } catch (error) {
        console.error("Error fetching S95:", error);
      }
    };
    fetchS95Data();
    const S94Data = [];
    const S94Collections = collection(firebase, "S94");
    const fetchS94Data = async () => {
      try {
        const q94 = query(
          S94Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot94 = await getDocs(q94);
        querySnapshot94.forEach((doc) => {
          const data94 = doc.data();
          S94Data.push(data94);
        });

        setS94(S94Data);
      } catch (error) {
        console.error("Error fetching S94:", error);
      }
    };
    fetchS94Data();
    const S93Data = [];
    const S93Collections = collection(firebase, "S93");
    const fetchS93Data = async () => {
      try {
        const q93 = query(
          S93Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot93 = await getDocs(q93);
        querySnapshot93.forEach((doc) => {
          const data93 = doc.data();
          S93Data.push(data93);
        });

        setS93(S93Data);
      } catch (error) {
        console.error("Error fetching S93:", error);
      }
    };
    fetchS93Data();
    const S92Data = [];
    const S92Collections = collection(firebase, "S92");
    const fetchS92Data = async () => {
      try {
        const q92 = query(
          S92Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot92 = await getDocs(q92);
        querySnapshot92.forEach((doc) => {
          const data92 = doc.data();
          S92Data.push(data92);
        });

        setS92(S92Data);
      } catch (error) {
        console.error("Error fetching S92:", error);
      }
    };
    fetchS92Data();
    const S91Data = [];
    const S91Collections = collection(firebase, "S91");
    const fetchS91Data = async () => {
      try {
        const q91 = query(
          S91Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot91 = await getDocs(q91);
        querySnapshot91.forEach((doc) => {
          const data91 = doc.data();
          S91Data.push(data91);
        });

        setS91(S91Data);
      } catch (error) {
        console.error("Error fetching S91:", error);
      }
    };
    fetchS91Data();
    const S90Data = [];
    const S90Collections = collection(firebase, "S90");
    const fetchS90Data = async () => {
      try {
        const q90 = query(
          S90Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot90 = await getDocs(q90);
        querySnapshot90.forEach((doc) => {
          const data90 = doc.data();
          S90Data.push(data90);
        });

        setS90(S90Data);
      } catch (error) {
        console.error("Error fetching S90:", error);
      }
    };
    fetchS90Data();
    const S89Data = [];
    const S89Collections = collection(firebase, "S89");
    const fetchS89Data = async () => {
      try {
        const q89 = query(
          S89Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot89 = await getDocs(q89);
        querySnapshot89.forEach((doc) => {
          const data89 = doc.data();
          S89Data.push(data89);
        });

        setS89(S89Data);
      } catch (error) {
        console.error("Error fetching S89:", error);
      }
    };
    fetchS89Data();
    const S88Data = [];
    const S88Collections = collection(firebase, "S88");
    const fetchS88Data = async () => {
      try {
        const q88 = query(
          S88Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot88 = await getDocs(q88);
        querySnapshot88.forEach((doc) => {
          const data88 = doc.data();
          S88Data.push(data88);
        });

        setS88(S88Data);
      } catch (error) {
        console.error("Error fetching S88:", error);
      }
    };
    fetchS88Data();
    const S87Data = [];
    const S87Collections = collection(firebase, "S87");
    const fetchS87Data = async () => {
      try {
        const q87 = query(
          S87Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot87 = await getDocs(q87);
        querySnapshot87.forEach((doc) => {
          const data87 = doc.data();
          S87Data.push(data87);
        });

        setS87(S87Data);
      } catch (error) {
        console.error("Error fetching S87:", error);
      }
    };
    fetchS87Data();
    const S86Data = [];
    const S86Collections = collection(firebase, "S86");
    const fetchS86Data = async () => {
      try {
        const q86 = query(
          S86Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot86 = await getDocs(q86);
        querySnapshot86.forEach((doc) => {
          const data86 = doc.data();
          S86Data.push(data86);
        });

        setS86(S86Data);
      } catch (error) {
        console.error("Error fetching S86:", error);
      }
    };
    fetchS86Data();
    const S85Data = [];
    const S85Collections = collection(firebase, "S85");
    const fetchS85Data = async () => {
      try {
        const q85 = query(
          S85Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot85 = await getDocs(q85);
        querySnapshot85.forEach((doc) => {
          const data85 = doc.data();
          S85Data.push(data85);
        });

        setS85(S85Data);
      } catch (error) {
        console.error("Error fetching S85:", error);
      }
    };
    fetchS85Data();
    const S84Data = [];
    const S84Collections = collection(firebase, "S84");
    const fetchS84Data = async () => {
      try {
        const q84 = query(
          S84Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot84 = await getDocs(q84);
        querySnapshot84.forEach((doc) => {
          const data84 = doc.data();
          S84Data.push(data84);
        });

        setS84(S84Data);
      } catch (error) {
        console.error("Error fetching S84:", error);
      }
    };
    fetchS84Data();
    const S83Data = [];
    const S83Collections = collection(firebase, "S83");
    const fetchS83Data = async () => {
      try {
        const q83 = query(
          S83Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot83 = await getDocs(q83);
        querySnapshot83.forEach((doc) => {
          const data83 = doc.data();
          S83Data.push(data83);
        });

        setS83(S83Data);
      } catch (error) {
        console.error("Error fetching S83:", error);
      }
    };
    fetchS83Data();
    const S82Data = [];
    const S82Collections = collection(firebase, "S82");
    const fetchS82Data = async () => {
      try {
        const q82 = query(
          S82Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot82 = await getDocs(q82);
        querySnapshot82.forEach((doc) => {
          const data82 = doc.data();
          S82Data.push(data82);
        });

        setS82(S82Data);
      } catch (error) {
        console.error("Error fetching S82:", error);
      }
    };
    fetchS82Data();
    const S81Data = [];
    const S81Collections = collection(firebase, "S81");
    const fetchS81Data = async () => {
      try {
        const q81 = query(
          S81Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot81 = await getDocs(q81);
        querySnapshot81.forEach((doc) => {
          const data81 = doc.data();
          S81Data.push(data81);
        });

        setS81(S81Data);
      } catch (error) {
        console.error("Error fetching S81:", error);
      }
    };
    fetchS81Data();
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
          source={require("../../assets/images/SCIT_5th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.button4Row}>
            {S81.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button4}
                onPress={() => showModal("81")}
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
            {S82.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button3}
                onPress={() => showModal("82")}
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
            {S83.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button7}
                onPress={() => showModal("83")}
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
            {S84.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button8}
                onPress={() => showModal("84")}
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
            {S85.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button11}
                onPress={() => showModal("85")}
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
            {S86.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button12}
                onPress={() => showModal("86")}
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
            {S87.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button15}
                onPress={() => showModal("87")}
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
            {S88.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button16}
                onPress={() => showModal("88")}
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
            {S89.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button19}
                onPress={() => showModal("89")}
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
            {S90.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button20}
                onPress={() => showModal("90")}
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
            {S91.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button1}
                onPress={() => showModal("91")}
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
            {S92.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button2}
                onPress={() => showModal("92")}
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
            {S93.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button5}
                onPress={() => showModal("93")}
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
            {S94.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button6}
                onPress={() => showModal("94")}
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
            {S95.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button9}
                onPress={() => showModal("95")}
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
            {S96.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button10}
                onPress={() => showModal("96")}
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
            {S97.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button13}
                onPress={() => showModal("97")}
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
            {S98.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button14}
                onPress={() => showModal("98")}
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
            {S99.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button17}
                onPress={() => showModal("99")}
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
            {S100.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button18}
                onPress={() => showModal("100")}
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
    width: 1113,
    height: 367,
  },
  image_imageStyle: {},
  button4: {
    width: 30,
    height: 31,
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
    marginLeft: 61,
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
    marginLeft: 53,
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
    marginLeft: 65,
    marginTop: 1,
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
    marginLeft: 52,
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
    marginLeft: 61,
    marginTop: 1,
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
    marginLeft: 55,
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
    marginLeft: 58,
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
    marginLeft: 60,
    marginTop: 2,
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
    marginLeft: 60,
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
    height: 33,
    flexDirection: "row",
    marginTop: 51,
    marginLeft: 144,
    marginRight: 144,
  },
  button1: {
    width: 30,
    height: 31,
    marginTop: 8,
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
    marginLeft: 61,
    marginTop: 6,
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
    marginLeft: 53,
    marginTop: 5,
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
    marginLeft: 64,
    marginTop: 5,
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
    marginLeft: 53,
    marginTop: 4,
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
    marginLeft: 61,
    marginTop: 5,
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
    marginLeft: 56,
    marginTop: 3,
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
    marginLeft: 59,
    marginTop: 1,
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
    marginLeft: 58,
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
    marginLeft: 60,
    marginTop: 1,
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
    height: 39,
    flexDirection: "row",
    marginTop: 65,
    marginLeft: 144,
    marginRight: 144,
  },
});
