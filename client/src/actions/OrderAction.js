import {
  MAIN_SELECTION,
  CUSTOM_ORDER_BACK,
  SELECT_CARBOHYDRATE,
  SELECT_CONDIMENTS,
  SELECT_DRESSING,
  SELECT_PROTEIN
} from ".././ReduxActionStrings.js";

export const optionSelection = selection => dispatch => {
  dispatch({ type: MAIN_SELECTION, payload: selection });
};

export const handleSelection = (selectionIndex, selectionData) => dispatch => {
  let action = "";
  switch (selectionIndex) {
    case 0:
      action = SELECT_CARBOHYDRATE;
      break;
    case 1:
      action = SELECT_PROTEIN;
      break;
    case 2:
      action = SELECT_CONDIMENTS;
      break;
    case 3:
      action = SELECT_DRESSING;
      break;
  }
  dispatch({ type: action, payload: selectionData });
};

export const handleCustomOrderBack = () => dispatch => {
  dispatch({ type: CUSTOM_ORDER_BACK });
};
