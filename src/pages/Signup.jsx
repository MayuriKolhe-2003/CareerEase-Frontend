import React from 'react';
import { FaBuilding, FaEnvelope, FaEye, FaGlobe, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="max-sm:px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          {/* Left Side - Form */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form>
              <div className="mb-6">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Already have an account? 
                  <Link to="/signin" className="text-primaryRed font-semibold hover:underline ml-1 whitespace-nowrap">Sign In</Link>
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-gray-800 text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input name="fullName" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" placeholder="Enter your full name" />
                  <FaUser className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Email */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" placeholder="Enter email" />
                  <FaEnvelope className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Password */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" placeholder="Enter password" />
                  <FaEye className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Birthdate */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Birthdate</label>
                <input name="birthdate" type="date" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" />
              </div>

              {/* College Name */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">College Name</label>
                <div className="relative flex items-center">
                <input name="college" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" placeholder="Enter college name" />
                <FaBuilding className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Country */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Country</label>
                <div className="relative flex items-center">
                <input name="country" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" placeholder="Enter country" />
                <FaGlobe className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* State */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">State</label>
                <div className="relative flex items-center">
                <input name="state" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" placeholder="Enter state" />
                <FaGlobe className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                  </div>
              </div>

              {/* City */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">City</label>
                <div className="relative flex items-center">
                <input name="city" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" placeholder="Enter city" />
                <FaGlobe className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>
              <div className="mt-8">
                <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-primaryRed focus:outline-none">
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-full h-full flex items-center bg-dark rounded-xl p-8">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png" className="w-full aspect-[12/12] object-contain" alt="signup-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
