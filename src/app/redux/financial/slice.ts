import { financialSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialWalletState: financialSliceModel = {
  invoices: null,
  invoicesListLoading: false,
  factorStatuses: null
};

const financialSlice = createSlice({
  name: "financial",
  initialState: initialWalletState,
  reducers: {
    getFactorStatuses: (state, action: PayloadAction<any[]>) => {
      state.factorStatuses = action.payload;
    },
  },
});

export default financialSlice;
