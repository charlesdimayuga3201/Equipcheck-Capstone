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
export default function S_FDC_2nd_1P({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [S182, setS182] = useState([]);
  useEffect(() => {
    const S182Data = [];
    const S182Collections = collection(firebase, "S182");
    const fetchS182Data = async () => {
      try {
        const q182 = query(
          S182Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot182 = await getDocs(q182);
        querySnapshot182.forEach((doc) => {
          const data182 = doc.data();
          S182Data.push(data182);
        });

        setS182(S182Data);
      } catch (error) {
        console.error("Error fetching S182:", error);
      }
    };
    fetchS182Data();
  }, []);
  const [S183, setS183] = useState([]);
  useEffect(() => {
    const S183Data = [];
    const S183Collections = collection(firebase, "S183");
    const fetchS183Data = async () => {
      try {
        const q183 = query(
          S183Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot183 = await getDocs(q183);
        querySnapshot183.forEach((doc) => {
          const data183 = doc.data();
          S183Data.push(data183);
        });

        setS183(S183Data);
      } catch (error) {
        console.error("Error fetching S183:", error);
      }
    };
    fetchS183Data();
  }, []);
  const [S184, setS184] = useState([]);
  useEffect(() => {
    const S184Data = [];
    const S184Collections = collection(firebase, "S184");
    const fetchS184Data = async () => {
      try {
        const q184 = query(
          S184Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot184 = await getDocs(q184);
        querySnapshot184.forEach((doc) => {
          const data184 = doc.data();
          S184Data.push(data184);
        });

        setS184(S184Data);
      } catch (error) {
        console.error("Error fetching S184:", error);
      }
    };
    fetchS184Data();
  }, []);
  const [S185, setS185] = useState([]);
  useEffect(() => {
    const S185Data = [];
    const S185Collections = collection(firebase, "S185");
    const fetchS185Data = async () => {
      try {
        const q185 = query(
          S185Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot185 = await getDocs(q185);
        querySnapshot185.forEach((doc) => {
          const data185 = doc.data();
          S185Data.push(data185);
        });

        setS185(S185Data);
      } catch (error) {
        console.error("Error fetching S185:", error);
      }
    };
    fetchS185Data();
  }, []);
  const [S186, setS186] = useState([]);
  useEffect(() => {
    const S186Data = [];
    const S186Collections = collection(firebase, "S186");
    const fetchS186Data = async () => {
      try {
        const q186 = query(
          S186Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot186 = await getDocs(q186);
        querySnapshot186.forEach((doc) => {
          const data186 = doc.data();
          S186Data.push(data186);
        });

        setS186(S186Data);
      } catch (error) {
        console.error("Error fetching S186:", error);
      }
    };
    fetchS186Data();
  }, []);

  const [S187, setS187] = useState([]);
  useEffect(() => {
    const S187Data = [];
    const S187Collections = collection(firebase, "S187");
    const fetchS187Data = async () => {
      try {
        const q187 = query(
          S187Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot187 = await getDocs(q187);
        querySnapshot187.forEach((doc) => {
          const data187 = doc.data();
          S187Data.push(data187);
        });

        setS187(S187Data);
      } catch (error) {
        console.error("Error fetching S187:", error);
      }
    };
    fetchS187Data();
  }, []);
  const [S188, setS188] = useState([]);
  useEffect(() => {
    const S188Data = [];
    const S188Collections = collection(firebase, "S188");
    const fetchS188Data = async () => {
      try {
        const q188 = query(
          S188Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot188 = await getDocs(q188);
        querySnapshot188.forEach((doc) => {
          const data188 = doc.data();
          S188Data.push(data188);
        });

        setS188(S188Data);
      } catch (error) {
        console.error("Error fetching S188:", error);
      }
    };
    fetchS188Data();
  }, []);
  const [S189, setS189] = useState([]);
  useEffect(() => {
    const S189Data = [];
    const S189Collections = collection(firebase, "S189");
    const fetchS189Data = async () => {
      try {
        const q189 = query(
          S189Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot189 = await getDocs(q189);
        querySnapshot189.forEach((doc) => {
          const data189 = doc.data();
          S189Data.push(data189);
        });

        setS189(S189Data);
      } catch (error) {
        console.error("Error fetching S189:", error);
      }
    };
    fetchS189Data();
  }, []);
  const [S190, setS190] = useState([]);
  useEffect(() => {
    const S190Data = [];
    const S190Collections = collection(firebase, "S190");
    const fetchS190Data = async () => {
      try {
        const q190 = query(
          S190Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot190 = await getDocs(q190);
        querySnapshot190.forEach((doc) => {
          const data190 = doc.data();
          S190Data.push(data190);
        });

        setS190(S190Data);
      } catch (error) {
        console.error("Error fetching S190:", error);
      }
    };
    fetchS190Data();
  }, []);
  const [S191, setS191] = useState([]);
  useEffect(() => {
    const S191Data = [];
    const S191Collections = collection(firebase, "S191");
    const fetchS191Data = async () => {
      try {
        const q191 = query(
          S191Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot191 = await getDocs(q191);
        querySnapshot191.forEach((doc) => {
          const data191 = doc.data();
          S191Data.push(data191);
        });

        setS191(S191Data);
      } catch (error) {
        console.error("Error fetching S191:", error);
      }
    };
    fetchS191Data();
  }, []);
  const [S192, setS192] = useState([]);
  useEffect(() => {
    const S192Data = [];
    const S192Collections = collection(firebase, "S192");
    const fetchS192Data = async () => {
      try {
        const q192 = query(
          S192Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot192 = await getDocs(q192);
        querySnapshot192.forEach((doc) => {
          const data192 = doc.data();
          S192Data.push(data192);
        });

        setS192(S192Data);
      } catch (error) {
        console.error("Error fetching S192:", error);
      }
    };
    fetchS192Data();
  }, []);
  const [S193, setS193] = useState([]);
  useEffect(() => {
    const S193Data = [];
    const S193Collections = collection(firebase, "S193");
    const fetchS193Data = async () => {
      try {
        const q193 = query(
          S193Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot193 = await getDocs(q193);
        querySnapshot193.forEach((doc) => {
          const data193 = doc.data();
          S193Data.push(data193);
        });

        setS193(S193Data);
      } catch (error) {
        console.error("Error fetching S193:", error);
      }
    };
    fetchS193Data();
  }, []);
  const [S194, setS194] = useState([]);
  useEffect(() => {
    const S194Data = [];
    const S194Collections = collection(firebase, "S194");
    const fetchS194Data = async () => {
      try {
        const q194 = query(
          S194Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot194 = await getDocs(q194);
        querySnapshot194.forEach((doc) => {
          const data194 = doc.data();
          S194Data.push(data194);
        });

        setS194(S194Data);
      } catch (error) {
        console.error("Error fetching S194:", error);
      }
    };
    fetchS194Data();
  }, []);
  const [S195, setS195] = useState([]);
  useEffect(() => {
    const S195Data = [];
    const S195Collections = collection(firebase, "S195");
    const fetchS195Data = async () => {
      try {
        const q195 = query(
          S195Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot195 = await getDocs(q195);
        querySnapshot195.forEach((doc) => {
          const data195 = doc.data();
          S195Data.push(data195);
        });

        setS195(S195Data);
      } catch (error) {
        console.error("Error fetching S195:", error);
      }
    };
    fetchS195Data();
  }, []);
  const [S196, setS196] = useState([]);
  useEffect(() => {
    const S196Data = [];
    const S196Collections = collection(firebase, "S196");
    const fetchS196Data = async () => {
      try {
        const q196 = query(
          S196Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot196 = await getDocs(q196);
        querySnapshot196.forEach((doc) => {
          const data196 = doc.data();
          S196Data.push(data196);
        });

        setS196(S196Data);
      } catch (error) {
        console.error("Error fetching S196:", error);
      }
    };
    fetchS196Data();
  }, []);
  const [S197, setS197] = useState([]);
  useEffect(() => {
    const S197Data = [];
    const S197Collections = collection(firebase, "S197");
    const fetchS197Data = async () => {
      try {
        const q197 = query(
          S197Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot197 = await getDocs(q197);
        querySnapshot197.forEach((doc) => {
          const data197 = doc.data();
          S197Data.push(data197);
        });

        setS197(S197Data);
      } catch (error) {
        console.error("Error fetching S197:", error);
      }
    };
    fetchS197Data();
  }, []);
  const [S198, setS198] = useState([]);
  useEffect(() => {
    const S198Data = [];
    const S198Collections = collection(firebase, "S198");
    const fetchS198Data = async () => {
      try {
        const q198 = query(
          S198Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot198 = await getDocs(q198);
        querySnapshot198.forEach((doc) => {
          const data198 = doc.data();
          S198Data.push(data198);
        });

        setS198(S198Data);
      } catch (error) {
        console.error("Error fetching S198:", error);
      }
    };
    fetchS198Data();
  }, []);
  const [S199, setS199] = useState([]);
  useEffect(() => {
    const S199Data = [];
    const S199Collections = collection(firebase, "S199");
    const fetchS199Data = async () => {
      try {
        const q199 = query(
          S199Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot199 = await getDocs(q199);
        querySnapshot199.forEach((doc) => {
          const data199 = doc.data();
          S199Data.push(data199);
        });

        setS199(S199Data);
      } catch (error) {
        console.error("Error fetching S199:", error);
      }
    };
    fetchS199Data();
  }, []);
  const [S200, setS200] = useState([]);
  useEffect(() => {
    const S200Data = [];
    const S200Collections = collection(firebase, "S200");
    const fetchS200Data = async () => {
      try {
        const q200 = query(
          S200Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot200 = await getDocs(q200);
        querySnapshot200.forEach((doc) => {
          const data200 = doc.data();
          S200Data.push(data200);
        });

        setS200(S200Data);
      } catch (error) {
        console.error("Error fetching S200:", error);
      }
    };
    fetchS200Data();
  }, []);
  const [S201, setS201] = useState([]);
  useEffect(() => {
    const S201Data = [];
    const S201Collections = collection(firebase, "S201");
    const fetchS201Data = async () => {
      try {
        const q201 = query(
          S201Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot201 = await getDocs(q201);
        querySnapshot201.forEach((doc) => {
          const data201 = doc.data();
          S201Data.push(data201);
        });

        setS201(S201Data);
      } catch (error) {
        console.error("Error fetching S201:", error);
      }
    };
    fetchS201Data();
  }, []);
  const refreshData = async () => {
    const S201Data = [];
    const S201Collections = collection(firebase, "S201");
    const fetchS201Data = async () => {
      try {
        const q201 = query(
          S201Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot201 = await getDocs(q201);
        querySnapshot201.forEach((doc) => {
          const data201 = doc.data();
          S201Data.push(data201);
        });

        setS201(S201Data);
      } catch (error) {
        console.error("Error fetching S201:", error);
      }
    };
    fetchS201Data();
    const S200Data = [];
    const S200Collections = collection(firebase, "S200");
    const fetchS200Data = async () => {
      try {
        const q200 = query(
          S200Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot200 = await getDocs(q200);
        querySnapshot200.forEach((doc) => {
          const data200 = doc.data();
          S200Data.push(data200);
        });

        setS200(S200Data);
      } catch (error) {
        console.error("Error fetching S200:", error);
      }
    };
    fetchS200Data();
    const S199Data = [];
    const S199Collections = collection(firebase, "S199");
    const fetchS199Data = async () => {
      try {
        const q199 = query(
          S199Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot199 = await getDocs(q199);
        querySnapshot199.forEach((doc) => {
          const data199 = doc.data();
          S199Data.push(data199);
        });

        setS199(S199Data);
      } catch (error) {
        console.error("Error fetching S199:", error);
      }
    };
    fetchS199Data();
    const S198Data = [];
    const S198Collections = collection(firebase, "S198");
    const fetchS198Data = async () => {
      try {
        const q198 = query(
          S198Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot198 = await getDocs(q198);
        querySnapshot198.forEach((doc) => {
          const data198 = doc.data();
          S198Data.push(data198);
        });

        setS198(S198Data);
      } catch (error) {
        console.error("Error fetching S198:", error);
      }
    };
    fetchS198Data();
    const S197Data = [];
    const S197Collections = collection(firebase, "S197");
    const fetchS197Data = async () => {
      try {
        const q197 = query(
          S197Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot197 = await getDocs(q197);
        querySnapshot197.forEach((doc) => {
          const data197 = doc.data();
          S197Data.push(data197);
        });

        setS197(S197Data);
      } catch (error) {
        console.error("Error fetching S197:", error);
      }
    };
    fetchS197Data();
    const S196Data = [];
    const S196Collections = collection(firebase, "S196");
    const fetchS196Data = async () => {
      try {
        const q196 = query(
          S196Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot196 = await getDocs(q196);
        querySnapshot196.forEach((doc) => {
          const data196 = doc.data();
          S196Data.push(data196);
        });

        setS196(S196Data);
      } catch (error) {
        console.error("Error fetching S196:", error);
      }
    };
    fetchS196Data();
    const S195Data = [];
    const S195Collections = collection(firebase, "S195");
    const fetchS195Data = async () => {
      try {
        const q195 = query(
          S195Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot195 = await getDocs(q195);
        querySnapshot195.forEach((doc) => {
          const data195 = doc.data();
          S195Data.push(data195);
        });

        setS195(S195Data);
      } catch (error) {
        console.error("Error fetching S195:", error);
      }
    };
    fetchS195Data();
    const S194Data = [];
    const S194Collections = collection(firebase, "S194");
    const fetchS194Data = async () => {
      try {
        const q194 = query(
          S194Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot194 = await getDocs(q194);
        querySnapshot194.forEach((doc) => {
          const data194 = doc.data();
          S194Data.push(data194);
        });

        setS194(S194Data);
      } catch (error) {
        console.error("Error fetching S194:", error);
      }
    };
    fetchS194Data();
    const S193Data = [];
    const S193Collections = collection(firebase, "S193");
    const fetchS193Data = async () => {
      try {
        const q193 = query(
          S193Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot193 = await getDocs(q193);
        querySnapshot193.forEach((doc) => {
          const data193 = doc.data();
          S193Data.push(data193);
        });

        setS193(S193Data);
      } catch (error) {
        console.error("Error fetching S193:", error);
      }
    };
    fetchS193Data();
    const S192Data = [];
    const S192Collections = collection(firebase, "S192");
    const fetchS192Data = async () => {
      try {
        const q192 = query(
          S192Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot192 = await getDocs(q192);
        querySnapshot192.forEach((doc) => {
          const data192 = doc.data();
          S192Data.push(data192);
        });

        setS192(S192Data);
      } catch (error) {
        console.error("Error fetching S192:", error);
      }
    };
    fetchS192Data();
    const S191Data = [];
    const S191Collections = collection(firebase, "S191");
    const fetchS191Data = async () => {
      try {
        const q191 = query(
          S191Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot191 = await getDocs(q191);
        querySnapshot191.forEach((doc) => {
          const data191 = doc.data();
          S191Data.push(data191);
        });

        setS191(S191Data);
      } catch (error) {
        console.error("Error fetching S191:", error);
      }
    };
    fetchS191Data();
    const S190Data = [];
    const S190Collections = collection(firebase, "S190");
    const fetchS190Data = async () => {
      try {
        const q190 = query(
          S190Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot190 = await getDocs(q190);
        querySnapshot190.forEach((doc) => {
          const data190 = doc.data();
          S190Data.push(data190);
        });

        setS190(S190Data);
      } catch (error) {
        console.error("Error fetching S190:", error);
      }
    };
    fetchS190Data();
    const S189Data = [];
    const S189Collections = collection(firebase, "S189");
    const fetchS189Data = async () => {
      try {
        const q189 = query(
          S189Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot189 = await getDocs(q189);
        querySnapshot189.forEach((doc) => {
          const data189 = doc.data();
          S189Data.push(data189);
        });

        setS189(S189Data);
      } catch (error) {
        console.error("Error fetching S189:", error);
      }
    };
    fetchS189Data();
    const S188Data = [];
    const S188Collections = collection(firebase, "S188");
    const fetchS188Data = async () => {
      try {
        const q188 = query(
          S188Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot188 = await getDocs(q188);
        querySnapshot188.forEach((doc) => {
          const data188 = doc.data();
          S188Data.push(data188);
        });

        setS188(S188Data);
      } catch (error) {
        console.error("Error fetching S188:", error);
      }
    };
    fetchS188Data();
    const S187Data = [];
    const S187Collections = collection(firebase, "S187");
    const fetchS187Data = async () => {
      try {
        const q187 = query(
          S187Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot187 = await getDocs(q187);
        querySnapshot187.forEach((doc) => {
          const data187 = doc.data();
          S187Data.push(data187);
        });

        setS187(S187Data);
      } catch (error) {
        console.error("Error fetching S187:", error);
      }
    };
    fetchS187Data();
    const S186Data = [];
    const S186Collections = collection(firebase, "S186");
    const fetchS186Data = async () => {
      try {
        const q186 = query(
          S186Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot186 = await getDocs(q186);
        querySnapshot186.forEach((doc) => {
          const data186 = doc.data();
          S186Data.push(data186);
        });

        setS186(S186Data);
      } catch (error) {
        console.error("Error fetching S186:", error);
      }
    };
    fetchS186Data();
    const S185Data = [];
    const S185Collections = collection(firebase, "S185");
    const fetchS185Data = async () => {
      try {
        const q185 = query(
          S185Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot185 = await getDocs(q185);
        querySnapshot185.forEach((doc) => {
          const data185 = doc.data();
          S185Data.push(data185);
        });

        setS185(S185Data);
      } catch (error) {
        console.error("Error fetching S185:", error);
      }
    };
    fetchS185Data();
    const S184Data = [];
    const S184Collections = collection(firebase, "S184");
    const fetchS184Data = async () => {
      try {
        const q184 = query(
          S184Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot184 = await getDocs(q184);
        querySnapshot184.forEach((doc) => {
          const data184 = doc.data();
          S184Data.push(data184);
        });

        setS184(S184Data);
      } catch (error) {
        console.error("Error fetching S184:", error);
      }
    };
    fetchS184Data();
    const S183Data = [];
    const S183Collections = collection(firebase, "S183");
    const fetchS183Data = async () => {
      try {
        const q183 = query(
          S183Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot183 = await getDocs(q183);
        querySnapshot183.forEach((doc) => {
          const data183 = doc.data();
          S183Data.push(data183);
        });

        setS183(S183Data);
      } catch (error) {
        console.error("Error fetching S183:", error);
      }
    };
    fetchS183Data();
    const S182Data = [];
    const S182Collections = collection(firebase, "S182");
    const fetchS182Data = async () => {
      try {
        const q182 = query(
          S182Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot182 = await getDocs(q182);
        querySnapshot182.forEach((doc) => {
          const data182 = doc.data();
          S182Data.push(data182);
        });

        setS182(S182Data);
      } catch (error) {
        console.error("Error fetching S182:", error);
      }
    };
    fetchS182Data();
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
          source={require("../../assets/images/SFDC_2nd_P1.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.button24Row}>
            {S182.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button24}
                onPress={() => showModal("182")}
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
            {S183.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button23}
                onPress={() => showModal("183")}
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
            {S184.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button22}
                onPress={() => showModal("184")}
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
            {S185.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button21}
                onPress={() => showModal("185")}
              >
                <View style={styles.b2StackStack}>
                  <View style={styles.b2Stack}>
                    <View
                      style={[
                        styles.b2,
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
            {S186.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button31}
                onPress={() => showModal("186")}
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
            {S187.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button32}
                onPress={() => showModal("187")}
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
            {S188.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button33}
                onPress={() => showModal("188")}
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
            {S189.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button34}
                onPress={() => showModal("189")}
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
          <View style={styles.button25Row}>
            {S190.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button25}
                onPress={() => showModal("190")}
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
            {S191.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button35}
                onPress={() => showModal("191")}
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
          </View>
          <View style={styles.button27Row}>
            {S192.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button27}
                onPress={() => showModal("192")}
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
            {S193.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button26}
                onPress={() => showModal("193")}
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
            {S194.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button36}
                onPress={() => showModal("194")}
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
            {S195.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button37}
                onPress={() => showModal("195")}
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
          <View style={styles.button29Row}>
            {S196.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button29}
                onPress={() => showModal("196")}
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
            {S197.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button28}
                onPress={() => showModal("197")}
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
            {S198.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button38}
                onPress={() => showModal("198")}
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
            {S199.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button39}
                onPress={() => showModal("199")}
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
          </View>
          <View style={styles.button30Row}>
            {S200.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button30}
                onPress={() => showModal("200")}
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
            {S201.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button40}
                onPress={() => showModal("201")}
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
    width: 527,
    height: 737,
  },
  image_imageStyle: {},
  button24: {
    width: 18,
    height: 20,
  },
  b5: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb4: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b5Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb4: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b5StackStack: {
    width: 18,
    height: 20,
  },
  button23: {
    width: 18,
    height: 20,
    marginLeft: 8,
    marginTop: 7,
  },
  b4: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb3: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b4Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb3: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b4StackStack: {
    width: 18,
    height: 20,
  },
  button22: {
    width: 18,
    height: 20,
    marginLeft: 8,
    marginTop: 7,
  },
  b3: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb2: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b3Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb2: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b3StackStack: {
    width: 18,
    height: 20,
  },
  button21: {
    width: 18,
    height: 20,
    marginLeft: 12,
    marginTop: 7,
  },
  b2: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb1: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b2Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb1: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b2StackStack: {
    width: 18,
    height: 20,
  },
  button31: {
    width: 18,
    height: 20,
    marginLeft: 162,
    marginTop: 7,
  },
  b12: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb11: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b12Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb11: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b12StackStack: {
    width: 18,
    height: 20,
  },
  button32: {
    width: 18,
    height: 20,
    marginLeft: 9,
    marginTop: 7,
  },
  b13: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb12: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b13Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb12: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b13StackStack: {
    width: 18,
    height: 20,
  },
  button33: {
    width: 18,
    height: 20,
    marginLeft: 10,
    marginTop: 7,
  },
  b14: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb13: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b14Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb13: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b14StackStack: {
    width: 18,
    height: 20,
  },
  button34: {
    width: 18,
    height: 20,
    marginLeft: 10,
  },
  b15: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb14: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b15Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb14: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b15StackStack: {
    width: 18,
    height: 20,
  },
  button24Row: {
    height: 27,
    flexDirection: "row",
    marginTop: 56,
    marginLeft: 107,
    marginRight: 57,
  },
  button25: {
    width: 18,
    height: 20,
  },
  b6: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb5: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b6Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb5: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b6StackStack: {
    width: 18,
    height: 20,
  },
  button35: {
    width: 18,
    height: 20,
    marginLeft: 327,
  },
  b16: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb15: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b16Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb15: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b16StackStack: {
    width: 18,
    height: 20,
  },
  button25Row: {
    height: 20,
    flexDirection: "row",
    marginLeft: 107,
    marginRight: 57,
  },
  button27: {
    width: 18,
    height: 20,
  },
  b8: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb7: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b8Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb7: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b8StackStack: {
    width: 18,
    height: 20,
  },
  button26: {
    width: 18,
    height: 20,
    marginLeft: 13,
  },
  b7: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb6: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b7Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb6: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b7StackStack: {
    width: 18,
    height: 20,
  },
  button36: {
    width: 18,
    height: 20,
    marginLeft: 231,
  },
  b17: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb16: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b17Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb16: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b17StackStack: {
    width: 18,
    height: 20,
  },
  button37: {
    width: 18,
    height: 20,
    marginLeft: 11,
    marginTop: 3,
  },
  b18: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb17: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b18Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb17: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b18StackStack: {
    width: 18,
    height: 20,
  },
  button27Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 510,
    marginLeft: 125,
    marginRight: 75,
  },
  button29: {
    width: 18,
    height: 20,
  },
  b10: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb9: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b10Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb9: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b10StackStack: {
    width: 18,
    height: 20,
  },
  button28: {
    width: 18,
    height: 20,
    marginLeft: 13,
    marginTop: 9,
  },
  b9: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb8: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b9Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb8: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b9StackStack: {
    width: 18,
    height: 20,
  },
  button38: {
    width: 18,
    height: 20,
    marginLeft: 231,
    marginTop: 9,
  },
  b19: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb18: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b19Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb18: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b19StackStack: {
    width: 18,
    height: 20,
  },
  button39: {
    width: 18,
    height: 20,
    marginLeft: 11,
  },
  b20: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb19: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b20Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb19: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b20StackStack: {
    width: 18,
    height: 20,
  },
  button29Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 125,
    marginRight: 75,
  },
  button30: {
    width: 18,
    height: 20,
  },
  b11: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb10: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b11Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb10: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b11StackStack: {
    width: 18,
    height: 20,
  },
  button40: {
    width: 18,
    height: 20,
    marginLeft: 288,
    marginTop: 4,
  },
  b21: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb20: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b21Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb20: {
    top: 13,
    left: 2,
    width: 13,
    height: 7,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)",
  },
  b21StackStack: {
    width: 18,
    height: 20,
  },
  button30Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 125,
    marginRight: 78,
  },
});
