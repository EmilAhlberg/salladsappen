import { createAppContainer, createStackNavigator } from "react-navigation";

import StartScreen from "./StartScreen";
import OrderScreen from "./order/OrderScreen";
import SplashScreen from "./SplashScreen.js";

const rootNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Splash: SplashScreen,
    Order: OrderScreen
  },
  {
    initialRouteName: "Order",
    headerMode: "SplashScreen",
    headerLeft: null
  }
);

const Navigator = createAppContainer(rootNavigator);

export default Navigator;
