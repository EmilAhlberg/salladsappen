import {
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View styles={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Username"
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigate("Profile")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#2980b6"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    width: Dimensions.get("window").width * 0.9,
    textAlign: "center",
    fontWeight: "700"
  }
});

export default LoginForm;
