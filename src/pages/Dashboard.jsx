import React, { useState, useEffect } from "react";
import axios from "../axios"; // Import Axios instance
import {
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiClock,
  FiPlusCircle,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Goals from "../components/Goals";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Roadmap from "../components/RoadMap";

Chart.register(...registerables);

const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />

      <h2 className="text-3xl font-bold text-dark mb-6">
        AI Counselor Dashboard
      </h2>

       {/* Insight Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <Card title="Goal Completion Rate" value="1,250" icon={<FiUsers className="text-white text-3xl" />} color="bg-primaryRed" />
        <Card title="Daily Challanges Completed" value="325" icon={<FiBarChart2 className="text-white text-3xl" />} color="bg-green-500" />
        <Card title="Courses and Lessons Completed" value="68" icon={<FiMessageSquare className="text-white text-3xl" />} color="bg-yellow-500" />
        <Card title="Job Applications" value="45 min" icon={<FiClock className="text-white text-3xl" />} color="bg-red-500" />
      </div>

      <Roadmap />
      <Goals />

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Line Chart for Weekly Sessions */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-dark mb-4">Weekly Sessions</h3>
          <Line
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  label: "Sessions",
                  data: [50, 80, 65, 120, 150, 90, 110],
                  borderColor: "#1E40AF",
                  backgroundColor: "rgba(30, 64, 175, 0.2)",
                  fill: true,
                },
              ],
            }}
          />
        </div>

        {/* Pie Chart for Session Types */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-dark mb-4">Session Distribution</h3>
          <Pie
            data={{
              labels: ["Career Counseling", "Mental Wellness", "Skill Development", "Others"],
              datasets: [
                {
                  data: [40, 30, 20, 10],
                  backgroundColor: ["#3B82F6", "#10B981", "#FACC15", "#EF4444"],
                },
              ],
            }}
          />
        </div>
      </div>

      
    </div>
  );
};


const Card = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-lg shadow-md text-white ${color} flex items-center`}>
    <div className="text-4xl">{icon}</div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);


export default Dashboard;
