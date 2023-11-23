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

  const [S1, setS1] = useState([]);
  useEffect(() => {
    const S1Data = [];
    const S1Collections = collection(firebase, "S1");
    const fetchS1Data = async () => {
      try {
        const q1 = query(
          S1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          const data1 = doc.data();
          S1Data.push(data1);
          // Use the data as needed
          console.log("Fetched FE1 data:", data1);
        });
        console.log(S1Data);
        setS1(S1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS1Data();
  }, []);

  const [S2, setS2] = useState([]);
  useEffect(() => {
    const S2Data = [];
    const S2Collections = collection(firebase, "S2");
    const fetchS2Data = async () => {
      try {
        const q2 = query(
          S2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          S2Data.push(data2);
        });

        setS2(S2Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS2Data();
  }, []);

  const [S3, setS3] = useState([]);
  useEffect(() => {
    const S3Data = [];
    const S3Collections = collection(firebase, "S3");
    const fetchS3Data = async () => {
      try {
        const q3 = query(
          S3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          S3Data.push(data3);
        });

        setS3(S3Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS3Data();
  }, []);
  const [S4, setS4] = useState([]);
  useEffect(() => {
    const S4Data = [];
    const S4Collections = collection(firebase, "S4");
    const fetchS4Data = async () => {
      try {
        const q4 = query(
          S4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          S4Data.push(data4);
        });

        setS4(S4Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS4Data();
  }, []);

  const [S5, setS5] = useState([]);
  useEffect(() => {
    const S5Data = [];
    const S5Collections = collection(firebase, "S5");
    const fetchS5Data = async () => {
      try {
        const q5 = query(
          S5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          S5Data.push(data5);
        });

        setS5(S5Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS5Data();
  }, []);

  const [S6, setS6] = useState([]);
  useEffect(() => {
    const S6Data = [];
    const S6Collections = collection(firebase, "S6");
    const fetchS6Data = async () => {
      try {
        const q6 = query(
          S6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          S6Data.push(data6);
        });

        setS6(S6Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS6Data();
  }, []);
  const [S7, setS7] = useState([]);
  useEffect(() => {
    const S7Data = [];
    const S7Collections = collection(firebase, "S7");
    const fetchS7Data = async () => {
      try {
        const q7 = query(
          S7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          S7Data.push(data7);
        });

        setS7(S7Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS7Data();
  }, []);
  const [S8, setS8] = useState([]);
  useEffect(() => {
    const S8Data = [];
    const S8Collections = collection(firebase, "S8");
    const fetchS8Data = async () => {
      try {
        const q8 = query(
          S8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          S8Data.push(data8);
        });

        setS8(S8Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS8Data();
  }, []);

  const [S9, setS9] = useState([]);
  useEffect(() => {
    const S9Data = [];
    const S9Collections = collection(firebase, "S9");
    const fetchS9Data = async () => {
      try {
        const q9 = query(
          S9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          S9Data.push(data9);
        });

        setS9(S9Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS9Data();
  }, []);
  const [S10, setS10] = useState([]);
  useEffect(() => {
    const S10Data = [];
    const S10Collections = collection(firebase, "S10");
    const fetchS10Data = async () => {
      try {
        const q10 = query(
          S10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          S10Data.push(data10);
        });

        setS10(S10Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS10Data();
  }, []);

  const [S11, setS11] = useState([]);
  useEffect(() => {
    const S11Data = [];
    const S11Collections = collection(firebase, "S11");
    const fetchS11Data = async () => {
      try {
        const q11 = query(
          S11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          S11Data.push(data11);
        });

        setS11(S11Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS11Data();
  }, []);
  const [S12, setS12] = useState([]);
  useEffect(() => {
    const S12Data = [];
    const S12Collections = collection(firebase, "S12");
    const fetchS12Data = async () => {
      try {
        const q12 = query(
          S12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          S12Data.push(data12);
        });

        setS12(S12Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS12Data();
  }, []);

  const [S13, setS13] = useState([]);
  useEffect(() => {
    const S13Data = [];
    const S13Collections = collection(firebase, "S13");
    const fetchS13Data = async () => {
      try {
        const q13 = query(
          S13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          S13Data.push(data13);
        });

        setS13(S13Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS13Data();
  }, []);
  const [S14, setS14] = useState([]);
  useEffect(() => {
    const S14Data = [];
    const S14Collections = collection(firebase, "S14");
    const fetchS14Data = async () => {
      try {
        const q14 = query(
          S14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          S14Data.push(data14);
        });

        setS14(S14Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS14Data();
  }, []);

  const [S15, setS15] = useState([]);
  useEffect(() => {
    const S15Data = [];
    const S15Collections = collection(firebase, "S15");
    const fetchS15Data = async () => {
      try {
        const q15 = query(
          S15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          S15Data.push(data15);
        });

        setS15(S15Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS15Data();
  }, []);

  const [S16, setS16] = useState([]);
  useEffect(() => {
    const S16Data = [];
    const S16Collections = collection(firebase, "S16");
    const fetchS16Data = async () => {
      try {
        const q16 = query(
          S16Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot16 = await getDocs(q16);
        querySnapshot16.forEach((doc) => {
          const data16 = doc.data();
          S16Data.push(data16);
        });

        setS16(S16Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS16Data();
  }, []);
  const [S17, setS17] = useState([]);
  useEffect(() => {
    const S17Data = [];
    const S17Collections = collection(firebase, "S17");
    const fetchS17Data = async () => {
      try {
        const q17 = query(
          S17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          S17Data.push(data17);
        });

        setS17(S17Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS17Data();
  }, []);
  const [S18, setS18] = useState([]);
  useEffect(() => {
    const S18Data = [];
    const S18Collections = collection(firebase, "S18");
    const fetchS18Data = async () => {
      try {
        const q18 = query(
          S18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          S18Data.push(data18);
        });

        setS18(S18Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS18Data();
  }, []);

  const [S19, setS19] = useState([]);
  useEffect(() => {
    const S19Data = [];
    const S19Collections = collection(firebase, "S19");
    const fetchS19Data = async () => {
      try {
        const q19 = query(
          S19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          S19Data.push(data19);
        });

        setS19(S19Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS19Data();
  }, []);
  const [S20, setS20] = useState([]);
  useEffect(() => {
    const S20Data = [];
    const S20Collections = collection(firebase, "S20");
    const fetchS20Data = async () => {
      try {
        const q20 = query(
          S20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          S20Data.push(data20);
        });

        setS20(S20Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS20Data();
  }, []);

  const [S21, setS21] = useState([]);
  useEffect(() => {
    const S21Data = [];
    const S21Collections = collection(firebase, "S21");
    const fetchS21Data = async () => {
      try {
        const q21 = query(
          S21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          S21Data.push(data21);
        });

        setS21(S21Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS21Data();
  }, []);
  const [S22, setS22] = useState([]);
  useEffect(() => {
    const S22Data = [];
    const S22Collections = collection(firebase, "S22");
    const fetchS22Data = async () => {
      try {
        const q22 = query(
          S22Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot22 = await getDocs(q22);
        querySnapshot22.forEach((doc) => {
          const data22 = doc.data();
          S22Data.push(data22);
        });

        setS22(S22Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS22Data();
  }, []);

  const [S23, setS23] = useState([]);
  useEffect(() => {
    const S23Data = [];
    const S23Collections = collection(firebase, "S23");
    const fetchS23Data = async () => {
      try {
        const q23 = query(
          S23Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot23 = await getDocs(q23);
        querySnapshot23.forEach((doc) => {
          const data23 = doc.data();
          S23Data.push(data23);
        });

        setS23(S23Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS23Data();
  }, []);
  const [S24, setS24] = useState([]);
  useEffect(() => {
    const S24Data = [];
    const S24Collections = collection(firebase, "S24");
    const fetchS24Data = async () => {
      try {
        const q24 = query(
          S24Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot24 = await getDocs(q24);
        querySnapshot24.forEach((doc) => {
          const data24 = doc.data();
          S24Data.push(data24);
        });

        setS24(S24Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS24Data();
  }, []);

  const [S25, setS25] = useState([]);
  useEffect(() => {
    const S25Data = [];
    const S25Collections = collection(firebase, "S25");
    const fetchS25Data = async () => {
      try {
        const q25 = query(
          S25Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot25 = await getDocs(q25);
        querySnapshot25.forEach((doc) => {
          const data25 = doc.data();
          S25Data.push(data25);
        });

        setS25(S25Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS25Data();
  }, []);

  const [S26, setS26] = useState([]);
  useEffect(() => {
    const S26Data = [];
    const S26Collections = collection(firebase, "S26");
    const fetchS26Data = async () => {
      try {
        const q26 = query(
          S26Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot26 = await getDocs(q26);
        querySnapshot26.forEach((doc) => {
          const data26 = doc.data();
          S26Data.push(data26);
        });

        setS26(S26Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS26Data();
  }, []);

  const [S27, setS27] = useState([]);
  useEffect(() => {
    const S27Data = [];
    const S27Collections = collection(firebase, "S27");
    const fetchS27Data = async () => {
      try {
        const q27 = query(
          S27Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot27 = await getDocs(q27);
        querySnapshot27.forEach((doc) => {
          const data27 = doc.data();
          S27Data.push(data27);
        });

        setS27(S27Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS27Data();
  }, []);

  const [S28, setS28] = useState([]);
  useEffect(() => {
    const S28Data = [];
    const S28Collections = collection(firebase, "S28");
    const fetchS28Data = async () => {
      try {
        const q28 = query(
          S28Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot28 = await getDocs(q28);
        querySnapshot28.forEach((doc) => {
          const data28 = doc.data();
          S28Data.push(data28);
        });

        setS28(S28Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS28Data();
  }, []);
  const [S29, setS29] = useState([]);
  useEffect(() => {
    const S29Data = [];
    const S29Collections = collection(firebase, "S29");
    const fetchS29Data = async () => {
      try {
        const q29 = query(
          S29Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot29 = await getDocs(q29);
        querySnapshot29.forEach((doc) => {
          const data29 = doc.data();
          S29Data.push(data29);
        });

        setS29(S29Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS29Data();
  }, []);

  const [S30, setS30] = useState([]);
  useEffect(() => {
    const S30Data = [];
    const S30Collections = collection(firebase, "S30");
    const fetchS30Data = async () => {
      try {
        const q30 = query(
          S30Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot30 = await getDocs(q30);
        querySnapshot30.forEach((doc) => {
          const data30 = doc.data();
          S30Data.push(data30);
        });

        setS30(S30Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS30Data();
  }, []);

  const refreshData = async () => {
    const S30Data = [];
    const S30Collections = collection(firebase, "S30");
    const fetchS30Data = async () => {
      try {
        const q30 = query(
          S30Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot30 = await getDocs(q30);
        querySnapshot30.forEach((doc) => {
          const data30 = doc.data();
          S30Data.push(data30);
        });

        setS30(S30Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS30Data();
    const S29Data = [];
    const S29Collections = collection(firebase, "S29");
    const fetchS29Data = async () => {
      try {
        const q29 = query(
          S29Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot29 = await getDocs(q29);
        querySnapshot29.forEach((doc) => {
          const data29 = doc.data();
          S29Data.push(data29);
        });

        setS29(S29Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS29Data();
    const S28Data = [];
    const S28Collections = collection(firebase, "S28");
    const fetchS28Data = async () => {
      try {
        const q28 = query(
          S28Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot28 = await getDocs(q28);
        querySnapshot28.forEach((doc) => {
          const data28 = doc.data();
          S28Data.push(data28);
        });

        setS28(S28Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS28Data();
    const S27Data = [];
    const S27Collections = collection(firebase, "S27");
    const fetchS27Data = async () => {
      try {
        const q27 = query(
          S27Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot27 = await getDocs(q27);
        querySnapshot27.forEach((doc) => {
          const data27 = doc.data();
          S27Data.push(data27);
        });

        setS27(S27Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS27Data();
    const S26Data = [];
    const S26Collections = collection(firebase, "S26");
    const fetchS26Data = async () => {
      try {
        const q26 = query(
          S26Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot26 = await getDocs(q26);
        querySnapshot26.forEach((doc) => {
          const data26 = doc.data();
          S26Data.push(data26);
        });

        setS26(S26Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS26Data();
    const S25Data = [];
    const S25Collections = collection(firebase, "S25");
    const fetchS25Data = async () => {
      try {
        const q25 = query(
          S25Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot25 = await getDocs(q25);
        querySnapshot25.forEach((doc) => {
          const data25 = doc.data();
          S25Data.push(data25);
        });

        setS25(S25Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS25Data();
    const S24Data = [];
    const S24Collections = collection(firebase, "S24");
    const fetchS24Data = async () => {
      try {
        const q24 = query(
          S24Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot24 = await getDocs(q24);
        querySnapshot24.forEach((doc) => {
          const data24 = doc.data();
          S24Data.push(data24);
        });

        setS24(S24Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS24Data();
    const S23Data = [];
    const S23Collections = collection(firebase, "S23");
    const fetchS23Data = async () => {
      try {
        const q23 = query(
          S23Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot23 = await getDocs(q23);
        querySnapshot23.forEach((doc) => {
          const data23 = doc.data();
          S23Data.push(data23);
        });

        setS23(S23Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS23Data();
    const S22Data = [];
    const S22Collections = collection(firebase, "S22");
    const fetchS22Data = async () => {
      try {
        const q22 = query(
          S22Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot22 = await getDocs(q22);
        querySnapshot22.forEach((doc) => {
          const data22 = doc.data();
          S22Data.push(data22);
        });

        setS22(S22Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS22Data();
    const S21Data = [];
    const S21Collections = collection(firebase, "S21");
    const fetchS21Data = async () => {
      try {
        const q21 = query(
          S21Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot21 = await getDocs(q21);
        querySnapshot21.forEach((doc) => {
          const data21 = doc.data();
          S21Data.push(data21);
        });

        setS21(S21Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS21Data();
    const S20Data = [];
    const S20Collections = collection(firebase, "S20");
    const fetchS20Data = async () => {
      try {
        const q20 = query(
          S20Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot20 = await getDocs(q20);
        querySnapshot20.forEach((doc) => {
          const data20 = doc.data();
          S20Data.push(data20);
        });

        setS20(S20Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS20Data();
    const S19Data = [];
    const S19Collections = collection(firebase, "S19");
    const fetchS19Data = async () => {
      try {
        const q19 = query(
          S19Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot19 = await getDocs(q19);
        querySnapshot19.forEach((doc) => {
          const data19 = doc.data();
          S19Data.push(data19);
        });

        setS19(S19Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS19Data();
    const S18Data = [];
    const S18Collections = collection(firebase, "S18");
    const fetchS18Data = async () => {
      try {
        const q18 = query(
          S18Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot18 = await getDocs(q18);
        querySnapshot18.forEach((doc) => {
          const data18 = doc.data();
          S18Data.push(data18);
        });

        setS18(S18Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS18Data();
    const S17Data = [];
    const S17Collections = collection(firebase, "S17");
    const fetchS17Data = async () => {
      try {
        const q17 = query(
          S17Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot17 = await getDocs(q17);
        querySnapshot17.forEach((doc) => {
          const data17 = doc.data();
          S17Data.push(data17);
        });

        setS17(S17Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS17Data();
    const S16Data = [];
    const S16Collections = collection(firebase, "S16");
    const fetchS16Data = async () => {
      try {
        const q16 = query(
          S16Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot16 = await getDocs(q16);
        querySnapshot16.forEach((doc) => {
          const data16 = doc.data();
          S16Data.push(data16);
        });

        setS16(S16Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS16Data();
    const S15Data = [];
    const S15Collections = collection(firebase, "S15");
    const fetchS15Data = async () => {
      try {
        const q15 = query(
          S15Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot15 = await getDocs(q15);
        querySnapshot15.forEach((doc) => {
          const data15 = doc.data();
          S15Data.push(data15);
        });

        setS15(S15Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS15Data();
    const S14Data = [];
    const S14Collections = collection(firebase, "S14");
    const fetchS14Data = async () => {
      try {
        const q14 = query(
          S14Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot14 = await getDocs(q14);
        querySnapshot14.forEach((doc) => {
          const data14 = doc.data();
          S14Data.push(data14);
        });

        setS14(S14Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS14Data();
    const S13Data = [];
    const S13Collections = collection(firebase, "S13");
    const fetchS13Data = async () => {
      try {
        const q13 = query(
          S13Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot13 = await getDocs(q13);
        querySnapshot13.forEach((doc) => {
          const data13 = doc.data();
          S13Data.push(data13);
        });

        setS13(S13Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS13Data();
    const S12Data = [];
    const S12Collections = collection(firebase, "S12");
    const fetchS12Data = async () => {
      try {
        const q12 = query(
          S12Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot12 = await getDocs(q12);
        querySnapshot12.forEach((doc) => {
          const data12 = doc.data();
          S12Data.push(data12);
        });

        setS12(S12Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS12Data();
    const S11Data = [];
    const S11Collections = collection(firebase, "S11");
    const fetchS11Data = async () => {
      try {
        const q11 = query(
          S11Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot11 = await getDocs(q11);
        querySnapshot11.forEach((doc) => {
          const data11 = doc.data();
          S11Data.push(data11);
        });

        setS11(S11Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS11Data();
    const S10Data = [];
    const S10Collections = collection(firebase, "S10");
    const fetchS10Data = async () => {
      try {
        const q10 = query(
          S10Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot10 = await getDocs(q10);
        querySnapshot10.forEach((doc) => {
          const data10 = doc.data();
          S10Data.push(data10);
        });

        setS10(S10Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS10Data();
    const S9Data = [];
    const S9Collections = collection(firebase, "S9");
    const fetchS9Data = async () => {
      try {
        const q9 = query(
          S9Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot9 = await getDocs(q9);
        querySnapshot9.forEach((doc) => {
          const data9 = doc.data();
          S9Data.push(data9);
        });

        setS9(S9Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS9Data();
    const S8Data = [];
    const S8Collections = collection(firebase, "S8");
    const fetchS8Data = async () => {
      try {
        const q8 = query(
          S8Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot8 = await getDocs(q8);
        querySnapshot8.forEach((doc) => {
          const data8 = doc.data();
          S8Data.push(data8);
        });

        setS8(S8Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS8Data();
    const S7Data = [];
    const S7Collections = collection(firebase, "S7");
    const fetchS7Data = async () => {
      try {
        const q7 = query(
          S7Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot7 = await getDocs(q7);
        querySnapshot7.forEach((doc) => {
          const data7 = doc.data();
          S7Data.push(data7);
        });

        setS7(S7Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS7Data();
    const S6Data = [];
    const S6Collections = collection(firebase, "S6");
    const fetchS6Data = async () => {
      try {
        const q6 = query(
          S6Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot6 = await getDocs(q6);
        querySnapshot6.forEach((doc) => {
          const data6 = doc.data();
          S6Data.push(data6);
        });

        setS6(S6Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS6Data();
    const S5Data = [];
    const S5Collections = collection(firebase, "S5");
    const fetchS5Data = async () => {
      try {
        const q5 = query(
          S5Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot5 = await getDocs(q5);
        querySnapshot5.forEach((doc) => {
          const data5 = doc.data();
          S5Data.push(data5);
        });

        setS5(S5Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS5Data();
    const S4Data = [];
    const S4Collections = collection(firebase, "S4");
    const fetchS4Data = async () => {
      try {
        const q4 = query(
          S4Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot4 = await getDocs(q4);
        querySnapshot4.forEach((doc) => {
          const data4 = doc.data();
          S4Data.push(data4);
        });

        setS4(S4Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS4Data();
    const S3Data = [];
    const S3Collections = collection(firebase, "S3");
    const fetchS3Data = async () => {
      try {
        const q3 = query(
          S3Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot3 = await getDocs(q3);
        querySnapshot3.forEach((doc) => {
          const data3 = doc.data();
          S3Data.push(data3);
        });

        setS3(S3Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS3Data();
    const S2Data = [];
    const S2Collections = collection(firebase, "S2");
    const fetchS2Data = async () => {
      try {
        const q2 = query(
          S2Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          const data2 = doc.data();
          S2Data.push(data2);
        });

        setS2(S2Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS2Data();
    const S1Data = [];
    const S1Collections = collection(firebase, "S1");
    const fetchS1Data = async () => {
      try {
        const q1 = query(
          S1Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          const data1 = doc.data();
          S1Data.push(data1);
          // Use the data as needed
          console.log("Fetched FE1 data:", data1);
        });
        console.log(S1Data);
        setS1(S1Data);
      } catch (error) {
        console.error("Error fetching FE1:", error);
      }
    };
    fetchS1Data();
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          right: 80,
          zIndex: 10,
          bottom: hp("2%"),
        }}
      >
        <TouchableOpacity
          onPress={refreshData}
          style={{
            backgroundColor: "#7FCD91",
            padding: 10,
            borderRadius: 5,
            justifyContent: "center",
            alignSelf: "center",
            left: 70,
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
      <ScrollView horizontal>
        <ImageBackground
          source={require("../../assets/images/CIT_S.png")}
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

          <View style={styles.button5Row}>
            {S1.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button5}
                onPress={() => showModal("1")}
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
            {S2.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button6}
                onPress={() => showModal("2")}
              >
                <View style={styles.b7StackStack}>
                  <View style={styles.b7Stack}>
                    <View
                      style={[
                        styles.b7,
                        {
                          backgroundColor:
                            item.condition === "Good Condition  "
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
            {S3.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button7}
                onPress={() => showModal("3")}
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
            {S4.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button12}
                onPress={() => showModal("4")}
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
            {S5.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button13}
                onPress={() => showModal("5")}
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
            {S6.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button14}
                onPress={() => showModal("6")}
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
            {S7.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button19}
                onPress={() => showModal("7")}
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
            {S8.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button24}
                onPress={() => showModal("8")}
              >
                <View style={styles.b25StackStack}>
                  <View style={styles.b25Stack}>
                    <View
                      style={[
                        styles.b25,
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
                      style={styles.bbb24}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb24,
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
            {S9.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button25}
                onPress={() => showModal("9")}
              >
                <View style={styles.b26StackStack}>
                  <View style={styles.b26Stack}>
                    <View
                      style={[
                        styles.b26,
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
                      style={styles.bbb25}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb25,
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
            {S10.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button30}
                onPress={() => showModal("10")}
              >
                <View style={styles.b31StackStack}>
                  <View style={styles.b31Stack}>
                    <View
                      style={[
                        styles.b31,
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
                      style={styles.bbb30}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb30,
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
          <View style={styles.button4Row}>
            {S11.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button4}
                onPress={() => showModal("11")}
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
            {S12.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button3}
                onPress={() => showModal("12")}
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
            {S13.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button8}
                onPress={() => showModal("13")}
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
            {S14.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button11}
                onPress={() => showModal("14")}
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
            {S15.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button16}
                onPress={() => showModal("15")}
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

            {S16.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button15}
                onPress={() => showModal("16")}
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
            {S17.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button20}
                onPress={() => showModal("17")}
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
            {S18.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button23}
                onPress={() => showModal("18")}
              >
                <View style={styles.b24StackStack}>
                  <View style={styles.b24Stack}>
                    <View
                      style={[
                        styles.b24,
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
                      style={styles.bbb23}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb23,
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
            {S19.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button26}
                onPress={() => showModal("19")}
              >
                <View style={styles.b27StackStack}>
                  <View style={styles.b27Stack}>
                    <View
                      style={[
                        styles.b27,
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
                      style={styles.bbb26}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb26,
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
            {S20.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button29}
                onPress={() => showModal("20")}
              >
                <View style={styles.b30StackStack}>
                  <View style={styles.b30Stack}>
                    <View
                      style={[
                        styles.b30,
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
                      style={styles.bbb29}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb29,
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
            {S21.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button1}
                onPress={() => showModal("21")}
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
            {S22.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button2}
                onPress={() => showModal("22")}
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
            {S23.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button9}
                onPress={() => showModal("23")}
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
            {S24.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button10}
                onPress={() => showModal("24")}
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
            {S25.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button17}
                onPress={() => showModal("25")}
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
            {S26.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button18}
                onPress={() => showModal("26")}
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
            {S27.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button21}
                onPress={() => showModal("27")}
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
            {S28.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button22}
                onPress={() => showModal("28")}
              >
                <View style={styles.b23StackStack}>
                  <View style={styles.b23Stack}>
                    <View
                      style={[
                        styles.b23,
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
                      style={styles.bbb22}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb22,
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
            {S29.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button27}
                onPress={() => showModal("29")}
              >
                <View style={styles.b28StackStack}>
                  <View style={styles.b28Stack}>
                    <View
                      style={[
                        styles.b28,
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
                      style={styles.bbb27}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb27,
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
            {S30.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button28}
                onPress={() => showModal("30")}
              >
                <View style={styles.b29StackStack}>
                  <View style={styles.b29Stack}>
                    <View
                      style={[
                        styles.b29,
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
                      style={styles.bbb28}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb28,
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
    backgroundColor: "rgba(255,255,255,1)",
  },
  image: {
    width: 1139,
    height: 393,

    marginLeft: 71,
  },
  image_imageStyle: {},
  button5: {
    width: 30,
    height: 31,
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
    color: "rgba(53,114,172,1)",
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
  button6: {
    width: 30,
    height: 31,
    marginLeft: 60,
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
    color: "rgba(53,114,172,1)",
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
  button7: {
    width: 30,
    height: 31,
    marginLeft: 55,
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
    color: "rgba(53,114,172,1)",
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
  button12: {
    width: 30,
    height: 31,
    marginLeft: 61,
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
    color: "rgba(53,114,172,1)",
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
  button13: {
    width: 30,
    height: 31,
    marginLeft: 57,
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
    color: "rgba(53,114,172,1)",
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
    marginLeft: 59,
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
    color: "rgba(53,114,172,1)",
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
  button19: {
    width: 30,
    height: 31,
    marginLeft: 55,
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
    color: "rgba(53,114,172,1)",
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
  button24: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b25: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb24: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b25Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb24: {
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
  b25StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button25: {
    width: 30,
    height: 31,
    marginLeft: 53,
  },
  b26: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb25: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b26Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb25: {
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
  b26StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button30: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b31: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb30: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b31Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb30: {
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
  b31StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button5Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 158,
    marginRight: 159,
  },
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
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
  button3: {
    width: 30,
    height: 31,
    marginLeft: 59,
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
    color: "rgba(53,114,172,1)",
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
  button8: {
    width: 30,
    height: 31,
    marginLeft: 55,
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
    color: "rgba(53,114,172,1)",
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
  button11: {
    width: 30,
    height: 31,
    marginLeft: 61,
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
    color: "rgba(53,114,172,1)",
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
  button16: {
    width: 30,
    height: 31,
    marginLeft: 57,
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
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
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
  button15: {
    width: 30,
    height: 31,
    marginLeft: 59,
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
    color: "rgba(53,114,172,1)",
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
  button20: {
    width: 30,
    height: 31,
    marginLeft: 55,
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
    color: "rgba(53,114,172,1)",
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
  button23: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b24: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb23: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b24Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb23: {
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
  b24StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button26: {
    width: 30,
    height: 31,
    marginLeft: 53,
  },
  b27: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb26: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b27Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb26: {
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
  b27StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button29: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b30: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb29: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b30Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb29: {
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
  b30StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button4Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 159,
    marginRight: 159,
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
    color: "rgba(53,114,172,1)",
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
    marginLeft: 61,
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
    color: "rgba(53,114,172,1)",
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
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
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
  button10: {
    width: 30,
    height: 31,
    marginLeft: 61,
    marginTop: 2,
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
    color: "rgba(53,114,172,1)",
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
  button17: {
    width: 30,
    height: 31,
    marginLeft: 56,
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
    color: "rgba(53,114,172,1)",
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
  button18: {
    width: 30,
    height: 31,
    marginLeft: 60,
    marginTop: 2,
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
    color: "rgba(53,114,172,1)",
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
  button21: {
    width: 30,
    height: 31,
    marginLeft: 55,
    marginTop: 2,
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
    color: "rgba(53,114,172,1)",
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
  button22: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b23: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb22: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b23Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb22: {
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
  b23StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button27: {
    width: 30,
    height: 31,
    marginLeft: 53,
  },
  b28: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb27: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b28Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb27: {
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
  b28StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button28: {
    width: 30,
    height: 31,
    marginLeft: 61,
  },
  b29: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb28: {
    zIndex: 10,
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 30,
    left: 0,
  },
  b29Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute",
  },
  bb28: {
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
  b29StackStack: {
    width: 30,
    height: 33,
    marginTop: -2,
  },
  button1Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 158,
    marginRight: 159,
  },
});
