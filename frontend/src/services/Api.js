import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', 
  headers: { 'Content-Type': 'application/json' },
});

// Auth APIs
export const registerPatient = (data) => api.post('auth/register/', data);
export const loginPatient = (data) => api.post('auth/login/', data);
export const fetchPatientData = (token) =>
  api.get('patient/', { headers: { Authorization: `Token ${token}` } });
export const updatePatientData = (data, token) =>
  api.put('patient/', data, { headers: { Authorization: `Token ${token}` } });

export default api;
