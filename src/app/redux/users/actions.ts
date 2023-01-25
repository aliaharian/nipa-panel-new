import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import userSlice from "./slice";
import { confirmCodeFormInitialValues, sendCodeFormInitialValues } from "../../models/auth";

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
