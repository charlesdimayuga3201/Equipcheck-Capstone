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
  ActivityIndicator,
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
import { RFValue } from "react-native-responsive-fontsize";
import { SpeedDial } from "@rneui/themed";
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
  onSnapshot,
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

export default function UpdateRole() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(firebase, "users"); // 'users' is the name of your collection
      const q = query(usersCollection, orderBy("role", "asc"));
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = [];
      usersSnapshot.forEach((doc) => {
        usersList.push({ id: doc.id, ...doc.data() });
      });
      // Sort users by role (HeadAdmin first, then other roles)
      usersList.sort((a, b) => {
        if (a.role === "Head Admin" && b.role !== "Head Admin") {
          return -1;
        } else if (a.role !== "Head Admin" && b.role === "Head Admin") {
          return 1;
        } else {
          return 0;
        }
      });
      setUsers(usersList);
      console.log(usersList);
    };

    fetchUsers();
  }, []);

  const refreshData = async () => {
    try {
      setIsRefreshing(true);
      const fetchUsers = async () => {
        const usersCollection = collection(firebase, "users"); // 'users' is the name of your collection
        const q = query(usersCollection, orderBy("role", "asc"));
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = [];
        usersSnapshot.forEach((doc) => {
          usersList.push({ id: doc.id, ...doc.data() });
        });
        // Sort users by role (HeadAdmin first, then other roles)
        usersList.sort((a, b) => {
          if (a.role === "Head Admin" && b.role !== "Head Admin") {
            return -1;
          } else if (a.role !== "Head Admin" && b.role === "Head Admin") {
            return 1;
          } else {
            return 0;
          }
        });
        setUsers(usersList);
        console.log(usersList);
      };

      fetchUsers();
    } catch (error) {
      console.error("Error refreshing data:", error);
      setIsRefreshing(false);
    }
  };

  const scrollViewRef = useRef(null);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.measure((x, y, width, height) => {
        setScrollViewHeight(height);
      });
    }
  }, [users]);

  const [newUserEmail, setNewUserEmail] = useState(""); // State to hold the new user's email
  const [newPassword, setPassword] = useState("");
  const [firstname, setFirstName] = useState(""); // State to hold the new user's email
  const [lastname, setLastName] = useState(""); // State to hold the new
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Function to add a user
  const [getemail, setEmail] = useState();
  const [getrole, setRole] = useState();
  const [getuid, setUid] = useState();
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const showModal2 = (userEmail, userRole, userID) => {
    setIsModalVisible2(true);
    setEmail(userEmail);
    setRole(userRole);
    setUid(userID);
    console.log(userEmail);
    console.log(userRole);
    console.log(userID);
  };

  const hideModal2 = () => {
    setIsModalVisible2(false);
  };

  const showModal3 = (userEmail, userRole, userID) => {
    setIsModalVisible3(true);
    setEmail(userEmail);
    setRole(userRole);
    setUid(userID);
    console.log(userEmail);
    console.log(userRole);
    console.log(userID);
  };

  const hideModal3 = () => {
    setIsModalVisible3(false);
  };

  const showModal1 = (userEmail, userRole) => {
    setIsModalVisible1(true);
    setEmail(userEmail);
    setRole(userRole);

    console.log(userEmail);
    console.log(userRole);
  };

  const hideModal1 = () => {
    setIsModalVisible1(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    setButtonOpacity(0.5); // Change opacity when modal is shown
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setButtonOpacity(1); // Restore opacity when modal is hidden
    setNewUserEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setSelectedIndex(0);
  };

  const [buttonOpacity, setButtonOpacity] = useState(1);
  const addUser = async () => {
    // Create user in Firebase Authentication
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUserEmail,
        newPassword
      );
      const { user } = userCredential;

      // Add user data to Firestore
      const usersCollection = collection(firebase, "users");
      await addDoc(usersCollection, {
        FirstName: firstname,
        LastName: lastname,
        userEmail: newUserEmail,
        role: selectedIndex === 0 ? "Staff" : "Head Admin",
        uid: user.uid,
        status: "Actived",
        userID: user.uid,
        // Add additional fields if needed
      });
      Alert.alert("Success", "Successfully Add User.");
      refreshData();
      hideModal();
      // Fetch updated user list from Firestore
      // fetchUsers();
    } catch (error) {
      console.error("Error creating user:", error);
      Alert.alert("Failed", "Failed to Add User.");
      // Handle error state or display an error message
    }
  };

  const editRole = async () => {
    try {
      const usersCollection = collection(firebase, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("userEmail", "==", getemail))
      );

      if (!querySnapshot.empty) {
        querySnapshot.forEach((userDoc) => {
          const userId = userDoc.id;
          console.log(userId);
          const userRef = doc(firebase, "users", userId); // Initialize the reference
          updateDoc(userRef, {
            role: "Head Admin",
          });
        });
        Alert.alert("Success", "Successfully updated role.");
        refreshData();
        hideModal1();
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      Alert.alert("Failed", "Failed to update role.");
      // Handle error state or display an error message
    }
  };

  const editStatus = async () => {
    try {
      const usersCollection = collection(firebase, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("userEmail", "==", getemail))
      );

      if (!querySnapshot.empty) {
        querySnapshot.forEach((userDoc) => {
          const userId = userDoc.id;
          console.log(userId);
          const userRef = doc(firebase, "users", userId); // Initialize the reference
          updateDoc(userRef, {
            status: "Deactivated",
          });
        });
        Alert.alert("Success", "Successfully updated status.");
        refreshData();
        hideModal2();
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Alert.alert("Failed", "Failed to update status.");
      // Handle error state or display an error message
    }
  };

  const editStatus1 = async () => {
    try {
      const usersCollection = collection(firebase, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("userEmail", "==", getemail))
      );

      if (!querySnapshot.empty) {
        querySnapshot.forEach((userDoc) => {
          const userId = userDoc.id;
          console.log(userId);
          const userRef = doc(firebase, "users", userId); // Initialize the reference
          updateDoc(userRef, {
            status: "Activated",
          });
        });
        Alert.alert("Success", "Successfully updated status.");
        refreshData();
        hideModal3();
      } else {
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Alert.alert("Failed", "Failed to update status.");
      // Handle error state or display an error message
    }
  };

  const deleteUserFromBothServices = async (email) => {
    try {
      // Query Firestore to find the user by email
      const usersCollection = collection(firebase, "users");
      const querySnapshot = await getDocs(
        query(usersCollection, where("userEmail", "==", getemail))
      );

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (userDoc) => {
          const userId = userDoc.id;
          const userRef = doc(firebase, "users", userId); // Initialize the reference

          try {
            // Delete user's data from Firestore
            await deleteDoc(userRef);
            Alert.alert("Success", "Successfully Delete User.");
            console.log(
              `User data with email ${email} has been deleted from Firestore.`
            );

            // Optionally, perform additional actions or handle success
            refreshData();
            hideModal2();
          } catch (error) {
            console.error("Error deleting user:", error);
            // Handle errors for Firebase Auth deletion
          }
        });
      } else {
        console.log("User not found in Firestore.");
        // Handle the case where user data is not found in Firestore
      }
    } catch (error) {
      Alert.alert("Failed", "Failed to Delete User.");
      console.error("Error deleting user:", error);
      // Handle errors for Firestore deletion or querying
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={require("../assets/images/updateroles.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentA}>
            <View style={styles.closeicon}>
              <TouchableOpacity onPress={hideModal}>
                <Icon name="close-circle-outline" style={styles.close}></Icon>
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <View style={styles.column}>
                <Text style={styles.datafont}>First Name</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>Last Name</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>Email</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>Password</Text>
              </View>

              <View style={styles.column}>
                <Text style={styles.datafont}>Role</Text>
              </View>
            </View>

            <View style={styles.containerA}>
              <View style={styles.columnA}>
                <TextInput
                  placeholder="Enter First Name"
                  value={firstname}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
              <View style={styles.columnA}>
                <TextInput
                  placeholder="Enter Last Name"
                  value={lastname}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
              <View style={styles.columnA}>
                <TextInput
                  placeholder="New User Email"
                  value={newUserEmail}
                  onChangeText={(text) => setNewUserEmail(text)}
                />
              </View>
              <View style={styles.columnA}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Enter Password"
                  value={newPassword}
                  onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.line}></View>
              </View>
              <View style={styles.column}>
                <Text>Staff</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.modalButtonA}
                onPress={() => {
                  // Handle "Yes" button press here
                  addUser();
                  // Add your update logic here
                }}
              >
                <Text style={styles.buttonTextA}>Add User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      {/* <ButtonGroup
                  buttons={["Staff", "Head Admin"]}
                  selectedIndex={selectedIndex}
                  onPress={(value) => {
                    setSelectedIndex(value);
                  }}
                  // containerStyle={{ marginBottom: 20 }}
                  containerStyle={{ width: hp("24%"), marginBottom: 20 }}
                  textStyle={{
                    color: "black",
                    fontSize: RFValue(8),
                  }}
                /> */}
      {/* Modal for edit user */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainerS}>
          <View style={styles.modalContentS}>
            {/* <View style={styles.lineG}></View> */}
            <View style={styles.closeiconS}>
              <TouchableOpacity onPress={hideModal}>
                <Icon name="close-circle-outline" style={styles.closeS}></Icon>
              </TouchableOpacity>
            </View>
            {/* <Text style={styles.modalTextS}>Add Users</Text> */}
            {/* <Text style={styles.modalText1}>Current Password</Text> */}
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter First Name"
                    style={styles.username}
                    value={firstname}
                    onChangeText={(text) => setFirstName(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            {/* <Text style={styles.modalText2}>New Password</Text> */}
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Last Name"
                    style={styles.username}
                    value={lastname}
                    onChangeText={(text) => setLastName(text)}
                  ></TextInput>
                </View>
              </View>
            </View>
            {/* <Text style={styles.modalText2}>Confirm Password</Text> */}
            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="New User Email"
                    style={styles.username}
                    value={newUserEmail}
                    onChangeText={(text) => setNewUserEmail(text)}
                  ></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.username_input}>
              <View style={styles.rect2}>
                <View style={styles.rec}>
                  <TextInput
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    style={styles.username}
                    value={newPassword}
                    onChangeText={(text) => setPassword(text)}
                  ></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.line}></View>
            <View style={styles.buttonContainer1}>
              <TouchableOpacity
                style={styles.modalButtonY1}
                onPress={() => {
                  addUser();
                  // Handle "Yes" button press here
                }}
              >
                <Text style={styles.buttonTextU}>Add User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={hideModal1}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentB}>
            <View style={styles.closeiconB}>
              <TouchableOpacity onPress={hideModal1}>
                <Icon name="close-circle-outline" style={styles.closeB}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>Confirm Update?</Text>
            <Text style={styles.modalText1}>
              Do you really want to change role of this user?
            </Text>

            <View style={styles.containerB}>
              <View style={styles.column}>
                <Text style={styles.datafont}>Role</Text>
              </View>
            </View>

            <View style={styles.containerA1}>
              <View style={styles.column1}>
                <Text style={styles.datafont1}>Head Admin</Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.buttonContainerB}>
              <TouchableOpacity
                style={styles.modalButtonB}
                onPress={() => {
                  // Handle "Yes" button press here
                  editRole();
                  // Add your update logic here
                }}
              >
                <Text style={styles.buttonTextB}>Change Role</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={hideModal2}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentC}>
            <View style={styles.closeiconC}>
              <TouchableOpacity onPress={hideModal2}>
                <Icon name="close-circle-outline" style={styles.closeB}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText2}>Confirm Deactivate?</Text>
            <Text style={styles.modalText2}>
              Do you really want to deactivate this user?
            </Text>

            <View style={styles.line}></View>
            <View style={styles.buttonContainerB}>
              <TouchableOpacity
                style={styles.modalButtonC}
                onPress={() => {
                  // Handle "Yes" button press here
                  editStatus();
                  hideModal2();
                  refreshData();
                  // Add your update logic here
                }}
              >
                <Text style={styles.buttonTextB}>Deactivate User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible3}
        onRequestClose={hideModal3}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentC}>
            <View style={styles.closeiconC}>
              <TouchableOpacity onPress={hideModal3}>
                <Icon name="close-circle-outline" style={styles.closeB}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText2}>Confirm Activate?</Text>
            <Text style={styles.modalText2}>
              Do you really want to activate this user?
            </Text>

            <View style={styles.line}></View>
            <View style={styles.buttonContainerB}>
              <TouchableOpacity
                style={styles.modalButtonC}
                onPress={() => {
                  // Handle "Yes" button press here
                  editStatus1();
                  hideModal3();
                  refreshData();
                  // Add your update logic here
                }}
              >
                <Text style={styles.buttonTextB}>Activate User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView
        ref={scrollViewRef}
        style={{ height: scrollViewHeight }}
        contentContainerStyle={styles.scrollViewContent}
      >
        {isRefreshing && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.activityIndicator}
          />
        )}

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
              ALL USERS AND ROLES
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
              paddingBottom: 50,
              // paddingLeft: 50,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {/* <TouchableOpacity
            style={{
              backgroundColor: "#ED474A",
              padding: 10,
              borderRadius: 5,
            }}
            onPress={refreshData}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Refresh </Text>
          </TouchableOpacity> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#87C4FF",
                padding: 10,
                borderRadius: 5,
              }}
              onPress={
                // Handle "Yes" button press here
                showModal
                // Add your update logic here
              }
            >
              <Icon
                name="person-add-outline"
                style={{ color: "white", fontSize: 20 }}
              >
                <Text style={{ color: "white", fontSize: 20 }}> Add User</Text>
              </Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.container2}>
            <View style={styles.column}>
              <Text style={styles.datafont}>First Name</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Last Name</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Email</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Role</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.datafont}>Status</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.datafont}>Action</Text>
            </View>
          </View>
          {/* show all user */}

          {users.map((user, index) => (
            <View
              key={index}
              style={[
                styles.container3,
                index % 2 === 0 ? styles.rowEven : styles.rowOdd, // Alternating colors
              ]}
            >
              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.FirstName}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.LastName}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.userEmail}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.role}</Text>
              </View>

              <View style={styles.column1}>
                <Text style={styles.datafont1}>{user.status}</Text>
              </View>

              <View style={styles.column1}>
                <View style={styles.action}>
                  {user.role === "Head Admin" ? (
                    <TouchableOpacity>
                      <Text
                        style={styles.datafont2}
                        onPress={() =>
                          showModal2(user.userEmail, user.role, user.userID)
                        }
                      >
                        --
                      </Text>
                    </TouchableOpacity>
                  ) : user.role === "Staff" && user.status === "Activated" ? (
                    <>
                      <TouchableOpacity
                        onPress={() =>
                          showModal2(user.userEmail, user.role, user.userID)
                        }
                      >
                        <Text style={styles.datafont2}>Change Status</Text>
                      </TouchableOpacity>
                    </>
                  ) : user.role === "Staff" && user.status === "Deactivated" ? (
                    <>
                      <TouchableOpacity
                        onPress={() =>
                          showModal3(user.userEmail, user.role, user.userID)
                        }
                      >
                        <Text style={styles.datafont2}>Change Status</Text>
                      </TouchableOpacity>
                    </>
                  ) : null}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  closeiconS: {
    // top: 2,
    position: "absolute",
    top: hp("1%"),
    right: wp("1%"),
    zIndex: 5,
  },
  modalTextS: {
    color: "#454545",
    fontWeight: "500",
    fontSize: RFValue(14),
    bottom: hp("10%"),
    // marginBottom: 10,
  },
  closeS: {
    // color: "#45474B",
    color: "#FF6464",
    fontSize: wp("3%"),
  },
  modalContainerS: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContentS: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,
    alignItems: "center",
    top: hp("2%"),
    width: wp("40%"), // Adjust the width as needed
    height: hp("80%"), // Adjust the height as needed
  },
  buttonTextU: {
    color: "white",
    fontWeight: "600",
    // fontFamily: "poppins-bold",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  modalButtonY1: {
    top: hp("14%"),
    width: wp("30%"),
    elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 10,
    borderRadius: 2,
    marginHorizontal: 30,
    alignItems: "center",
    borderRadius: 40,
  },
  buttonContainer1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rect2: {
    width: wp("60%"),
    height: hp("6%"),
    marginTop: hp("0.8%"),
  },
  rec: {
    // top: hp("1.5%"),

    width: wp("30%"),
    height: hp("7%"),
    position: "absolute",
    backgroundColor: "rgba(247,251,255,1)",
    borderRadius: wp("2%"),
    borderWidth: wp("0.2%"),
    borderColor: "rgba(212,215,227,1)",
    alignSelf: "center",
    left: wp("3%"),
  },
  username: {
    // top: wp("2%"),
    left: wp("1.5%"),
    position: "absolute",
    fontFamily: "poppins-regular",
    color: "#121212",
    height: hp("7%"),
    width: wp("50%"),
    fontSize: wp("1.5%"),
  },
  username_input: {
    top: hp("10%"),
    width: wp("50%"),
    height: hp("10%"),
    marginTop: hp("2%"),
    marginLeft: wp("15%"),
    alignSelf: "center",
  },
  closeicon: {
    // top: 2,
    position: "absolute",
    top: hp("1%"),
    right: wp("1%"),
    zIndex: 5,
  },
  activityIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: add a semi-transparent background
  },
  scrollViewContent: {
    flexGrow: 1,

    height: hp("165%"),
    // Additional styling for the content inside ScrollView
  },
  buttonTextB: {
    fontWeight: "600",
    color: "white",
    fontSize: RFValue(12),
  },
  buttonTextA: {
    fontWeight: "400",
    color: "white",
    fontSize: RFValue(12),
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeiconC: {
    // top: 2,
    marginLeft: wp("33%"),
    zIndex: 5,
  },
  closeiconB: {
    // top: 2,
    marginLeft: wp("55%"),
    zIndex: 5,
  },
  closeB: {
    // color: "#45474B",
    color: "#FF6464",
    fontSize: RFValue(26),
  },
  closeicon: {
    // top: 2,

    marginLeft: wp("70%"),
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
  modalContentC: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,
    top: -20,
    width: wp("40%"), // Adjust the width as needed
    height: wp("28%"), // Adjust the height as needed
  },
  modalContentB: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,

    width: wp("60%"), // Adjust the width as needed
    height: wp("33%"), // Adjust the height as needed
  },

  modalContentA: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,

    width: wp("80%"), // Adjust the width as needed
    height: wp("40%"), // Adjust the height as needed
  },
  modalContent: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    elevation: 8,
    borderRadius: 10,

    width: "80%", // Adjust the width as needed
    height: "45%", // Adjust the height as needed
  },
  modalText2: {
    color: "#7D7C7C",
    fontSize: RFValue(13),

    textAlign: "center",
  },
  modalText1: {
    color: "#7D7C7C",
    fontSize: RFValue(11),

    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    color: "#454545",
    fontWeight: "500",
    fontSize: RFValue(11),
  },
  buttonContainerB: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  modalButtonA: {
    width: wp("30%"),

    // elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 6,
    borderRadius: 5,
    top: hp("10%"),
    // marginHorizontal: 20,
    alignItems: "center",
  },
  modalButtonC: {
    width: hp("40%"),
    top: hp("10%"),
    // elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,

    alignItems: "center",
  },
  modalButtonB: {
    width: hp("40%"),
    // elevation: 4,
    backgroundColor: "#7FCD91",
    padding: 20,
    borderRadius: 5,

    alignItems: "center",
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
  scrollViewContent1: {
    flexGrow: 1,
    paddingVertical: 10,
    height: "120%",
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
    fontSize: RFValue(9),
    fontFamily: "poppins-regular",
    marginBottom: 5,
    marginLeft: 15,
    fontWeight: "100",
    textAlign: "center",
  },
  datafont1: {
    fontSize: RFValue(9),
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "100",
    textAlign: "center",
  },
  containerB: {
    backgroundColor: "#F1EFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: "1%",
    height: hp("8%"), // Set the desired height of the row
  },

  columnB: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "#7D7C7C",

    marginHorizontal: 20, // Adjust the horizontal margin as needed
    height: "100%", // T
  },
  containerA1: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: hp("15%"), // Set the desired height of the row
  },
  containerA: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "17%", // Set the desired height of the row
    paddingHorizontal: 10, // A
  },
  columnA: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderBottomWidth: 2,
    borderColor: "#7D7C7C",

    marginHorizontal: 15, // Adjust the horizontal margin as needed
    // T
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
    height: "15%", // Set the desired height of the row
    paddingHorizontal: 10, // A
  },
  container: {
    flex: 1,
  },
  datafont: {
    fontSize: RFValue(9),
    fontFamily: "poppins-regular",
    marginBottom: 5,
    fontWeight: "900",
    textAlign: "center",
  },
  container2: {
    backgroundColor: "#F1EFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70, // Set the desired height of the row
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
    width: wp("90%"),
    height: 92,
    shadowColor: "rgba(68,61,61,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.24,
    shadowRadius: 3,
    width: "100%",
    height: 92,
  },
  group: {
    width: wp("100%"),
    height: hp("13.4%"),
    borderBottomRightRadius: wp("15%"),
    borderBottomLeftRadius: wp("15%"),
    elevation: wp(2),

    alignSelf: "center",
  },
  rect: {
    height: "100%",
    width: wp("90%"), // Responsive width
    marginTop: hp("3%"), // Responsive margin top
    alignSelf: "center",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: wp("1%"), // Responsive shadow offset
      height: wp("1%"), // Responsive shadow offset
    },
    elevation: 9,
    shadowOpacity: 0.07,
    shadowRadius: wp("1%"), // Responsive shadow radius
    marginTop: hp("3%"),
  },
});
