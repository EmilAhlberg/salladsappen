import { combineReducers } from "redux";
import homeReducer from "./HomeScreenReducer.js";
import netReducer from "./NetworkReducer.js";

export default combineReducers({
  home: homeReducer,
  network: netReducer
});
