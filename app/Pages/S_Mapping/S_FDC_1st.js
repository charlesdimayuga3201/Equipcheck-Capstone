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

export default function S_FDC_1st({
  isModalVisible,
  hideModal,
  selectedIcon,
  showModal,
  MselectedBuilding,
  MselectedFloor,
}) {
  const today = new Date();
  const formattedToday = format(today, "MM/d/yyyy");

  const [S101, setS101] = useState([]);
  useEffect(() => {
    const S101Data = [];
    const S101Collections = collection(firebase, "S101");
    const fetchS101Data = async () => {
      try {
        const q101 = query(
          S101Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot101 = await getDocs(q101);
        querySnapshot101.forEach((doc) => {
          const data101 = doc.data();
          S101Data.push(data101);
        });

        setS101(S101Data);
      } catch (error) {
        console.error("Error fetching S101:", error);
      }
    };
    fetchS101Data();
  }, []);
  const [S102, setS102] = useState([]);
  useEffect(() => {
    const S102Data = [];
    const S102Collections = collection(firebase, "S102");
    const fetchS102Data = async () => {
      try {
        const q102 = query(
          S102Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot102 = await getDocs(q102);
        querySnapshot102.forEach((doc) => {
          const data102 = doc.data();
          S102Data.push(data102);
        });

        setS102(S102Data);
      } catch (error) {
        console.error("Error fetching S102:", error);
      }
    };
    fetchS102Data();
  }, []);
  const [S103, setS103] = useState([]);
  useEffect(() => {
    const S103Data = [];
    const S103Collections = collection(firebase, "S103");
    const fetchS103Data = async () => {
      try {
        const q103 = query(
          S103Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot103 = await getDocs(q103);
        querySnapshot103.forEach((doc) => {
          const data103 = doc.data();
          S103Data.push(data103);
        });

        setS103(S103Data);
      } catch (error) {
        console.error("Error fetching S103:", error);
      }
    };
    fetchS103Data();
  }, []);
  const [S104, setS104] = useState([]);
  useEffect(() => {
    const S104Data = [];
    const S104Collections = collection(firebase, "S104");
    const fetchS104Data = async () => {
      try {
        const q104 = query(
          S104Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot104 = await getDocs(q104);
        querySnapshot104.forEach((doc) => {
          const data104 = doc.data();
          S104Data.push(data104);
        });

        setS104(S104Data);
      } catch (error) {
        console.error("Error fetching S104:", error);
      }
    };
    fetchS104Data();
  }, []);
  const [S105, setS105] = useState([]);
  useEffect(() => {
    const S105Data = [];
    const S105Collections = collection(firebase, "S105");
    const fetchS105Data = async () => {
      try {
        const q105 = query(
          S105Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot105 = await getDocs(q105);
        querySnapshot105.forEach((doc) => {
          const data105 = doc.data();
          S105Data.push(data105);
        });

        setS105(S105Data);
      } catch (error) {
        console.error("Error fetching S105:", error);
      }
    };
    fetchS105Data();
  }, []);
  const [S106, setS106] = useState([]);
  useEffect(() => {
    const S106Data = [];
    const S106Collections = collection(firebase, "S106");
    const fetchS106Data = async () => {
      try {
        const q106 = query(
          S106Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot106 = await getDocs(q106);
        querySnapshot106.forEach((doc) => {
          const data106 = doc.data();
          S106Data.push(data106);
        });

        setS106(S106Data);
      } catch (error) {
        console.error("Error fetching S106:", error);
      }
    };
    fetchS106Data();
  }, []);
  const [S107, setS107] = useState([]);
  useEffect(() => {
    const S107Data = [];
    const S107Collections = collection(firebase, "S107");
    const fetchS107Data = async () => {
      try {
        const q107 = query(
          S107Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot107 = await getDocs(q107);
        querySnapshot107.forEach((doc) => {
          const data107 = doc.data();
          S107Data.push(data107);
        });

        setS107(S107Data);
      } catch (error) {
        console.error("Error fetching S107:", error);
      }
    };
    fetchS107Data();
  }, []);
  const [S108, setS108] = useState([]);
  useEffect(() => {
    const S108Data = [];
    const S108Collections = collection(firebase, "S108");
    const fetchS108Data = async () => {
      try {
        const q108 = query(
          S108Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot108 = await getDocs(q108);
        querySnapshot108.forEach((doc) => {
          const data108 = doc.data();
          S108Data.push(data108);
        });

        setS108(S108Data);
      } catch (error) {
        console.error("Error fetching S108:", error);
      }
    };
    fetchS108Data();
  }, []);
  const [S109, setS109] = useState([]);
  useEffect(() => {
    const S109Data = [];
    const S109Collections = collection(firebase, "S109");
    const fetchS109Data = async () => {
      try {
        const q109 = query(
          S109Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot109 = await getDocs(q109);
        querySnapshot109.forEach((doc) => {
          const data109 = doc.data();
          S109Data.push(data109);
        });

        setS109(S109Data);
      } catch (error) {
        console.error("Error fetching S109:", error);
      }
    };
    fetchS109Data();
  }, []);
  const [S110, setS110] = useState([]);
  useEffect(() => {
    const S110Data = [];
    const S110Collections = collection(firebase, "S110");
    const fetchS110Data = async () => {
      try {
        const q110 = query(
          S110Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot110 = await getDocs(q110);
        querySnapshot110.forEach((doc) => {
          const data110 = doc.data();
          S110Data.push(data110);
        });

        setS110(S110Data);
      } catch (error) {
        console.error("Error fetching S110:", error);
      }
    };
    fetchS110Data();
  }, []);
  const [S111, setS111] = useState([]);
  useEffect(() => {
    const S111Data = [];
    const S111Collections = collection(firebase, "S111");
    const fetchS111Data = async () => {
      try {
        const q111 = query(
          S111Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot111 = await getDocs(q111);
        querySnapshot111.forEach((doc) => {
          const data111 = doc.data();
          S111Data.push(data111);
        });

        setS111(S111Data);
      } catch (error) {
        console.error("Error fetching S111:", error);
      }
    };
    fetchS111Data();
  }, []);
  const [S112, setS112] = useState([]);
  useEffect(() => {
    const S112Data = [];
    const S112Collections = collection(firebase, "S112");
    const fetchS112Data = async () => {
      try {
        const q112 = query(
          S112Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot112 = await getDocs(q112);
        querySnapshot112.forEach((doc) => {
          const data112 = doc.data();
          S112Data.push(data112);
        });

        setS112(S112Data);
      } catch (error) {
        console.error("Error fetching S112:", error);
      }
    };
    fetchS112Data();
  }, []);
  const [S113, setS113] = useState([]);
  useEffect(() => {
    const S113Data = [];
    const S113Collections = collection(firebase, "S113");
    const fetchS113Data = async () => {
      try {
        const q113 = query(
          S113Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot113 = await getDocs(q113);
        querySnapshot113.forEach((doc) => {
          const data113 = doc.data();
          S113Data.push(data113);
        });

        setS113(S113Data);
      } catch (error) {
        console.error("Error fetching S113:", error);
      }
    };
    fetchS113Data();
  }, []);
  const [S114, setS114] = useState([]);
  useEffect(() => {
    const S114Data = [];
    const S114Collections = collection(firebase, "S114");
    const fetchS114Data = async () => {
      try {
        const q114 = query(
          S114Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot114 = await getDocs(q114);
        querySnapshot114.forEach((doc) => {
          const data114 = doc.data();
          S114Data.push(data114);
        });

        setS114(S114Data);
      } catch (error) {
        console.error("Error fetching S114:", error);
      }
    };
    fetchS114Data();
  }, []);
  const [S115, setS115] = useState([]);
  useEffect(() => {
    const S115Data = [];
    const S115Collections = collection(firebase, "S115");
    const fetchS115Data = async () => {
      try {
        const q115 = query(
          S115Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot115 = await getDocs(q115);
        querySnapshot115.forEach((doc) => {
          const data115 = doc.data();
          S115Data.push(data115);
        });

        setS115(S115Data);
      } catch (error) {
        console.error("Error fetching S115:", error);
      }
    };
    fetchS115Data();
  }, []);
  const [S116, setS116] = useState([]);
  useEffect(() => {
    const S116Data = [];
    const S116Collections = collection(firebase, "S116");
    const fetchS116Data = async () => {
      try {
        const q116 = query(
          S116Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot116 = await getDocs(q116);
        querySnapshot116.forEach((doc) => {
          const data116 = doc.data();
          S116Data.push(data116);
        });

        setS116(S116Data);
      } catch (error) {
        console.error("Error fetching S116:", error);
      }
    };
    fetchS116Data();
  }, []);
  const [S117, setS117] = useState([]);
  useEffect(() => {
    const S117Data = [];
    const S117Collections = collection(firebase, "S117");
    const fetchS117Data = async () => {
      try {
        const q117 = query(
          S117Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot117 = await getDocs(q117);
        querySnapshot117.forEach((doc) => {
          const data117 = doc.data();
          S117Data.push(data117);
        });

        setS117(S117Data);
      } catch (error) {
        console.error("Error fetching S117:", error);
      }
    };
    fetchS117Data();
  }, []);
  const [S118, setS118] = useState([]);
  useEffect(() => {
    const S118Data = [];
    const S118Collections = collection(firebase, "S118");
    const fetchS118Data = async () => {
      try {
        const q118 = query(
          S118Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot118 = await getDocs(q118);
        querySnapshot118.forEach((doc) => {
          const data118 = doc.data();
          S118Data.push(data118);
        });

        setS118(S118Data);
      } catch (error) {
        console.error("Error fetching S118:", error);
      }
    };
    fetchS118Data();
  }, []);
  const [S119, setS119] = useState([]);
  useEffect(() => {
    const S119Data = [];
    const S119Collections = collection(firebase, "S119");
    const fetchS119Data = async () => {
      try {
        const q119 = query(
          S119Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot119 = await getDocs(q119);
        querySnapshot119.forEach((doc) => {
          const data119 = doc.data();
          S119Data.push(data119);
        });

        setS119(S119Data);
      } catch (error) {
        console.error("Error fetching S119:", error);
      }
    };
    fetchS119Data();
  }, []);
  const [S120, setS120] = useState([]);
  useEffect(() => {
    const S120Data = [];
    const S120Collections = collection(firebase, "S120");
    const fetchS120Data = async () => {
      try {
        const q120 = query(
          S120Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot120 = await getDocs(q120);
        querySnapshot120.forEach((doc) => {
          const data120 = doc.data();
          S120Data.push(data120);
        });

        setS120(S120Data);
      } catch (error) {
        console.error("Error fetching S120:", error);
      }
    };
    fetchS120Data();
  }, []);
  const [S121, setS121] = useState([]);
  useEffect(() => {
    const S121Data = [];
    const S121Collections = collection(firebase, "S121");
    const fetchS121Data = async () => {
      try {
        const q121 = query(
          S121Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot121 = await getDocs(q121);
        querySnapshot121.forEach((doc) => {
          const data121 = doc.data();
          S121Data.push(data121);
        });

        setS121(S121Data);
      } catch (error) {
        console.error("Error fetching S121:", error);
      }
    };
    fetchS121Data();
  }, []);
  const [S122, setS122] = useState([]);
  useEffect(() => {
    const S122Data = [];
    const S122Collections = collection(firebase, "S122");
    const fetchS122Data = async () => {
      try {
        const q122 = query(
          S122Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot122 = await getDocs(q122);
        querySnapshot122.forEach((doc) => {
          const data122 = doc.data();
          S122Data.push(data122);
        });

        setS122(S122Data);
      } catch (error) {
        console.error("Error fetching S122:", error);
      }
    };
    fetchS122Data();
  }, []);
  const [S123, setS123] = useState([]);
  useEffect(() => {
    const S123Data = [];
    const S123Collections = collection(firebase, "S123");
    const fetchS123Data = async () => {
      try {
        const q123 = query(
          S123Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot123 = await getDocs(q123);
        querySnapshot123.forEach((doc) => {
          const data123 = doc.data();
          S123Data.push(data123);
        });

        setS123(S123Data);
      } catch (error) {
        console.error("Error fetching S123:", error);
      }
    };
    fetchS123Data();
  }, []);
  const [S124, setS124] = useState([]);
  useEffect(() => {
    const S124Data = [];
    const S124Collections = collection(firebase, "S124");
    const fetchS124Data = async () => {
      try {
        const q124 = query(
          S124Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot124 = await getDocs(q124);
        querySnapshot124.forEach((doc) => {
          const data124 = doc.data();
          S124Data.push(data124);
        });

        setS124(S124Data);
      } catch (error) {
        console.error("Error fetching S124:", error);
      }
    };
    fetchS124Data();
  }, []);
  const [S125, setS125] = useState([]);
  useEffect(() => {
    const S125Data = [];
    const S125Collections = collection(firebase, "S125");
    const fetchS125Data = async () => {
      try {
        const q125 = query(
          S125Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot125 = await getDocs(q125);
        querySnapshot125.forEach((doc) => {
          const data125 = doc.data();
          S125Data.push(data125);
        });

        setS125(S125Data);
      } catch (error) {
        console.error("Error fetching S125:", error);
      }
    };
    fetchS125Data();
  }, []);
  const [S126, setS126] = useState([]);
  useEffect(() => {
    const S126Data = [];
    const S126Collections = collection(firebase, "S126");
    const fetchS126Data = async () => {
      try {
        const q126 = query(
          S126Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot126 = await getDocs(q126);
        querySnapshot126.forEach((doc) => {
          const data126 = doc.data();
          S126Data.push(data126);
        });

        setS126(S126Data);
      } catch (error) {
        console.error("Error fetching S126:", error);
      }
    };
    fetchS126Data();
  }, []);
  const [S127, setS127] = useState([]);
  useEffect(() => {
    const S127Data = [];
    const S127Collections = collection(firebase, "S127");
    const fetchS127Data = async () => {
      try {
        const q127 = query(
          S127Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot127 = await getDocs(q127);
        querySnapshot127.forEach((doc) => {
          const data127 = doc.data();
          S127Data.push(data127);
        });

        setS127(S127Data);
      } catch (error) {
        console.error("Error fetching S127:", error);
      }
    };
    fetchS127Data();
  }, []);
  const [S128, setS128] = useState([]);
  useEffect(() => {
    const S128Data = [];
    const S128Collections = collection(firebase, "S128");
    const fetchS128Data = async () => {
      try {
        const q128 = query(
          S128Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot128 = await getDocs(q128);
        querySnapshot128.forEach((doc) => {
          const data128 = doc.data();
          S128Data.push(data128);
        });

        setS128(S128Data);
      } catch (error) {
        console.error("Error fetching S128:", error);
      }
    };
    fetchS128Data();
  }, []);
  const [S129, setS129] = useState([]);
  useEffect(() => {
    const S129Data = [];
    const S129Collections = collection(firebase, "S129");
    const fetchS129Data = async () => {
      try {
        const q129 = query(
          S129Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot129 = await getDocs(q129);
        querySnapshot129.forEach((doc) => {
          const data129 = doc.data();
          S129Data.push(data129);
        });

        setS129(S129Data);
      } catch (error) {
        console.error("Error fetching S129:", error);
      }
    };
    fetchS129Data();
  }, []);
  const [S130, setS130] = useState([]);
  useEffect(() => {
    const S130Data = [];
    const S130Collections = collection(firebase, "S130");
    const fetchS130Data = async () => {
      try {
        const q130 = query(
          S130Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot130 = await getDocs(q130);
        querySnapshot130.forEach((doc) => {
          const data130 = doc.data();
          S130Data.push(data130);
        });

        setS130(S130Data);
      } catch (error) {
        console.error("Error fetching S130:", error);
      }
    };
    fetchS130Data();
  }, []);
  const [S131, setS131] = useState([]);
  useEffect(() => {
    const S131Data = [];
    const S131Collections = collection(firebase, "S131");
    const fetchS131Data = async () => {
      try {
        const q131 = query(
          S131Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot131 = await getDocs(q131);
        querySnapshot131.forEach((doc) => {
          const data131 = doc.data();
          S131Data.push(data131);
        });

        setS131(S131Data);
      } catch (error) {
        console.error("Error fetching S131:", error);
      }
    };
    fetchS131Data();
  }, []);
  const [S132, setS132] = useState([]);
  useEffect(() => {
    const S132Data = [];
    const S132Collections = collection(firebase, "S132");
    const fetchS132Data = async () => {
      try {
        const q132 = query(
          S132Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot132 = await getDocs(q132);
        querySnapshot132.forEach((doc) => {
          const data132 = doc.data();
          S132Data.push(data132);
        });

        setS132(S132Data);
      } catch (error) {
        console.error("Error fetching S132:", error);
      }
    };
    fetchS132Data();
  }, []);
  const [S133, setS133] = useState([]);
  useEffect(() => {
    const S133Data = [];
    const S133Collections = collection(firebase, "S133");
    const fetchS133Data = async () => {
      try {
        const q133 = query(
          S133Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot133 = await getDocs(q133);
        querySnapshot133.forEach((doc) => {
          const data133 = doc.data();
          S133Data.push(data133);
        });

        setS133(S133Data);
      } catch (error) {
        console.error("Error fetching S133:", error);
      }
    };
    fetchS133Data();
  }, []);
  const [S134, setS134] = useState([]);
  useEffect(() => {
    const S134Data = [];
    const S134Collections = collection(firebase, "S134");
    const fetchS134Data = async () => {
      try {
        const q134 = query(
          S134Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot134 = await getDocs(q134);
        querySnapshot134.forEach((doc) => {
          const data134 = doc.data();
          S134Data.push(data134);
        });

        setS134(S134Data);
      } catch (error) {
        console.error("Error fetching S134:", error);
      }
    };
    fetchS134Data();
  }, []);
  const [S135, setS135] = useState([]);
  useEffect(() => {
    const S135Data = [];
    const S135Collections = collection(firebase, "S135");
    const fetchS135Data = async () => {
      try {
        const q135 = query(
          S135Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot135 = await getDocs(q135);
        querySnapshot135.forEach((doc) => {
          const data135 = doc.data();
          S135Data.push(data135);
        });

        setS135(S135Data);
      } catch (error) {
        console.error("Error fetching S135:", error);
      }
    };
    fetchS135Data();
  }, []);
  const [S136, setS136] = useState([]);
  useEffect(() => {
    const S136Data = [];
    const S136Collections = collection(firebase, "S136");
    const fetchS136Data = async () => {
      try {
        const q136 = query(
          S136Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot136 = await getDocs(q136);
        querySnapshot136.forEach((doc) => {
          const data136 = doc.data();
          S136Data.push(data136);
        });

        setS136(S136Data);
      } catch (error) {
        console.error("Error fetching S136:", error);
      }
    };
    fetchS136Data();
  }, []);
  const [S137, setS137] = useState([]);
  useEffect(() => {
    const S137Data = [];
    const S137Collections = collection(firebase, "S137");
    const fetchS137Data = async () => {
      try {
        const q137 = query(
          S137Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot137 = await getDocs(q137);
        querySnapshot137.forEach((doc) => {
          const data137 = doc.data();
          S137Data.push(data137);
        });

        setS137(S137Data);
      } catch (error) {
        console.error("Error fetching S137:", error);
      }
    };
    fetchS137Data();
  }, []);
  const [S138, setS138] = useState([]);
  useEffect(() => {
    const S138Data = [];
    const S138Collections = collection(firebase, "S138");
    const fetchS138Data = async () => {
      try {
        const q138 = query(
          S138Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot138 = await getDocs(q138);
        querySnapshot138.forEach((doc) => {
          const data138 = doc.data();
          S138Data.push(data138);
        });

        setS138(S138Data);
      } catch (error) {
        console.error("Error fetching S138:", error);
      }
    };
    fetchS138Data();
  }, []);
  const [S139, setS139] = useState([]);
  useEffect(() => {
    const S139Data = [];
    const S139Collections = collection(firebase, "S139");
    const fetchS139Data = async () => {
      try {
        const q139 = query(
          S139Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot139 = await getDocs(q139);
        querySnapshot139.forEach((doc) => {
          const data139 = doc.data();
          S139Data.push(data139);
        });

        setS139(S139Data);
      } catch (error) {
        console.error("Error fetching S139:", error);
      }
    };
    fetchS139Data();
  }, []);
  const [S140, setS140] = useState([]);
  useEffect(() => {
    const S140Data = [];
    const S140Collections = collection(firebase, "S140");
    const fetchS140Data = async () => {
      try {
        const q140 = query(
          S140Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot140 = await getDocs(q140);
        querySnapshot140.forEach((doc) => {
          const data140 = doc.data();
          S140Data.push(data140);
        });

        setS140(S140Data);
      } catch (error) {
        console.error("Error fetching S140:", error);
      }
    };
    fetchS140Data();
  }, []);
  const [S141, setS141] = useState([]);
  useEffect(() => {
    const S141Data = [];
    const S141Collections = collection(firebase, "S141");
    const fetchS141Data = async () => {
      try {
        const q141 = query(
          S141Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot141 = await getDocs(q141);
        querySnapshot141.forEach((doc) => {
          const data141 = doc.data();
          S141Data.push(data141);
        });

        setS141(S141Data);
      } catch (error) {
        console.error("Error fetching S141:", error);
      }
    };
    fetchS141Data();
  }, []);
  const [S142, setS142] = useState([]);
  useEffect(() => {
    const S142Data = [];
    const S142Collections = collection(firebase, "S142");
    const fetchS142Data = async () => {
      try {
        const q142 = query(
          S142Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot142 = await getDocs(q142);
        querySnapshot142.forEach((doc) => {
          const data142 = doc.data();
          S142Data.push(data142);
        });

        setS142(S142Data);
      } catch (error) {
        console.error("Error fetching S142:", error);
      }
    };
    fetchS142Data();
  }, []);
  const [S143, setS143] = useState([]);
  useEffect(() => {
    const S143Data = [];
    const S143Collections = collection(firebase, "S143");
    const fetchS143Data = async () => {
      try {
        const q143 = query(
          S143Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot143 = await getDocs(q143);
        querySnapshot143.forEach((doc) => {
          const data143 = doc.data();
          S143Data.push(data143);
        });

        setS143(S143Data);
      } catch (error) {
        console.error("Error fetching S143:", error);
      }
    };
    fetchS143Data();
  }, []);
  const [S144, setS144] = useState([]);
  useEffect(() => {
    const S144Data = [];
    const S144Collections = collection(firebase, "S144");
    const fetchS144Data = async () => {
      try {
        const q144 = query(
          S144Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot144 = await getDocs(q144);
        querySnapshot144.forEach((doc) => {
          const data144 = doc.data();
          S144Data.push(data144);
        });

        setS144(S144Data);
      } catch (error) {
        console.error("Error fetching S144:", error);
      }
    };
    fetchS144Data();
  }, []);
  const [S145, setS145] = useState([]);
  useEffect(() => {
    const S145Data = [];
    const S145Collections = collection(firebase, "S145");
    const fetchS145Data = async () => {
      try {
        const q145 = query(
          S145Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot145 = await getDocs(q145);
        querySnapshot145.forEach((doc) => {
          const data145 = doc.data();
          S145Data.push(data145);
        });

        setS145(S145Data);
      } catch (error) {
        console.error("Error fetching S145:", error);
      }
    };
    fetchS145Data();
  }, []);
  const [S146, setS146] = useState([]);
  useEffect(() => {
    const S146Data = [];
    const S146Collections = collection(firebase, "S146");
    const fetchS146Data = async () => {
      try {
        const q146 = query(
          S146Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot146 = await getDocs(q146);
        querySnapshot146.forEach((doc) => {
          const data146 = doc.data();
          S146Data.push(data146);
        });

        setS146(S146Data);
      } catch (error) {
        console.error("Error fetching S146:", error);
      }
    };
    fetchS146Data();
  }, []);
  const [S147, setS147] = useState([]);
  useEffect(() => {
    const S147Data = [];
    const S147Collections = collection(firebase, "S147");
    const fetchS147Data = async () => {
      try {
        const q147 = query(
          S147Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot147 = await getDocs(q147);
        querySnapshot147.forEach((doc) => {
          const data147 = doc.data();
          S147Data.push(data147);
        });

        setS147(S147Data);
      } catch (error) {
        console.error("Error fetching S147:", error);
      }
    };
    fetchS147Data();
  }, []);
  const [S148, setS148] = useState([]);
  useEffect(() => {
    const S148Data = [];
    const S148Collections = collection(firebase, "S148");
    const fetchS148Data = async () => {
      try {
        const q148 = query(
          S148Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot148 = await getDocs(q148);
        querySnapshot148.forEach((doc) => {
          const data148 = doc.data();
          S148Data.push(data148);
        });

        setS148(S148Data);
      } catch (error) {
        console.error("Error fetching S148:", error);
      }
    };
    fetchS148Data();
  }, []);
  const refreshData = async () => {
    const S148Data = [];
    const S148Collections = collection(firebase, "S148");
    const fetchS148Data = async () => {
      try {
        const q148 = query(
          S148Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot148 = await getDocs(q148);
        querySnapshot148.forEach((doc) => {
          const data148 = doc.data();
          S148Data.push(data148);
        });

        setS148(S148Data);
      } catch (error) {
        console.error("Error fetching S148:", error);
      }
    };
    fetchS148Data();
    const S147Data = [];
    const S147Collections = collection(firebase, "S147");
    const fetchS147Data = async () => {
      try {
        const q147 = query(
          S147Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot147 = await getDocs(q147);
        querySnapshot147.forEach((doc) => {
          const data147 = doc.data();
          S147Data.push(data147);
        });

        setS147(S147Data);
      } catch (error) {
        console.error("Error fetching S147:", error);
      }
    };
    fetchS147Data();
    const S146Data = [];
    const S146Collections = collection(firebase, "S146");
    const fetchS146Data = async () => {
      try {
        const q146 = query(
          S146Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot146 = await getDocs(q146);
        querySnapshot146.forEach((doc) => {
          const data146 = doc.data();
          S146Data.push(data146);
        });

        setS146(S146Data);
      } catch (error) {
        console.error("Error fetching S146:", error);
      }
    };
    fetchS146Data();
    const S145Data = [];
    const S145Collections = collection(firebase, "S145");
    const fetchS145Data = async () => {
      try {
        const q145 = query(
          S145Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot145 = await getDocs(q145);
        querySnapshot145.forEach((doc) => {
          const data145 = doc.data();
          S145Data.push(data145);
        });

        setS145(S145Data);
      } catch (error) {
        console.error("Error fetching S145:", error);
      }
    };
    fetchS145Data();
    const S144Data = [];
    const S144Collections = collection(firebase, "S144");
    const fetchS144Data = async () => {
      try {
        const q144 = query(
          S144Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot144 = await getDocs(q144);
        querySnapshot144.forEach((doc) => {
          const data144 = doc.data();
          S144Data.push(data144);
        });

        setS144(S144Data);
      } catch (error) {
        console.error("Error fetching S144:", error);
      }
    };
    fetchS144Data();
    const S143Data = [];
    const S143Collections = collection(firebase, "S143");
    const fetchS143Data = async () => {
      try {
        const q143 = query(
          S143Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot143 = await getDocs(q143);
        querySnapshot143.forEach((doc) => {
          const data143 = doc.data();
          S143Data.push(data143);
        });

        setS143(S143Data);
      } catch (error) {
        console.error("Error fetching S143:", error);
      }
    };
    fetchS143Data();
    const S142Data = [];
    const S142Collections = collection(firebase, "S142");
    const fetchS142Data = async () => {
      try {
        const q142 = query(
          S142Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot142 = await getDocs(q142);
        querySnapshot142.forEach((doc) => {
          const data142 = doc.data();
          S142Data.push(data142);
        });

        setS142(S142Data);
      } catch (error) {
        console.error("Error fetching S142:", error);
      }
    };
    fetchS142Data();
    const S141Data = [];
    const S141Collections = collection(firebase, "S141");
    const fetchS141Data = async () => {
      try {
        const q141 = query(
          S141Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot141 = await getDocs(q141);
        querySnapshot141.forEach((doc) => {
          const data141 = doc.data();
          S141Data.push(data141);
        });

        setS141(S141Data);
      } catch (error) {
        console.error("Error fetching S141:", error);
      }
    };
    fetchS141Data();
    const S140Data = [];
    const S140Collections = collection(firebase, "S140");
    const fetchS140Data = async () => {
      try {
        const q140 = query(
          S140Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot140 = await getDocs(q140);
        querySnapshot140.forEach((doc) => {
          const data140 = doc.data();
          S140Data.push(data140);
        });

        setS140(S140Data);
      } catch (error) {
        console.error("Error fetching S140:", error);
      }
    };
    fetchS140Data();
    const S139Data = [];
    const S139Collections = collection(firebase, "S139");
    const fetchS139Data = async () => {
      try {
        const q139 = query(
          S139Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot139 = await getDocs(q139);
        querySnapshot139.forEach((doc) => {
          const data139 = doc.data();
          S139Data.push(data139);
        });

        setS139(S139Data);
      } catch (error) {
        console.error("Error fetching S139:", error);
      }
    };
    fetchS139Data();
    const S138Data = [];
    const S138Collections = collection(firebase, "S138");
    const fetchS138Data = async () => {
      try {
        const q138 = query(
          S138Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot138 = await getDocs(q138);
        querySnapshot138.forEach((doc) => {
          const data138 = doc.data();
          S138Data.push(data138);
        });

        setS138(S138Data);
      } catch (error) {
        console.error("Error fetching S138:", error);
      }
    };
    fetchS138Data();
    const S137Data = [];
    const S137Collections = collection(firebase, "S137");
    const fetchS137Data = async () => {
      try {
        const q137 = query(
          S137Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot137 = await getDocs(q137);
        querySnapshot137.forEach((doc) => {
          const data137 = doc.data();
          S137Data.push(data137);
        });

        setS137(S137Data);
      } catch (error) {
        console.error("Error fetching S137:", error);
      }
    };
    fetchS137Data();
    const S136Data = [];
    const S136Collections = collection(firebase, "S136");
    const fetchS136Data = async () => {
      try {
        const q136 = query(
          S136Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot136 = await getDocs(q136);
        querySnapshot136.forEach((doc) => {
          const data136 = doc.data();
          S136Data.push(data136);
        });

        setS136(S136Data);
      } catch (error) {
        console.error("Error fetching S136:", error);
      }
    };
    fetchS136Data();
    const S135Data = [];
    const S135Collections = collection(firebase, "S135");
    const fetchS135Data = async () => {
      try {
        const q135 = query(
          S135Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot135 = await getDocs(q135);
        querySnapshot135.forEach((doc) => {
          const data135 = doc.data();
          S135Data.push(data135);
        });

        setS135(S135Data);
      } catch (error) {
        console.error("Error fetching S135:", error);
      }
    };
    fetchS135Data();
    const S134Data = [];
    const S134Collections = collection(firebase, "S134");
    const fetchS134Data = async () => {
      try {
        const q134 = query(
          S134Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot134 = await getDocs(q134);
        querySnapshot134.forEach((doc) => {
          const data134 = doc.data();
          S134Data.push(data134);
        });

        setS134(S134Data);
      } catch (error) {
        console.error("Error fetching S134:", error);
      }
    };
    fetchS134Data();
    const S133Data = [];
    const S133Collections = collection(firebase, "S133");
    const fetchS133Data = async () => {
      try {
        const q133 = query(
          S133Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot133 = await getDocs(q133);
        querySnapshot133.forEach((doc) => {
          const data133 = doc.data();
          S133Data.push(data133);
        });

        setS133(S133Data);
      } catch (error) {
        console.error("Error fetching S133:", error);
      }
    };
    fetchS133Data();
    const S132Data = [];
    const S132Collections = collection(firebase, "S132");
    const fetchS132Data = async () => {
      try {
        const q132 = query(
          S132Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot132 = await getDocs(q132);
        querySnapshot132.forEach((doc) => {
          const data132 = doc.data();
          S132Data.push(data132);
        });

        setS132(S132Data);
      } catch (error) {
        console.error("Error fetching S132:", error);
      }
    };
    fetchS132Data();
    const S131Data = [];
    const S131Collections = collection(firebase, "S131");
    const fetchS131Data = async () => {
      try {
        const q131 = query(
          S131Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot131 = await getDocs(q131);
        querySnapshot131.forEach((doc) => {
          const data131 = doc.data();
          S131Data.push(data131);
        });

        setS131(S131Data);
      } catch (error) {
        console.error("Error fetching S131:", error);
      }
    };
    fetchS131Data();
    const S130Data = [];
    const S130Collections = collection(firebase, "S130");
    const fetchS130Data = async () => {
      try {
        const q130 = query(
          S130Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot130 = await getDocs(q130);
        querySnapshot130.forEach((doc) => {
          const data130 = doc.data();
          S130Data.push(data130);
        });

        setS130(S130Data);
      } catch (error) {
        console.error("Error fetching S130:", error);
      }
    };
    fetchS130Data();
    const S129Data = [];
    const S129Collections = collection(firebase, "S129");
    const fetchS129Data = async () => {
      try {
        const q129 = query(
          S129Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot129 = await getDocs(q129);
        querySnapshot129.forEach((doc) => {
          const data129 = doc.data();
          S129Data.push(data129);
        });

        setS129(S129Data);
      } catch (error) {
        console.error("Error fetching S129:", error);
      }
    };
    fetchS129Data();
    const S128Data = [];
    const S128Collections = collection(firebase, "S128");
    const fetchS128Data = async () => {
      try {
        const q128 = query(
          S128Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot128 = await getDocs(q128);
        querySnapshot128.forEach((doc) => {
          const data128 = doc.data();
          S128Data.push(data128);
        });

        setS128(S128Data);
      } catch (error) {
        console.error("Error fetching S128:", error);
      }
    };
    fetchS128Data();
    const S127Data = [];
    const S127Collections = collection(firebase, "S127");
    const fetchS127Data = async () => {
      try {
        const q127 = query(
          S127Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot127 = await getDocs(q127);
        querySnapshot127.forEach((doc) => {
          const data127 = doc.data();
          S127Data.push(data127);
        });

        setS127(S127Data);
      } catch (error) {
        console.error("Error fetching S127:", error);
      }
    };
    fetchS127Data();
    const S126Data = [];
    const S126Collections = collection(firebase, "S126");
    const fetchS126Data = async () => {
      try {
        const q126 = query(
          S126Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot126 = await getDocs(q126);
        querySnapshot126.forEach((doc) => {
          const data126 = doc.data();
          S126Data.push(data126);
        });

        setS126(S126Data);
      } catch (error) {
        console.error("Error fetching S126:", error);
      }
    };
    fetchS126Data();
    const S125Data = [];
    const S125Collections = collection(firebase, "S125");
    const fetchS125Data = async () => {
      try {
        const q125 = query(
          S125Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot125 = await getDocs(q125);
        querySnapshot125.forEach((doc) => {
          const data125 = doc.data();
          S125Data.push(data125);
        });

        setS125(S125Data);
      } catch (error) {
        console.error("Error fetching S125:", error);
      }
    };
    fetchS125Data();
    const S124Data = [];
    const S124Collections = collection(firebase, "S124");
    const fetchS124Data = async () => {
      try {
        const q124 = query(
          S124Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot124 = await getDocs(q124);
        querySnapshot124.forEach((doc) => {
          const data124 = doc.data();
          S124Data.push(data124);
        });

        setS124(S124Data);
      } catch (error) {
        console.error("Error fetching S124:", error);
      }
    };
    fetchS124Data();
    const S123Data = [];
    const S123Collections = collection(firebase, "S123");
    const fetchS123Data = async () => {
      try {
        const q123 = query(
          S123Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot123 = await getDocs(q123);
        querySnapshot123.forEach((doc) => {
          const data123 = doc.data();
          S123Data.push(data123);
        });

        setS123(S123Data);
      } catch (error) {
        console.error("Error fetching S123:", error);
      }
    };
    fetchS123Data();
    const S122Data = [];
    const S122Collections = collection(firebase, "S122");
    const fetchS122Data = async () => {
      try {
        const q122 = query(
          S122Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot122 = await getDocs(q122);
        querySnapshot122.forEach((doc) => {
          const data122 = doc.data();
          S122Data.push(data122);
        });

        setS122(S122Data);
      } catch (error) {
        console.error("Error fetching S122:", error);
      }
    };
    fetchS122Data();
    const S121Data = [];
    const S121Collections = collection(firebase, "S121");
    const fetchS121Data = async () => {
      try {
        const q121 = query(
          S121Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot121 = await getDocs(q121);
        querySnapshot121.forEach((doc) => {
          const data121 = doc.data();
          S121Data.push(data121);
        });

        setS121(S121Data);
      } catch (error) {
        console.error("Error fetching S121:", error);
      }
    };
    fetchS121Data();
    const S120Data = [];
    const S120Collections = collection(firebase, "S120");
    const fetchS120Data = async () => {
      try {
        const q120 = query(
          S120Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot120 = await getDocs(q120);
        querySnapshot120.forEach((doc) => {
          const data120 = doc.data();
          S120Data.push(data120);
        });

        setS120(S120Data);
      } catch (error) {
        console.error("Error fetching S120:", error);
      }
    };
    fetchS120Data();
    const S119Data = [];
    const S119Collections = collection(firebase, "S119");
    const fetchS119Data = async () => {
      try {
        const q119 = query(
          S119Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot119 = await getDocs(q119);
        querySnapshot119.forEach((doc) => {
          const data119 = doc.data();
          S119Data.push(data119);
        });

        setS119(S119Data);
      } catch (error) {
        console.error("Error fetching S119:", error);
      }
    };
    fetchS119Data();
    const S118Data = [];
    const S118Collections = collection(firebase, "S118");
    const fetchS118Data = async () => {
      try {
        const q118 = query(
          S118Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot118 = await getDocs(q118);
        querySnapshot118.forEach((doc) => {
          const data118 = doc.data();
          S118Data.push(data118);
        });

        setS118(S118Data);
      } catch (error) {
        console.error("Error fetching S118:", error);
      }
    };
    fetchS118Data();
    const S117Data = [];
    const S117Collections = collection(firebase, "S117");
    const fetchS117Data = async () => {
      try {
        const q117 = query(
          S117Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot117 = await getDocs(q117);
        querySnapshot117.forEach((doc) => {
          const data117 = doc.data();
          S117Data.push(data117);
        });

        setS117(S117Data);
      } catch (error) {
        console.error("Error fetching S117:", error);
      }
    };
    fetchS117Data();
    const S116Data = [];
    const S116Collections = collection(firebase, "S116");
    const fetchS116Data = async () => {
      try {
        const q116 = query(
          S116Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot116 = await getDocs(q116);
        querySnapshot116.forEach((doc) => {
          const data116 = doc.data();
          S116Data.push(data116);
        });

        setS116(S116Data);
      } catch (error) {
        console.error("Error fetching S116:", error);
      }
    };
    fetchS116Data();
    const S115Data = [];
    const S115Collections = collection(firebase, "S115");
    const fetchS115Data = async () => {
      try {
        const q115 = query(
          S115Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot115 = await getDocs(q115);
        querySnapshot115.forEach((doc) => {
          const data115 = doc.data();
          S115Data.push(data115);
        });

        setS115(S115Data);
      } catch (error) {
        console.error("Error fetching S115:", error);
      }
    };
    fetchS115Data();
    const S114Data = [];
    const S114Collections = collection(firebase, "S114");
    const fetchS114Data = async () => {
      try {
        const q114 = query(
          S114Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot114 = await getDocs(q114);
        querySnapshot114.forEach((doc) => {
          const data114 = doc.data();
          S114Data.push(data114);
        });

        setS114(S114Data);
      } catch (error) {
        console.error("Error fetching S114:", error);
      }
    };
    fetchS114Data();
    const S113Data = [];
    const S113Collections = collection(firebase, "S113");
    const fetchS113Data = async () => {
      try {
        const q113 = query(
          S113Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot113 = await getDocs(q113);
        querySnapshot113.forEach((doc) => {
          const data113 = doc.data();
          S113Data.push(data113);
        });

        setS113(S113Data);
      } catch (error) {
        console.error("Error fetching S113:", error);
      }
    };
    fetchS113Data();
    const S112Data = [];
    const S112Collections = collection(firebase, "S112");
    const fetchS112Data = async () => {
      try {
        const q112 = query(
          S112Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot112 = await getDocs(q112);
        querySnapshot112.forEach((doc) => {
          const data112 = doc.data();
          S112Data.push(data112);
        });

        setS112(S112Data);
      } catch (error) {
        console.error("Error fetching S112:", error);
      }
    };
    fetchS112Data();
    const S111Data = [];
    const S111Collections = collection(firebase, "S111");
    const fetchS111Data = async () => {
      try {
        const q111 = query(
          S111Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot111 = await getDocs(q111);
        querySnapshot111.forEach((doc) => {
          const data111 = doc.data();
          S111Data.push(data111);
        });

        setS111(S111Data);
      } catch (error) {
        console.error("Error fetching S111:", error);
      }
    };
    fetchS111Data();
    const S110Data = [];
    const S110Collections = collection(firebase, "S110");
    const fetchS110Data = async () => {
      try {
        const q110 = query(
          S110Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot110 = await getDocs(q110);
        querySnapshot110.forEach((doc) => {
          const data110 = doc.data();
          S110Data.push(data110);
        });

        setS110(S110Data);
      } catch (error) {
        console.error("Error fetching S110:", error);
      }
    };
    fetchS110Data();
    const S109Data = [];
    const S109Collections = collection(firebase, "S109");
    const fetchS109Data = async () => {
      try {
        const q109 = query(
          S109Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot109 = await getDocs(q109);
        querySnapshot109.forEach((doc) => {
          const data109 = doc.data();
          S109Data.push(data109);
        });

        setS109(S109Data);
      } catch (error) {
        console.error("Error fetching S109:", error);
      }
    };
    fetchS109Data();
    const S108Data = [];
    const S108Collections = collection(firebase, "S108");
    const fetchS108Data = async () => {
      try {
        const q108 = query(
          S108Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot108 = await getDocs(q108);
        querySnapshot108.forEach((doc) => {
          const data108 = doc.data();
          S108Data.push(data108);
        });

        setS108(S108Data);
      } catch (error) {
        console.error("Error fetching S108:", error);
      }
    };
    fetchS108Data();
    const S107Data = [];
    const S107Collections = collection(firebase, "S107");
    const fetchS107Data = async () => {
      try {
        const q107 = query(
          S107Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot107 = await getDocs(q107);
        querySnapshot107.forEach((doc) => {
          const data107 = doc.data();
          S107Data.push(data107);
        });

        setS107(S107Data);
      } catch (error) {
        console.error("Error fetching S107:", error);
      }
    };
    fetchS107Data();
    const S106Data = [];
    const S106Collections = collection(firebase, "S106");
    const fetchS106Data = async () => {
      try {
        const q106 = query(
          S106Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot106 = await getDocs(q106);
        querySnapshot106.forEach((doc) => {
          const data106 = doc.data();
          S106Data.push(data106);
        });

        setS106(S106Data);
      } catch (error) {
        console.error("Error fetching S106:", error);
      }
    };
    fetchS106Data();
    const S105Data = [];
    const S105Collections = collection(firebase, "S105");
    const fetchS105Data = async () => {
      try {
        const q105 = query(
          S105Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot105 = await getDocs(q105);
        querySnapshot105.forEach((doc) => {
          const data105 = doc.data();
          S105Data.push(data105);
        });

        setS105(S105Data);
      } catch (error) {
        console.error("Error fetching S105:", error);
      }
    };
    fetchS105Data();
    const S104Data = [];
    const S104Collections = collection(firebase, "S104");
    const fetchS104Data = async () => {
      try {
        const q104 = query(
          S104Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot104 = await getDocs(q104);
        querySnapshot104.forEach((doc) => {
          const data104 = doc.data();
          S104Data.push(data104);
        });

        setS104(S104Data);
      } catch (error) {
        console.error("Error fetching S104:", error);
      }
    };
    fetchS104Data();
    const S103Data = [];
    const S103Collections = collection(firebase, "S103");
    const fetchS103Data = async () => {
      try {
        const q103 = query(
          S103Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot103 = await getDocs(q103);
        querySnapshot103.forEach((doc) => {
          const data103 = doc.data();
          S103Data.push(data103);
        });

        setS103(S103Data);
      } catch (error) {
        console.error("Error fetching S103:", error);
      }
    };
    fetchS103Data();
    const S102Data = [];
    const S102Collections = collection(firebase, "S102");
    const fetchS102Data = async () => {
      try {
        const q102 = query(
          S102Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot102 = await getDocs(q102);
        querySnapshot102.forEach((doc) => {
          const data102 = doc.data();
          S102Data.push(data102);
        });

        setS102(S102Data);
      } catch (error) {
        console.error("Error fetching S102:", error);
      }
    };
    fetchS102Data();
    const S101Data = [];
    const S101Collections = collection(firebase, "S101");
    const fetchS101Data = async () => {
      try {
        const q101 = query(
          S101Collections,
          orderBy("date", "desc"),
          orderBy("time", "desc"),
          limit(1)
        );
        const querySnapshot101 = await getDocs(q101);
        querySnapshot101.forEach((doc) => {
          const data101 = doc.data();
          S101Data.push(data101);
        });

        setS101(S101Data);
      } catch (error) {
        console.error("Error fetching S101:", error);
      }
    };
    fetchS101Data();
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
          source={require("../../assets/images/SFDC_1st_P1.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          {S101.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button49}
              onPress={() => showModal("101")}
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
          <View style={styles.button50ColumnRow}>
            <View style={styles.button50Column}>
              {S102.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button50}
                  onPress={() => showModal("102")}
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
              {S103.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button51}
                  onPress={() => showModal("103")}
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
            </View>
            {S104.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button77}
                onPress={() => showModal("104")}
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
            <View style={styles.button78Column}>
              {S105.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button78}
                  onPress={() => showModal("105")}
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
              {S106.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button79}
                  onPress={() => showModal("106")}
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
            {S107.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button80}
                onPress={() => showModal("107")}
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
            {S108.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button81}
                onPress={() => showModal("108")}
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
            <View style={styles.button82Column}>
              {S109.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button82}
                  onPress={() => showModal("109")}
                >
                  <View style={styles.b35StackStack}>
                    <View style={styles.b35Stack}>
                      <View
                        style={[
                          styles.b35,
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
                        style={styles.bbb34}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.bb34,
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
              {S110.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.button84}
                  onPress={() => showModal("110")}
                >
                  <View style={styles.b37StackStack}>
                    <View style={styles.b37Stack}>
                      <View
                        style={[
                          styles.b37,
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
                        style={styles.bbb36}
                      ></MaterialIconsIcon>
                    </View>
                    <View
                      style={[
                        styles.bb36,
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
            {S111.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button83}
                onPress={() => showModal("111")}
              >
                <View style={styles.b36StackStack}>
                  <View style={styles.b36Stack}>
                    <View
                      style={[
                        styles.b36,
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
                      style={styles.bbb35}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb35,
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
          <View style={styles.button52Row}>
            {S112.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button52}
                onPress={() => showModal("112")}
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
            {S113.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button76}
                onPress={() => showModal("113")}
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
            {S114.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button85}
                onPress={() => showModal("114")}
              >
                <View style={styles.b38StackStack}>
                  <View style={styles.b38Stack}>
                    <View
                      style={[
                        styles.b38,
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
                      style={styles.bbb37}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb37,
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
          {S115.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button75}
              onPress={() => showModal("115")}
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
          {S116.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button86}
              onPress={() => showModal("116")}
            >
              <View style={styles.b39StackStack}>
                <View style={styles.b39Stack}>
                  <View
                    style={[
                      styles.b39,
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
                    style={styles.bbb38}
                  ></MaterialIconsIcon>
                </View>
                <View
                  style={[
                    styles.bb38,
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
          <View style={styles.button53Row}>
            {S117.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button53}
                onPress={() => showModal("117")}
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
            {S118.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button73}
                onPress={() => showModal("118")}
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
            {S119.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button74}
                onPress={() => showModal("119")}
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
            {S120.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button87}
                onPress={() => showModal("120")}
              >
                <View style={styles.b40StackStack}>
                  <View style={styles.b40Stack}>
                    <View
                      style={[
                        styles.b40,
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
                      style={styles.bbb39}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb39,
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
          {S121.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button54}
              onPress={() => showModal("121")}
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
          <View style={styles.button55Row}>
            {S122.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button55}
                onPress={() => showModal("122")}
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
            {S123.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button56}
                onPress={() => showModal("123")}
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
            {S124.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button72}
                onPress={() => showModal("124")}
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
            {S125.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button71}
                onPress={() => showModal("125")}
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
            {S126.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button88}
                onPress={() => showModal("126")}
              >
                <View style={styles.b41StackStack}>
                  <View style={styles.b41Stack}>
                    <View
                      style={[
                        styles.b41,
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
                      style={styles.bbb40}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb40,
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
          <View style={styles.button57Row}>
            {S127.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button57}
                onPress={() => showModal("127")}
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
            {S128.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button89}
                onPress={() => showModal("128")}
              >
                <View style={styles.b42StackStack}>
                  <View style={styles.b42Stack}>
                    <View
                      style={[
                        styles.b42,
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
                      style={styles.bbb41}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb41,
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
          {S129.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button70}
              onPress={() => showModal("129")}
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
          <View style={styles.button58Row}>
            {S130.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button58}
                onPress={() => showModal("130")}
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
            {S131.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button69}
                onPress={() => showModal("131")}
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
            {S132.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button68}
                onPress={() => showModal("132")}
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
            {S133.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button90}
                onPress={() => showModal("133")}
              >
                <View style={styles.b43StackStack}>
                  <View style={styles.b43Stack}>
                    <View
                      style={[
                        styles.b43,
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
                      style={styles.bbb42}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb42,
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
            {S134.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button91}
                onPress={() => showModal("134")}
              >
                <View style={styles.b44StackStack}>
                  <View style={styles.b44Stack}>
                    <View
                      style={[
                        styles.b44,
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
                      style={styles.bbb43}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb43,
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
          <View style={styles.button66Row}>
            {S135.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button66}
                onPress={() => showModal("135")}
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
            {S136.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button67}
                onPress={() => showModal("136")}
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
            {S137.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button92}
                onPress={() => showModal("137")}
              >
                <View style={styles.b45StackStack}>
                  <View style={styles.b45Stack}>
                    <View
                      style={[
                        styles.b45,
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
                      style={styles.bbb44}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb44,
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
          {S138.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button65}
              onPress={() => showModal("138")}
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
          <View style={styles.button63Row}>
            {S139.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button63}
                onPress={() => showModal("139")}
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
            {S140.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button64}
                onPress={() => showModal("140")}
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
            {S141.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button93}
                onPress={() => showModal("141")}
              >
                <View style={styles.b46StackStack}>
                  <View style={styles.b46Stack}>
                    <View
                      style={[
                        styles.b46,
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
                      style={styles.bbb45}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb45,
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
          {S142.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button62}
              onPress={() => showModal("142")}
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
          <View style={styles.button61Row}>
            {S143.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button61}
                onPress={() => showModal("143")}
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
            {S144.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button60}
                onPress={() => showModal("144")}
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
            {S145.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button59}
                onPress={() => showModal("145")}
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
            {S146.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button96}
                onPress={() => showModal("146")}
              >
                <View style={styles.b49StackStack}>
                  <View style={styles.b49Stack}>
                    <View
                      style={[
                        styles.b49,
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
                      style={styles.bbb48}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb48,
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
            {S147.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button95}
                onPress={() => showModal("147")}
              >
                <View style={styles.b48StackStack}>
                  <View style={styles.b48Stack}>
                    <View
                      style={[
                        styles.b48,
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
                      style={styles.bbb47}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb47,
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
            {S148.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button94}
                onPress={() => showModal("148")}
              >
                <View style={styles.b47StackStack}>
                  <View style={styles.b47Stack}>
                    <View
                      style={[
                        styles.b47,
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
                      style={styles.bbb46}
                    ></MaterialIconsIcon>
                  </View>
                  <View
                    style={[
                      styles.bb46,
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
    width: 621,
    height: 748,
  },
  image_imageStyle: {},
  button49: {
    width: 18,
    height: 20,
    marginTop: 8,
    marginLeft: 127,
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
  button50: {
    width: 18,
    height: 20,
    marginLeft: 2,
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
  button51: {
    width: 18,
    height: 20,
    marginTop: 20,
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
  button50Column: {
    width: 20,
    marginBottom: 24,
  },
  button77: {
    width: 18,
    height: 20,
    marginLeft: 9,
    marginTop: 55,
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
  button78: {
    width: 18,
    height: 20,
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
  button79: {
    width: 18,
    height: 20,
    marginLeft: 16,
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
  button78Column: {
    width: 34,
    marginLeft: 2,
    marginTop: 11,
    marginBottom: 33,
  },
  button80: {
    width: 18,
    height: 20,
    marginLeft: 12,
    marginTop: 21,
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
  button81: {
    width: 18,
    height: 20,
    marginLeft: 167,
    marginTop: 21,
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
  button82: {
    width: 18,
    height: 20,
    marginLeft: 2,
  },
  b35: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb34: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b35Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb34: {
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
  b35StackStack: {
    width: 18,
    height: 20,
  },
  button84: {
    width: 18,
    height: 20,
    marginTop: 23,
  },
  b37: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb36: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b37Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb36: {
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
  b37StackStack: {
    width: 18,
    height: 20,
  },
  button82Column: {
    width: 20,
    marginLeft: 11,
    marginTop: 21,
  },
  button83: {
    width: 18,
    height: 20,
    marginLeft: 1,
    marginTop: 11,
  },
  b36: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb35: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b36Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb35: {
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
  b36StackStack: {
    width: 18,
    height: 20,
  },
  button50ColumnRow: {
    height: 84,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 125,
    marginRight: 148,
  },
  button52: {
    width: 18,
    height: 20,
    marginTop: 3,
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
  button76: {
    width: 18,
    height: 20,
    marginLeft: 47,
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
  button85: {
    width: 18,
    height: 20,
    marginLeft: 269,
  },
  b38: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb37: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b38Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb37: {
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
  b38StackStack: {
    width: 18,
    height: 20,
  },
  button52Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 125,
    marginRight: 126,
  },
  button75: {
    width: 18,
    height: 20,
    marginTop: 20,
    marginLeft: 191,
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
  button86: {
    width: 18,
    height: 20,
    marginTop: 15,
    marginLeft: 455,
  },
  b39: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb38: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b39Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb38: {
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
  b39StackStack: {
    width: 18,
    height: 20,
  },
  button53: {
    width: 18,
    height: 20,
    marginTop: 15,
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
  button73: {
    width: 18,
    height: 20,
    marginLeft: 12,
    marginTop: 24,
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
  button74: {
    width: 18,
    height: 20,
    marginLeft: 17,
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
  button87: {
    width: 18,
    height: 20,
    marginLeft: 247,
    marginTop: 35,
  },
  b40: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb39: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b40Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb39: {
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
  b40StackStack: {
    width: 18,
    height: 20,
  },
  button53Row: {
    height: 55,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 125,
    marginRight: 148,
  },
  button54: {
    width: 18,
    height: 20,
    marginTop: 11,
    marginLeft: 124,
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
  button55: {
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
  button56: {
    width: 18,
    height: 20,
    marginLeft: 8,
    marginTop: 24,
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
  button72: {
    width: 18,
    height: 20,
    marginLeft: 7,
    marginTop: 11,
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
  button71: {
    width: 18,
    height: 20,
    marginLeft: 19,
    marginTop: 1,
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
  button88: {
    width: 18,
    height: 20,
    marginLeft: 246,
    marginTop: 5,
  },
  b41: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb40: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b41Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb40: {
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
  b41StackStack: {
    width: 18,
    height: 20,
  },
  button55Row: {
    height: 44,
    flexDirection: "row",
    marginLeft: 103,
    marginRight: 148,
  },
  button57: {
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
  button89: {
    width: 18,
    height: 20,
    marginLeft: 318,
  },
  b42: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb41: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b42Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb41: {
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
  b42StackStack: {
    width: 18,
    height: 20,
  },
  button57Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 105,
    marginRight: 162,
  },
  button70: {
    width: 18,
    height: 20,
    marginTop: 7,
    marginLeft: 191,
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
  button58: {
    width: 18,
    height: 20,
    marginTop: 10,
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
  button69: {
    width: 18,
    height: 20,
    marginLeft: 47,
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
  button68: {
    width: 18,
    height: 20,
    marginLeft: 2,
    marginTop: 29,
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
  button90: {
    width: 18,
    height: 20,
    marginLeft: 233,
  },
  b43: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb42: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b43Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb42: {
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
  b43StackStack: {
    width: 18,
    height: 20,
  },
  button91: {
    width: 18,
    height: 20,
    marginLeft: 9,
    marginTop: 33,
  },
  b44: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb43: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b44Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb43: {
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
  b44StackStack: {
    width: 18,
    height: 20,
  },
  button58Row: {
    height: 53,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 105,
    marginRight: 135,
  },
  button66: {
    width: 18,
    height: 20,
    marginTop: 13,
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
  button67: {
    width: 18,
    height: 20,
    marginLeft: 18,
    marginTop: 9,
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
  button92: {
    width: 18,
    height: 20,
    marginLeft: 242,
  },
  b45: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb44: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b45Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb44: {
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
  b45StackStack: {
    width: 18,
    height: 20,
  },
  button66Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 154,
    marginRight: 153,
  },
  button65: {
    width: 18,
    height: 20,
    marginTop: 9,
    marginLeft: 190,
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
  button63: {
    width: 18,
    height: 20,
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
  button64: {
    width: 18,
    height: 20,
    marginLeft: 18,
    marginTop: 4,
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
  button93: {
    width: 18,
    height: 20,
    marginLeft: 244,
  },
  b46: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb45: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b46Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb45: {
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
  b46StackStack: {
    width: 18,
    height: 20,
  },
  button63Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 154,
    marginRight: 151,
  },
  button62: {
    width: 18,
    height: 20,
    marginTop: 12,
    marginLeft: 179,
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
  button61: {
    width: 18,
    height: 20,
    marginTop: 5,
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
  button60: {
    width: 18,
    height: 20,
    marginLeft: 12,
    marginTop: 5,
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
  button59: {
    width: 18,
    height: 20,
    marginLeft: 26,
    marginTop: 5,
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
  button96: {
    width: 18,
    height: 20,
    marginLeft: 119,
  },
  b49: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb48: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b49Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb48: {
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
  b49StackStack: {
    width: 18,
    height: 20,
  },
  button95: {
    width: 18,
    height: 20,
    marginLeft: 26,
  },
  b48: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb47: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b48Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb47: {
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
  b48StackStack: {
    width: 18,
    height: 20,
  },
  button94: {
    width: 18,
    height: 20,
    marginLeft: 16,
  },
  b47: {
    top: 4,
    left: 6,
    width: 6,
    height: 5,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
  },
  bbb46: {
    top: 0,
    position: "absolute",
    color: "rgba(53,114,172,1)",
    fontSize: 18,
    left: 0,
    zIndex: 100,
  },
  b47Stack: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    position: "absolute",
  },
  bb46: {
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
  b47StackStack: {
    width: 18,
    height: 20,
  },
  button61Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 48,
    marginLeft: 172,
    marginRight: 142,
  },
});
