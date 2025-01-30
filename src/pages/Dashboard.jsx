import React, { useState } from "react";
import { FiUsers, FiBarChart2, FiMessageSquare, FiClock, FiPlusCircle } from "react-icons/fi";
import { Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Card = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-lg shadow-md text-white ${color} flex items-center`}>
    <div className="text-4xl">{icon}</div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [goals, setGoals] = useState([
    {
      name: "Learn React",
      startDate: "2024-02-01",
      targetDate: "2024-04-01",
      subGoals: [
        { name: "Complete React Basics", completed: true },
        { name: "Build a Project", completed: false },
        { name: "Learn State Management", completed: false },
      ],
    },
  ]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h2 className="text-3xl font-bold text-dark mb-6">AI Counselor Dashboard</h2>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <Card title="Total Users" value="1,250" icon={<FiUsers className="text-white text-3xl" />} color="bg-primaryRed" />
        <Card title="Daily Sessions" value="325" icon={<FiBarChart2 className="text-white text-3xl" />} color="bg-green-500" />
        <Card title="New Queries" value="68" icon={<FiMessageSquare className="text-white text-3xl" />} color="bg-yellow-500" />
        <Card title="Avg. Session Time" value="45 min" icon={<FiClock className="text-white text-3xl" />} color="bg-red-500" />
      </div>

      {/* Goal Tracking Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-dark">🎯 Goal Progress</h3>
          <button onClick={() => setShowModal(true)} className="bg-primaryRed text-white px-4 py-2 rounded-lg flex items-center">
            <FiPlusCircle className="mr-2" /> Add Goal
          </button>
        </div>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} />
          ))}
        </div>
      </div>

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

      {/* Add Goal Modal */}
      {showModal && <AddGoalModal onClose={() => setShowModal(false)} onAddGoal={addGoal} />}
    </div>
  );
};

/* Goal Item with Progress Bar */
const GoalItem = ({ goal }) => {
  const completedSubGoals = goal.subGoals.filter((sg) => sg.completed).length;
  const progress = (completedSubGoals / goal.subGoals.length) * 100;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold">{goal.name}</h4>
      <p className="text-sm text-gray-600">From: {goal.startDate} - To: {goal.targetDate}</p>
      <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
        <div className="bg-primaryRed h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-700 mt-2">{completedSubGoals}/{goal.subGoals.length} Subgoals Completed</p>
    </div>
  );
};

/* Add Goal Modal */
const AddGoalModal = ({ onClose, onAddGoal }) => {
  const [goal, setGoal] = useState({
    name: "",
    startDate: "",
    targetDate: "",
    subGoals: [],
  });
  const [subGoal, setSubGoal] = useState("");

  const addSubGoal = () => {
    setGoal({ ...goal, subGoals: [...goal.subGoals, { name: subGoal, completed: false }] });
    setSubGoal("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Add Goal</h3>
        <input type="text" placeholder="Goal Name" className="w-full border rounded-lg p-2 mb-2" 
          onChange={(e) => setGoal({ ...goal, name: e.target.value })} />

        <input type="date" className="w-full border rounded-lg p-2 mb-2" 
          onChange={(e) => setGoal({ ...goal, startDate: e.target.value })} />

        <input type="date" className="w-full border rounded-lg p-2 mb-2" 
          onChange={(e) => setGoal({ ...goal, targetDate: e.target.value })} />

        <div className="flex items-center space-x-2 mb-2">
          <input type="text" placeholder="Subgoal" className="w-full border rounded-lg p-2" 
            value={subGoal} onChange={(e) => setSubGoal(e.target.value)} />
          <button onClick={addSubGoal} className="bg-primaryRed text-white px-3 py-2 rounded-lg">+</button>
        </div>

        <ul className="text-sm text-gray-700 mb-2">
          {goal.subGoals.map((sg, index) => (
            <li key={index} className="ml-2">- {sg.name}</li>
          ))}
        </ul>

        <div className="flex justify-between">
          <button onClick={() => onAddGoal(goal)} className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Goal</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
