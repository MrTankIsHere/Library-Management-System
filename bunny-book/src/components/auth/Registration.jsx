import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="h-[calc(100vh-4rem)] bg-[#A99AD3] flex items-center justify-center px-5 py-16 md:py-24" id="register">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl space-y-10">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-bold text-[#05051B] tracking-tight">
          Create Your Account
        </h1>

        {/* Form Card */}
        <div className="bg-[#05051B]/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/30 p-8 md:p-10 border border-[#A99AD3]/30">
          <form className="space-y-6">
            {/* First Name + Last Name row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="first name"
                  autoComplete="given-name"
                  className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
                />
              </div>

              <div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="last name"
                  autoComplete="family-name"
                  className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
                />
              </div>
            </div>

            {/* Mobile + DOB row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="mobile number"
                  autoComplete="tel"
                  className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
                />
              </div>

              <div>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  placeholder="Date Of Birth"
                  autoComplete="bday"
                  className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB] [&::-webkit-calendar-picker-indicator]:invert"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
              />
            </div>

            {/* Create Password */}
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create Password"
                autoComplete="new-password"
                className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
              />
            </div>

            {/* Re-enter Password */}
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter Password"
                autoComplete="new-password"
                className="w-full bg-[#755CBB]/80 font-bold text-white placeholder:text-gray-300 border border-[#A99AD3]/60 rounded-lg px-4 py-3 outline-none transition-all duration-200 focus:border-[#A99AD3] focus:ring-2 focus:ring-[#A99AD3]/40 focus:bg-[#755CBB]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="cursor-pointer w-full bg-[#A99AD3] text-[#05051B] font-bold text-lg py-3.5 rounded-xl shadow-lg shadow-[#A99AD3]/30 hover:bg-[#C4B5E6] active:scale-[0.98] transition-all duration-200">
                Register
              </button>
            </div>

            {/* Sign In link */}
            <div className="text-center mt-10 text-gray-300 text-sm flex justify-center gap-2">
              <p>Already have an account?</p>
              <Link
                to="/login"
                className="text-[#A99AD3] font-medium hover:text-[#C4B5E6] transition-colors">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;