// src/components/Login.js
import React from 'react';

const Login = () => {
  // Add your login form fields here
  return (
    <form className="bg-gray-200 p-6 rounded min-h-full">
      <label>Email:</label>
      <input
        type="text"
        className="block w-full p-2 border rounded mt-2 mb-2"
        placeholder="Enter your email"
      />
      <label>Password:</label>
      <input
        type="password"
        className="block w-full p-2 border rounded mt-2"
        placeholder="Enter your password"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 "
      >
        Login
      </button>
    </form>
  );
};

export default Login;
