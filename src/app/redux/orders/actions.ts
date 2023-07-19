import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import orderService from "./service";
import { RootState } from "../store";
import orderSlice from "./slice";

const orderActions = orderSlice.actions;

export const ordersList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await orderService.ordersList();
    console.log(response);
    dispatch(orderActions.ordersList(response));
  };
};

export const orderGroupsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await orderService.orderGroupsList();
    console.log(response);
    dispatch(orderActions.orderGroupsList(response));
  };
};
