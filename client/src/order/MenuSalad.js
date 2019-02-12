import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { mainSelection } from "../actions/OrderAction.js";

class MenuSalad extends React.Component {
  render() {
    return <Text> MENU </Text>;
  }
}

export default connect(
  null,
  null
)(MenuSalad);
