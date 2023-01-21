import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userSlice from "./users/slice";
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
