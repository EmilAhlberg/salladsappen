import React from "react";
import { Button } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Header } from "react-native-elements";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomSalad from "./CustomSalad.js";
import MenuSalad from "./MenuSalad.js";
import PrevSalad from "./PrevSalad.js";
import { fetchMenuInfo } from "../actions/NetworkAction.js";
import { optionSelection, resetOrder } from "../actions/OrderAction.js";
import Icon from "react-native-vector-icons/FontAwesome";

const MAIN_OPTIONS = [
  { optionText: "Mixa själv" },
  { optionText: "Menysallad" },
  { optionText: "Tidigare sallad" }
];

class MainScreen extends React.Component {
  //fetch item lists
  componentDidMount() {
    console.log("fetchlist");
    this.props.actions.fetchMenuInfo();
  }

  optionSelection = () => {
    return (
      <View style={styles.optionContainer}>
        <Text>Welcome {this.props.username}!</Text>
        {MAIN_OPTIONS.map(({ optionText }, i) => {
          return (
            <TouchableOpacity
              key={optionText}
              style={styles.buttonContainer}
              onPress={() => {
                console.log(i);
                this.props.actions.optionSelection(i + 1);
              }}
            >
              <Text style={styles.buttonText}> {optionText}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  onPageChange(position) {
    //TODO: method stub is dead
    this.setState({ currentPosition: position });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "SalladsMannen", style: { color: "#fff" } }}
          rightComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => {
              this.props.actions.resetOrder();
            }
          }}
        />
        {this.options[this.props.optionSelection]}
      </View>
    );
  }

  // Enum conditional rendering
  options = {
    0: this.optionSelection(),
    1: <CustomSalad />,
    2: <MenuSalad />,
    3: <PrevSalad />
  };
}

const styles = StyleSheet.create({
  rlButtonContainer: {
    display: "flex",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  optionContainer: {
    display: "flex",
    height: "88%",
    width: "100%",
    backgroundColor: "#FFFFFF",
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
    username: state.network.username,
    optionSelection: state.order.optionSelection
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchMenuInfo, optionSelection, resetOrder },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
