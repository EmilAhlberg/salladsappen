import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Dimensions
} from "react-native";
import LOGO from "./logo.png";

const { width, height } = Dimensions.get("window");

export default class AnimatedComponent extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0.1);
    this.animatedValue3 = new Animated.Value(0.0);
    this.props.isAppReady = false;
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();

    Animated.spring(this.animatedValue3, {
      toValue: 1,
      delay: 3000,
      duration: 500
    }).start();
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 4000);
  }

  render() {
    const logoStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    const scaleTitle = {
      transform: [{ scale: this.animatedValue3 }],
      opacity: this.animatedValue3
    };
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.titleText, scaleTitle]}>
          SalladsMannen!
        </Animated.Text>
        <Animated.View style={[styles.ring, logoStyle]}>
          <Animated.Image
            source={LOGO}
            style={[
              {
                resizeMode: "contain",
                width: 300,
                height: 300
              }
            ]}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              marginTop: "15%",
              width: width * 0.75,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f0f0f"
  },
  titleText: {
    fontSize: 45,
    color: "white",
    textAlign: "center",
    marginBottom: "30%"
  },
  welcome: {
    textAlign: "center",
    margin: 10
  },
  ring: {
    backgroundColor: "#40C4FF",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  }
});
