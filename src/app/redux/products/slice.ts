import { productsSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: productsSliceModel = {
  products: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialUserState,
  reducers: {
    productsList: (state, action: PayloadAction<any | undefined>) => {
      state.products = action.payload;
    },
  },
});

export default productSlice;
