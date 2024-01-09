import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import financialService from "./service";
import { RootState } from "app/redux/store";
import financialSlice from "./slice";

const financialActions = financialSlice.actions;



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
