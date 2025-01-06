import { createSlice } from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: { data: null },
  reducers: {
    setPatientData: (state, action) => {
      state.data = action.payload;
    },
    updatePatientData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setPatientData, updatePatientData } = patientSlice.actions;
export default patientSlice.reducer;
