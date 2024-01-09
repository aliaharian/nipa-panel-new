import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import walletService from "./service";
import { RootState } from "app/redux/store";
import walletSlice from "./slice";

const walletActions = walletSlice.actions;


export const getTransactionStatuses = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await walletService.getTransactionStatuses();
    dispatch(walletActions.getTransactionStatuses(response));
  };
};

