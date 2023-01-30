import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import orderSlice from "./slice";

const userActions = orderSlice.actions;

export const ordersList = (
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.ordersList();
    console.log(response);
    dispatch(userActions.ordersList(response));
  };
};

