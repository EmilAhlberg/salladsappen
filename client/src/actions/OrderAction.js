import {
  MAIN_SELECTION,
  SELECT_CARBOHYDRATE,
  SELECT_CONDIMENTS,
  SELCECT_DRESSING,
  SELECT_PROTEIN
} from ".././ReduxActionStrings.js";

export const optionSelection = selection => dispatch => {
  dispatch({ type: MAIN_SELECTION, payload: selection });
};

export const carbohydrateSelection = selection => dispatch => {
  dispatch({ type: SELECT_CARBOHYDRATE, payload: selection });
};

export const proteinSelection = selection => dispatch => {
  dispatch({ type: SELECT_PROTEIN, payload: selection });
};

export const condimentSelection = selection => dispatch => {
  dispatch({ type: SELECT_CONDIMENTS, payload: selection });
};

export const dressingSelection = selection => dispatch => {
  dispatch({ type: SELECT_DRESSING, payload: selection });
};
