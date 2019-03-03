import React from "react";
import {
  ActivityIndicator,
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
import { SelectMultipleButton } from "react-native-selectmultiple-button";
import StepIndicator from "react-native-step-indicator";
import Swiper from "react-native-swiper";
import { customStyles, styles } from "./CustomSaladStyles.js";
import { fetchMenuInfo, sendOrder } from "../actions/NetworkAction.js";
import {
  handleCustomOrderBack,
  updateCustomPhase
} from "../actions/OrderAction.js";

const PHASE_TITLES = ["Kolhydrat", "Protein", "Tillbehör", "Dressing"];

// Trailing space fixes UI bug
const labels = [
  { label: "Kolhydrat  ", limit: 1 },
  { label: "Protein  ", limit: 1 },
  { label: "Tillbehör  ", limit: 4 },
  { label: "Dressing  ", limit: 1 },
  { label: "Godkänn  ", limit: null }
];

class CustomSalad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //contains intermediate item selection status
      selection: [[], [], [], []]
    };
  }

  componentDidMount() {
    this.props.actions.fetchMenuInfo();
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.actions.handleCustomOrderBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons
          loop={false}
          onIndexChanged={index => {
            console.log(index, this.props.customIndex);
            index <= this.props.customIndex
              ? this.props.actions.handleCustomOrderBack
              : this.props.actions.updateCustomPhase(index - 1);
          }}
        >
          {labels.map(({ label }, i) => {
            return this.renderSwiperContent(label, i);
          })}
        </Swiper>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={this.props.customIndex}
          labels={labels.map(({ label }) => {
            console.log(label);
            return label;
          })}
        />
      </View>
    );
  }

  renderSwiperContent = (label, i) => {
    return (
      <View key={label} style={styles.slide1}>
        <View style={styles.labelContainer}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <View style={styles.content}>
          {i != 4 ? this.renderSelection(i) : this.reviewOrder()}
        </View>
      </View>
    );
  };

  renderSelection = i => {
    return this.props.menuItems[i].map(({ name }) => {
      return (
        <SelectMultipleButton
          key={name + i}
          buttonViewStyle={{
            borderRadius: 10,
            height: 40
          }}
          textStyle={{
            fontSize: 15
          }}
          highLightStyle={{
            borderColor: "gray",
            backgroundColor: "transparent",
            textColor: "gray",
            borderTintColor: "#007AFF",
            backgroundTintColor: "#007AFF",
            textTintColor: "white"
          }}
          multiple={false}
          value={name}
          selected={this.state.selection[i].includes(name)}
          singleTap={valueTap => this.singleTap(name, i)}
        />
      );
      //return <Text style={styles.text}>{name}</Text>;
    });
  };

  //TODO: nested  slicing, refactor?
  singleTap(name, i) {
    let shallowCopy = this.state.selection.slice();
    let deepCopy = this.state.selection[i].slice();
    if (this.state.selection[i].includes(name)) {
      deepCopy = deepCopy.filter(element => element !== name);
    } else if (labels[i].limit > this.state.selection[i].length) {
      deepCopy.push(name);
    }
    shallowCopy[i] = deepCopy;
    console.log(this.state.selection);
    this.setState({ selection: shallowCopy });
  }

  reviewOrder() {
    return (
      <View style={styles.reviewContent}>
        {this.state.selection.map(orderCategory => {
          return orderCategory.map(orderedItem => {
            return <Text key={orderedItem + orderCategory}>{orderedItem}</Text>;
          });
        })}
        <ActivityIndicator
          size="large"
          color="#0000ff"
          opacity={this.props.sendingOrder ? 1 : 0}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            this.props.sendingOrder
              ? console.log("sending alrdy")
              : this.props.actions.sendOrder(this.state.selection)
          }
        >
          <Text style={styles.buttonText}> Beställ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    customIndex: state.order.customIndex,
    menuItems: state.order.menuItems,
    carbohydrate: state.order.customCarbohydrate,
    protein: state.order.customProtein,
    condiments: state.order.customCondiments,
    dressing: state.order.customDressing,
    sendingOrder: state.network.sendingOrder
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchMenuInfo, updateCustomPhase, handleCustomOrderBack, sendOrder },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSalad);
