import React, { useState } from "react";
import { FaBuilding, FaEnvelope, FaEye, FaGlobe, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios"; // Import Axios instance
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    birthdate: "",
    college: "",
    city: "",
    state: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/user/signup", formData);
      console.log("Signup Success:", response.data);
      toast.success("Signup successful! Redirecting..."); // ✅ Show success toast
      setTimeout(() => navigate("/profile"), 2000); 
    } catch (err) {
      console.error("Signup Error:", err.response?.data?.message || err.message);
      toast.error(err.response?.data?.message || "Signup failed. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-sm:px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          {/* Left Side - Form */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign Up</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Already have an account?
                  <Link to="/signin" className="text-primaryRed font-semibold hover:underline ml-1 whitespace-nowrap">Sign In</Link>
                </p>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              {/* Full Name */}
              <div>
                <label className="text-gray-800 text-xs block mb-2">Full Name</label>
                <div className="relative flex items-center">
                  <input name="fullName" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" 
                    placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
                  <FaUser className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Email */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" 
                    placeholder="Enter email" value={formData.email} onChange={handleChange} />
                  <FaEnvelope className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Password */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" 
                    placeholder="Enter password" value={formData.password} onChange={handleChange} />
                  <FaEye className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Birthdate */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">Birthdate</label>
                <input name="birthdate" type="date" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" 
                  value={formData.birthdate} onChange={handleChange} />
              </div>

              {/* College Name */}
              <div className="mt-2">
                <label className="text-gray-800 text-xs block mb-2">College Name</label>
                <div className="relative flex items-center">
                  <input name="college" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" 
                    placeholder="Enter college name" value={formData.college} onChange={handleChange} />
                  <FaBuilding className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                </div>
              </div>

              {/* Location Details */}
              {["country", "state", "city"].map((field) => (
                <div className="mt-2" key={field}>
                  <label className="text-gray-800 text-xs block mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <div className="relative flex items-center">
                    <input name={field} type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-2 py-3 outline-none" 
                      placeholder={`Enter ${field}`} value={formData[field]} onChange={handleChange} />
                    <FaGlobe className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" />
                  </div>
                </div>
              ))}

              {/* Submit Button */}
              <div className="mt-8">
                <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-primaryRed focus:outline-none" disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-full h-full flex items-center bg-dark rounded-xl p-8">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png" 
              className="w-full aspect-[12/12] object-contain" alt="signup-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
