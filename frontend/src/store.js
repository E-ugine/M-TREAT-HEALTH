import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import authReducer from './features/authSlice';
import patientReducer from './features/patientSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
