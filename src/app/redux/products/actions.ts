import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import productService from "./service";
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
    const response = await productService.productsList();
    dispatch(productActions.productsList(response));
  };
};

export const productStepsList = (
  code: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await productService.productStepsList(code);
    dispatch(productActions.productStepsList(response));
  };
};
export const getProductStepInfo = (
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (id === 0) return dispatch(productActions.productStepInfo(null));
    const response = await productService.productStepInfo(id);
    dispatch(productActions.productStepInfo(response));
  };
};

export const saveProduct = (
  product: Product
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await productService.saveProduct(product);
    dispatch(productActions.saveProduct(response));
  };
};
export const updateProduct = (
  productId: number,
  product: Product
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await productService.updateProduct(productId, product);
    dispatch(productActions.updateProduct(response));
    dispatch(productsList());
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
    const response = await productService.deleteProduct(id);
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
