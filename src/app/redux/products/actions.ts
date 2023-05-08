import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "app/redux/store";
import productSlice from "./slice";

const productActions = productSlice.actions;

export const productsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.productsList();
    console.log(response);
    dispatch(productActions.productsList(response));
  };
};
