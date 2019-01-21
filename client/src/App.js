import StartScreen from "./StartScreen.js";
import OtherScreen from "./OtherScreen.js";
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Profile: OtherScreen
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);

export class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default createAppContainer(AppNavigator);
