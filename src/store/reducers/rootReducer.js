const initialState = {
  access_token: "",
  isLogin: false,
  decodedToken: {},
  currentFlashcard: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        access_token: action.payload.access_token,
        isLogin: true,
        decodedToken: action.payload.decodedToken,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        access_token: "",
        isLogin: false,
        decodedToken: "",
      };
    case "SET_CURRENT_FLASHCARD":
      return {
        ...state,
        currentFlashcard: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
