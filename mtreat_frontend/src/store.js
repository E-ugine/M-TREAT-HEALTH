import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import patientReducer from './features/patientSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
});

export default store;
