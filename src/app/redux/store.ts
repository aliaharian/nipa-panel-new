import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./app/slice";
import orderSlice from "./orders/slice";

import userSlice from "./users/slice";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    app: appSlice.reducer,
    orders: orderSlice.reducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
