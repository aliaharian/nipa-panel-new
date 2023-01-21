import {
  countryModel,
  roleModel,
  userModel,
  usersSliceModel,
  contactModel,
} from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersResponseModel } from "../../../app/models/user";

const initialUserState: usersSliceModel = {
  userInfo: undefined,
  rolesList: undefined,
  countriesList: undefined,
  usersListResponse: undefined,
  contacts: [],
  dialogs: [],
  messages: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<userModel>) => {
      state.userInfo = action.payload;
    },
    setContacts: (state, action: PayloadAction<contactModel[]>) => {
      state.contacts = action.payload;
      localStorage.setItem(
        process.env.REACT_APP_LOCALSTORAGE_CONTACTS || "",
        JSON.stringify(action.payload)
      );
    },
    setDialogs: (state, action: PayloadAction<any[]>) => {
      state.dialogs = action.payload;
    },
    setMessages: (state, action: PayloadAction<any[]>) => {
      state.messages = action.payload;
    },
    getRolesList: (state, action: PayloadAction<roleModel[]>) => {
      state.rolesList = action.payload;
    },
    getUsersList: (state, action: PayloadAction<usersResponseModel>) => {
      state.usersListResponse =
        action.payload.current_page > 1 && state.usersListResponse
          ? {
              ...action.payload,
              data: [...state.usersListResponse.data, ...action.payload.data],
            }
          : action.payload;
    },
    getCountriesList: (state, action: PayloadAction<countryModel[]>) => {
      state.countriesList = action.payload;
    },
  },
});

export default userSlice;
