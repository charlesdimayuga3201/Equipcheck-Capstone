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
import { firebase } from "../../../firebaseConfig";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
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
import AppNavigator from "../../Custom/AppNavigator";

export default function FDC_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const addData = () => {};
  const navigation = useNavigation();

  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");
  console.log(formattedToday);

  const [SD1, setSD1] = useState([]);
  useEffect(() => {
    const SD1Data = [];
    const SD1Collections = collection(firebase, "SD1");
    const fetchSD1Data = async () => {
      try {
        const q1 = query(
          SD1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          const data1 = doc.data();
          SD1Data.push(data1);
          // Use the data as needed
          console.log("Fetched FE1 data:", data1);
        });
        console.log(SD1Data);
        setSD1(SD1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchSD1Data();
  }, []);

  const [SD2, setSD2] = useState([]);
  useEffect(() => {
    const SD2Data = [];
    const SD2Collections = collection(firebase, "SD2");
    const fetchSD2Data = async () => {
      try {
        const q2 = query(
          SD2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          SD2Data.push(data2);
          // Use the data as needed
        });
        console.log(SD2Data);
        setSD2(SD2Data);
      } catch (error) {}
    };
    fetchSD2Data();
  }, []);
  const [SD3, setSD3] = useState([]);
  useEffect(() => {
    const SD3Data = [];
    const SD3Collections = collection(firebase, "SD3");
    const fetchSD3Data = async () => {
      try {
        const q3 = query(
          SD3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          SD3Data.push(data3);
          // Use the data as needed
        });
        console.log(SD3Data);
        setSD3(SD3Data);
      } catch (error) {}
    };
    fetchSD3Data();
  }, []);

  const [SD4, setSD4] = useState([]);
  useEffect(() => {
    const SD4Data = [];
    const SD4Collections = collection(firebase, "SD4");
    const fetchSD4Data = async () => {
      try {
        const q4 = query(
          SD4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          SD4Data.push(data4);
          // Use the data as needed
        });
        console.log(SD4Data);
        setSD4(SD4Data);
      } catch (error) {}
    };
    fetchSD4Data();
  }, []);

  const [SD5, setSD5] = useState([]);
  useEffect(() => {
    const SD5Data = [];
    const SD5Collections = collection(firebase, "SD5");
    const fetchSD5Data = async () => {
      try {
        const q5 = query(
          SD5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          SD5Data.push(data5);
          // Use the data as needed
        });
        console.log(SD5Data);
        setSD5(SD5Data);
      } catch (error) {}
    };
    fetchSD5Data();
  }, []);

  const [SD6, setSD6] = useState([]);
  useEffect(() => {
    const SD6Data = [];
    const SD6Collections = collection(firebase, "SD6");
    const fetchSD6Data = async () => {
      try {
        const q6 = query(
          SD6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          SD6Data.push(data6);
          // Use the data as needed
        });
        console.log(SD6Data);
        setSD6(SD6Data);
      } catch (error) {}
    };
    fetchSD6Data();
  }, []);

  const [SD7, setSD7] = useState([]);
  useEffect(() => {
    const SD7Data = [];
    const SD7Collections = collection(firebase, "SD7");
    const fetchSD7Data = async () => {
      try {
        const q7 = query(
          SD7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          SD7Data.push(data7);
          // Use the data as needed
        });
        console.log(SD7Data);
        setSD7(SD7Data);
      } catch (error) {}
    };
    fetchSD7Data();
  }, []);
  const [SD8, setSD8] = useState([]);
  useEffect(() => {
    const SD8Data = [];
    const SD8Collections = collection(firebase, "SD8");
    const fetchSD8Data = async () => {
      try {
        const q8 = query(
          SD8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          SD8Data.push(data8);
          // Use the data as needed
        });
        console.log(SD8Data);
        setSD8(SD8Data);
      } catch (error) {}
    };
    fetchSD8Data();
  }, []);

  const [SD9, setSD9] = useState([]);
  useEffect(() => {
    const SD9Data = [];
    const SD9Collections = collection(firebase, "SD9");
    const fetchSD9Data = async () => {
      try {
        const q9 = query(
          SD9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          SD9Data.push(data9);
          // Use the data as needed
        });
        console.log(SD9Data);
        setSD9(SD9Data);
      } catch (error) {}
    };
    fetchSD9Data();
  }, []);

  const [SD10, setSD10] = useState([]);
  useEffect(() => {
    const SD10Data = [];
    const SD10Collections = collection(firebase, "SD10");
    const fetchSD10Data = async () => {
      try {
        const q10 = query(
          SD10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          SD10Data.push(data10);
          // Use the data as needed
        });
        console.log(SD10Data);
        setSD10(SD10Data);
      } catch (error) {}
    };
    fetchSD10Data();
  }, []);
  const [SD11, setSD11] = useState([]);
  useEffect(() => {
    const SD11Data = [];
    const SD11Collections = collection(firebase, "SD11");
    const fetchSD11Data = async () => {
      try {
        const q11 = query(
          SD11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          SD11Data.push(data11);
          // Use the data as needed
        });
        console.log(SD11Data);
        setSD11(SD11Data);
      } catch (error) {}
    };
    fetchSD11Data();
  }, []);

  const [SD12, setSD12] = useState([]);
  useEffect(() => {
    const SD12Data = [];
    const SD12Collections = collection(firebase, "SD12");
    const fetchSD12Data = async () => {
      try {
        const q12 = query(
          SD12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          SD12Data.push(data12);
          // Use the data as needed
        });
        console.log(SD12Data);
        setSD12(SD12Data);
      } catch (error) {}
    };
    fetchSD12Data();
  }, []);
  const [SD13, setSD13] = useState([]);
  useEffect(() => {
    const SD13Data = [];
    const SD13Collections = collection(firebase, "SD13");
    const fetchSD13Data = async () => {
      try {
        const q13 = query(
          SD13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          SD13Data.push(data13);
          // Use the data as needed
        });
        console.log(SD13Data);
        setSD13(SD13Data);
      } catch (error) {}
    };
    fetchSD13Data();
  }, []);
  const [SD14, setSD14] = useState([]);
  useEffect(() => {
    const SD14Data = [];
    const SD14Collections = collection(firebase, "SD14");
    const fetchSD14Data = async () => {
      try {
        const q14 = query(
          SD14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          SD14Data.push(data14);
          // Use the data as needed
        });
        console.log(SD14Data);
        setSD14(SD14Data);
      } catch (error) {}
    };
    fetchSD14Data();
  }, []);
  const [SD15, setSD15] = useState([]);
  useEffect(() => {
    const SD15Data = [];
    const SD15Collections = collection(firebase, "SD15");
    const fetchSD15Data = async () => {
      try {
        const q15 = query(
          SD15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          SD15Data.push(data15);
          // Use the data as needed
        });
        console.log(SD15Data);
        setSD15(SD15Data);
      } catch (error) {}
    };
    fetchSD15Data();
  }, []);
  const [SD16, setSD16] = useState([]);
  useEffect(() => {
    const SD16Data = [];
    const SD16Collections = collection(firebase, "SD16");
    const fetchSD16Data = async () => {
      try {
        const q16 = query(
          SD16Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot16 = await getDocs(q16);
        querySnapshot16.forEach((doc) => {
          const data16 = doc.data();
          SD16Data.push(data16);
          // Use the data as needed
        });
        console.log(SD16Data);
        setSD16(SD16Data);
      } catch (error) {}
    };
    fetchSD16Data();
  }, []);

  const [SD17, setSD17] = useState([]);
  useEffect(() => {
    const SD17Data = [];
    const SD17Collections = collection(firebase, "SD17");
    const fetchSD17Data = async () => {
      try {
        const q17 = query(
          SD17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          SD17Data.push(data17);
          // Use the data as needed
        });
        console.log(SD17Data);
        setSD17(SD17Data);
      } catch (error) {}
    };
    fetchSD17Data();
  }, []);
  const [SD18, setSD18] = useState([]);
  useEffect(() => {
    const SD18Data = [];
    const SD18Collections = collection(firebase, "SD18");
    const fetchSD18Data = async () => {
      try {
        const q18 = query(
          SD18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          SD18Data.push(data18);
          // Use the data as needed
        });
        console.log(SD18Data);
        setSD18(SD18Data);
      } catch (error) {}
    };
    fetchSD18Data();
  }, []);
  const [SD19, setSD19] = useState([]);
  useEffect(() => {
    const SD19Data = [];
    const SD19Collections = collection(firebase, "SD19");
    const fetchSD19Data = async () => {
      try {
        const q19 = query(
          SD19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          SD19Data.push(data19);
          // Use the data as needed
        });
        console.log(SD19Data);
        setSD19(SD19Data);
      } catch (error) {}
    };
    fetchSD19Data();
  }, []);
  const [SD20, setSD20] = useState([]);
  useEffect(() => {
    const SD20Data = [];
    const SD20Collections = collection(firebase, "SD20");
    const fetchSD20Data = async () => {
      try {
        const q20 = query(
          SD20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          SD20Data.push(data20);
          // Use the data as needed
        });
        console.log(SD20Data);
        setSD20(SD20Data);
      } catch (error) {}
    };
    fetchSD20Data();
  }, []);
  const [SD21, setSD21] = useState([]);
  useEffect(() => {
    const SD21Data = [];
    const SD21Collections = collection(firebase, "SD21");
    const fetchSD21Data = async () => {
      try {
        const q21 = query(
          SD21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          SD21Data.push(data21);
          // Use the data as needed
        });
        console.log(SD21Data);
        setSD21(SD21Data);
      } catch (error) {}
    };
    fetchSD21Data();
  }, []);
  //  refresh
  const refreshData = async () => {
    const SD21Data = [];
    const SD21Collections = collection(firebase, "SD21");
    const fetchSD21Data = async () => {
      try {
        const q21 = query(
          SD21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          SD21Data.push(data21);
          // Use the data as needed
        });
        console.log(SD21Data);
        setSD21(SD21Data);
      } catch (error) {}
    };
    fetchSD21Data();
    const SD20Data = [];
    const SD20Collections = collection(firebase, "SD20");
    const fetchSD20Data = async () => {
      try {
        const q20 = query(
          SD20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          SD20Data.push(data20);
          // Use the data as needed
        });
        console.log(SD20Data);
        setSD20(SD20Data);
      } catch (error) {}
    };
    fetchSD20Data();
    const SD19Data = [];
    const SD19Collections = collection(firebase, "SD19");
    const fetchSD19Data = async () => {
      try {
        const q19 = query(
          SD19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          SD19Data.push(data19);
          // Use the data as needed
        });
        console.log(SD19Data);
        setSD19(SD19Data);
      } catch (error) {}
    };
    fetchSD19Data();
    const SD18Data = [];
    const SD18Collections = collection(firebase, "SD18");
    const fetchSD18Data = async () => {
      try {
        const q18 = query(
          SD18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          SD18Data.push(data18);
          // Use the data as needed
        });
        console.log(SD18Data);
        setSD18(SD18Data);
      } catch (error) {}
    };
    fetchSD18Data();

    const SD17Data = [];
    const SD17Collections = collection(firebase, "SD17");
    const fetchSD17Data = async () => {
      try {
        const q17 = query(
          SD17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          SD17Data.push(data17);
          // Use the data as needed
        });
        console.log(SD17Data);
        setSD17(SD17Data);
      } catch (error) {}
    };
    fetchSD17Data();
    const SD16Data = [];
    const SD16Collections = collection(firebase, "SD16");
    const fetchSD16Data = async () => {
      try {
        const q16 = query(
          SD16Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot16 = await getDocs(q16);
        querySnapshot16.forEach((doc) => {
          const data16 = doc.data();
          SD16Data.push(data16);
          // Use the data as needed
        });
        console.log(SD16Data);
        setSD16(SD16Data);
      } catch (error) {}
    };
    fetchSD16Data();
    const SD15Data = [];
    const SD15Collections = collection(firebase, "SD15");
    const fetchSD15Data = async () => {
      try {
        const q15 = query(
          SD15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          SD15Data.push(data15);
          // Use the data as needed
        });
        console.log(SD15Data);
        setSD15(SD15Data);
      } catch (error) {}
    };
    fetchSD15Data();
    const SD14Data = [];
    const SD14Collections = collection(firebase, "SD14");
    const fetchSD14Data = async () => {
      try {
        const q14 = query(
          SD14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          SD14Data.push(data14);
          // Use the data as needed
        });
        console.log(SD14Data);
        setSD14(SD14Data);
      } catch (error) {}
    };
    fetchSD14Data();
    const SD13Data = [];
    const SD13Collections = collection(firebase, "SD13");
    const fetchSD13Data = async () => {
      try {
        const q13 = query(
          SD13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          SD13Data.push(data13);
          // Use the data as needed
        });
        console.log(SD13Data);
        setSD13(SD13Data);
      } catch (error) {}
    };
    fetchSD13Data();
    const SD12Data = [];
    const SD12Collections = collection(firebase, "SD12");
    const fetchSD12Data = async () => {
      try {
        const q12 = query(
          SD12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          SD12Data.push(data12);
          // Use the data as needed
        });
        console.log(SD12Data);
        setSD12(SD12Data);
      } catch (error) {}
    };
    fetchSD12Data();
    const SD11Data = [];
    const SD11Collections = collection(firebase, "SD11");
    const fetchSD11Data = async () => {
      try {
        const q11 = query(
          SD11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          SD11Data.push(data11);
          // Use the data as needed
        });
        console.log(SD11Data);
        setSD11(SD11Data);
      } catch (error) {}
    };
    fetchSD11Data();
    const SD10Data = [];
    const SD10Collections = collection(firebase, "SD10");
    const fetchSD10Data = async () => {
      try {
        const q10 = query(
          SD10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          SD10Data.push(data10);
          // Use the data as needed
        });
        console.log(SD10Data);
        setSD10(SD10Data);
      } catch (error) {}
    };
    fetchSD10Data();
    const SD9Collections = collection(firebase, "SD9");
    const fetchSD9Data = async () => {
      try {
        const q9 = query(
          SD9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          SD9Data.push(data9);
          // Use the data as needed
        });
        console.log(SD9Data);
        setSD9(SD9Data);
      } catch (error) {}
    };
    fetchSD9Data();

    const SD8Data = [];
    const SD8Collections = collection(firebase, "SD8");
    const fetchSD8Data = async () => {
      try {
        const q8 = query(
          SD8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          SD8Data.push(data8);
          // Use the data as needed
        });
        console.log(SD8Data);
        setSD8(SD8Data);
      } catch (error) {}
    };
    fetchSD8Data();
    const SD7Data = [];
    const SD7Collections = collection(firebase, "SD7");
    const fetchSD7Data = async () => {
      try {
        const q7 = query(
          SD7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          SD7Data.push(data7);
          // Use the data as needed
        });
        console.log(SD7Data);
        setSD7(SD7Data);
      } catch (error) {}
    };
    fetchSD7Data();
    const SD6Data = [];
    const SD6Collections = collection(firebase, "SD6");
    const fetchSD6Data = async () => {
      try {
        const q6 = query(
          SD6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          SD6Data.push(data6);
          // Use the data as needed
        });
        console.log(SD6Data);
        setSD6(SD6Data);
      } catch (error) {}
    };
    fetchSD6Data();
    const SD5Data = [];
    const SD5Collections = collection(firebase, "SD5");
    const fetchSD5Data = async () => {
      try {
        const q5 = query(
          SD5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          SD5Data.push(data5);
          // Use the data as needed
        });
        console.log(SD5Data);
        setSD5(SD5Data);
      } catch (error) {}
    };
    fetchSD5Data();
    const SD4Data = [];
    const SD4Collections = collection(firebase, "SD4");
    const fetchSD4Data = async () => {
      try {
        const q4 = query(
          SD4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          SD4Data.push(data4);
          // Use the data as needed
        });
        console.log(SD4Data);
        setSD4(SD4Data);
      } catch (error) {}
    };
    fetchSD4Data();
    const SD3Data = [];
    const SD3Collections = collection(firebase, "SD3");
    const fetchSD3Data = async () => {
      try {
        const q3 = query(
          SD3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          SD3Data.push(data3);
          // Use the data as needed
        });
        console.log(SD3Data);
        setSD3(SD3Data);
      } catch (error) {}
    };
    fetchSD3Data();
    const SD2Data = [];
    const SD2Collections = collection(firebase, "SD2");
    const fetchSD2Data = async () => {
      try {
        const q2 = query(
          SD2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          SD2Data.push(data2);
          // Use the data as needed
        });
        console.log(SD2Data);
        setSD2(SD2Data);
      } catch (error) {}
    };
    fetchSD2Data();
    const SD1Data = [];
    const SD1Collections = collection(firebase, "SD1");
    const fetchSD1Data = async () => {
      try {
        const q1 = query(
          SD1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          const data1 = doc.data();
          SD1Data.push(data1);
          // Use the data as needed
          console.log("Fetched FE1 data:", data1);
        });
        console.log(SD1Data);
        setSD1(SD1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchSD1Data();
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={{ alignItems: "center", left: wp("23%") }}>
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

        <ImageBackground
          source={require("../../assets/images/FDC_1st.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
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
                            <Text style={styles.inspected}>
                              INSPECTED TODAY
                            </Text>
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
                  <TouchableOpacity
                    style={styles.modalButtonY}
                    onPress={hideModal}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <View style={styles.button21Row}>
            {SD1.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button21}
                onPress={() => showModal("1")}
              >
                <View style={styles.b22StackStack}>
                  <View style={styles.b22Stack}>
                    <View
                      style={[
                        styles.b22,
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
                      style={styles.bbb21}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb21,
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

            {SD2.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button10}
                onPress={() => showModal("2")}
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

            {SD3.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button9}
                onPress={() => showModal("3")}
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
          </View>
          <View style={styles.button20Row}>
            {SD4.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button20}
                onPress={() => showModal("4")}
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
            {SD5.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button11}
                onPress={() => showModal("5")}
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
          </View>
          <View style={styles.button12Row}>
            {SD6.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button12}
                onPress={() => showModal("6")}
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
            {SD7.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button8}
                onPress={() => showModal("7")}
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
          </View>
          <View style={styles.button19ColumnRow}>
            <View style={styles.button19Column}>
              {SD8.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button19}
                  onPress={() => showModal("8")}
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
              {SD7.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button18}
                  onPress={() => showModal("9")}
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
              {SD10.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button17}
                  onPress={() => showModal("10")}
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
            </View>
            <View style={styles.button13Column}>
              {SD11.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button13}
                  onPress={() => showModal("11")}
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
              {SD12.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button14}
                  onPress={() => showModal("12")}
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
            </View>
            <View style={styles.button7Column}>
              {SD13.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button7}
                  onPress={() => showModal("13")}
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
              {SD14.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button6}
                  onPress={() => showModal("14")}
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
            </View>
          </View>
          <View style={styles.button15Row}>
            {SD15.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button15}
                onPress={() => showModal("15")}
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
            {SD16.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button5}
                onPress={() => showModal("16")}
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
          </View>
          {SD17.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button16}
              onPress={() => showModal("17")}
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
          <View style={styles.button1Row}>
            {SD18.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button1}
                onPress={() => showModal("18")}
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
            {SD19.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button2}
                onPress={() => showModal("19")}
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
            {SD20.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button3}
                onPress={() => showModal("20")}
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
            {SD21.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button4}
                onPress={() => showModal("21")}
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
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
    paddingRight: wp("50%"),

    height: wp("150%"),
  },
  image: {
    width: 428,
    height: 702,
    marginTop: 49,
    marginLeft: 403,
  },
  image_imageStyle: {},
  button21: {
    width: 30,
    height: 31,
  },
  b22: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb21: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
  },
  b22Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb21: {
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
  b22StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button10: {
    width: 30,
    height: 31,
    marginLeft: 31,
    marginTop: 16,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button9: {
    width: 30,
    height: 31,
    marginLeft: 196,
    marginTop: 19,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button21Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 32,
    marginRight: 79,
  },
  button20: {
    width: 30,
    height: 31,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button11: {
    width: 30,
    height: 31,
    marginLeft: 31,
    marginTop: 28,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button20Row: {
    height: 59,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 32,
    marginRight: 305,
  },
  button12: {
    width: 30,
    height: 31,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button8: {
    width: 30,
    height: 31,
    marginLeft: 220,
    marginTop: 6,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button12Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 93,
    marginRight: 55,
  },
  button19: {
    width: 30,
    height: 31,
    marginLeft: 9,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button18: {
    width: 30,
    height: 31,
    marginTop: 32,
    marginLeft: 9,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button17: {
    width: 30,
    height: 31,
    marginTop: 39,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button19Column: {
    width: 39,
  },
  button13: {
    width: 30,
    height: 31,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
    marginTop: 31,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button13Column: {
    width: 30,
    marginLeft: 31,
    marginTop: 47,
    marginBottom: 24,
  },
  button7: {
    width: 30,
    height: 31,
    marginLeft: 1,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button6: {
    width: 30,
    height: 31,
    marginTop: 33,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button7Column: {
    width: 31,
    marginLeft: 220,
    marginTop: 25,
    marginBottom: 44,
  },
  button19ColumnRow: {
    height: 164,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 23,
    marginRight: 54,
  },
  button15: {
    width: 30,
    height: 31,
    marginTop: 21,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button5: {
    width: 30,
    height: 31,
    marginLeft: 220,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button15Row: {
    height: 52,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 93,
    marginRight: 55,
  },
  button16: {
    width: 30,
    height: 31,
    marginTop: 30,
    marginLeft: 93,
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
    zIndex: 10,
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button1: {
    width: 30,
    height: 31,
    marginTop: 2,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
    marginLeft: 37,
    marginTop: 1,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button3: {
    width: 30,
    height: 31,
    marginLeft: 84,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button4: {
    width: 30,
    height: 31,
    marginLeft: 33,
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0,
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
  button1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 83,
    marginLeft: 85,
    marginRight: 69,
  },
});
