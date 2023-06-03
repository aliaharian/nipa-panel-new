import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import formSlice from "./slice";
import { RootState } from "../store";
import formService from "./service";

const formActions = formSlice.actions;

export const getFormFieldTypes = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await formService.getFormFieldTypes();
    dispatch(formActions.getFormFieldTypes(response));
  };
};
