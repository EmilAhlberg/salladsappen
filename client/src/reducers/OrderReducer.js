import {
  CUSTOM_ORDER_BACK,
  MAIN_SELECTION,
  RESET_ORDER,
  UPDATE_CUSTOM_PHASE,
  UPDATE_MENU
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
  selectedCarbohydrate: [],
  selectedProtein: [],
  selectedCondiments: [],
  selectedDressing: [],
  menuItems: [[], [], [], []]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CUSTOM_ORDER_BACK:
      switch (state.customIndex) {
        case CUSTOM_PHASES.CARBOHYDRATE:
          return initialState;
        default:
          return Object.assign({}, state, {
            customIndex: state.customIndex - 1
          });
      }
    case MAIN_SELECTION:
      return Object.assign({}, state, { optionSelection: action.payload });
    case RESET_ORDER:
      return initialState;
    case UPDATE_CUSTOM_PHASE:
      let newDressing = state.selectedDressing.slice();
      newDressing.push(action.payload);
      return Object.assign({}, state, {
        customIndex: state.customIndex + 1
      });
    case UPDATE_MENU:
      let newMenuItems = [[], [], [], []];
      console.log(action.payload);
      action.payload.map(item => {
        let categoryNbr = CUSTOM_PHASES[item.category];
        newMenuItems[categoryNbr].push({ name: item.name, id: item.id });
      });
      return Object.assign({}, state, {
        menuItems: newMenuItems
      });
    default:
      return state;
  }
};
