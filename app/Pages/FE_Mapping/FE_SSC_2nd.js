 return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/FESSC_2nd.png")}
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
    width: 899,
    height: 450,
    marginTop: 175,
    marginLeft: 191
  },
  image_imageStyle: {},
  fE1: {
    width: 30,
    height: 31,
    marginTop: 227,
    marginLeft: 229
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
    marginTop: -85,
    marginLeft: 785
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
  }
});