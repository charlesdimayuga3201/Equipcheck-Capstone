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
export default function S_CIT_4th({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [S61, setS61] = useState([]);
  useEffect(() => {
    const S61Data = [];
    const S61Collections = collection(firebase, "S61");
    const fetchS61Data = async () => {
      try {
        const q61 = query(
          S61Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot61 = await getDocs(q61);
        querySnapshot61.forEach((doc) => {
          const data61 = doc.data();
          S61Data.push(data61);
        });

        setS61(S61Data);
      } catch (error) {
        console.error("Error fetching S61:", error);
      }
    };
    fetchS61Data();
  }, []);
  const [S62, setS62] = useState([]);
  useEffect(() => {
    const S62Data = [];
    const S62Collections = collection(firebase, "S62");
    const fetchS62Data = async () => {
      try {
        const q62 = query(
          S62Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot62 = await getDocs(q62);
        querySnapshot62.forEach((doc) => {
          const data62 = doc.data();
          S62Data.push(data62);
        });

        setS62(S62Data);
      } catch (error) {
        console.error("Error fetching S62:", error);
      }
    };
    fetchS62Data();
  }, []);
  const [S63, setS63] = useState([]);
  useEffect(() => {
    const S63Data = [];
    const S63Collections = collection(firebase, "S63");
    const fetchS63Data = async () => {
      try {
        const q63 = query(
          S63Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot63 = await getDocs(q63);
        querySnapshot63.forEach((doc) => {
          const data63 = doc.data();
          S63Data.push(data63);
        });

        setS63(S63Data);
      } catch (error) {
        console.error("Error fetching S63:", error);
      }
    };
    fetchS63Data();
  }, []);
  const [S64, setS64] = useState([]);
  useEffect(() => {
    const S64Data = [];
    const S64Collections = collection(firebase, "S64");
    const fetchS64Data = async () => {
      try {
        const q64 = query(
          S64Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot64 = await getDocs(q64);
        querySnapshot64.forEach((doc) => {
          const data64 = doc.data();
          S64Data.push(data64);
        });

        setS64(S64Data);
      } catch (error) {
        console.error("Error fetching S64:", error);
      }
    };
    fetchS64Data();
  }, []);
  const [S65, setS65] = useState([]);
  useEffect(() => {
    const S65Data = [];
    const S65Collections = collection(firebase, "S65");
    const fetchS65Data = async () => {
      try {
        const q65 = query(
          S65Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot65 = await getDocs(q65);
        querySnapshot65.forEach((doc) => {
          const data65 = doc.data();
          S65Data.push(data65);
        });

        setS65(S65Data);
      } catch (error) {
        console.error("Error fetching S65:", error);
      }
    };
    fetchS65Data();
  }, []);
  const [S66, setS66] = useState([]);
  useEffect(() => {
    const S66Data = [];
    const S66Collections = collection(firebase, "S66");
    const fetchS66Data = async () => {
      try {
        const q66 = query(
          S66Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot66 = await getDocs(q66);
        querySnapshot66.forEach((doc) => {
          const data66 = doc.data();
          S66Data.push(data66);
        });

        setS66(S66Data);
      } catch (error) {
        console.error("Error fetching S66:", error);
      }
    };
    fetchS66Data();
  }, []);
  const [S67, setS67] = useState([]);
  useEffect(() => {
    const S67Data = [];
    const S67Collections = collection(firebase, "S67");
    const fetchS67Data = async () => {
      try {
        const q67 = query(
          S67Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot67 = await getDocs(q67);
        querySnapshot67.forEach((doc) => {
          const data67 = doc.data();
          S67Data.push(data67);
        });

        setS67(S67Data);
      } catch (error) {
        console.error("Error fetching S67:", error);
      }
    };
    fetchS67Data();
  }, []);
  const [S68, setS68] = useState([]);
  useEffect(() => {
    const S68Data = [];
    const S68Collections = collection(firebase, "S68");
    const fetchS68Data = async () => {
      try {
        const q68 = query(
          S68Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot68 = await getDocs(q68);
        querySnapshot68.forEach((doc) => {
          const data68 = doc.data();
          S68Data.push(data68);
        });

        setS68(S68Data);
      } catch (error) {
        console.error("Error fetching S68:", error);
      }
    };
    fetchS68Data();
  }, []);
  const [S69, setS69] = useState([]);
  useEffect(() => {
    const S69Data = [];
    const S69Collections = collection(firebase, "S69");
    const fetchS69Data = async () => {
      try {
        const q69 = query(
          S69Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot69 = await getDocs(q69);
        querySnapshot69.forEach((doc) => {
          const data69 = doc.data();
          S69Data.push(data69);
        });

        setS69(S69Data);
      } catch (error) {
        console.error("Error fetching S69:", error);
      }
    };
    fetchS69Data();
  }, []);
  const [S70, setS70] = useState([]);
  useEffect(() => {
    const S70Data = [];
    const S70Collections = collection(firebase, "S70");
    const fetchS70Data = async () => {
      try {
        const q70 = query(
          S70Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot70 = await getDocs(q70);
        querySnapshot70.forEach((doc) => {
          const data70 = doc.data();
          S70Data.push(data70);
        });

        setS70(S70Data);
      } catch (error) {
        console.error("Error fetching S70:", error);
      }
    };
    fetchS70Data();
  }, []);
  const [S71, setS71] = useState([]);
  useEffect(() => {
    const S71Data = [];
    const S71Collections = collection(firebase, "S71");
    const fetchS71Data = async () => {
      try {
        const q71 = query(
          S71Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot71 = await getDocs(q71);
        querySnapshot71.forEach((doc) => {
          const data71 = doc.data();
          S71Data.push(data71);
        });

        setS71(S71Data);
      } catch (error) {
        console.error("Error fetching S71:", error);
      }
    };
    fetchS71Data();
  }, []);
  const [S72, setS72] = useState([]);
  useEffect(() => {
    const S72Data = [];
    const S72Collections = collection(firebase, "S72");
    const fetchS72Data = async () => {
      try {
        const q72 = query(
          S72Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot72 = await getDocs(q72);
        querySnapshot72.forEach((doc) => {
          const data72 = doc.data();
          S72Data.push(data72);
        });

        setS72(S72Data);
      } catch (error) {
        console.error("Error fetching S72:", error);
      }
    };
    fetchS72Data();
  }, []);
  const [S73, setS73] = useState([]);
  useEffect(() => {
    const S73Data = [];
    const S73Collections = collection(firebase, "S73");
    const fetchS73Data = async () => {
      try {
        const q73 = query(
          S73Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot73 = await getDocs(q73);
        querySnapshot73.forEach((doc) => {
          const data73 = doc.data();
          S73Data.push(data73);
        });

        setS73(S73Data);
      } catch (error) {
        console.error("Error fetching S73:", error);
      }
    };
    fetchS73Data();
  }, []);
  const [S74, setS74] = useState([]);
  useEffect(() => {
    const S74Data = [];
    const S74Collections = collection(firebase, "S74");
    const fetchS74Data = async () => {
      try {
        const q74 = query(
          S74Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot74 = await getDocs(q74);
        querySnapshot74.forEach((doc) => {
          const data74 = doc.data();
          S74Data.push(data74);
        });

        setS74(S74Data);
      } catch (error) {
        console.error("Error fetching S74:", error);
      }
    };
    fetchS74Data();
  }, []);
  const [S75, setS75] = useState([]);
  useEffect(() => {
    const S75Data = [];
    const S75Collections = collection(firebase, "S75");
    const fetchS75Data = async () => {
      try {
        const q75 = query(
          S75Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot75 = await getDocs(q75);
        querySnapshot75.forEach((doc) => {
          const data75 = doc.data();
          S75Data.push(data75);
        });

        setS75(S75Data);
      } catch (error) {
        console.error("Error fetching S75:", error);
      }
    };
    fetchS75Data();
  }, []);
  const [S76, setS76] = useState([]);
  useEffect(() => {
    const S76Data = [];
    const S76Collections = collection(firebase, "S76");
    const fetchS76Data = async () => {
      try {
        const q76 = query(
          S76Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot76 = await getDocs(q76);
        querySnapshot76.forEach((doc) => {
          const data76 = doc.data();
          S76Data.push(data76);
        });

        setS76(S76Data);
      } catch (error) {
        console.error("Error fetching S76:", error);
      }
    };
    fetchS76Data();
  }, []);
  const [S77, setS77] = useState([]);
  useEffect(() => {
    const S77Data = [];
    const S77Collections = collection(firebase, "S77");
    const fetchS77Data = async () => {
      try {
        const q77 = query(
          S77Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot77 = await getDocs(q77);
        querySnapshot77.forEach((doc) => {
          const data77 = doc.data();
          S77Data.push(data77);
        });

        setS77(S77Data);
      } catch (error) {
        console.error("Error fetching S77:", error);
      }
    };
    fetchS77Data();
  }, []);
  const [S78, setS78] = useState([]);
  useEffect(() => {
    const S78Data = [];
    const S78Collections = collection(firebase, "S78");
    const fetchS78Data = async () => {
      try {
        const q78 = query(
          S78Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot78 = await getDocs(q78);
        querySnapshot78.forEach((doc) => {
          const data78 = doc.data();
          S78Data.push(data78);
        });

        setS78(S78Data);
      } catch (error) {
        console.error("Error fetching S78:", error);
      }
    };
    fetchS78Data();
  }, []);
  const [S79, setS79] = useState([]);
  useEffect(() => {
    const S79Data = [];
    const S79Collections = collection(firebase, "S79");
    const fetchS79Data = async () => {
      try {
        const q79 = query(
          S79Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot79 = await getDocs(q79);
        querySnapshot79.forEach((doc) => {
          const data79 = doc.data();
          S79Data.push(data79);
        });

        setS79(S79Data);
      } catch (error) {
        console.error("Error fetching S79:", error);
      }
    };
    fetchS79Data();
  }, []);
  const [S80, setS80] = useState([]);
  useEffect(() => {
    const S80Data = [];
    const S80Collections = collection(firebase, "S80");
    const fetchS80Data = async () => {
      try {
        const q80 = query(
          S80Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot80 = await getDocs(q80);
        querySnapshot80.forEach((doc) => {
          const data80 = doc.data();
          S80Data.push(data80);
        });

        setS80(S80Data);
      } catch (error) {
        console.error("Error fetching S80:", error);
      }
    };
    fetchS80Data();
  }, []);
  const refreshData = async () => {
    const S80Data = [];
    const S80Collections = collection(firebase, "S80");
    const fetchS80Data = async () => {
      try {
        const q80 = query(
          S80Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot80 = await getDocs(q80);
        querySnapshot80.forEach((doc) => {
          const data80 = doc.data();
          S80Data.push(data80);
        });

        setS80(S80Data);
      } catch (error) {
        console.error("Error fetching S80:", error);
      }
    };
    fetchS80Data();
    const S79Data = [];
    const S79Collections = collection(firebase, "S79");
    const fetchS79Data = async () => {
      try {
        const q79 = query(
          S79Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot79 = await getDocs(q79);
        querySnapshot79.forEach((doc) => {
          const data79 = doc.data();
          S79Data.push(data79);
        });

        setS79(S79Data);
      } catch (error) {
        console.error("Error fetching S79:", error);
      }
    };
    fetchS79Data();
    const S78Data = [];
    const S78Collections = collection(firebase, "S78");
    const fetchS78Data = async () => {
      try {
        const q78 = query(
          S78Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot78 = await getDocs(q78);
        querySnapshot78.forEach((doc) => {
          const data78 = doc.data();
          S78Data.push(data78);
        });

        setS78(S78Data);
      } catch (error) {
        console.error("Error fetching S78:", error);
      }
    };
    fetchS78Data();
    const S77Data = [];
    const S77Collections = collection(firebase, "S77");
    const fetchS77Data = async () => {
      try {
        const q77 = query(
          S77Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot77 = await getDocs(q77);
        querySnapshot77.forEach((doc) => {
          const data77 = doc.data();
          S77Data.push(data77);
        });

        setS77(S77Data);
      } catch (error) {
        console.error("Error fetching S77:", error);
      }
    };
    fetchS77Data();
    const S76Data = [];
    const S76Collections = collection(firebase, "S76");
    const fetchS76Data = async () => {
      try {
        const q76 = query(
          S76Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot76 = await getDocs(q76);
        querySnapshot76.forEach((doc) => {
          const data76 = doc.data();
          S76Data.push(data76);
        });

        setS76(S76Data);
      } catch (error) {
        console.error("Error fetching S76:", error);
      }
    };
    fetchS76Data();
    const S75Data = [];
    const S75Collections = collection(firebase, "S75");
    const fetchS75Data = async () => {
      try {
        const q75 = query(
          S75Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot75 = await getDocs(q75);
        querySnapshot75.forEach((doc) => {
          const data75 = doc.data();
          S75Data.push(data75);
        });

        setS75(S75Data);
      } catch (error) {
        console.error("Error fetching S75:", error);
      }
    };
    fetchS75Data();
    const S74Data = [];
    const S74Collections = collection(firebase, "S74");
    const fetchS74Data = async () => {
      try {
        const q74 = query(
          S74Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot74 = await getDocs(q74);
        querySnapshot74.forEach((doc) => {
          const data74 = doc.data();
          S74Data.push(data74);
        });

        setS74(S74Data);
      } catch (error) {
        console.error("Error fetching S74:", error);
      }
    };
    fetchS74Data();
    const S73Data = [];
    const S73Collections = collection(firebase, "S73");
    const fetchS73Data = async () => {
      try {
        const q73 = query(
          S73Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot73 = await getDocs(q73);
        querySnapshot73.forEach((doc) => {
          const data73 = doc.data();
          S73Data.push(data73);
        });

        setS73(S73Data);
      } catch (error) {
        console.error("Error fetching S73:", error);
      }
    };
    fetchS73Data();
    const S72Data = [];
    const S72Collections = collection(firebase, "S72");
    const fetchS72Data = async () => {
      try {
        const q72 = query(
          S72Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot72 = await getDocs(q72);
        querySnapshot72.forEach((doc) => {
          const data72 = doc.data();
          S72Data.push(data72);
        });

        setS72(S72Data);
      } catch (error) {
        console.error("Error fetching S72:", error);
      }
    };
    fetchS72Data();
    const S71Data = [];
    const S71Collections = collection(firebase, "S71");
    const fetchS71Data = async () => {
      try {
        const q71 = query(
          S71Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot71 = await getDocs(q71);
        querySnapshot71.forEach((doc) => {
          const data71 = doc.data();
          S71Data.push(data71);
        });

        setS71(S71Data);
      } catch (error) {
        console.error("Error fetching S71:", error);
      }
    };
    fetchS71Data();
    const S70Data = [];
    const S70Collections = collection(firebase, "S70");
    const fetchS70Data = async () => {
      try {
        const q70 = query(
          S70Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot70 = await getDocs(q70);
        querySnapshot70.forEach((doc) => {
          const data70 = doc.data();
          S70Data.push(data70);
        });

        setS70(S70Data);
      } catch (error) {
        console.error("Error fetching S70:", error);
      }
    };
    fetchS70Data();
    const S69Data = [];
    const S69Collections = collection(firebase, "S69");
    const fetchS69Data = async () => {
      try {
        const q69 = query(
          S69Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot69 = await getDocs(q69);
        querySnapshot69.forEach((doc) => {
          const data69 = doc.data();
          S69Data.push(data69);
        });

        setS69(S69Data);
      } catch (error) {
        console.error("Error fetching S69:", error);
      }
    };
    fetchS69Data();
    const S68Data = [];
    const S68Collections = collection(firebase, "S68");
    const fetchS68Data = async () => {
      try {
        const q68 = query(
          S68Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot68 = await getDocs(q68);
        querySnapshot68.forEach((doc) => {
          const data68 = doc.data();
          S68Data.push(data68);
        });

        setS68(S68Data);
      } catch (error) {
        console.error("Error fetching S68:", error);
      }
    };
    fetchS68Data();
    const S67Data = [];
    const S67Collections = collection(firebase, "S67");
    const fetchS67Data = async () => {
      try {
        const q67 = query(
          S67Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot67 = await getDocs(q67);
        querySnapshot67.forEach((doc) => {
          const data67 = doc.data();
          S67Data.push(data67);
        });

        setS67(S67Data);
      } catch (error) {
        console.error("Error fetching S67:", error);
      }
    };
    fetchS67Data();
    const S66Data = [];
    const S66Collections = collection(firebase, "S66");
    const fetchS66Data = async () => {
      try {
        const q66 = query(
          S66Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot66 = await getDocs(q66);
        querySnapshot66.forEach((doc) => {
          const data66 = doc.data();
          S66Data.push(data66);
        });

        setS66(S66Data);
      } catch (error) {
        console.error("Error fetching S66:", error);
      }
    };
    fetchS66Data();
    const S65Data = [];
    const S65Collections = collection(firebase, "S65");
    const fetchS65Data = async () => {
      try {
        const q65 = query(
          S65Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot65 = await getDocs(q65);
        querySnapshot65.forEach((doc) => {
          const data65 = doc.data();
          S65Data.push(data65);
        });

        setS65(S65Data);
      } catch (error) {
        console.error("Error fetching S65:", error);
      }
    };
    fetchS65Data();
    const S64Data = [];
    const S64Collections = collection(firebase, "S64");
    const fetchS64Data = async () => {
      try {
        const q64 = query(
          S64Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot64 = await getDocs(q64);
        querySnapshot64.forEach((doc) => {
          const data64 = doc.data();
          S64Data.push(data64);
        });

        setS64(S64Data);
      } catch (error) {
        console.error("Error fetching S64:", error);
      }
    };
    fetchS64Data();
    const S63Data = [];
    const S63Collections = collection(firebase, "S63");
    const fetchS63Data = async () => {
      try {
        const q63 = query(
          S63Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot63 = await getDocs(q63);
        querySnapshot63.forEach((doc) => {
          const data63 = doc.data();
          S63Data.push(data63);
        });

        setS63(S63Data);
      } catch (error) {
        console.error("Error fetching S63:", error);
      }
    };
    fetchS63Data();
    const S62Data = [];
    const S62Collections = collection(firebase, "S62");
    const fetchS62Data = async () => {
      try {
        const q62 = query(
          S62Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot62 = await getDocs(q62);
        querySnapshot62.forEach((doc) => {
          const data62 = doc.data();
          S62Data.push(data62);
        });

        setS62(S62Data);
      } catch (error) {
        console.error("Error fetching S62:", error);
      }
    };
    fetchS62Data();
    const S61Data = [];
    const S61Collections = collection(firebase, "S61");
    const fetchS61Data = async () => {
      try {
        const q61 = query(
          S61Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot61 = await getDocs(q61);
        querySnapshot61.forEach((doc) => {
          const data61 = doc.data();
          S61Data.push(data61);
        });

        setS61(S61Data);
      } catch (error) {
        console.error("Error fetching S61:", error);
      }
    };
    fetchS61Data();
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
          source={require("../../assets/images/SCIT_4th.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.button4Row}>
            {S61.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button4}
                onPress={() => showModal("61")}
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
            {S62.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button3}
                onPress={() => showModal("62")}
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
            {S63.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button7}
                onPress={() => showModal("63")}
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
            {S64.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button8}
                onPress={() => showModal("64")}
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
            {S65.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button11}
                onPress={() => showModal("65")}
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
            {S66.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button12}
                onPress={() => showModal("66")}
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
            {S67.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button15}
                onPress={() => showModal("67")}
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
            {S68.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button16}
                onPress={() => showModal("68")}
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
            {S69.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button19}
                onPress={() => showModal("69")}
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
            {S70.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button20}
                onPress={() => showModal("70")}
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
            {S71.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button1}
                onPress={() => showModal("71")}
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
            {S72.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button2}
                onPress={() => showModal("72")}
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
            {S73.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button5}
                onPress={() => showModal("73")}
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
            {S74.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button6}
                onPress={() => showModal("74")}
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
            {S75.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button9}
                onPress={() => showModal("75")}
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
            {S76.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button10}
                onPress={() => showModal("76")}
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
            {S77.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button13}
                onPress={() => showModal("77")}
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
            {S78.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button14}
                onPress={() => showModal("78")}
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
            {S79.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button17}
                onPress={() => showModal("79")}
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
            {S80.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button18}
                onPress={() => showModal("80")}
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
    width: 1144,
    height: 444,
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
    marginLeft: 60,
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
    marginLeft: 60,
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
    marginLeft: 64,
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
    marginLeft: 58,
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
    marginLeft: 58,
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
    marginLeft: 62,
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
    marginLeft: 60,
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
    marginLeft: 63,
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
    marginTop: 84,
    marginLeft: 149,
    marginRight: 149,
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
    marginLeft: 60,
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
    marginLeft: 60,
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
    marginLeft: 63,
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
    marginLeft: 59,
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
    marginLeft: 58,
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
    marginLeft: 62,
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
    marginLeft: 60,
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
    marginLeft: 63,
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
    marginLeft: 149,
    marginRight: 149,
  },
});
