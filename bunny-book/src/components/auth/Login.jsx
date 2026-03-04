import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-[#A99AD3] flex items-center justify-center px-5 py-16 md:py-24" id="login">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl space-y-10">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-[#05051B] tracking-tight">
          Login to BunnyBoook
        </h1>

        {/* Form Card */}
        <div className="bg-[#05051B]/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/30 p-8 md:p-10 border border-[#A99AD3]/30">
          <form className="space-y-6">
            {/* Email */}
            <div>
              {/* <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-200 mb-1.5">
                Email
              </label> */}
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="demo@gmail.com"
                className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]" />
            </div>

            {/* Password */}
            <div>
              {/* <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-200 mb-1.5">
                Password
              </label> */}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]" />
            </div>

            {/* Forgot password */}
            {/* <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-[#A99AD3] hover:text-[#C4B5E6] transition-colors">
                Forgot password?
              </a>
            </div> */}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#A99AD3] text-[#05051B] font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-[#A99AD3]/30 hover:bg-[#C4B5E6] active:scale-[0.98] transition-all duration-200">
                Sign In
              </button>
            </div>

            {/* Sign Up link */}
            <div className="text-center mt-12 text-gray-300 text-sm flex justify-center gap-2">
              <p>Don't have an account?</p>
              <Link
                to="/registration"
                className="text-[#A99AD3] font-medium hover:text-[#C4B5E6] transition-colors">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;