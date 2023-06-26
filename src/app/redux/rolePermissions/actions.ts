import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import rolePermissionService from "./service";
import { RootState } from "app/redux/store";
import rolePermissionSlice from "./slice";

const rolePermissionActions = rolePermissionSlice.actions;

export const rolesList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await rolePermissionService.rolesList();
    dispatch(rolePermissionActions.rolesList(response));
  };
};
