import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Switch,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { Dropdown } from "react-native-element-dropdown";
import { Picker } from "@react-native-picker/picker";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { StatusBar } from "expo-status-bar";
import { ButtonGroup } from "@rneui/themed";
import {
  QuerySnapshot,
  userDoc,
  doc,
  getDocs,
  collection,
  todoRef,
  query,
  orderBy,
  limit,
  where,
  addDoc,
  getDoc,
  updateDoc,
  docRef,
  deleteDoc,
} from "firebase/firestore";
import { firebase, auth } from "../../firebaseConfig";
import Icon from "react-native-vector-icons/Ionicons";

import {
  // getAuth,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  updatePassword,
  sendEmailVerification,
  deleteUser,
  getUserByEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ScrollView } from "react-native-gesture-handler";

import { RFValue } from "react-native-responsive-fontsize";

export default function ViewAllS() {
  const scrollViewRef = useRef(null);
  const [scrollViewHeight, setScrollViewHeight] = useState();
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.measure((x, y, width, height) => {
        setScrollViewHeight(height);
      });
    }
  }, []);

  const [latestDocuments, setLatestDocuments] = useState([]);
  const [goodConditon, setGoodCondition] = useState([]);
  const [notWorking, setNotWorking] = useState([]);
  const [slightDamage, setSlightlyDamage] = useState([]);
  const [CICS, setCICS] = useState([]);
  const [CEAFA, setCEAFA] = useState([]);
  const [CIT, setCIT] = useState([]);
  const [RGR, setRGR] = useState([]);
  const [SSC, setSSC] = useState([]);
  const [FDC, setFDC] = useState([]);

  const [CICSGC, setCICSGC] = useState([]);
  const [CEAFAGC, setCEAFAGC] = useState([]);
  const [CITGC, setCITGC] = useState([]);
  const [RGRGC, setRGRGC] = useState([]);
  const [SSCGC, setSSCGC] = useState([]);
  const [FDCGC, setFDCGC] = useState([]);

  const [CICSSD, setCICSSD] = useState([]);
  const [CEAFASD, setCEAFASD] = useState([]);
  const [CITSD, setCITSD] = useState([]);
  const [RGRSD, setRGRSD] = useState([]);
  const [SSCSD, setSSCSD] = useState([]);
  const [FDCSD, setFDCSD] = useState([]);

  const [CICSNW, setCICSNW] = useState([]);
  const [CEAFANW, setCEAFANW] = useState([]);
  const [CITNW, setCITNW] = useState([]);
  const [RGRNW, setRGRNW] = useState([]);
  const [SSCNW, setSSCNW] = useState([]);
  const [FDCNW, setFDCNW] = useState([]);

  useEffect(() => {
    const fetchLatestDocuments = async () => {
      const allLatestDocuments = [];

      for (let i = 1; i <= 21; i++) {
        const feCollection = collection(firebase, `SD${i}`);
        const querySnapshot = await getDocs(
          query(
            feCollection,
            orderBy("date", "desc"),
            orderBy("time", "desc"),
            limit(1)
          )
        );

        querySnapshot.forEach((doc) => {
          allLatestDocuments.push(doc.data());
        });
      }

      const good_condition = allLatestDocuments.filter(
        (item) => item.condition === "Good Condition" // Correct typo here
      );

      const slightly_damaged = allLatestDocuments.filter(
        (item) => item.condition === "Slightly Damage" // Correct typo here
      );

      const not_working = allLatestDocuments.filter(
        (item) => item.condition === "Not Working" // Correct typo here
      );

      const CEAFA = allLatestDocuments.filter(
        (item) => item.building === "CEAFA" // Correct typo here
      );

      const CICS = allLatestDocuments.filter(
        (item) => item.building === "CICS" // Correct typo here
      );
      const CIT = allLatestDocuments.filter(
        (item) => item.building === "CIT" // Correct typo here
      );

      const RGR = allLatestDocuments.filter(
        (item) => item.building === "RGR" // Correct typo here
      );
      const SSC = allLatestDocuments.filter(
        (item) => item.building === "SSC" // Correct typo here
      );
      const FDC = allLatestDocuments.filter(
        (item) => item.building === "FDC" // Correct typo here
      );

      // good condition
      const CEAFAGC = allLatestDocuments.filter(
        (item) =>
          item.building === "CEAFA" && item.condition === "Good Condition" // Correct typo here
      );

      const CICSGC = allLatestDocuments.filter(
        (item) =>
          item.building === "CICS" && item.condition === "Good Condition" // Correct typo here
      );
      const CITGC = allLatestDocuments.filter(
        (item) => item.building === "CIT" && item.condition === "Good Condition" // Correct typo here
      );

      const RGRGC = allLatestDocuments.filter(
        (item) => item.building === "RGR" && item.condition === "Good Condition" // Correct typo here
      );
      const SSCGC = allLatestDocuments.filter(
        (item) => item.building === "SSC" && item.condition === "Good Condition" // Correct typo here
      );
      const FDCGC = allLatestDocuments.filter(
        (item) => item.building === "FDC" && item.condition === "Good Condition" // Correct typo here
      );

      //   Slightly Damage
      const CEAFASD = allLatestDocuments.filter(
        (item) =>
          item.building === "CEAFA" && item.condition === "Slightly Damage" // Correct typo here
      );

      const CICSSD = allLatestDocuments.filter(
        (item) =>
          item.building === "CICS" && item.condition === "Slightly Damage" // Correct typo here
      );
      const CITSD = allLatestDocuments.filter(
        (item) =>
          item.building === "CIT" && item.condition === "Slightly Damage" // Correct typo here
      );

      const RGRSD = allLatestDocuments.filter(
        (item) =>
          item.building === "RGR" && item.condition === "Slightly Damage" // Correct typo here
      );
      const SSCSD = allLatestDocuments.filter(
        (item) =>
          item.building === "SSC" && item.condition === "Slightly Damage" // Correct typo here
      );
      const FDCSD = allLatestDocuments.filter(
        (item) =>
          item.building === "FDC" && item.condition === "Slightly Damage" // Correct typo here
      );

      //   Not Working

      const CEAFANW = allLatestDocuments.filter(
        (item) => item.building === "CEAFA" && item.condition === "Not Working" // Correct typo here
      );

      const CICSNW = allLatestDocuments.filter(
        (item) => item.building === "CICS" && item.condition === "Not Working" // Correct typo here
      );
      const CITNW = allLatestDocuments.filter(
        (item) => item.building === "CIT" && item.condition === "Not Working" // Correct typo here
      );

      const RGRNW = allLatestDocuments.filter(
        (item) => item.building === "RGR" && item.condition === "Not Working" // Correct typo here
      );
      const SSCNW = allLatestDocuments.filter(
        (item) => item.building === "SSC" && item.condition === "Not Working" // Correct typo here
      );
      const FDCNW = allLatestDocuments.filter(
        (item) => item.building === "FDC" && item.condition === "Not Working" // Correct typo here
      );

      setGoodCondition(good_condition);
      console.log(good_condition.length);
      setNotWorking(not_working);
      console.log(not_working.length);
      setSlightlyDamage(slightly_damaged);
      console.log(slightly_damaged.length);
      setLatestDocuments(allLatestDocuments);
      console.log(allLatestDocuments.length);

      setCICS(CICS);
      setCEAFA(CEAFA);
      setCIT(CIT);
      setRGR(RGR);
      setSSC(SSC);
      setFDC(FDC);

      setCICSGC(CICSGC);
      setCEAFAGC(CEAFAGC);
      setCITGC(CITGC);
      setRGRGC(RGRGC);
      setSSCGC(SSCGC);
      setFDCGC(FDCGC);

      setCICSSD(CICSSD);
      setCEAFASD(CEAFASD);
      setCITSD(CITSD);
      setRGRSD(RGRSD);
      setSSCSD(SSCSD);
      setFDCSD(FDCSD);

      setCICSNW(CICSNW);
      setCEAFANW(CEAFANW);
      setCITNW(CITNW);
      setRGRNW(RGRNW);
      setSSCNW(SSCNW);
      setFDCNW(FDCNW);
    };

    fetchLatestDocuments();
  }, []);
  const refreshData = async () => {
    const fetchLatestDocuments = async () => {
      const allLatestDocuments = [];

      for (let i = 1; i <= 1; i++) {
        const feCollection = collection(firebase, `S${i}`);
        const querySnapshot = await getDocs(
          query(
            feCollection,
            orderBy("date", "desc"),
            orderBy("time", "desc"),
            limit(1)
          )
        );

        querySnapshot.forEach((doc) => {
          allLatestDocuments.push(doc.data());
        });
      }

      const good_condition = allLatestDocuments.filter(
        (item) => item.condition === "Good Condition" // Correct typo here
      );

      const slightly_damaged = allLatestDocuments.filter(
        (item) => item.condition === "Slightly Damage" // Correct typo here
      );

      const not_working = allLatestDocuments.filter(
        (item) => item.condition === "Not Working" // Correct typo here
      );

      const CEAFA = allLatestDocuments.filter(
        (item) => item.building === "CEAFA" // Correct typo here
      );

      const CICS = allLatestDocuments.filter(
        (item) => item.building === "CICS" // Correct typo here
      );
      const CIT = allLatestDocuments.filter(
        (item) => item.building === "CIT" // Correct typo here
      );

      const RGR = allLatestDocuments.filter(
        (item) => item.building === "RGR" // Correct typo here
      );
      const SSC = allLatestDocuments.filter(
        (item) => item.building === "SSC" // Correct typo here
      );
      const FDC = allLatestDocuments.filter(
        (item) => item.building === "FDC" // Correct typo here
      );

      // good condition
      const CEAFAGC = allLatestDocuments.filter(
        (item) =>
          item.building === "CEAFA" && item.condition === "Good Condition" // Correct typo here
      );

      const CICSGC = allLatestDocuments.filter(
        (item) =>
          item.building === "CICS" && item.condition === "Good Condition" // Correct typo here
      );
      const CITGC = allLatestDocuments.filter(
        (item) => item.building === "CIT" && item.condition === "Good Condition" // Correct typo here
      );

      const RGRGC = allLatestDocuments.filter(
        (item) => item.building === "RGR" && item.condition === "Good Condition" // Correct typo here
      );
      const SSCGC = allLatestDocuments.filter(
        (item) => item.building === "SSC" && item.condition === "Good Condition" // Correct typo here
      );
      const FDCGC = allLatestDocuments.filter(
        (item) => item.building === "FDC" && item.condition === "Good Condition" // Correct typo here
      );

      //   Slightly Damage
      const CEAFASD = allLatestDocuments.filter(
        (item) =>
          item.building === "CEAFA" && item.condition === "Slightly Damage" // Correct typo here
      );

      const CICSSD = allLatestDocuments.filter(
        (item) =>
          item.building === "CICS" && item.condition === "Slightly Damage" // Correct typo here
      );
      const CITSD = allLatestDocuments.filter(
        (item) =>
          item.building === "CIT" && item.condition === "Slightly Damage" // Correct typo here
      );

      const RGRSD = allLatestDocuments.filter(
        (item) =>
          item.building === "RGR" && item.condition === "Slightly Damage" // Correct typo here
      );
      const SSCSD = allLatestDocuments.filter(
        (item) =>
          item.building === "SSC" && item.condition === "Slightly Damage" // Correct typo here
      );
      const FDCSD = allLatestDocuments.filter(
        (item) =>
          item.building === "FDC" && item.condition === "Slightly Damage" // Correct typo here
      );

      //   Not Working

      const CEAFANW = allLatestDocuments.filter(
        (item) => item.building === "CEAFA" && item.condition === "Not Working" // Correct typo here
      );

      const CICSNW = allLatestDocuments.filter(
        (item) => item.building === "CICS" && item.condition === "Not Working" // Correct typo here
      );
      const CITNW = allLatestDocuments.filter(
        (item) => item.building === "CIT" && item.condition === "Not Working" // Correct typo here
      );

      const RGRNW = allLatestDocuments.filter(
        (item) => item.building === "RGR" && item.condition === "Not Working" // Correct typo here
      );
      const SSCNW = allLatestDocuments.filter(
        (item) => item.building === "SSC" && item.condition === "Not Working" // Correct typo here
      );
      const FDCNW = allLatestDocuments.filter(
        (item) => item.building === "FDC" && item.condition === "Not Working" // Correct typo here
      );

      setGoodCondition(good_condition);
      console.log(good_condition.length);
      setNotWorking(not_working);
      console.log(not_working.length);
      setSlightlyDamage(slightly_damaged);
      console.log(slightly_damaged.length);
      setLatestDocuments(allLatestDocuments);
      console.log(allLatestDocuments.length);

      setCICS(CICS);
      setCEAFA(CEAFA);
      setCIT(CIT);
      setRGR(RGR);
      setSSC(SSC);
      setFDC(FDC);

      setCICSGC(CICSGC);
      setCEAFAGC(CEAFAGC);
      setCITGC(CITGC);
      setRGRGC(RGRGC);
      setSSCGC(SSCGC);
      setFDCGC(FDCGC);

      setCICSSD(CICSSD);
      setCEAFASD(CEAFASD);
      setCITSD(CITSD);
      setRGRSD(RGRSD);
      setSSCSD(SSCSD);
      setFDCSD(FDCSD);

      setCICSNW(CICSNW);
      setCEAFANW(CEAFANW);
      setCITNW(CITNW);
      setRGRNW(RGRNW);
      setSSCNW(SSCNW);
      setFDCNW(FDCNW);
    };

    fetchLatestDocuments();
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/reviewall2.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={{ height: scrollViewHeight }}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.rect}>
          <View style={styles.textcr}>
            <Text
              style={{
                color: "white",
                fontSize: 28,
                fontFamily: "poppins-regular",
                marginBottom: 5,
                fontWeight: "700",
                marginLeft: 40,
                marginTop: 30,
              }}
            >
              {" "}
              SMOKE DETECTOR
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
              paddingBottom: 20,
              // paddingLeft: 50,
              flexDirection: "row",
              justifyContent: "space-evenly",
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
          <View style={styles.containerA}>
            <View style={styles.column}>
              <Text style={styles.datafont}>Smoke Detector</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Good Condition</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Slight Damage</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Not Working</Text>
            </View>
          </View>

          <View style={styles.heightS}>
            <View style={styles.container3}>
              <View style={styles.column1}>
                <Text style={styles.datafont}>CEAFA: {CEAFA.length}</Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont}>{CEAFAGC.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{CEAFASD.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{CEAFANW.length}</Text>
              </View>
            </View>

            <View style={styles.container2}>
              <View style={styles.column}>
                <Text style={styles.datafont}>CICS: {CICS.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{CICSGC.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{CICSSD.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{CICSNW.length}</Text>
              </View>
            </View>

            <View style={styles.container3}>
              <View style={styles.column1}>
                <Text style={styles.datafont}>CIT: {CIT.length}</Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont}>{CITGC.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{CITSD.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{CITNW.length}</Text>
              </View>
            </View>

            <View style={styles.container2}>
              <View style={styles.column}>
                <Text style={styles.datafont}>RGR: {RGR.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{RGRGC.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{RGRSD.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{RGRNW.length}</Text>
              </View>
            </View>

            <View style={styles.container3}>
              <View style={styles.column1}>
                <Text style={styles.datafont}>SSC: {SSC.length}</Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont}>{SSCGC.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{SSCSD.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{SSCNW.length}</Text>
              </View>
            </View>

            <View style={styles.container2}>
              <View style={styles.column}>
                <Text style={styles.datafont}>FDC: {FDC.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{FDCGC.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{FDCSD.length}</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>{FDCNW.length}</Text>
              </View>
            </View>

            <View style={styles.container3}>
              <View style={styles.column1}>
                <Text style={styles.datafont}>
                  Total: {latestDocuments.length}
                </Text>
              </View>
              <View style={styles.column1}>
                <Text style={styles.datafont}>{goodConditon.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{slightDamage.length}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont}>{notWorking.length}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeicon: {
    // top: 2,
    marginLeft: 950,
    zIndex: 5,
  },
  close: {
    // color: "#45474B",
    color: "#FF6464",
    fontSize: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,

    width: "80%", // Adjust the width as needed
    height: "60%", // Adjust the height as needed
  },
  modalText1: {
    color: "#7D7C7C",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    color: "#454545",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButtonY: {
    width: "35%",
    // elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 20,
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
  scrollViewContent: {
    flexGrow: 1,

    height: wp("165%"),
    // Additional styling for the content inside ScrollView
  },
  rowEven: {
    backgroundColor: "white", // Background color for even rows
  },

  rowOdd: {
    backgroundColor: "#F1EFEF", // Background color for odd rows
  },
  datafontc: {
    marginTop: 3,
    marginBottom: 20,
    textAlign: "center",
  },
  datafont2: {
    fontSize: 17,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    marginLeft: 15,
    fontWeight: "100",
    textAlign: "center",
  },
  datafont1: {
    fontSize: 16,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "100",
    textAlign: "center",
  },
  column1: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 1, // Adjust the horizontal margin as needed
    height: "100%", // T
  },
  container3: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "13%", // Set the desired height of the row
    paddingHorizontal: 10, // A
  },
  container: {
    flex: 1,
  },
  datafont3: {
    fontSize: 18,
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "900",
    textAlign: "center",
  },
  datafont: {
    fontSize: RFValue(11),
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "400",
    textAlign: "center",
  },
  containerA: {
    backgroundColor: "#F1EFEF",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "12%", // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
  },
  container2: {
    backgroundColor: "#F1EFEF",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "13%", // Set the desired height of the row
    paddingHorizontal: 10, // Adjust horizontal padding as needed
  },
  column: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue", // You can change the background color
    marginHorizontal: 5, // Adjust the horizontal margin as needed
    height: "100%", // This makes each column take up the full height of the row
  },
  image: {
    width: wp("100%"),
    height: hp("13%"),
    borderBottomRightRadius: wp("15%"),
    borderBottomLeftRadius: wp("15%"),
  },
  textcr: {
    backgroundColor: "#ED474A",
    // borderBottomRightRadius: 50,
    borderRadius: 10,
    width: "100%",
    height: 92,
    shadowColor: "rgba(68,61,61,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.24,
    shadowRadius: 3,

    height: 92,
  },
  group: {
    width: wp("100%"),
    height: hp("13%"),
    borderBottomRightRadius: wp("15%"),
    borderBottomLeftRadius: wp("15%"),
    elevation: wp(2),

    alignSelf: "center",
  },
  rect: {
    width: "95%",
    height: "88%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.07,
    shadowRadius: 3,
  },
});
