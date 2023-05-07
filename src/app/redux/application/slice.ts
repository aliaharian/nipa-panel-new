import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appSliceModel } from "../../models/redux-models";

const initialAppState: appSliceModel = {
  apiLoading: false,
  collapseMenu:false
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setApiLoading: (state, action: PayloadAction<boolean>) => {
      state.apiLoading = action.payload;
    },
    setCollapseMenu: (state, action: PayloadAction<boolean>) => {
      state.collapseMenu = action.payload;
    },
  },
});

export default appSlice;
