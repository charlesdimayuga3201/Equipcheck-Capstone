  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/FERGR_3rd1.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <TouchableOpacity style={styles.fE1}>
          <View style={styles.fE2StackStack}>
            <View style={styles.fE2Stack}>
              <View style={styles.fE2}></View>
              <MaterialIconsIcon
                name="location-on"
                style={styles.fE4}
              ></MaterialIconsIcon>
            </View>
            <View style={styles.fE3}></View>
          </View>
        </TouchableOpacity>
        <View style={styles.fE5Row}>
          <TouchableOpacity style={styles.fE5}>
            <View style={styles.fE6StackStack}>
              <View style={styles.fE6Stack}>
                <View style={styles.fE6}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.fE8}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.fE7}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fE9}>
            <View style={styles.fE10StackStack}>
              <View style={styles.fE10Stack}>
                <View style={styles.fE10}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.fE12}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.fE11}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fE13}>
            <View style={styles.fE14StackStack}>
              <View style={styles.fE14Stack}>
                <View style={styles.fE14}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.fE16}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.fE15}></View>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  image: {
    width: 1032,
    height: 418,
    flexDirection: "row",
    marginTop: 191,
    marginLeft: 139
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginLeft: 165,
    marginTop: 221
  },
  fE2: {
    top: 4,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  fE4: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0
  },
  fE2Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
  },
  fE3: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)"
  },
  fE2StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  fE5: {
    width: 30,
    height: 31,
    marginTop: 1
  },
  fE6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  fE8: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0
  },
  fE6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
  },
  fE7: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)"
  },
  fE6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  fE9: {
    width: 30,
    height: 31,
    marginLeft: 206,
    marginTop: 1
  },
  fE10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  fE12: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0
  },
  fE10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
  },
  fE11: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)"
  },
  fE10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  fE13: {
    width: 30,
    height: 31,
    marginLeft: 206
  },
  fE14: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  fE16: {
    top: 0,
    position: "absolute",
    color: "rgba(225,47,35,1)",
    fontSize: 30,
    left: 0
  },
  fE14Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
  },
  fE15: {
    top: 22,
    left: 5,
    width: 20,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)",
    borderWidth: 2,
    borderColor: "rgba(69,64,64,1)"
  },
  fE14StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  fE5Row: {
    height: 32,
    flexDirection: "row",
    flex: 1,
    marginRight: 264,
    marginLeft: 71,
    marginTop: 268
  }
});