import React from "react";
import {
  BackHandler,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CUSTOM_ITEMS } from "./CustomSaladConst.js";
import StepIndicator from "react-native-step-indicator";
import { handleSelection } from "../actions/OrderAction.js";
import { handleCustomOrderBack } from "../actions/OrderAction.js";
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler
} from "../BackHandler.js";
const PHASE_TITLES = ["Kolhydrat", "Protein", "Tillbehör", "Dressing"];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#fe7013",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#fe7013",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: "#fe7013",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 10,
  currentStepLabelColor: "#fe7013"
};

// Trailing space fixes UI bug
const labels = [
  "Kolhydrat  ",
  "Protein  ",
  "Tillbehör  ",
  "Dressing  ",
  "Godkänn  "
];

class CustomSalad extends React.Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      console.log("backhandling!");
      this.props.actions.handleCustomOrderBack();
      return true;
      handleAndroidBackButton();
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Välj {PHASE_TITLES[this.props.customIndex]}:</Text>
        {this.props.customIndex !== 4
          ? this.customSelection(CUSTOM_ITEMS[this.props.customIndex])
          : this.reviewOrder()}
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={this.props.customIndex}
            stepCount={5}
            labels={labels}
          />
        </View>
      </View>
    );
  }

  customSelection(itemList) {
    return itemList.map(({ type }, i) => {
      return (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.actions.handleSelection(this.props.customIndex, type);
          }}
        >
          <Text style={styles.buttonText}> {type}</Text>
        </TouchableOpacity>
      );
    });
  }

  reviewOrder() {
    return (
      <Text>
        {this.props.carbohydrate +
          " " +
          this.props.protein +
          " " +
          this.props.condiments +
          " " +
          this.props.dressing}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "90%",
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
  },
  stepIndicator: {
    width: "100%",
    backgroundColor: "white",
    marginTop: "auto"
  }
});

const mapStateToProps = state => {
  return {
    customIndex: state.order.customIndex,
    carbohydrate: state.order.customCarbohydrate,
    protein: state.order.customProtein,
    condiments: state.order.customCondiments,
    dressing: state.order.customDressing
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { handleSelection, handleCustomOrderBack },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSalad);
