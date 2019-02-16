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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CustomSalad from "./CustomSalad.js";
import MenuSalad from "./MenuSalad.js";
import PrevSalad from "./PrevSalad.js";
import { optionSelection } from "../actions/OrderAction.js";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import Icon from "react-native-vector-icons/FontAwesome";

const MAIN_OPTIONS = [
  { optionText: "Mixa själv" },
  { optionText: "Menysallad" },
  { optionText: "Tidigare sallad" }
];

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myText: "default" };
  }

  optionSelection = () => {
    console.log("yes");
    return (
      <View style={styles.optionContainer}>
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

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={styles.container}
      >
        {this.options[this.props.optionSelection]}

        <Text>{this.state.myText}</Text>
      </GestureRecognizer>
    );
  }
  /*<View style={styles.rlButtonContainer}>
    <Button icon={<Icon name="arrow-left" size={30} color="white" />} />
    <Button icon={<Icon name="arrow-right" size={30} color="white" />} />
  </View>*/

  onSwipeUp(gestureState) {
    console.log("yes");
    this.setState({ myText: "You swiped up!" });
  }

  onSwipeDown(gestureState) {
    this.setState({ myText: "You swiped down!" });
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: "You swiped left!" });
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: "You swiped right!" });
  }

  onSwipe(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: "red" });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: "green" });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: "blue" });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: "yellow" });
        break;
    }
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
    backgroundColor: "#F00000",
    alignItems: "center",
    justifyContent: "center"
  },
  optionContainer: {
    flex: 1,
    backgroundColor: "#F0F000",
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
    optionSelection: state.order.optionSelection,
    customIndex: state.order.customIndex
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ optionSelection }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
