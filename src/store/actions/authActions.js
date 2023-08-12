export const setIsLogin = (access_token, decodedToken) => {
  return {
    type: "SET_LOGIN",
    payload: { access_token, decodedToken },
  };
};

export const setLogout = () => {
  return {
    type: "SET_LOGOUT",
  };
};

export const setCurrentFlashcard = (flashcard) => {
  return {
    type: "SET_CURRENT_FLASHCARD",
    payload: flashcard,
  };
};
