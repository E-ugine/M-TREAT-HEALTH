import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerPatient } from "../services/Api";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await dispatch(registerPatient(formData)).unwrap();
      alert("Signup successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      alert(error?.message || "An error occurred during signup. Please try again.");
      console.error("Signup error:", error);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <section className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Sign Up for M-TREAT
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6">
          Fill in the details below to create your account
        </p>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label
                htmlFor={key}
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
              </label>
              <input
                type={key.includes("password") ? "password" : "text"}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
