import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePatientData } from '../services/Api';
import { updatePatientData as updatePatientSlice } from '../features/patientSlice';
import { useNavigate } from 'react-router-dom';

export default function UpdatePatient() {
  const { data } = useSelector((state) => state.patient); // Get current patient data from Redux
  const { token } = useSelector((state) => state.auth); // Get authentication token from Redux
  const [formData, setFormData] = useState({ name: '', phone: '' }); // Local state for form data
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Populate the form with existing patient data
  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        phone: data.phone || '',
      });
    }
  }, [data]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePatientData(formData, token); // Call API to update patient data
      dispatch(updatePatientSlice(response.data)); // Update Redux state with new data
      alert('Details updated successfully!');
      navigate('/dashboard'); // Redirect to the dashboard after successful update
    } catch (error) {
      console.error(error);
      alert('Failed to update details. Please try again.');
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
                  {/* Name Input */}
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

                  {/* Phone Input */}
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

                  {/* Submit Button */}
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
                  onClick={() => navigate('/dashboard')}
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
