import * as actionTypes from "../actions/actionTypes";

const initialState = {
  auth: true,
  user: "",
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        auth: true,
        user: action.user,
        token: action.token,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        auth: false,
        user: "",
        token: "",
      };
    default:
      return state;
  }
};

export default reducer;
