import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { middlewareModel } from "../models/router";
import store from "../redux/store";
import userService from "../redux/users/service";
export const PrivateRoute = () => {
  const token = localStorage.getItem("nipa_token" || "");

  // console.log("auth", auth);
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export const PublicRoute = () => {
  const token = localStorage.getItem("nipa_token" || "");
  // const userInfoState = store.getState().users.userInfo;
  // const userInfoStorage = localStorage.getItem(
  //   process.env.REACT_APP_USER_STORAGE || ""
  // );

  if (!token) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export const MiddlewareRoute = ({ permission }: middlewareModel) => {
  let userPermissions =
    store.getState().users.userInfo?.permissions ||
    JSON.parse(localStorage.getItem("nipa_user") || "{}")?.permissions;

  if (userPermissions?.find((perm: any) => perm.slug === permission)) {
    return <Outlet />;
  } else {
    return <p>denied</p>;
    // return <Navigate to="/access-denied" />;
  }
};
