import axios, { AxiosRequestConfig } from "axios";
import { setApiLoading } from "../redux/app/actions";
import store from "../redux/store";
// import SnackbarUtils from "../utils/SnackbarUtils";

const Api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "")
      ? {
          "Content-Type": "application/json",
          Accept: "application/json",
          // site: process.env.REACT_APP_SITE_CODE || "",
          authorization:
            "Bearer " +
            localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || ""),
        }
      : {
          "Content-Type": "application/json",
          Accept: "application/json",
          // site: process.env.REACT_APP_SITE_CODE || "",
        },
  });

  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      console.log("req sent");
      store.dispatch(setApiLoading(true));
      return config;
    },
    function (error) {
      // Do something with request error

      store.dispatch(setApiLoading(false));
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      store.dispatch(setApiLoading(false));
      return response;
    },
    function (error) {
      // Do something with response error

      // SnackbarUtils.error(
      //   error.response.data.message || error.response.data.msg
      // );
      store.dispatch(setApiLoading(false));
      return Promise.reject(error);
    }
  );
  return instance;
};
export default Api;
