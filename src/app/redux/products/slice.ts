import { productsSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: productsSliceModel = {
  products: null,
  saveSuccess: false,
  deleteSuccess: false,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialUserState,
  reducers: {
    productsList: (state, action: PayloadAction<any | undefined>) => {
      state.products = action.payload;
    },
    saveProduct: (state, action: PayloadAction<any | undefined>) => {
      state.products = [...state.products, action.payload];
      state.saveSuccess = true;
    },
    setSaveSuccess: (state, action: PayloadAction<boolean>) => {
      state.saveSuccess = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<any | undefined>) => {
      console.log("action.payload", action.payload);
      console.log("prodddddd", state.products);
      state.products = state.products.filter(
        (product: any) => product.id !== action.payload.product.id
      );
      state.deleteSuccess = true;
    },
    setDeleteSuccess: (state, action: PayloadAction<boolean>) => {
      state.deleteSuccess = action.payload;
    },
  },
});

export default productSlice;
