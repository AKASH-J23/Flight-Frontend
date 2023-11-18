// src/components/AuthPage.js
import React, { useState } from 'react';
import Login from '../Components/Auth/Login';
import Signup from '../Components/Auth/Signup';

const Authpage = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = () => {
    setLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center h-max mt-24 ">
      <div className="bg-cyan-100 p-8 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {isLogin ? <Login /> : <Signup />}
        <div className="mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={toggleForm}
            className="text-blue-500 ml-1 underline cursor-pointer focus:outline-none"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
