const initialState = { result: "hej" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION2":
      return {
        ...state,
        result: ""
      };
    default:
      return state;
  }
};
