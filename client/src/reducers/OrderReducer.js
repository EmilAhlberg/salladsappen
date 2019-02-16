import {
  CUSTOM_ORDER_BACK,
  MAIN_SELECTION,
  SELECT_CARBOHYDRATE,
  SELECT_CONDIMENTS,
  SELECT_DRESSING,
  SELECT_PROTEIN
} from ".././ReduxActionStrings.js";

export const CUSTOM_PHASES = {
  CARBOHYDRATE: 0,
  PROTEIN: 1,
  CONDIMENTS: 2,
  DRESSING: 3,
  REVIEW: 4
};

const initialState = {
  optionSelection: 0,
  customIndex: CUSTOM_PHASES.CARBOHYDRATE,
  customCarbohydrate: "",
  customProtein: "",
  customCondiments: "",
  customDressing: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CUSTOM_ORDER_BACK:
      if (state.customIndex > CUSTOM_PHASES.CARBOHYDRATE) {
        return Object.assign({}, state, { customIndex: state.customIndex - 1 });
      }
      //reset orderstate if exiting order screen
      return initialState;
    case MAIN_SELECTION:
      return Object.assign({}, state, { optionSelection: action.payload });
    case SELECT_CARBOHYDRATE:
      console.log("reducer:", CUSTOM_PHASES.PROTEIN);
      return Object.assign({}, state, {
        customCarbohydrate: action.payload,
        customIndex: CUSTOM_PHASES.PROTEIN
      });
    case SELECT_PROTEIN:
      return Object.assign({}, state, {
        customProtein: action.payload,
        customIndex: CUSTOM_PHASES.CONDIMENTS
      });
    case SELECT_CONDIMENTS:
      return Object.assign({}, state, {
        customCondiments: action.payload,
        customIndex: CUSTOM_PHASES.DRESSING
      });
    case SELECT_DRESSING:
      return Object.assign({}, state, {
        customDressing: action.payload,
        customIndex: CUSTOM_PHASES.REVIEW
      });

    default:
      return state;
  }
};
