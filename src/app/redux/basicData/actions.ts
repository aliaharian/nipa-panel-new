import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import basicDataService from "./service";
import { RootState } from "app/redux/store";
import basicDataSlice from "./slice";

const basicDataActions = basicDataSlice.actions;

export const basicDatasList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await basicDataService.basicDatasList();
    dispatch(basicDataActions.basicDatasList(response));
  };
};

