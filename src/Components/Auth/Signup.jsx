// src/components/Signup.js
import React from 'react';

const Signup = () => {
  // Add your signup form fields here
  return (
    <form className="bg-gray-200 p-6 rounded min-h-full">
      <label>Name:</label>
      <input
        type="text"
        className="block w-full p-2 border rounded mt-2"
        placeholder="Enter your name"
      />
      <label>Email:</label>
      <input
        type="text"
        className="block w-full p-2 border rounded mt-2"
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
        className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
