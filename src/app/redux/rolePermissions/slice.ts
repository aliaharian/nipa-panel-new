import { rolePermissionSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: rolePermissionSliceModel = {
  roles: null,
  permissions:null
};

const rolePermissionSlice = createSlice({
  name: "rolePermissions",
  initialState: initialUserState,
  reducers: {
    rolesList: (state, action: PayloadAction<any | undefined>) => {
      state.roles = action.payload;
    },
    permissionsList: (state, action: PayloadAction<any | undefined>) => {
      state.permissions = action.payload;
    },
  },
});

export default rolePermissionSlice;
