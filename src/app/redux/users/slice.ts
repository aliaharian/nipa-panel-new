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
  mobile: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    setUserMobile: (
      state,
      action: PayloadAction<string | null | undefined>
    ) => {
      state.mobile = action.payload;
    },
  },
});

export default userSlice;
