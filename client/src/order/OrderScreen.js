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
import CustomSalad from "./CustomSalad.js";
import MenuSalad from "./MenuSalad.js";
import { optionSelection } from "../actions/OrderAction.js";

const MAIN_OPTIONS = [
  { optionText: "Mixa själv" },
  { optionText: "Menysallad" },
  { optionText: "Tidigare sallad" }
];

class OrderScreen extends React.Component {
  optionSelection = () => {
    console.log("yes");
    return (
      <View style={styles.container}>
        <Text>Welcome {this.props.username}!</Text>
        {MAIN_OPTIONS.map(({ optionText }, i) => {
          return (
            <TouchableOpacity
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

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
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
    username: state.network.username,
    optionSelection: state.order.optionSelection
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ optionSelection }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderScreen);

/*
const INPUT_FIELDS = [
  { type: "Kolhydrat" },
  { type: "Protein" },
  { type: "Tillbehör 1:" },
  { type: "Tillbehör 2:" },
  { type: "Tillbehör 3:" },
  { type: "Tillbehör 4:" },
  { type: "Dressing 1:" },
  { type: "Dressing 2:" }
];

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderInfo: ["", "", "", "", "", "", "", ""] };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        behavior={"padding"}
        enabled
        style={styles.container}
      >
        <Text>Welcome {this.props.username}!</Text>
        {INPUT_FIELDS.map((type, i) => {
          return (
            <TextInput
              style={styles.textField}
              returnKeyType="go"
              onChangeText={input => {
                let orderCopy = this.state.orderInfo.slice();
                orderCopy[i] = input;
                this.setState({ orderInfo: orderCopy });
              }}
              ref={input => {
                this.passwordInput = input;
              }}
              placeholder={INPUT_FIELDS[i].type}
              placeholderTextColor="rgba(225,225,150,0.9)"
            />
          );
        })}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            console.log(this.state.orderInfo);
            this.props.actions.orderAction(this.state.orderInfo);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
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
    username: state.network.username
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ orderAction }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderScreen);
*/
