import { walletSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialWalletState: walletSliceModel = {
  transactions: null,
  transactionsListLoading: false,
  transactionStatuses:null
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWalletState,
  reducers: {
    transactionsList: (state, action: PayloadAction<any | undefined>) => {
      state.transactions = action.payload;
      state.transactionsListLoading = false;
    },
    transactionsListLoading: (state, action: PayloadAction<boolean>) => {
      state.transactionsListLoading = action.payload;
    },
    getTransactionStatuses:(state, action: PayloadAction<any[]>) => {
      state.transactionStatuses = action.payload;
    },

  },
});

export default walletSlice;
