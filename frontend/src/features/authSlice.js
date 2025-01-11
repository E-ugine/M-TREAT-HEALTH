import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initialize token from localStorage
  token: localStorage.getItem('token') || null, 
  isAuthenticated: false,  
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
       // Store token in localStorage
      localStorage.setItem('token', action.payload); 
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      // Remove token from localStorage
      localStorage.removeItem('token');  
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;  
      state.token = null; 
      localStorage.removeItem('token');  
    },
  },
});

export const { setToken, clearAuth, setAuthError } = authSlice.actions;
export default authSlice.reducer;
