import {
  Dimensions,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import React, { Component } from "react";

import { connect } from "react-redux";
import { loginAction } from "./actions/NetworkAction.js";
import { bindActionCreators } from "redux";

let userName = "";
let password = "";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <View styles={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={input => this.setState({ username: input })}
          onSubmitEditing={input => {}}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Username"
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput
          style={styles.input}
          returnKeyType="go"
          onChangeText={input => this.setState({ password: input })}
          ref={input => {
            this.passwordInput = input;
          }}
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.actions.loginAction(
              this.state.username,
              this.state.password
            );
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>or</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.actions.loginAction(
              this.state.username,
              this.state.password
            );
          }}
        >
          <Text style={styles.buttonText}>Register</Text>
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loginAction }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
