import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  auth: false,
  user: "",
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem("test", action.token);
      return {
        ...state,
        auth: true,
        // user: action.user,
        // token: action.token,
        user: {
          _id: "Tladlf234kladfklTlkadlfk",
          firstName: "Test",
          lastName: "User",
          email: "test@email.com",
          username: "testuser",
        },
        token: action.token,
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem("test");
      return {
        ...state,
        auth: false,
        user: "",
        token: "",
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
