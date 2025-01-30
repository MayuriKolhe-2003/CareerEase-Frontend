import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">User Profile</h2>

        {/* Personal Info Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h3>
          <div className="flex items-center space-x-6 mb-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              <p className="text-lg font-medium text-gray-700">John Doe</p>
              <p className="text-gray-500">johndoe@example.com</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md  focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="johndoe@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="********"
              />
            </div>
            <div>
              <label className="block text-gray-600">Birthday</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="1998-10-10"
              />
            </div>
          </div>
        </div>

        {/* Educational Info Card */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Educational Info</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">College Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Harvard University"
              />
            </div>
            <div>
              <label className="block text-gray-600">Country</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="United States"
              />
            </div>
            <div>
              <label className="block text-gray-600">State</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Massachusetts"
              />
            </div>
            <div>
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Cambridge"
              />
            </div>
          </div>
        </div>

        {/* Skills and Preferences Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills and Preferences</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Current Skills</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="React, TypeScript"
              />
            </div>
            <div>
              <label className="block text-gray-600">Target Skills</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Next.js, AI/ML"
              />
            </div>
            <div>
              <label className="block text-gray-600">Years of Experience</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="3"
              />
            </div>
            <div>
              <label className="block text-gray-600">Career Goal</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Become a Full-Stack Developer"
              />
            </div>
            <div>
              <label className="block text-gray-600">Education Level</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Master's Degree"
              />
            </div>
            <div>
              <label className="block text-gray-600">Location Preference</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-light_primaryRed"
                value="Remote / United States"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
