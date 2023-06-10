import { basicDatasSliceModel } from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: basicDatasSliceModel = {
  basicDatas: null
};

const basicDataSlice = createSlice({
  name: "basicDatas",
  initialState: initialUserState,
  reducers: {
    basicDatasList: (state, action: PayloadAction<any | undefined>) => {
      state.basicDatas = action.payload;
    },
  },
});

export default basicDataSlice;
