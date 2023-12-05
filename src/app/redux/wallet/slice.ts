import { walletSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialWalletState: walletSliceModel = {
  transactions: null,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWalletState,
  reducers: {
    transactionsList: (state, action: PayloadAction<any | undefined>) => {
      state.transactions = action.payload;
    },


  },
});

export default walletSlice;
