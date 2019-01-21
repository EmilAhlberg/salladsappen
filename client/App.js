import Navigator from "./src/Navigator.js";

import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/Store.js";
/*import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: StartScreen,
    Profile: OtherScreen
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppNavigator);
*/
export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator />
      </Provider>
    );
  }
}

//export default App;
