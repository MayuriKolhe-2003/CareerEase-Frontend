import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios"; // Import Axios instance
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Track password visibility

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/user/signin", formData, { withCredentials: true });
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("profileImageURL", response.data.profileImageURL);
      window.dispatchEvent(new Event("authChange"));
      toast.success("Successfully signed in! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect to dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-sm:px-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable /> 
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-md rounded-md">
          {/* Left Side - Form */}
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign In</h3>
                <p className="text-sm mt-4 text-gray-800">
                  Don't have an account?
                  <Link to="/signup" className="text-primaryRed font-semibold hover:underline ml-1 whitespace-nowrap">Sign Up</Link>
                </p>
              </div>

              {/* Email */}
              <InputField 
                label="Email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                icon={<FaEnvelope />} 
              />

              {/* Password with Eye Toggle */}
              <InputField 
                label="Password" 
                name="password" 
                type={showPassword ? "text" : "password"} 
                value={formData.password} 
                onChange={handleChange} 
                icon={showPassword ? <FaEyeSlash /> : <FaEye />} 
                onIconClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              />

              <div className="flex flex-wrap items-center justify-end gap-4 mt-6">
                <a href="#" className="text-primaryRed font-semibold text-sm hover:underline">Forgot Password?</a>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-primaryRed text-white py-2.5 rounded-md mt-6" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full h-full flex items-center bg-dark rounded-xl p-8">
            <img src="https://readymadeui.com/signin-image.webp" className="w-full object-contain" alt="Signin Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* Reusable Input Field Component with Clickable Icon */
const InputField = ({ label, name, type = "text", value, onChange, icon, onIconClick }) => (
  <div className="mt-2">
    <label className="text-gray-800 text-xs block mb-2">{label}</label>
    <div className="relative flex items-center">
      <input 
        name={name} 
        type={type} 
        required 
        className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primaryRed pl-2 pr-8 py-3 outline-none" 
        placeholder={`Enter ${label.toLowerCase()}`} 
        value={value} 
        onChange={onChange} 
      />
      {icon && (
        <span 
          className="text-gray-800 w-[18px] h-[18px] absolute right-2 cursor-pointer" 
          onClick={onIconClick} // Make the icon interactive
        >
          {icon}
        </span>
      )}
    </div>
  </div>
);

export default Signin;
