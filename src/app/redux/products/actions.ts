import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "app/redux/store";
import productSlice from "./slice";
import { Product } from "app/models/product";

const productActions = productSlice.actions;

export const productsList = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.productsList();
    console.log(response);
    dispatch(productActions.productsList(response));
  };
};

export const saveProduct = (
  product: Product
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.saveProduct(product);
    console.log(response);
    dispatch(productActions.saveProduct(response));
  };
};

export const setSaveSuccess = (
  success: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(productActions.setSaveSuccess(success));
  };
};

//delete product
export const deleteProduct = (
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.deleteProduct(id);
    console.log(response);
    dispatch(productActions.deleteProduct(response));
  };
};

export const setDeleteSuccess = (
  success: boolean
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(productActions.setDeleteSuccess(success));
  };
};
