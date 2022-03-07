const INITIAL_STATE = {
  currentUser: null,
}; //We set an initial state for the reducer since, at first, we need to have an initial state to compare the one passed through the action

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}; //The code "state = INITIAL_STATE" is a feature of ES6 that, in case of value of state being FALSE, it sets it to the value in INITIAL_STATE

export default userReducer;
