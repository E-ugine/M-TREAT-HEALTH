import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientData } from "../services/Api";

export default function Dashboard() {
  const { data, error } = useSelector((state) => state.patient); // Get patient data from Redux
  const { token } = useSelector((state) => state.auth); // Get authentication token from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !data) {
      dispatch(fetchPatientData(token)); // Fetch patient data if not already in Redux
    }
  }, [dispatch, token, data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Welcome, {data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button
        className="mt-4 rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-600"
        onClick={() => (window.location.href = "/patient-update")}
      >
        Edit Details
      </button>
    </div>
  );
}
