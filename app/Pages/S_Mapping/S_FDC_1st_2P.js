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
export default function S_FDC_1st_2P({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [S149, setS149] = useState([]);
  useEffect(() => {
    const S149Data = [];
    const S149Collections = collection(firebase, "S149");
    const fetchS149Data = async () => {
      try {
        const q149 = query(
          S149Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot149 = await getDocs(q149);
        querySnapshot149.forEach((doc) => {
          const data149 = doc.data();
          S149Data.push(data149);
        });

        setS149(S149Data);
      } catch (error) {
        console.error("Error fetching S149:", error);
      }
    };
    fetchS149Data();
  }, []);
  const [S150, setS150] = useState([]);
  useEffect(() => {
    const S150Data = [];
    const S150Collections = collection(firebase, "S150");
    const fetchS150Data = async () => {
      try {
        const q150 = query(
          S150Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot150 = await getDocs(q150);
        querySnapshot150.forEach((doc) => {
          const data150 = doc.data();
          S150Data.push(data150);
        });

        setS150(S150Data);
      } catch (error) {
        console.error("Error fetching S150:", error);
      }
    };
    fetchS150Data();
  }, []);
  const [S151, setS151] = useState([]);
  useEffect(() => {
    const S151Data = [];
    const S151Collections = collection(firebase, "S151");
    const fetchS151Data = async () => {
      try {
        const q151 = query(
          S151Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot151 = await getDocs(q151);
        querySnapshot151.forEach((doc) => {
          const data151 = doc.data();
          S151Data.push(data151);
        });

        setS151(S151Data);
      } catch (error) {
        console.error("Error fetching S151:", error);
      }
    };
    fetchS151Data();
  }, []);
  const [S152, setS152] = useState([]);
  useEffect(() => {
    const S152Data = [];
    const S152Collections = collection(firebase, "S152");
    const fetchS152Data = async () => {
      try {
        const q152 = query(
          S152Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot152 = await getDocs(q152);
        querySnapshot152.forEach((doc) => {
          const data152 = doc.data();
          S152Data.push(data152);
        });

        setS152(S152Data);
      } catch (error) {
        console.error("Error fetching S152:", error);
      }
    };
    fetchS152Data();
  }, []);
  const [S153, setS153] = useState([]);
  useEffect(() => {
    const S153Data = [];
    const S153Collections = collection(firebase, "S153");
    const fetchS153Data = async () => {
      try {
        const q153 = query(
          S153Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot153 = await getDocs(q153);
        querySnapshot153.forEach((doc) => {
          const data153 = doc.data();
          S153Data.push(data153);
        });

        setS153(S153Data);
      } catch (error) {
        console.error("Error fetching S153:", error);
      }
    };
    fetchS153Data();
  }, []);
  const [S154, setS154] = useState([]);
  useEffect(() => {
    const S154Data = [];
    const S154Collections = collection(firebase, "S154");
    const fetchS154Data = async () => {
      try {
        const q154 = query(
          S154Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot154 = await getDocs(q154);
        querySnapshot154.forEach((doc) => {
          const data154 = doc.data();
          S154Data.push(data154);
        });

        setS154(S154Data);
      } catch (error) {
        console.error("Error fetching S154:", error);
      }
    };
    fetchS154Data();
  }, []);
  const [S155, setS155] = useState([]);
  useEffect(() => {
    const S155Data = [];
    const S155Collections = collection(firebase, "S155");
    const fetchS155Data = async () => {
      try {
        const q155 = query(
          S155Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot155 = await getDocs(q155);
        querySnapshot155.forEach((doc) => {
          const data155 = doc.data();
          S155Data.push(data155);
        });

        setS155(S155Data);
      } catch (error) {
        console.error("Error fetching S155:", error);
      }
    };
    fetchS155Data();
  }, []);
  const [S156, setS156] = useState([]);
  useEffect(() => {
    const S156Data = [];
    const S156Collections = collection(firebase, "S156");
    const fetchS156Data = async () => {
      try {
        const q156 = query(
          S156Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot156 = await getDocs(q156);
        querySnapshot156.forEach((doc) => {
          const data156 = doc.data();
          S156Data.push(data156);
        });

        setS156(S156Data);
      } catch (error) {
        console.error("Error fetching S156:", error);
      }
    };
    fetchS156Data();
  }, []);
  const [S157, setS157] = useState([]);
  useEffect(() => {
    const S157Data = [];
    const S157Collections = collection(firebase, "S157");
    const fetchS157Data = async () => {
      try {
        const q157 = query(
          S157Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot157 = await getDocs(q157);
        querySnapshot157.forEach((doc) => {
          const data157 = doc.data();
          S157Data.push(data157);
        });

        setS157(S157Data);
      } catch (error) {
        console.error("Error fetching S157:", error);
      }
    };
    fetchS157Data();
  }, []);
  const [S158, setS158] = useState([]);
  useEffect(() => {
    const S158Data = [];
    const S158Collections = collection(firebase, "S158");
    const fetchS158Data = async () => {
      try {
        const q158 = query(
          S158Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot158 = await getDocs(q158);
        querySnapshot158.forEach((doc) => {
          const data158 = doc.data();
          S158Data.push(data158);
        });

        setS158(S158Data);
      } catch (error) {
        console.error("Error fetching S158:", error);
      }
    };
    fetchS158Data();
  }, []);
  const [S159, setS159] = useState([]);
  useEffect(() => {
    const S159Data = [];
    const S159Collections = collection(firebase, "S159");
    const fetchS159Data = async () => {
      try {
        const q159 = query(
          S159Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot159 = await getDocs(q159);
        querySnapshot159.forEach((doc) => {
          const data159 = doc.data();
          S159Data.push(data159);
        });

        setS159(S159Data);
      } catch (error) {
        console.error("Error fetching S159:", error);
      }
    };
    fetchS159Data();
  }, []);
  const [S160, setS160] = useState([]);
  useEffect(() => {
    const S160Data = [];
    const S160Collections = collection(firebase, "S160");
    const fetchS160Data = async () => {
      try {
        const q160 = query(
          S160Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot160 = await getDocs(q160);
        querySnapshot160.forEach((doc) => {
          const data160 = doc.data();
          S160Data.push(data160);
        });

        setS160(S160Data);
      } catch (error) {
        console.error("Error fetching S160:", error);
      }
    };
    fetchS160Data();
  }, []);
  const [S161, setS161] = useState([]);
  useEffect(() => {
    const S161Data = [];
    const S161Collections = collection(firebase, "S161");
    const fetchS161Data = async () => {
      try {
        const q161 = query(
          S161Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot161 = await getDocs(q161);
        querySnapshot161.forEach((doc) => {
          const data161 = doc.data();
          S161Data.push(data161);
        });

        setS161(S161Data);
      } catch (error) {
        console.error("Error fetching S161:", error);
      }
    };
    fetchS161Data();
  }, []);
  const [S162, setS162] = useState([]);
  useEffect(() => {
    const S162Data = [];
    const S162Collections = collection(firebase, "S162");
    const fetchS162Data = async () => {
      try {
        const q162 = query(
          S162Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot162 = await getDocs(q162);
        querySnapshot162.forEach((doc) => {
          const data162 = doc.data();
          S162Data.push(data162);
        });

        setS162(S162Data);
      } catch (error) {
        console.error("Error fetching S162:", error);
      }
    };
    fetchS162Data();
  }, []);
  const [S163, setS163] = useState([]);
  useEffect(() => {
    const S163Data = [];
    const S163Collections = collection(firebase, "S163");
    const fetchS163Data = async () => {
      try {
        const q163 = query(
          S163Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot163 = await getDocs(q163);
        querySnapshot163.forEach((doc) => {
          const data163 = doc.data();
          S163Data.push(data163);
        });

        setS163(S163Data);
      } catch (error) {
        console.error("Error fetching S163:", error);
      }
    };
    fetchS163Data();
  }, []);
  const [S164, setS164] = useState([]);
  useEffect(() => {
    const S164Data = [];
    const S164Collections = collection(firebase, "S164");
    const fetchS164Data = async () => {
      try {
        const q164 = query(
          S164Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot164 = await getDocs(q164);
        querySnapshot164.forEach((doc) => {
          const data164 = doc.data();
          S164Data.push(data164);
        });

        setS164(S164Data);
      } catch (error) {
        console.error("Error fetching S164:", error);
      }
    };
    fetchS164Data();
  }, []);
  const [S165, setS165] = useState([]);
  useEffect(() => {
    const S165Data = [];
    const S165Collections = collection(firebase, "S165");
    const fetchS165Data = async () => {
      try {
        const q165 = query(
          S165Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot165 = await getDocs(q165);
        querySnapshot165.forEach((doc) => {
          const data165 = doc.data();
          S165Data.push(data165);
        });

        setS165(S165Data);
      } catch (error) {
        console.error("Error fetching S165:", error);
      }
    };
    fetchS165Data();
  }, []);
  const [S166, setS166] = useState([]);
  useEffect(() => {
    const S166Data = [];
    const S166Collections = collection(firebase, "S166");
    const fetchS166Data = async () => {
      try {
        const q166 = query(
          S166Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot166 = await getDocs(q166);
        querySnapshot166.forEach((doc) => {
          const data166 = doc.data();
          S166Data.push(data166);
        });

        setS166(S166Data);
      } catch (error) {
        console.error("Error fetching S166:", error);
      }
    };
    fetchS166Data();
  }, []);
  const [S167, setS167] = useState([]);
  useEffect(() => {
    const S167Data = [];
    const S167Collections = collection(firebase, "S167");
    const fetchS167Data = async () => {
      try {
        const q167 = query(
          S167Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot167 = await getDocs(q167);
        querySnapshot167.forEach((doc) => {
          const data167 = doc.data();
          S167Data.push(data167);
        });

        setS167(S167Data);
      } catch (error) {
        console.error("Error fetching S167:", error);
      }
    };
    fetchS167Data();
  }, []);
  const [S168, setS168] = useState([]);
  useEffect(() => {
    const S168Data = [];
    const S168Collections = collection(firebase, "S168");
    const fetchS168Data = async () => {
      try {
        const q168 = query(
          S168Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot168 = await getDocs(q168);
        querySnapshot168.forEach((doc) => {
          const data168 = doc.data();
          S168Data.push(data168);
        });

        setS168(S168Data);
      } catch (error) {
        console.error("Error fetching S168:", error);
      }
    };
    fetchS168Data();
  }, []);
  const [S169, setS169] = useState([]);
  useEffect(() => {
    const S169Data = [];
    const S169Collections = collection(firebase, "S169");
    const fetchS169Data = async () => {
      try {
        const q169 = query(
          S169Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot169 = await getDocs(q169);
        querySnapshot169.forEach((doc) => {
          const data169 = doc.data();
          S169Data.push(data169);
        });

        setS169(S169Data);
      } catch (error) {
        console.error("Error fetching S169:", error);
      }
    };
    fetchS169Data();
  }, []);
  const [S170, setS170] = useState([]);
  useEffect(() => {
    const S170Data = [];
    const S170Collections = collection(firebase, "S170");
    const fetchS170Data = async () => {
      try {
        const q170 = query(
          S170Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot170 = await getDocs(q170);
        querySnapshot170.forEach((doc) => {
          const data170 = doc.data();
          S170Data.push(data170);
        });

        setS170(S170Data);
      } catch (error) {
        console.error("Error fetching S170:", error);
      }
    };
    fetchS170Data();
  }, []);
  const [S171, setS171] = useState([]);
  useEffect(() => {
    const S171Data = [];
    const S171Collections = collection(firebase, "S171");
    const fetchS171Data = async () => {
      try {
        const q171 = query(
          S171Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot171 = await getDocs(q171);
        querySnapshot171.forEach((doc) => {
          const data171 = doc.data();
          S171Data.push(data171);
        });

        setS171(S171Data);
      } catch (error) {
        console.error("Error fetching S171:", error);
      }
    };
    fetchS171Data();
  }, []);
  const [S172, setS172] = useState([]);
  useEffect(() => {
    const S172Data = [];
    const S172Collections = collection(firebase, "S172");
    const fetchS172Data = async () => {
      try {
        const q172 = query(
          S172Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot172 = await getDocs(q172);
        querySnapshot172.forEach((doc) => {
          const data172 = doc.data();
          S172Data.push(data172);
        });

        setS172(S172Data);
      } catch (error) {
        console.error("Error fetching S172:", error);
      }
    };
    fetchS172Data();
  }, []);
  const [S173, setS173] = useState([]);
  useEffect(() => {
    const S173Data = [];
    const S173Collections = collection(firebase, "S173");
    const fetchS173Data = async () => {
      try {
        const q173 = query(
          S173Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot173 = await getDocs(q173);
        querySnapshot173.forEach((doc) => {
          const data173 = doc.data();
          S173Data.push(data173);
        });

        setS173(S173Data);
      } catch (error) {
        console.error("Error fetching S173:", error);
      }
    };
    fetchS173Data();
  }, []);
  const [S174, setS174] = useState([]);
  useEffect(() => {
    const S174Data = [];
    const S174Collections = collection(firebase, "S174");
    const fetchS174Data = async () => {
      try {
        const q174 = query(
          S174Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot174 = await getDocs(q174);
        querySnapshot174.forEach((doc) => {
          const data174 = doc.data();
          S174Data.push(data174);
        });

        setS174(S174Data);
      } catch (error) {
        console.error("Error fetching S174:", error);
      }
    };
    fetchS174Data();
  }, []);
  const [S175, setS175] = useState([]);
  useEffect(() => {
    const S175Data = [];
    const S175Collections = collection(firebase, "S175");
    const fetchS175Data = async () => {
      try {
        const q175 = query(
          S175Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot175 = await getDocs(q175);
        querySnapshot175.forEach((doc) => {
          const data175 = doc.data();
          S175Data.push(data175);
        });

        setS175(S175Data);
      } catch (error) {
        console.error("Error fetching S175:", error);
      }
    };
    fetchS175Data();
  }, []);
  const [S176, setS176] = useState([]);
  useEffect(() => {
    const S176Data = [];
    const S176Collections = collection(firebase, "S176");
    const fetchS176Data = async () => {
      try {
        const q176 = query(
          S176Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot176 = await getDocs(q176);
        querySnapshot176.forEach((doc) => {
          const data176 = doc.data();
          S176Data.push(data176);
        });

        setS176(S176Data);
      } catch (error) {
        console.error("Error fetching S176:", error);
      }
    };
    fetchS176Data();
  }, []);
  const [S177, setS177] = useState([]);
  useEffect(() => {
    const S177Data = [];
    const S177Collections = collection(firebase, "S177");
    const fetchS177Data = async () => {
      try {
        const q177 = query(
          S177Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot177 = await getDocs(q177);
        querySnapshot177.forEach((doc) => {
          const data177 = doc.data();
          S177Data.push(data177);
        });

        setS177(S177Data);
      } catch (error) {
        console.error("Error fetching S177:", error);
      }
    };
    fetchS177Data();
  }, []);
  const [S178, setS178] = useState([]);
  useEffect(() => {
    const S178Data = [];
    const S178Collections = collection(firebase, "S178");
    const fetchS178Data = async () => {
      try {
        const q178 = query(
          S178Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot178 = await getDocs(q178);
        querySnapshot178.forEach((doc) => {
          const data178 = doc.data();
          S178Data.push(data178);
        });

        setS178(S178Data);
      } catch (error) {
        console.error("Error fetching S178:", error);
      }
    };
    fetchS178Data();
  }, []);
  const [S179, setS179] = useState([]);
  useEffect(() => {
    const S179Data = [];
    const S179Collections = collection(firebase, "S179");
    const fetchS179Data = async () => {
      try {
        const q179 = query(
          S179Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot179 = await getDocs(q179);
        querySnapshot179.forEach((doc) => {
          const data179 = doc.data();
          S179Data.push(data179);
        });

        setS179(S179Data);
      } catch (error) {
        console.error("Error fetching S179:", error);
      }
    };
    fetchS179Data();
  }, []);
  const [S180, setS180] = useState([]);
  useEffect(() => {
    const S180Data = [];
    const S180Collections = collection(firebase, "S180");
    const fetchS180Data = async () => {
      try {
        const q180 = query(
          S180Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot180 = await getDocs(q180);
        querySnapshot180.forEach((doc) => {
          const data180 = doc.data();
          S180Data.push(data180);
        });

        setS180(S180Data);
      } catch (error) {
        console.error("Error fetching S180:", error);
      }
    };
    fetchS180Data();
  }, []);
  const [S181, setS181] = useState([]);
  useEffect(() => {
    const S181Data = [];
    const S181Collections = collection(firebase, "S181");
    const fetchS181Data = async () => {
      try {
        const q181 = query(
          S181Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot181 = await getDocs(q181);
        querySnapshot181.forEach((doc) => {
          const data181 = doc.data();
          S181Data.push(data181);
        });

        setS181(S181Data);
      } catch (error) {
        console.error("Error fetching S181:", error);
      }
    };
    fetchS181Data();
  }, []);
  const refreshData = async () => {
    const S181Data = [];
    const S181Collections = collection(firebase, "S181");
    const fetchS181Data = async () => {
      try {
        const q181 = query(
          S181Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot181 = await getDocs(q181);
        querySnapshot181.forEach((doc) => {
          const data181 = doc.data();
          S181Data.push(data181);
        });

        setS181(S181Data);
      } catch (error) {
        console.error("Error fetching S181:", error);
      }
    };
    fetchS181Data();
    const S180Data = [];
    const S180Collections = collection(firebase, "S180");
    const fetchS180Data = async () => {
      try {
        const q180 = query(
          S180Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot180 = await getDocs(q180);
        querySnapshot180.forEach((doc) => {
          const data180 = doc.data();
          S180Data.push(data180);
        });

        setS180(S180Data);
      } catch (error) {
        console.error("Error fetching S180:", error);
      }
    };
    fetchS180Data();
    const S179Data = [];
    const S179Collections = collection(firebase, "S179");
    const fetchS179Data = async () => {
      try {
        const q179 = query(
          S179Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot179 = await getDocs(q179);
        querySnapshot179.forEach((doc) => {
          const data179 = doc.data();
          S179Data.push(data179);
        });

        setS179(S179Data);
      } catch (error) {
        console.error("Error fetching S179:", error);
      }
    };
    fetchS179Data();
    const S178Data = [];
    const S178Collections = collection(firebase, "S178");
    const fetchS178Data = async () => {
      try {
        const q178 = query(
          S178Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot178 = await getDocs(q178);
        querySnapshot178.forEach((doc) => {
          const data178 = doc.data();
          S178Data.push(data178);
        });

        setS178(S178Data);
      } catch (error) {
        console.error("Error fetching S178:", error);
      }
    };
    fetchS178Data();
    const S177Data = [];
    const S177Collections = collection(firebase, "S177");
    const fetchS177Data = async () => {
      try {
        const q177 = query(
          S177Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot177 = await getDocs(q177);
        querySnapshot177.forEach((doc) => {
          const data177 = doc.data();
          S177Data.push(data177);
        });

        setS177(S177Data);
      } catch (error) {
        console.error("Error fetching S177:", error);
      }
    };
    fetchS177Data();
    const S176Data = [];
    const S176Collections = collection(firebase, "S176");
    const fetchS176Data = async () => {
      try {
        const q176 = query(
          S176Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot176 = await getDocs(q176);
        querySnapshot176.forEach((doc) => {
          const data176 = doc.data();
          S176Data.push(data176);
        });

        setS176(S176Data);
      } catch (error) {
        console.error("Error fetching S176:", error);
      }
    };
    fetchS176Data();
    const S175Data = [];
    const S175Collections = collection(firebase, "S175");
    const fetchS175Data = async () => {
      try {
        const q175 = query(
          S175Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot175 = await getDocs(q175);
        querySnapshot175.forEach((doc) => {
          const data175 = doc.data();
          S175Data.push(data175);
        });

        setS175(S175Data);
      } catch (error) {
        console.error("Error fetching S175:", error);
      }
    };
    fetchS175Data();
    const S174Data = [];
    const S174Collections = collection(firebase, "S174");
    const fetchS174Data = async () => {
      try {
        const q174 = query(
          S174Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot174 = await getDocs(q174);
        querySnapshot174.forEach((doc) => {
          const data174 = doc.data();
          S174Data.push(data174);
        });

        setS174(S174Data);
      } catch (error) {
        console.error("Error fetching S174:", error);
      }
    };
    fetchS174Data();
    const S173Data = [];
    const S173Collections = collection(firebase, "S173");
    const fetchS173Data = async () => {
      try {
        const q173 = query(
          S173Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot173 = await getDocs(q173);
        querySnapshot173.forEach((doc) => {
          const data173 = doc.data();
          S173Data.push(data173);
        });

        setS173(S173Data);
      } catch (error) {
        console.error("Error fetching S173:", error);
      }
    };
    fetchS173Data();
    const S172Data = [];
    const S172Collections = collection(firebase, "S172");
    const fetchS172Data = async () => {
      try {
        const q172 = query(
          S172Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot172 = await getDocs(q172);
        querySnapshot172.forEach((doc) => {
          const data172 = doc.data();
          S172Data.push(data172);
        });

        setS172(S172Data);
      } catch (error) {
        console.error("Error fetching S172:", error);
      }
    };
    fetchS172Data();
    const S171Data = [];
    const S171Collections = collection(firebase, "S171");
    const fetchS171Data = async () => {
      try {
        const q171 = query(
          S171Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot171 = await getDocs(q171);
        querySnapshot171.forEach((doc) => {
          const data171 = doc.data();
          S171Data.push(data171);
        });

        setS171(S171Data);
      } catch (error) {
        console.error("Error fetching S171:", error);
      }
    };
    fetchS171Data();
    const S170Data = [];
    const S170Collections = collection(firebase, "S170");
    const fetchS170Data = async () => {
      try {
        const q170 = query(
          S170Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot170 = await getDocs(q170);
        querySnapshot170.forEach((doc) => {
          const data170 = doc.data();
          S170Data.push(data170);
        });

        setS170(S170Data);
      } catch (error) {
        console.error("Error fetching S170:", error);
      }
    };
    fetchS170Data();
    const S169Data = [];
    const S169Collections = collection(firebase, "S169");
    const fetchS169Data = async () => {
      try {
        const q169 = query(
          S169Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot169 = await getDocs(q169);
        querySnapshot169.forEach((doc) => {
          const data169 = doc.data();
          S169Data.push(data169);
        });

        setS169(S169Data);
      } catch (error) {
        console.error("Error fetching S169:", error);
      }
    };
    fetchS169Data();
    const S168Data = [];
    const S168Collections = collection(firebase, "S168");
    const fetchS168Data = async () => {
      try {
        const q168 = query(
          S168Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot168 = await getDocs(q168);
        querySnapshot168.forEach((doc) => {
          const data168 = doc.data();
          S168Data.push(data168);
        });

        setS168(S168Data);
      } catch (error) {
        console.error("Error fetching S168:", error);
      }
    };
    fetchS168Data();
    const S167Data = [];
    const S167Collections = collection(firebase, "S167");
    const fetchS167Data = async () => {
      try {
        const q167 = query(
          S167Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot167 = await getDocs(q167);
        querySnapshot167.forEach((doc) => {
          const data167 = doc.data();
          S167Data.push(data167);
        });

        setS167(S167Data);
      } catch (error) {
        console.error("Error fetching S167:", error);
      }
    };
    fetchS167Data();
    const S166Data = [];
    const S166Collections = collection(firebase, "S166");
    const fetchS166Data = async () => {
      try {
        const q166 = query(
          S166Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot166 = await getDocs(q166);
        querySnapshot166.forEach((doc) => {
          const data166 = doc.data();
          S166Data.push(data166);
        });

        setS166(S166Data);
      } catch (error) {
        console.error("Error fetching S166:", error);
      }
    };
    fetchS166Data();
    const S165Data = [];
    const S165Collections = collection(firebase, "S165");
    const fetchS165Data = async () => {
      try {
        const q165 = query(
          S165Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot165 = await getDocs(q165);
        querySnapshot165.forEach((doc) => {
          const data165 = doc.data();
          S165Data.push(data165);
        });

        setS165(S165Data);
      } catch (error) {
        console.error("Error fetching S165:", error);
      }
    };
    fetchS165Data();
    const S164Data = [];
    const S164Collections = collection(firebase, "S164");
    const fetchS164Data = async () => {
      try {
        const q164 = query(
          S164Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot164 = await getDocs(q164);
        querySnapshot164.forEach((doc) => {
          const data164 = doc.data();
          S164Data.push(data164);
        });

        setS164(S164Data);
      } catch (error) {
        console.error("Error fetching S164:", error);
      }
    };
    fetchS164Data();
    const S163Data = [];
    const S163Collections = collection(firebase, "S163");
    const fetchS163Data = async () => {
      try {
        const q163 = query(
          S163Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot163 = await getDocs(q163);
        querySnapshot163.forEach((doc) => {
          const data163 = doc.data();
          S163Data.push(data163);
        });

        setS163(S163Data);
      } catch (error) {
        console.error("Error fetching S163:", error);
      }
    };
    fetchS163Data();
    const S162Data = [];
    const S162Collections = collection(firebase, "S162");
    const fetchS162Data = async () => {
      try {
        const q162 = query(
          S162Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot162 = await getDocs(q162);
        querySnapshot162.forEach((doc) => {
          const data162 = doc.data();
          S162Data.push(data162);
        });

        setS162(S162Data);
      } catch (error) {
        console.error("Error fetching S162:", error);
      }
    };
    fetchS162Data();
    const S161Data = [];
    const S161Collections = collection(firebase, "S161");
    const fetchS161Data = async () => {
      try {
        const q161 = query(
          S161Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot161 = await getDocs(q161);
        querySnapshot161.forEach((doc) => {
          const data161 = doc.data();
          S161Data.push(data161);
        });

        setS161(S161Data);
      } catch (error) {
        console.error("Error fetching S161:", error);
      }
    };
    fetchS161Data();
    const S160Data = [];
    const S160Collections = collection(firebase, "S160");
    const fetchS160Data = async () => {
      try {
        const q160 = query(
          S160Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot160 = await getDocs(q160);
        querySnapshot160.forEach((doc) => {
          const data160 = doc.data();
          S160Data.push(data160);
        });

        setS160(S160Data);
      } catch (error) {
        console.error("Error fetching S160:", error);
      }
    };
    fetchS160Data();
    const S159Data = [];
    const S159Collections = collection(firebase, "S159");
    const fetchS159Data = async () => {
      try {
        const q159 = query(
          S159Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot159 = await getDocs(q159);
        querySnapshot159.forEach((doc) => {
          const data159 = doc.data();
          S159Data.push(data159);
        });

        setS159(S159Data);
      } catch (error) {
        console.error("Error fetching S159:", error);
      }
    };
    fetchS159Data();
    const S158Data = [];
    const S158Collections = collection(firebase, "S158");
    const fetchS158Data = async () => {
      try {
        const q158 = query(
          S158Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot158 = await getDocs(q158);
        querySnapshot158.forEach((doc) => {
          const data158 = doc.data();
          S158Data.push(data158);
        });

        setS158(S158Data);
      } catch (error) {
        console.error("Error fetching S158:", error);
      }
    };
    fetchS158Data();
    const S157Data = [];
    const S157Collections = collection(firebase, "S157");
    const fetchS157Data = async () => {
      try {
        const q157 = query(
          S157Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot157 = await getDocs(q157);
        querySnapshot157.forEach((doc) => {
          const data157 = doc.data();
          S157Data.push(data157);
        });

        setS157(S157Data);
      } catch (error) {
        console.error("Error fetching S157:", error);
      }
    };
    fetchS157Data();
    const S156Data = [];
    const S156Collections = collection(firebase, "S156");
    const fetchS156Data = async () => {
      try {
        const q156 = query(
          S156Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot156 = await getDocs(q156);
        querySnapshot156.forEach((doc) => {
          const data156 = doc.data();
          S156Data.push(data156);
        });

        setS156(S156Data);
      } catch (error) {
        console.error("Error fetching S156:", error);
      }
    };
    fetchS156Data();
    const S155Data = [];
    const S155Collections = collection(firebase, "S155");
    const fetchS155Data = async () => {
      try {
        const q155 = query(
          S155Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot155 = await getDocs(q155);
        querySnapshot155.forEach((doc) => {
          const data155 = doc.data();
          S155Data.push(data155);
        });

        setS155(S155Data);
      } catch (error) {
        console.error("Error fetching S155:", error);
      }
    };
    fetchS155Data();
    const S154Data = [];
    const S154Collections = collection(firebase, "S154");
    const fetchS154Data = async () => {
      try {
        const q154 = query(
          S154Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot154 = await getDocs(q154);
        querySnapshot154.forEach((doc) => {
          const data154 = doc.data();
          S154Data.push(data154);
        });

        setS154(S154Data);
      } catch (error) {
        console.error("Error fetching S154:", error);
      }
    };
    fetchS154Data();
    const S153Data = [];
    const S153Collections = collection(firebase, "S153");
    const fetchS153Data = async () => {
      try {
        const q153 = query(
          S153Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot153 = await getDocs(q153);
        querySnapshot153.forEach((doc) => {
          const data153 = doc.data();
          S153Data.push(data153);
        });

        setS153(S153Data);
      } catch (error) {
        console.error("Error fetching S153:", error);
      }
    };
    fetchS153Data();
    const S152Data = [];
    const S152Collections = collection(firebase, "S152");
    const fetchS152Data = async () => {
      try {
        const q152 = query(
          S152Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot152 = await getDocs(q152);
        querySnapshot152.forEach((doc) => {
          const data152 = doc.data();
          S152Data.push(data152);
        });

        setS152(S152Data);
      } catch (error) {
        console.error("Error fetching S152:", error);
      }
    };
    fetchS152Data();
    const S151Data = [];
    const S151Collections = collection(firebase, "S151");
    const fetchS151Data = async () => {
      try {
        const q151 = query(
          S151Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot151 = await getDocs(q151);
        querySnapshot151.forEach((doc) => {
          const data151 = doc.data();
          S151Data.push(data151);
        });

        setS151(S151Data);
      } catch (error) {
        console.error("Error fetching S151:", error);
      }
    };
    fetchS151Data();
    const S150Data = [];
    const S150Collections = collection(firebase, "S150");
    const fetchS150Data = async () => {
      try {
        const q150 = query(
          S150Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot150 = await getDocs(q150);
        querySnapshot150.forEach((doc) => {
          const data150 = doc.data();
          S150Data.push(data150);
        });

        setS150(S150Data);
      } catch (error) {
        console.error("Error fetching S150:", error);
      }
    };
    fetchS150Data();
    const S149Data = [];
    const S149Collections = collection(firebase, "S149");
    const fetchS149Data = async () => {
      try {
        const q149 = query(
          S149Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot149 = await getDocs(q149);
        querySnapshot149.forEach((doc) => {
          const data149 = doc.data();
          S149Data.push(data149);
        });

        setS149(S149Data);
      } catch (error) {
        console.error("Error fetching S149:", error);
      }
    };
    fetchS149Data();
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
          source={require("../../assets/images/SFDC_1st_P2.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.button35Row}>
            {S149.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button35}
                onPress={() => showModal("149")}
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
            {S150.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button34}
                onPress={() => showModal("150")}
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
            {S151.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button55}
                onPress={() => showModal("151")}
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
            {S152.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button56}
                onPress={() => showModal("152")}
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
          </View>
          <View style={styles.button36Row}>
            {S153.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button36}
                onPress={() => showModal("153")}
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
            {S154.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button57}
                onPress={() => showModal("154")}
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
          </View>
          {S155.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button58}
              onPress={() => showModal("155")}
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
          <View style={styles.button38Row}>
            {S156.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button38}
                onPress={() => showModal("156")}
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
            {S157.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button37}
                onPress={() => showModal("157")}
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
            {S158.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button59}
                onPress={() => showModal("158")}
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
          </View>
          {S159.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button39}
              onPress={() => showModal("159")}
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
          <View style={styles.button40Row}>
            {S160.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button40}
                onPress={() => showModal("160")}
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
            {S161.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button60}
                onPress={() => showModal("161")}
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
          </View>
          <View style={styles.button43ColumnRow}>
            <View style={styles.button43Column}>
              {S162.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button43}
                  onPress={() => showModal("162")}
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
              {S163.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button45}
                  onPress={() => showModal("163")}
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
            </View>
            <View style={styles.button42Column}>
              {S164.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button42}
                  onPress={() => showModal("164")}
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
              {S165.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button44}
                  onPress={() => showModal("165")}
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
            {S166.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button46}
                onPress={() => showModal("166")}
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
            {S167.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button41}
                onPress={() => showModal("167")}
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
            {S168.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button61}
                onPress={() => showModal("168")}
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
          <View style={styles.button47Row}>
            {S169.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button47}
                onPress={() => showModal("169")}
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
            {S170.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button62}
                onPress={() => showModal("170")}
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
          <View style={styles.button49Row}>
            {S171.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button49}
                onPress={() => showModal("171")}
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
            {S172.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button48}
                onPress={() => showModal("172")}
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
            {S173.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button63}
                onPress={() => showModal("173")}
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
          <View style={styles.button50Row}>
            {S174.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button50}
                onPress={() => showModal("174")}
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
            {S175.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button51}
                onPress={() => showModal("175")}
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
          <View style={styles.button54Row}>
            {S176.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button54}
                onPress={() => showModal("176")}
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
            {S177.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button53}
                onPress={() => showModal("177")}
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
            {S178.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button52}
                onPress={() => showModal("178")}
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
            {S179.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button66}
                onPress={() => showModal("179")}
              >
                <View style={styles.b34StackStack}>
                  <View style={styles.b34Stack}>
                    <View
                      style={[
                        styles.b34,
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
                      style={styles.bbb33}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb33,
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
            {S180.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button65}
                onPress={() => showModal("180")}
              >
                <View style={styles.b33StackStack}>
                  <View style={styles.b33Stack}>
                    <View
                      style={[
                        styles.b33,
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
                      style={styles.bbb32}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb32,
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
            {S181.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button64}
                onPress={() => showModal("181")}
              >
                <View style={styles.b32StackStack}>
                  <View style={styles.b32Stack}>
                    <View
                      style={[
                        styles.b32,
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
                      style={styles.bbb31}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb31,
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
    width: 491,
    height: 743,
  },
  image_imageStyle: {},
  button35: {
    width: 18,
    height: 20,
    marginTop: 10,
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
  button34: {
    width: 18,
    height: 20,
    marginLeft: 11,
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
  button55: {
    width: 18,
    height: 20,
    marginLeft: 198,
  },
  b23: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb22: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b23Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb22: {
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
  b23StackStack: {
    width: 18,
    height: 20,
  },
  button56: {
    width: 18,
    height: 20,
    marginLeft: 13,
    marginTop: 16,
  },
  b24: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb23: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b24Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb23: {
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
  b24StackStack: {
    width: 18,
    height: 20,
  },
  button35Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 59,
    marginLeft: 111,
    marginRight: 86,
  },
  button36: {
    width: 18,
    height: 20,
    marginTop: 6,
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
  button57: {
    width: 18,
    height: 20,
    marginLeft: 280,
  },
  b25: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb24: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b25Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb24: {
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
  b25StackStack: {
    width: 18,
    height: 20,
  },
  button36Row: {
    height: 26,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 90,
    marginRight: 85,
  },
  button58: {
    width: 18,
    height: 20,
    marginTop: 19,
    marginLeft: 388,
  },
  b26: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb25: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b26Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb25: {
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
  b26StackStack: {
    width: 18,
    height: 20,
  },
  button38: {
    width: 18,
    height: 20,
    marginTop: 19,
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
  button37: {
    width: 18,
    height: 20,
    marginLeft: 17,
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
  button59: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 34,
  },
  b27: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb26: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b27Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb26: {
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
  b27StackStack: {
    width: 18,
    height: 20,
  },
  button38Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 90,
    marginRight: 85,
  },
  button39: {
    width: 18,
    height: 20,
    marginLeft: 107,
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
  button40: {
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
  button60: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 10,
  },
  b28: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb27: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b28Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb27: {
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
  b28StackStack: {
    width: 18,
    height: 20,
  },
  button40Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 125,
    marginRight: 85,
  },
  button43: {
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
  button45: {
    width: 18,
    height: 20,
    marginTop: 37,
    marginLeft: 4,
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
  button43Column: {
    width: 22,
    marginTop: 19,
  },
  button42: {
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
  button44: {
    width: 18,
    height: 20,
    marginTop: 23,
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
  button42Column: {
    width: 18,
    marginLeft: 5,
    marginBottom: 33,
  },
  button46: {
    width: 18,
    height: 20,
    marginLeft: 8,
    marginTop: 63,
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
  button41: {
    width: 18,
    height: 20,
    marginLeft: 18,
    marginTop: 33,
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
  button61: {
    width: 18,
    height: 20,
    marginLeft: 263,
    marginTop: 53,
  },
  b29: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb28: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b29Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb28: {
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
  b29StackStack: {
    width: 18,
    height: 20,
  },
  button43ColumnRow: {
    height: 96,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 36,
    marginRight: 67,
  },
  button47: {
    width: 18,
    height: 20,
    marginTop: 11,
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
  button62: {
    width: 18,
    height: 20,
    marginLeft: 241,
  },
  b30: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb29: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b30Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb29: {
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
  b30StackStack: {
    width: 18,
    height: 20,
  },
  button47Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 125,
    marginRight: 89,
  },
  button49: {
    width: 18,
    height: 20,
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
  button48: {
    width: 18,
    height: 20,
    marginLeft: 14,
    marginTop: 19,
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
  button63: {
    width: 18,
    height: 20,
    marginLeft: 245,
    marginTop: 3,
  },
  b31: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb30: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b31Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb30: {
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
  b31StackStack: {
    width: 18,
    height: 20,
  },
  button49Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 90,
    marginRight: 88,
  },
  button50: {
    width: 18,
    height: 20,
    marginTop: 9,
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
  button51: {
    width: 18,
    height: 20,
    marginLeft: 32,
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
  button50Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 90,
    marginRight: 333,
  },
  button54: {
    width: 18,
    height: 20,
  },
  b22: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb21: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b22Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb21: {
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
  b22StackStack: {
    width: 18,
    height: 20,
  },
  button53: {
    width: 18,
    height: 20,
    marginLeft: 22,
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
  button52: {
    width: 18,
    height: 20,
    marginLeft: 15,
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
  button66: {
    width: 18,
    height: 20,
    marginLeft: 90,
  },
  b34: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb33: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b34Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb33: {
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
  b34StackStack: {
    width: 18,
    height: 20,
  },
  button65: {
    width: 18,
    height: 20,
    marginLeft: 14,
  },
  b33: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb32: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b33Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb32: {
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
  b33StackStack: {
    width: 18,
    height: 20,
  },
  button64: {
    width: 18,
    height: 20,
    marginLeft: 21,
  },
  b32: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb31: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b32Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb31: {
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
  b32StackStack: {
    width: 18,
    height: 20,
  },
  button54Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 125,
    marginRight: 96,
  },
});
