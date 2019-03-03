import {
  MAIN_SELECTION,
  CUSTOM_ORDER_BACK,
  RESET_ORDER,
  UPDATE_CUSTOM_PHASE
} from ".././ReduxActionStrings.js";
import { CUSTOM_PHASES } from "../reducers/OrderReducer.js";

export const optionSelection = selection => dispatch => {
  dispatch({ type: MAIN_SELECTION, payload: selection });
};

export const updateCustomPhase = selectionIndex => dispatch => {
  dispatch({ type: UPDATE_CUSTOM_PHASE, payload: selectionIndex });
};

export const handleCustomOrderBack = () => dispatch => {
  dispatch({ type: CUSTOM_ORDER_BACK });
};

export const resetOrder = () => dispatch => {
  dispatch({ type: RESET_ORDER });
};
