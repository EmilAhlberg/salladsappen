import {
  FETCH_ACTION_FAIL,
  FETCH_ACTION_SUCCESS
} from ".././ReduxActionStrings.js";
const initialState = { networkData: "hej" };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTION_SUCCESS:
      return Object.assign({}, state, { networkData: action.payload });
    case FETCH_ACTION_FAIL:
      return Object.assign({}, state, { networkData: "FAIL" });
    default:
      return state;
  }
};
