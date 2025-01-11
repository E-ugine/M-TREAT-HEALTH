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
      console.error("Register error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Redux Thunk: Login Patient
export const loginPatient = (data) => async (dispatch) => {
  try {
    const response = await api.post("auth/login/", data);
    dispatch(setToken(response.data.token));
    localStorage.setItem("token", response.data.token); // Save token to localStorage
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    dispatch(
      setAuthError(error.response?.data?.message || "Login failed. Please check your credentials.")
    );
  }
};

// Redux Thunk: Fetch Patient Data
export const fetchPatientData = (token) => async (dispatch) => {
  if (!token) {
    console.warn("Token is missing for fetchPatientData");
    dispatch(setPatientError("No token provided. Please log in again."));
    return;
  }

  try {
    const response = await api.get("patient/", {
      headers: { Authorization: `Token ${token}` },
    });
    dispatch(setPatientData(response.data));
  } catch (error) {
    console.error("Fetch patient data error:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      dispatch(setAuthError("Session expired. Please log in again."));
    } else {
      dispatch(setPatientError(error.response?.data?.message || "Failed to fetch patient data"));
    }
  }
};

// Redux Thunk: Update Patient Data
export const updatePatientData = createAsyncThunk(
  "patient/update",
  async ({ formData, token }, { rejectWithValue }) => {
    if (!token) {
      return rejectWithValue("No token provided. Please log in again.");
    }

    try {
      const response = await api.put("patient/", formData, {
        headers: { Authorization: `Token ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Update patient data error:", error.response?.data || error.message);
      if (error.response?.status === 401) {
        return rejectWithValue("Session expired. Please log in again.");
      }
      return rejectWithValue(error.response?.data || "Failed to update patient data.");
    }
  }
);

export default api;
