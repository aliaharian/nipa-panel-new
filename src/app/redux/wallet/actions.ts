import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import walletService from "./service";
import { RootState } from "app/redux/store";
import walletSlice from "./slice";

const walletactions = walletSlice.actions;

export const transactionsList = (page:number): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await walletService.transactionsList(page);
    dispatch(walletactions.transactionsList(response));
  };
};

