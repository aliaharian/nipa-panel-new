import { rolePermissionSliceModel } from "../../../app/models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: rolePermissionSliceModel = {
  roles: null,
};

const rolePermissionSlice = createSlice({
  name: "rolePermissions",
  initialState: initialUserState,
  reducers: {
    rolesList: (state, action: PayloadAction<any | undefined>) => {
      state.roles = action.payload;
    },
  },
});

export default rolePermissionSlice;
