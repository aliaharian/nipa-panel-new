import { FormTypes } from "@/app/models/form";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialUserState: FormTypes = {
  formFieldTypes: null,
};

const formSlice = createSlice({
  name: "forms",
  initialState: initialUserState,
  reducers: {
    getFormFieldTypes: (state, action: PayloadAction<any | undefined>) => {
      state.formFieldTypes = action.payload;
    },
  },
});

export default formSlice;
