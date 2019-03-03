import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SENDING_ORDER
} from ".././ReduxActionStrings.js";

const initialState = {
  sendingOrder: false,
  username: "default",
  userAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //TODO: fetch_action_x are obsolete
    case FETCH_ACTION_SUCCESS:
      return Object.assign({}, state, { networkData: action.payload });
    case FETCH_ACTION_FAIL:
      return Object.assign({}, state, { networkData: "FAIL" });
    case LOGIN_FAIL:
      console.log("Login fail.");
      return Object.assign({}, state, { userAuthenticated: false });
    case LOGIN_SUCCESS:
      console.log("Login success.");
      return Object.assign({}, state, {
        userAuthenticated: true,
        username: action.payload
      });
    case SENDING_ORDER:
      return Object.assign({}, state, { sendingOrder: true });
    default:
      return state;
  }
};
