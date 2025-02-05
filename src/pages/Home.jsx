import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-14">
      <div className="max-w-6xl w-full text-center">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-primaryRed">CareerEase</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your AI-powered career counselor, helping you navigate your career path with expert guidance.
        </p>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            image="https://cdn-icons-png.flaticon.com/512/8616/8616529.png"
            title="Personalized AI Guidance"
            description="Get AI-driven career advice tailored to your skills and interests."
          />
          <FeatureCard
            image="https://cdn-icons-png.flaticon.com/512/11339/11339970.png"
            title="Skill Development"
            description="Discover courses to enhance your skills and grow in your career."
          />
          <FeatureCard
            image="https://cdn-icons-png.flaticon.com/512/5471/5471435.png"
            title="Job Opportunities"
            description="Find job openings and hackathons that match your career goals."
          />
        </div>

        {/* Join Now Button */}
        <div className="mt-16">
          <Link to="/signup">
            <button className="bg-primaryRed text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
              Join Now 🚀
            </button>
          </Link>
        </div>

                {/* Hero Image */}
                <div className="mt-8 flex justify-center">
          <img
            src="https://main--careerease.netlify.app/assets/whyus-c50acdb0.png"
            alt="CareerEase AI"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

/* Feature Card Component */
const FeatureCard = ({ image, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
    <img src={image} alt={title} className="w-16 h-16" />
    <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
    <p className="text-gray-600 text-center mt-2">{description}</p>
  </div>
);

export default Home;
