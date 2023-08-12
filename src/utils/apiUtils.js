import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const useAuthToken = () => {
  const token = useSelector((state) => state.access_token);
  return token;
};

export const useIsLogin = () => {
  const result = useSelector((state) => state.isLogin);
  return result;
};

export const useUserInfo = () => {
  const result = useSelector((state) => state.decodedToken);
  return result;
};

export const useCurrentFlashcard = () => {
  const result = useSelector((state) => state.currentFlashcard);
  return result;
};

export const decodeJwtToken = (access_token) => {
  return jwt_decode(access_token);
};

export const getLocalToken = () => {
  const token = localStorage.getItem("access_token");
  console.log("getLocalToken >>>>  ", token);
  return token !== null ? token : "";
};

export const getLocalRefreshToken = () => {
  const token = localStorage.getItem("refresh_token");
  return token !== null ? token : "";
};

export const setLocalToken = (access_token) => {
  localStorage.setItem("access_token", access_token);
};

export const setLocalRefreshToken = (refresh_token) => {
  localStorage.setItem("refresh_token", refresh_token);
};
