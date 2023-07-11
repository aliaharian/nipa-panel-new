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
      localStorage.setItem("nipa_token", action.payload.token || "");
      localStorage.setItem(
        "nipa_user",
        JSON.stringify(action.payload.user) || ""
      );
    },
    getRolesList: (state, action: PayloadAction<any | undefined>) => {
      state.roles = action.payload;
    },
    getUserInfo: (state, action: PayloadAction<any | undefined>) => {
      state.login = action.payload;
    },
    logout: (state) => {
      state.login = null;
      state.mobile = null;
      state.roles = [];
      localStorage.removeItem("nipa_token");
      localStorage.removeItem("nipa_user");
      window.location.reload();
    },
  },
});

export default userSlice;
