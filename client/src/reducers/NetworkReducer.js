import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from ".././ReduxActionStrings.js";
const initialState = { networkData: "hej", userAuthenticated: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTION_SUCCESS:
      return Object.assign({}, state, { networkData: action.payload });
    case FETCH_ACTION_FAIL:
      return Object.assign({}, state, { networkData: "FAIL" });
    case LOGIN_FAIL:
      console.log("Login fail.");
      return Object.assign({}, state, { userAuthenticated: false });
    case LOGIN_SUCCESS:
      console.log("Login success.");
      return Object.assign({}, state, { userAuthenticated: true });
    default:
      return state;
  }
};
