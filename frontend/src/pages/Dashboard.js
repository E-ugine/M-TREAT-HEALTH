import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientData } from "../services/Api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const { data, error } = useSelector((state) => state.patient);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !data) {
      dispatch(fetchPatientData(token));
    }
  }, [dispatch, token, data]);

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-lg text-red-500">Error: {error}</div>
      </div>
    );
  }

  const mockHealthMetrics = [
    { name: "Jan", value: 75 },
    { name: "Feb", value: 80 },
    { name: "Mar", value: 78 },
    { name: "Apr", value: 85 },
    { name: "May", value: 90 },
  ];

  const mockGoals = [
    { title: "Exercise Regularly", progress: 70 },
    { title: "Maintain Healthy Diet", progress: 50 },
    { title: "Get 8 Hours of Sleep", progress: 80 },
  ];

  const mockAppointments = [
    { date: "2025-01-15", time: "10:00 AM", description: "Follow-up Checkup" },
    { date: "2025-01-22", time: "2:00 PM", description: "Dental Cleaning" },
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8 relative">
      {/* Logout Button */}
      <button
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        onClick={handleLogout}
      >
        Logout
      </button>

      {/* Header */}
      <header className="flex items-center space-x-4 mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome, {data.name}!
        </h1>
      </header>

      {/* Patient Details */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient Details</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-medium">Name:</span> {data.name}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {data.email}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> {data.phone}
          </p>
        </div>
        <button
          className="mt-6 w-full rounded-md bg-indigo-500 py-3 text-sm font-medium text-white hover:bg-indigo-600 transition"
          onClick={() => (window.location.href = "/patient-update")}
        >
          Edit Details
        </button>
      </section>

      {/* Metrics Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Metrics</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={mockHealthMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Health Goals */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Goals</h2>
        <ul className="space-y-4">
          {mockGoals.map((goal, index) => (
            <li key={index}>
              <p className="text-gray-700 font-medium">{goal.title}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-indigo-500 h-4 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Appointments Section */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments</h2>
        <ul className="space-y-4">
          {mockAppointments.map((appointment, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-700">
                  {appointment.description}
                </p>
                <p className="text-sm text-gray-500">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Notifications */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
        <ul className="space-y-4">
          <li className="text-red-500 font-medium">
            Missed appointment: "Annual Physical Checkup" on 2025-01-10
          </li>
          <li className="text-yellow-500 font-medium">
            Reminder: Take medication "Vitamin D" today at 8:00 PM
          </li>
        </ul>
      </section>
    </div>
  );
}
