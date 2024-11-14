import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
