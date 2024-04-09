import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import appSlice from "./slice";

const appActions = appSlice.actions;

export const setApiLoading = (
  loading: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(appActions.setApiLoading(loading));
  };
};

export const setCollapseMenu = (
  open: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(appActions.setCollapseMenu(open));
  };
};

export const setOpenMenu = (
  open: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(appActions.setOpenMenu(open));
  };
};
