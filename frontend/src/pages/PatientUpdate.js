import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePatientData, fetchPatientData } from "../services/Api";
import { useNavigate } from "react-router-dom";

export default function PatientUpdate() {
  const { data, loading } = useSelector((state) => state.patient); 
  const { token } = useSelector((state) => state.auth); 
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || "",
        phone: data.phone || "",
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Retrieve token from localStorage
    const savedToken = token || localStorage.getItem("token"); 
    if (!savedToken) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }

    try {
      await dispatch(updatePatientData({ formData, token: savedToken })).unwrap();
      await dispatch(fetchPatientData(savedToken));
      alert("Details updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Update failed:", error);
      alert(error.message || "Failed to update details. Please try again.");
    }
  };

  const handleBackToDashboard = async () => {
    const savedToken = token || localStorage.getItem("token");
    if (!savedToken) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }

    try {
      await dispatch(fetchPatientData(savedToken));
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to fetch patient data:", error);
      alert("Failed to fetch patient data. Please try again.");
    }
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="px-6 py-8 md:px-8 md:py-10">
                <div className="text-center">
                  <h4 className="mb-6 text-xl font-semibold">Update Details</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600"
                  >
                    Update
                  </button>
                </form>
              </div>
              <div className="text-center mt-4">
                <button
                  className="text-sm text-indigo-500 underline hover:text-indigo-700"
                  onClick={handleBackToDashboard}
                  disabled={loading}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
