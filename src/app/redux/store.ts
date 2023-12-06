import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./application/slice";
import orderSlice from "./orders/slice";

import userSlice from "./users/slice";
import productSlice from "./products/slice";
import formSlice from "./forms/slice";
import basicDataSlice from "./basicData/slice";
import rolePermissionSlice from "./rolePermissions/slice";
import walletSlice from "./wallet/slice";
import financialSlice from "./financial/slice";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    app: appSlice.reducer,
    orders: orderSlice.reducer,
    products: productSlice.reducer,
    forms: formSlice.reducer,
    basicData: basicDataSlice.reducer,
    rolePermissions: rolePermissionSlice.reducer,
    wallet:walletSlice.reducer,
    financial: financialSlice.reducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
