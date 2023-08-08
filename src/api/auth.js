import axios from "axios";
import { API_AUTH_URL } from "../http/paths";
import { decodeJwtToken } from "../utils/apiUtils";
import { setIsLogin, setLogout } from "../store/actions/authActions";

const auth = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (user, dispatch) => {
  const userData = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  const response = await auth.post("/register", userData);
  const token = response.data.token;
  const decodedToken = decodeJwtToken(token);
  dispatch(setIsLogin(token, decodedToken));
  localStorage.setItem("token", token);
};

export const authenticate = async (user, dispatch) => {
  const userData = {
    email: user.email,
    password: user.password,
  };
  const response = await auth.post("/authenticate", userData);
  const token = response.data.token;
  const decodedToken = decodeJwtToken(token);
  dispatch(setIsLogin(token, decodedToken));
  localStorage.setItem("token", token);
};

export const logout = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    auth.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    });
  }
  await auth.post("/logout");
  dispatch(setLogout());
  localStorage.removeItem("token");
};
