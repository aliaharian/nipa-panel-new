import { usersSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: usersSliceModel = {
  mobile: null,
  login: null,
  roles: [],
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
    setUserLogin: (state, action: PayloadAction<any | null | undefined>) => {
      state.login = action.payload;
      // console.log("login", action.payload);
      localStorage.setItem("nipa_token", action.payload.token || "");
    },
    getRolesList: (state, action: PayloadAction<any | undefined>) => {
      state.roles = action.payload;
    },
  },
});

export default userSlice;
