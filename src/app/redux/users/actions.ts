import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import userSlice from "./slice";
import { LoginFormInitialValues } from "../../models/auth";
import { userModel } from "../../models/redux-models";
import { userFilterModel } from "../../models/user";
import SnackbarUtils from "../../utils/SnackbarUtils";


const userActions = userSlice.actions;
export const login = (
  credentials: LoginFormInitialValues
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.login(credentials);
    SnackbarUtils.success("logged in successfully");
    localStorage.setItem(
      process.env.REACT_APP_AUTH_STORAGE || "",
      JSON.stringify(response.data.token).replaceAll('"', "")
    );
    dispatch(userActions.setUserInfo(response.data.user));
    localStorage.setItem(
      process.env.REACT_APP_USER_STORAGE || "",
      JSON.stringify(response.data.user)
    );
    window.location.reload();
    // console.log(response);
  };
};

export const setUserInfo = (
  userInfo: userModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setUserInfo(userInfo));
  };
};

export const getRolesList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getRolesList();
    dispatch(userActions.getRolesList(response.data));
  };
};
export const getUsersList = ({
  search,
  page,
  role,
  status,
  country,
}: userFilterModel): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.getUsersList({
      search,
      page,
      role,
      status,
      country,
    });
    dispatch(userActions.getUsersList(response.data));
  };
};

export const deleteUser = (
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.deleteUser(id);
    dispatch(getUsersList({}));
  };
};

export const getCountriesList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getCountriesList();
    dispatch(userActions.getCountriesList(response.data));
  };
};

export const setContacts = (
  data: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setContacts(data));
  };
};

export const setDialogs = (
  data: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setDialogs(data));
  };
};

export const setMessages = (
  data: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setMessages(data));
  };
};
