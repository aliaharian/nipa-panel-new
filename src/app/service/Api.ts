import axios, { AxiosRequestConfig } from "axios";
import { setApiLoading } from "../redux/application/actions";
import store from "../redux/store";
import SnackbarUtils from "../utils/SnackbarUtils";
// import SnackbarUtils from "../utils/SnackbarUtils";
import { redirect } from "react-router-dom";

const Api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: localStorage.getItem("nipa_token")
      ? {
        "Content-Type": "application/json",
        Accept: "application/json",
        language: localStorage.getItem(process.env.REACT_APP_LANG_STORAGE_KEY||"") || "fa",
        // site: process.env.REACT_APP_SITE_CODE || "",
        authorization: "Bearer " + localStorage.getItem("nipa_token"),
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
      // console.warn(
      //   "qwerty",
      //   error.response.data.message || error.response.data.msg
      // );
      // console.log("error.response", error.response);
      if (error.response.status == 401) {
        // localStorage.removeItem("nipa_token")
        // document.location.href="/auth/login"
      }
      if (error.response.status == 403) {
        // alert("oocmcs")
        //  redirect("/403")
        document.location.href = "/errors/403"

      }

      if (error.response.data.errors) {
        //map errors object
        const errors = Object.keys(error.response.data.errors).map((key) => {
          return error.response.data.errors[key];
        });
        //show errors
        errors.forEach((error) => {
          SnackbarUtils.error(error);
        });
      } else {
        console.log('err', error.response)
        SnackbarUtils.error(
          error.response.data.message || error.response.data.msg || error.response.data.error
        );
      }
      store.dispatch(setApiLoading(false));
      return Promise.reject(error);
    }
  );
  return instance;
};
export default Api;
