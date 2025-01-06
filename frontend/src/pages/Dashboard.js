import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientData } from "../services/Api";
import { setPatientData } from "../features/patientSlice";

export default function Dashboard() {
  const { data } = useSelector((state) => state.patient);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchPatientData(token);
        dispatch(setPatientData(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [dispatch, token]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Welcome, {data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button
        className="mt-4 rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-600"
        onClick={() => window.location.href = "/update-patient"}
      >
        Edit Details
      </button>
    </div>
  );
}