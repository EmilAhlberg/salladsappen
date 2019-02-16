import { createAppContainer, createStackNavigator } from "react-navigation";

import StartScreen from "./StartScreen";
import MainScreen from "./order/MainScreen";
import SplashScreen from "./SplashScreen.js";

const rootNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Splash: SplashScreen,
    Order: MainScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "SplashScreen",
    headerLeft: null
  }
);

const Navigator = createAppContainer(rootNavigator);

export default Navigator;
