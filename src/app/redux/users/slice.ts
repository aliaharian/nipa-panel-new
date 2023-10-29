import { usersSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: usersSliceModel = {
  mobile: null,
  login: null,
  roles: [],
  permissions: [],
  customers: undefined,
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
      state.permissions = action.payload.user.permissions;
      state.roles = action.payload.user.roles;
    },
    getRolesList: (state, action: PayloadAction<any | undefined>) => {
      state.roles = action.payload;
    },
    getUserInfo: (state, action: PayloadAction<any | undefined>) => {
      state.login = action.payload;
    },
    getCustomersList: (state, action: PayloadAction<any | undefined>) => {
      state.customers = action.payload;
    },
    logout: (state) => {
      state.login = null;
      state.mobile = null;
      state.roles = [];
      state.permissions = [];
      localStorage.removeItem("nipa_token");
      localStorage.removeItem("nipa_user");
      window.location.reload();
    },
  },
});

export default userSlice;
