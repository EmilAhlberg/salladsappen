import { createAppContainer, createStackNavigator } from "react-navigation";

import StartScreen from "./StartScreen";
import OtherScreen from "./OtherScreen";

const rootNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Other: OtherScreen
  },
  { initialRouteName: "Home" }
);

const Navigator = createAppContainer(rootNavigator);

export default Navigator;
