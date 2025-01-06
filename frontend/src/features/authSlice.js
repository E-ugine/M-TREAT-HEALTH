import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, isAuthenticated: false, error: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, clearAuth, setAuthError } = authSlice.actions;
export default authSlice.reducer;