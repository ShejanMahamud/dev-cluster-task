// src/components/Login.js
import React from "react";
import { googleLogin } from '../../features/User/userSlice';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try{
        await googleLogin()
        toast.success('Login Successfully!')
        navigate('/')
    }
    catch(error){
        toast.error(error.message)
    }
  };

  return (
    <div className="h-auto w-full min-h-screen bg-login bg-no-repeat bg-center bg-cover grid grid-cols-1 row-auto items-center justify-center gap-10 lg:py-16 py-5 lg:px-96 px-5">
      <div className="bg-white rounded-3xl p-12 flex flex-col items-center gap-5 text-[#444444] shadow-xl">
        <h1 className="lg:text-3xl text-2xl font-bold">Welcome Back! 👋</h1>
        <p className="lg:text-base text-sm">
          Login to Dev Cluster student forum{" "}
          
        </p>
        <button onClick={handleGoogleLogin} className="flex items-center gap-5 border border-[#FF2108] px-6 py-3 rounded-lg">
        <FcGoogle />
        <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
