import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm.js";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "init",
      email: "",
      password: ""
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior={"padding"}
        enabled
        style={styles.container}
      >
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{
              uri:
                "https://www.grontogott.se/assets/grontochgottsplash2/img/logo.png"
            }}
          />
          <Text> {this.state.data} </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigate={navigate} />
        </View>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches GET from backend server
  callBackendAPI = async () => {
    const response = await fetch("http://192.168.0.108:8550/backend_get");
    console.log("here");
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
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
