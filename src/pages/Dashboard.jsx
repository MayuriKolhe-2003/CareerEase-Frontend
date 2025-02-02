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
import { GoGoal } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { FaBookOpen } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";

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

      <h2 className="text-3xl font-bold text-dark mb-6">Overview</h2>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <Card
          title="Goal Completion Rate"
          value="100%"
          icon={<GoGoal className="text-white text-3xl" />}
          color="bg-primaryRed"
          className="cstStyle"
        />
        <Card
          title="Daily Challanges Completed"
          value="0"
          icon={<SlCalender className="text-white text-3xl" />}
          color="bg-green-500"
        />
        <Card
          title="Lessons Completed"
          value="0"
          icon={<FaBookOpen className="text-white text-3xl" />}
          color="bg-yellow-500"
        />
        <Card
          title="Job Applications"
          value="0"
          icon={<IoBagAdd className="text-white text-3xl" />}
          color="bg-red-500"
        />
      </div>

      <Roadmap />
      <Goals />

      {/* Charts */}
    </div>
  );
};

const Card = ({ title, value, icon, color }) => (
  <div
    className={`px-4 py-5 rounded-lg shadow-md text-white ${color} flex items-center justify-center hover:transform hover:scale-105 transition-transform cursor-pointer`}
  >
    <div className="text-4xl">{icon}</div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default Dashboard;
