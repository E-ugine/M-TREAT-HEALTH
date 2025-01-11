import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPatient } from "../services/Api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginPatient(formData));
      alert("Login successful! Redirecting to your dashboard...");
      navigate("/dashboard");
    } catch (error) {
      alert(error?.message || "Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <section className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Welcome Back to M-TREAT
        </h2>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6">
          Please log in to your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <a
            href="/"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
          >
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
