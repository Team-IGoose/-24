import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  token: null,
  state: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.token = action.payload.accessToken;
    },
    clearAuth: (state) => {
      state.isAuth = false;
      state.token = null;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { setIsAuth, clearAuth, setState } = authSlice.actions;

export default authSlice.reducer;
