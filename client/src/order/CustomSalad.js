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

import { optionSelection } from "../actions/OrderAction.js";

const CARBOHYDRATES = [
  { type: "pasta" },
  { type: "quinoa" },
  { type: "bara sallad" },
  { type: "havre" }
];
const PROTEINS = [
  { type: "kyckling" },
  { type: "lax" },
  { type: "kalkon" },
  { type: "räkor" }
];
const CONDIMENTS = [
  { type: "oliver" },
  { type: "rödlök" },
  { type: "fetaost" },
  { type: "krutonger" }
];
const DRESSINGS = [
  { type: "pesto" },
  { type: "örtvinägrett" },
  { type: "rhode island" },
  { type: "aioli" }
];

class CustomSalad extends React.Component {
  render() {
    return this.options[this.props.customIndex];
  }

  //enum with indicies or intuitive keys?
  options = {
    0: this.carbohydrateSelection(),
    1: this.proteinSelection(),
    2: this.condimentSelection(),
    3: this.dressingSelection()
  };

  carbohydrateSelection() {
    return CARBOHYDRATES.map(({ type }, i) => {
      return (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            console.log(i);
            this.props.actions.optionSelection(i + 1);
          }}
        >
          <Text style={styles.buttonText}> {type}</Text>
        </TouchableOpacity>
      );
    });
  }

  proteinSelection() {
    return null;
  }

  condimentSelection() {
    return null;
  }

  dressingSelection() {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F00000",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    backgroundColor: "#FEFFF6",
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.06,
    textAlign: "center",
    paddingVertical: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: Dimensions.get("window").height * 0.02,
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 0.65,
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center" //etc
  }
});

const mapStateToProps = state => {
  return {
    customIndex: state.order.customIndex
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { selectProtein, selectCarbohydrate, selectCondiments, selectDressing },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSalad);
