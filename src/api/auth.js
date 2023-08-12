import axios from "axios";
import { API_AUTH_URL } from "../http/paths";
import {
  decodeJwtToken,
  getLocalToken,
  setLocalRefreshToken,
  setLocalToken,
} from "../utils/apiUtils";
import { setIsLogin, setLogout } from "../store/actions/authActions";

const auth = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const out = axios.create({
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
  delete auth.defaults.headers.common["Authorization"];
  const response = await auth.post("/register", userData);
  const access_token = response.data.access_token;
  const refresh_token = response.data.refresh_token;
  const decodedToken = decodeJwtToken(access_token);
  dispatch(setIsLogin(access_token, decodedToken));
  setLocalToken(access_token);
  setLocalRefreshToken(refresh_token);
  localStorage.setItem("login", true);
};

export const authenticate = async (user, dispatch) => {
  const userData = {
    email: user.email,
    password: user.password,
  };
  delete auth.defaults.headers.common["Authorization"];
  const response = await auth.post("/authenticate", userData);
  const access_token = response.data.access_token;
  const refresh_token = response.data.refresh_token;
  const decodedToken = decodeJwtToken(access_token);
  dispatch(setIsLogin(access_token, decodedToken));
  setLocalToken(access_token);
  setLocalRefreshToken(refresh_token);
  localStorage.setItem("login", true);
};

export const logout = async (dispatch) => {
  const access_token = getLocalToken();
  // auth.defaults.headers["Authorization"] = `Bearer ${token}`;
  out.interceptors.request.use((config) => {
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  });
  await out.post("/logout");
  dispatch(setLogout());
  localStorage.clear();
};
