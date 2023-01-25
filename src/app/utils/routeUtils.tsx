import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { middlewareModel } from "../models/router";
import store from "../redux/store";

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
  const userPermissions = store.getState().users.userInfo?.permissions;
  if (userPermissions?.find((perm) => perm.slug === permission)) {
    return <Outlet />;
  } else {
    return <p>denied</p>;
    // return <Navigate to="/access-denied" />;
  }
};
