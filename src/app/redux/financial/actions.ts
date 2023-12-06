import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import financialService from "./service";
import { RootState } from "app/redux/store";
import financialSlice from "./slice";

const financialActions = financialSlice.actions;

export const invoicesList = (page: number, filters?: any): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    // console.log("values", page, filters)
    const prevFilters = getState().financial.invoices?.filters;
    dispatch(financialActions.transactionsListLoading(true));
    const response = await financialService.invoicesList(page, filters || prevFilters);
    dispatch(financialActions.transactionsList(response));
  };
};

