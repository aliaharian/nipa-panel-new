import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import walletService from "./service";
import { RootState } from "app/redux/store";
import walletSlice from "./slice";

const walletActions = walletSlice.actions;

export const transactionsList = (page: number, filters?: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    // console.log("values", page, filters)
    const prevFilters = getState().wallet.transactions?.filters;
    dispatch(walletActions.transactionsListLoading(true));
    const response = await walletService.transactionsList(page, filters || prevFilters);
    dispatch(walletActions.transactionsList(response));
  };
};

