import {
  MAIN_SELECTION,
  SELECT_CARBOHYDRATE,
  SELECT_CONDIMENTS,
  SELCECT_DRESSING,
  SELECT_PROTEIN
} from ".././ReduxActionStrings.js";

const initialState = {
  optionSelection: 0,
  customIndex: 0,
  customCarbohydrate: "",
  customProtein: "",
  customCondiments: "",
  customDressing: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAIN_SELECTION:
      return Object.assign({}, state, { optionSelection: action.payload });
    case SELECT_CARBOHYDRATE:
      return Object.assign({}, state, { customCarbohydrate: action.payload });
    case SELECT_PROTEIN:
      return Object.assign({}, state, { customProtein: action.payload });
    case SELECT_CONDIMENTS:
      return Object.assign({}, state, { customCondiments: action.payload });
    case SELECT_DRESSING:
      return Object.assign({}, state, { customDressing: action.payload });

    default:
      return state;
  }
};
