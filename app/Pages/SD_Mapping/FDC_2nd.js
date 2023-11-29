 return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/FDC_2nd_1P.png")}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.button1Row}>
          <TouchableOpacity style={styles.button1}>
            <View style={styles.b1StackStack}>
              <View style={styles.b1Stack}>
                <View style={styles.b1}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb1}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb1}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.b3StackStack}>
              <View style={styles.b3Stack}>
                <View style={styles.b3}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb2}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb2}></View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button3Row}>
          <TouchableOpacity style={styles.button3}>
            <View style={styles.b4StackStack}>
              <View style={styles.b4Stack}>
                <View style={styles.b4}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb3}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb3}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button4}>
            <View style={styles.b5StackStack}>
              <View style={styles.b5Stack}>
                <View style={styles.b5}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb4}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb4}></View>
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
    width: 398,
    height: 740,
    marginTop: 41,
    marginLeft: 426
  },
  image_imageStyle: {},
  button1: {
    width: 30,
    height: 31
  },
  b1: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb1: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b1Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b1StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button2: {
    width: 30,
    height: 31,
    marginLeft: 223
  },
  b3: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb2: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b3Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b3StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button1Row: {
    height: 31,
    flexDirection: "row",
    marginTop: 71,
    marginLeft: 80,
    marginRight: 35
  },
  button3: {
    width: 30,
    height: 31,
    marginTop: 1
  },
  b4: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb3: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b4Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b4StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button4: {
    width: 30,
    height: 31,
    marginLeft: 257
  },
  b5: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb4: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b5Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b5StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button3Row: {
    height: 32,
    flexDirection: "row",
    marginTop: 535,
    marginLeft: 61,
    marginRight: 20
  }
});