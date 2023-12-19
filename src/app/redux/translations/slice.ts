import { translationsSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: translationsSliceModel = {
  keywords: null,
  languages: null,
  saveSuccess: true
};

const translationSlice = createSlice({
  name: "translations",
  initialState: initialUserState,
  reducers: {
    keywordsList: (state, action: PayloadAction<any | undefined>) => {
      state.keywords = action.payload;
    },
    languagesList: (state, action: PayloadAction<any | undefined>) => {
      state.languages = action.payload;
    },
    saveSuccess: (state, action: PayloadAction<boolean>) => {
      state.saveSuccess = action.payload;
    }

  },
});

export default translationSlice;
