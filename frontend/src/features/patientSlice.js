import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  error: null,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    setPatientData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    updatePatientData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.error = null;
    },
    setPatientError: (state, action) => {
      state.error = action.payload;
    },
    clearPatientData: (state) => {
      state.data = null;
      state.error = null;
    },
  },
});

export const { setPatientData, updatePatientData, setPatientError, clearPatientData } = patientSlice.actions;
export default patientSlice.reducer;
