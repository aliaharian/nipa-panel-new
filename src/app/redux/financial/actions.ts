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
    dispatch(financialActions.invoicesListLoading(true));
    const response = await financialService.invoicesList(page, filters || prevFilters);
    dispatch(financialActions.invoicesList(response));
  };
};

export const getFactorStatuses = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await financialService.getFactorStatuses();
    dispatch(financialActions.getFactorStatuses(response));
  };
};
