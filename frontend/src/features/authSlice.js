import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,  // Initialize token from localStorage
  isAuthenticated: false,  // This will be set based on token existence
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', action.payload);  // Store token in localStorage
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');  // Remove token from localStorage
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;  // Invalidate authentication on error
      state.token = null;  // Clear token on error
      localStorage.removeItem('token');  // Remove token from localStorage
    },
  },
});

export const { setToken, clearAuth, setAuthError } = authSlice.actions;
export default authSlice.reducer;
