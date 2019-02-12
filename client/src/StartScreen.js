import React from "react";
import LOGO from "./logo.png";
import {
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
    justifyContent: "flex-end"
  },
  formContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  loginContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    marginTop: 100,
    width: 300,
    height: 300
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ networkAction }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(HomeScreen);
