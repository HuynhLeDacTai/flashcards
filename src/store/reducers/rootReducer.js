const initialState = {
  token: "",
  isLogin: false,
  decodedToken: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        isLogin: true,
        decodedToken: action.payload.decodedToken,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        token: "",
        isLogin: false,
        decodedToken: "",
      };
    default:
      return state;
  }
};
export default rootReducer;
