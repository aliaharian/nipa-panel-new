import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { middlewareModel } from "../models/router";
import store from "../redux/store";

export const PrivateRoute = () => {

  const auth = 1
  // console.log("auth", auth);
  if (auth) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export const PublicRoute = () => {
  // const token = localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "");
  // const userInfoState = store.getState().users.userInfo;
  // const userInfoStorage = localStorage.getItem(
  //   process.env.REACT_APP_USER_STORAGE || ""
  // );

  // if (!token || (!userInfoState && !userInfoStorage)) {
    return <Outlet />;
  // } else {
  //   return <Navigate to="/dashboard" />;
  // }
};

export const MiddlewareRoute = ({ permission }: middlewareModel) => {
  const userPermissions = store.getState().users.userInfo?.permissions;
  if (userPermissions?.find((perm) => perm.slug === permission)) {
    return <Outlet />;
  } else {
    return <p>denied</p>;
    // return <Navigate to="/access-denied" />;
  }
};
