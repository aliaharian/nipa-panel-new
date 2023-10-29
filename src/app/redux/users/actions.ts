import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import userSlice from "./slice";
import {
  confirmCodeFormInitialValues,
  sendCodeFormInitialValues,
} from "../../models/auth";

const userActions = userSlice.actions;

export const sendOtp = (
  credentials: sendCodeFormInitialValues
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.sendOtp(credentials);
    console.log(response.data);
    dispatch(userActions.setUserMobile(credentials.mobile));
  };
};

export const confirmOtp = (
  credentials: confirmCodeFormInitialValues
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.confirmOtp(credentials);
    console.log(response.data);
    dispatch(userActions.setUserLogin(response));
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
    console.log(response);
    dispatch(userActions.getRolesList(response));
  };
};
export const getCustomersList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getCustomersList();
    dispatch(userActions.getCustomersList(response.customers));
  };
};

export const getUserInfo = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getUserInfo();
    console.log(response);
    dispatch(userActions.getUserInfo(response));
  };
};

export const logout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.logout());
  };
};
