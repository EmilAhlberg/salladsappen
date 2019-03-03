import React from "react";
import LOGO from "../salladslogo.png";
import {
  Alert,
  BackHandler,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import LoginForm from "./LoginForm.js";
import { networkAction } from "./actions/NetworkAction.js";
import { bindActionCreators } from "redux";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Confirm exit", "Do you want to quit the app?", [
        {
          text: "CANCEL",
          onPress: () => {}
        },
        {
          text: "OK",
          onPress: () => {
            BackHandler.exitApp();
          }
        }
      ]);
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={"padding"}
        enabled
        style={styles.container}
      >
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={LOGO} />
        </View>

        <View style={styles.formContainer}>
          <LoginForm navigate={this.props.navigation} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  loginContainer: {
    marginTop: 120,
    width: 260,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14ff33",
    borderRadius: 500,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ networkAction }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);
