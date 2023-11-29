return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/SDCIT_5TH.png")}
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
          <TouchableOpacity style={styles.button5}>
            <View style={styles.b6StackStack}>
              <View style={styles.b6Stack}>
                <View style={styles.b6}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb5}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb5}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button6}>
            <View style={styles.b7StackStack}>
              <View style={styles.b7Stack}>
                <View style={styles.b7}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb6}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb6}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button7}>
            <View style={styles.b8StackStack}>
              <View style={styles.b8Stack}>
                <View style={styles.b8}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb7}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb7}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button8}>
            <View style={styles.b9StackStack}>
              <View style={styles.b9Stack}>
                <View style={styles.b9}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb8}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb8}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button9}>
            <View style={styles.b10StackStack}>
              <View style={styles.b10Stack}>
                <View style={styles.b10}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb9}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb9}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button10}>
            <View style={styles.b11StackStack}>
              <View style={styles.b11Stack}>
                <View style={styles.b11}></View>
                <MaterialIconsIcon
                  name="location-on"
                  style={styles.bbb10}
                ></MaterialIconsIcon>
              </View>
              <View style={styles.bb10}></View>
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
    width: 1133,
    height: 338,
    flexDirection: "row",
    marginTop: 219,
    marginLeft: 74
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
    marginLeft: 61
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
  button3: {
    width: 30,
    height: 31,
    marginLeft: 55
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
    marginLeft: 59
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
  button5: {
    width: 30,
    height: 31,
    marginLeft: 56
  },
  b6: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb5: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b6Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b6StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button6: {
    width: 30,
    height: 31,
    marginLeft: 58
  },
  b7: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb6: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b7Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b7StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button7: {
    width: 30,
    height: 31,
    marginLeft: 59,
    marginTop: 1
  },
  b8: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb7: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b8Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b8StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button8: {
    width: 30,
    height: 31,
    marginLeft: 59,
    marginTop: 1
  },
  b9: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb8: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b9Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b9StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button9: {
    width: 30,
    height: 31,
    marginLeft: 53,
    marginTop: 1
  },
  b10: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb9: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b10Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b10StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button10: {
    width: 30,
    height: 31,
    marginLeft: 62,
    marginTop: 2
  },
  b11: {
    top: 7,
    left: 9,
    width: 11,
    height: 11,
    position: "absolute",
    borderRadius: 10,
    backgroundColor: "rgba(99,196,99,1)"
  },
  bbb10: {
    top: 0,
    position: "absolute",
    color: "rgba(91,93,91,1)",
    fontSize: 30,
    left: 0
  },
  b11Stack: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
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
    borderColor: "rgba(69,64,64,1)"
  },
  b11StackStack: {
    width: 30,
    height: 33,
    marginTop: -2
  },
  button1Row: {
    height: 33,
    flexDirection: "row",
    flex: 1,
    marginRight: 156,
    marginLeft: 155,
    marginTop: 76
  }
});