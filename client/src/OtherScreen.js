import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class OtherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "wtf" };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text> {this.state.data} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center"
  }
});
