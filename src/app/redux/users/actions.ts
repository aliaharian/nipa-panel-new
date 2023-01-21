import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import userSlice from "./slice";
import { sendCodeFormInitialValues } from "../../models/auth";

const userActions = userSlice.actions;

export const sendOtp = (
  credentials: sendCodeFormInitialValues
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.sendOtp(credentials);
    // localStorage.setItem(
    //   process.env.REACT_APP_AUTH_STORAGE || "",
    //   JSON.stringify(response.data.token).replaceAll('"', "")
    // );
    console.log(response.data);
    dispatch(userActions.setUserMobile(credentials.mobile));
    
    // localStorage.setItem(
    //   process.env.REACT_APP_USER_STORAGE || "",
    //   JSON.stringify(response.data.user)
    // );
    // window.location.reload();
    // console.log(response);
  };
};
