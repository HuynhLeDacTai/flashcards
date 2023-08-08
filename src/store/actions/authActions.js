export const setIsLogin = (token, decodedToken) => {
  return {
    type: "SET_LOGIN",
    payload: { token, decodedToken },
  };
};

export const setLogout = () => {
  return {
    type: "SET_LOGOUT",
  };
};
