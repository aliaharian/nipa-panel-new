import { ordersSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: ordersSliceModel = {
  orders: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialUserState,
  reducers: {
    ordersList: (state, action: PayloadAction<any | undefined>) => {
      state.orders = action.payload;
    },
  },
});

export default orderSlice;
