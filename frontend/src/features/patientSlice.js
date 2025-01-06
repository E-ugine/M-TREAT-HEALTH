import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { data: null, error: null },
  reducers: {
    setPatientData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    updatePatientData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setPatientError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPatientData, updatePatientData, setPatientError } = patientSlice.actions;
export default patientSlice.reducer;
