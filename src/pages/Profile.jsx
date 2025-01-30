import React, { useState, useEffect } from "react";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    birthdate: "",
    college: "",
    city: "",
    state: "",
    country: "",
    yearOfExperience: "",
    educationLevel: "",
    skills: "",
    targetSkills: "",
    locationPreference: "",
    profileImageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe5fv0XOW4S3Pmgl-dF9YI4SglGERqaRKbAuW9JYGHsr_xqUfpl0o_JNtzRV_GUTLap0&usqp=CAU",
  });

  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  const [selectedImage, setSelectedImage] = useState();
  // Fetch user profile on page load
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/user/${userId}`, {
        withCredentials: true,
      });
      let userData = response.data;

      // ✅ Convert birthdate from ISO to "YYYY-MM-DD"
      if (userData.birthdate) {
        userData.birthdate = userData.birthdate.split("T")[0]; // Extract only YYYY-MM-DD
      }

      setFormData(userData);
    } catch (error) {
      toast.error("Error fetching profile data.");
    }
  }
  useEffect(() => {
   
    fetchProfile();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImageURL: URL.createObjectURL(file) });
      setSelectedImage(file);
    }
  };

  // Handle Profile Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Append profile image if updated
      // if (selectedImage) {
      //   formDataToSend.append("profileImage", selectedImage);
      // }

      const response = await axios.patch(`/user/${userId}`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Profile updated successfully!");
      fetchProfile();
    } catch (error) {
      toast.error("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />

      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          User Profile
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Personal Info Card */}
          <ProfileCard title="Personal Info">
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex flex-col items-center space-y-4 mb-4">
                <label htmlFor="profileImage" className="cursor-pointer">
                  <img
                    src={formData.profileImageURL}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                  />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <div>
                <p className="text-lg font-medium text-gray-700">
                  {formData.fullName}
                </p>
                <p className="text-gray-500">{formData.email}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                label="Birthdate"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                required
              />
            </div>
          </ProfileCard>

          {/* Educational Info Card */}
          <ProfileCard title="Educational Info">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="College Name"
                name="college"
                value={formData.college}
                onChange={handleChange}
              />
              <InputField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <InputField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              <InputField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </ProfileCard>

          {/* Skills & Preferences Card */}
          <ProfileCard title="Skills and Preferences">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="Current Skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
              <InputField
                label="Target Skills"
                name="targetSkills"
                value={formData.targetSkills}
                onChange={handleChange}
              />
              <InputField
                label="Years of Experience"
                name="yearOfExperience"
                type="number"
                value={formData.yearOfExperience}
                onChange={handleChange}
              />
              {/* <InputField label="Career Goal" name="goals" value={formData.goals} onChange={handleChange} /> */}
              <InputField
                label="Education Level"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
              />
              <InputField
                label="Location Preference"
                name="locationPreference"
                value={formData.locationPreference}
                onChange={handleChange}
              />
            </div>
          </ProfileCard>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-primaryRed text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition duration-300"
              disabled={loading}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* Reusable Profile Card Component */
const ProfileCard = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

/* Reusable Input Field Component */
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="block text-gray-600">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
    />
  </div>
);

export default Profile;
