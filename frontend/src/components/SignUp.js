import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    dispatch(registerPatient(formData));
    
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="px-6 py-8 md:px-8 md:py-10">
                <div className="text-center">
                  <h4 className="mb-6 text-xl font-semibold">Sign Up for M-TREAT</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <p className="mb-4 text-center">Fill in the details below to create your account</p>
                  {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4">
                      <label
                        htmlFor={key}
                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-neutral-200"
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
                        className="w-full rounded-md border p-2 text-sm focus:ring-indigo-500 dark:bg-neutral-800"
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-600"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-indigo-500 underline hover:text-indigo-700"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
