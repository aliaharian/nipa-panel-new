import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import productService from "./service";
import { RootState } from "app/redux/store";
import walletSlice from "./slice";

const walletactions = walletSlice.actions;

export const transactionsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await productService.transactionsList();
    dispatch(walletactions.transactionsList(response));
  };
};

