import axios from "axios";
import { setAuthError, setToken } from "../features/authSlice";
import { setPatientData, setPatientError } from "../features/patientSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Create the Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: { "Content-Type": "application/json" },
});

// Redux Thunk: Register Patient
export const registerPatient = createAsyncThunk(
  "auth/registerPatient",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("auth/register/", data);
      return response.data; // Return the API response on success
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message); // Return error with rejectWithValue
    }
  }
);

// Redux Thunk: Login Patient
export const loginPatient = (data) => async (dispatch) => {
  try {
    console.log("Logging in with data:", data); 
    const response = await api.post("auth/login/", data);
    console.log("Login response:", response.data); 
    dispatch(setToken(response.data.token));
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message); 
    dispatch(setAuthError(error.response?.data?.message || "Login failed"));
  }
};

// Redux Thunk: Fetch Patient Data
export const fetchPatientData = (token) => async (dispatch) => {
  try {
    console.log("Fetching patient data with token:", token); 
    const response = await api.get("patient/", {
      headers: { Authorization: `Token ${token}` },
    });
    console.log("Fetch patient response:", response.data); 
    dispatch(setPatientData(response.data));
  } catch (error) {
    console.error("Fetch patient data error:", error.response?.data || error.message); 
    dispatch(setPatientError(error.response?.data?.message || "Failed to fetch patient data"));
  }
};

// Redux Thunk: Update Patient Data
export const updatePatientData = (data, token) => async (dispatch) => {
  try {
    console.log("Updating patient data:", data); 
    const response = await api.put("patient/", data, {
      headers: { Authorization: `Token ${token}` },
    });
    console.log("Update response:", response.data); 
    dispatch(setPatientData(response.data));
  } catch (error) {
    console.error("Update patient data error:", error.response?.data || error.message); 
    dispatch(setPatientError(error.response?.data?.message || "Failed to update patient data"));
  }
};

export default api;
