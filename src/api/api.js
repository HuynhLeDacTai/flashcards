import axios from "axios";
import { BASE_URL } from "../http/paths";
import {
  getLocalRefreshToken,
  getLocalToken,
  setLocalToken,
} from "../utils/apiUtils";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    const status = err.response.status;

    if (
      originalConfig.url !== "/auth/authenticate" &&
      (status === 401 || status === 403)
    ) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/auth/refresh-token", {
            refreshToken: getLocalRefreshToken,
          });
          const accessToken = rs.data.access_token;
          if (accessToken) {
            setLocalToken(accessToken);
          }
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    if (!getLocalToken()) {
      return Promise.reject(err);
    }
  }
);
export default instance;
