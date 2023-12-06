import { financialSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialWalletState: financialSliceModel = {
  invoices: null,
  invoicesListLoading: false,
};

const financialSlice = createSlice({
  name: "financial",
  initialState: initialWalletState,
  reducers: {
    transactionsList: (state, action: PayloadAction<any | undefined>) => {
      state.invoices = action.payload;
      state.invoicesListLoading = false;
    },
    transactionsListLoading: (state, action: PayloadAction<boolean>) => {
      state.invoicesListLoading = action.payload;
    },

  },
});

export default financialSlice;
