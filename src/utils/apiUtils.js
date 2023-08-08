import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const useAuthToken = () => {
  const token = useSelector((state) => state.token);
  return token;
};

export const useIsLogin = () => {
  const isLogin = useSelector((state) => state.isLogin);
  return isLogin;
};

export const useUserInfo = () => {
  const userInfor = useSelector((state) => state.decodedToken);
  return userInfor;
};

export const decodeJwtToken = (token) => {
  return jwt_decode(token);
};
