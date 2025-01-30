import React, { useState, useEffect } from "react";
import axios from "../axios";
import {
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiClock,
  FiPlusCircle,
  FiEdit,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";
import { toast } from "react-toastify";

const Goals = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(null);
  const [goals, setGoals] = useState([]);
  const userId = localStorage.getItem("userId");

  const fetchGoals = async () => {
    try {
      const response = await axios.get(`/user/${userId}`, { withCredentials: true });
      console.log("Fetched Goals:", response.data.goals);
      setGoals(
        response.data.goals.map((goal) => ({
          ...goal,
          subGoals: goal.subGoals.map((sg) => ({
            subGoalName: sg.subGoalName,
            isCompleted: sg.isCompleted,
          })),
        }))
      );
    } catch (error) {
      toast.error("Error fetching goals.");
    }
  };
  
  // Call `fetchGoals` on component mount
  useEffect(() => {
    fetchGoals();
  }, []);

  // Add Goal API Call
  const addGoal = async (goal) => {
    console.log(goal)
    try {
      const response = await axios.post(`/user/${userId}/goals`, { goal }, { withCredentials: true });
      console.log("Goal Added Successfully:", response.data);

      // Refetch goals after successful addition
      fetchGoals();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding goal.");
    } finally {
      setShowModal(false);
    }
  };

  // Delete Goal API Call
  const deleteGoal = async (goalId) => {
    try {
      await axios.delete(`/user/${userId}/goals/${goalId}`, { withCredentials: true });
      fetchGoals();
      toast.success("Goal deleted successfully!");
    } catch (error) {
      toast.error("Error deleting goal.");
    }
  };

  // Edit Goal (Add Subgoals & Mark Complete)
  const editGoal = async (goalId, updatedGoal) => {
    console.log(updatedGoal)
    try {
      const response = await axios.patch(`/user/${userId}/goals/${goalId}`, { goal: updatedGoal }, { withCredentials: true });
      fetchGoals();
      toast.success("Goal updated successfully!");
      setEditModal(null);
    } catch (error) {
      toast.error("Error updating goal.");
    }
  };

  const markSubGoalComplete = async (goal, subGoalName) => {
    try {
      // Update subgoal completion status
      const updatedGoal = {
        ...goal,
        subGoals: goal.subGoals.map((sg) =>
          sg.subGoalName === subGoalName ? { ...sg, isCompleted: true } : sg
        ),
      };

      // Send full updated goal object to backend
      const response = await axios.patch(
        `/user/${userId}/goals/${goal._id}`,
        { goal: updatedGoal },
        { withCredentials: true }
      );

      fetchGoals();

      toast.success("Subgoal marked as complete!");
    } catch (error) {
      toast.error("Error marking subgoal complete.");
    }
  };



  return (
    <>
      {/* Goal Tracking Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-dark">🎯 Goal Progress</h3>
          <button onClick={() => setShowModal(true)} className="bg-primaryRed text-white px-4 py-2 rounded-lg flex items-center">
            <FiPlusCircle className="mr-2" /> Add Goal
          </button>
        </div>
        <div className="h-[40vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.length > 0 ? (
            goals.map((goal) => (
              <div key={goal._id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold">{goal.name}</h4>
                <p className="text-sm text-gray-600">
                  From: {goal.startDate.split("T")[0]} - To: {goal.targetDate.split("T")[0]}
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-primaryRed h-2.5 rounded-full"
                    style={{ width: `${(goal.subGoals.filter((sg) => sg.isCompleted).length / goal.subGoals.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  {goal.subGoals.filter((sg) => sg.isCompleted).length}/{goal.subGoals.length} Subgoals Completed
                </p>

                {/* Subgoal List */}
                <ul className="mt-3 space-y-2">
                  {goal.subGoals.map((subGoal, subIndex) => (
                    <li key={subIndex} className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm">
                      <span className={`text-sm ${subGoal.isCompleted ? "text-green-600 line-through" : "text-gray-800"}`}>
                        {subGoal.subGoalName}
                      </span>
                      {!subGoal.isCompleted ? (
                        <button
                          onClick={() => markSubGoalComplete(goal, subGoal.subGoalName)}
                          className="bg-green-500 text-white px-3 py-1 rounded-md text-xs flex items-center"
                        >
                          <FiCheckCircle className="mr-1" /> Mark Complete
                        </button>
                      ) : (
                        <FiCheckCircle className="text-green-600" />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Goal Actions */}
                <div className="flex justify-between mt-4">
                  <button onClick={() => setEditModal(goal)} className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center">
                    <FiEdit className="mr-2" /> Edit
                  </button>
                  <button onClick={() => deleteGoal(goal._id)} className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center">
                    <FiTrash2 className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-2 text-center">No goals added yet.</p>
          )}
        </div>
      </div>


      {/* Add Goal Modal */}
      {showModal && <AddGoalModal onClose={() => setShowModal(false)} onAddGoal={addGoal} />}

      {/* Edit Goal Modal */}
      {editModal && <EditGoalModal goal={editModal} onClose={() => setEditModal(null)} onEditGoal={editGoal} />}
    </>
  )
}

/* Goal Item with Progress Bar */
const GoalItem = ({ goal }) => {
  const completedSubGoals = goal.subGoals.filter((sg) => sg.isCompleted).length;
  const progress = (completedSubGoals / goal.subGoals.length) * 100;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold">{goal.name}</h4>
      <p className="text-sm text-gray-600">
        From: {goal.startDate.split("T")[0]} - To:{" "}
        {goal.targetDate.split("T")[0]}
      </p>
      <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
        <div
          className="bg-primaryRed h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mt-2">
        {completedSubGoals}/{goal.subGoals.length} Subgoals Completed
      </p>
    </div>
  );
};

/* Add Goal Modal */
const AddGoalModal = ({ onClose, onAddGoal }) => {
  const [goal, setGoal] = useState({
    name: "",
    startDate: new Date().toISOString().split("T")[0], // Default to today
    targetDate: "",
    subGoals: [],
    isCompleted: false, // Default to false
  });
  const [subGoal, setSubGoal] = useState("");

  const addSubGoal = () => {
    if (subGoal.trim() === "") return;
    setGoal({
      ...goal,
      subGoals: [
        ...goal.subGoals,
        { subGoalName: subGoal, isCompleted: false },
      ],
    });
    setSubGoal("");
  };

  const handleSubmit = () => {
    if (
      !goal.name ||
      !goal.startDate ||
      !goal.targetDate ||
      goal.subGoals.length === 0
    ) {
      toast.error("Please fill all fields and add at least one subgoal.");
      return;
    }
    onAddGoal(goal);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Add Goal</h3>
        <input
          type="text"
          placeholder="Goal Name"
          className="w-full border rounded-lg p-2 mb-2"
          onChange={(e) => setGoal({ ...goal, name: e.target.value })}
        />

        <input
          type="date"
          className="w-full border rounded-lg p-2 mb-2"
          value={goal.startDate}
          onChange={(e) => setGoal({ ...goal, startDate: e.target.value })}
        />

        <input
          type="date"
          className="w-full border rounded-lg p-2 mb-2"
          onChange={(e) => setGoal({ ...goal, targetDate: e.target.value })}
        />

        <div className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="Subgoal"
            className="w-full border rounded-lg p-2"
            value={subGoal}
            onChange={(e) => setSubGoal(e.target.value)}
          />
          <button
            onClick={addSubGoal}
            className="bg-primaryRed text-white px-3 py-2 rounded-lg"
          >
            +
          </button>
        </div>

        <ul className="text-sm text-gray-700 mb-2">
          {goal.subGoals.map((sg, index) => (
            <li key={index} className="ml-2">
              - {sg.subGoalName}
            </li>
          ))}
        </ul>

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Add Goal
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const EditGoalModal = ({ goal, onClose, onEditGoal }) => {
  const [updatedGoal, setUpdatedGoal] = useState(goal);
  const [subGoal, setSubGoal] = useState("");

  const addSubGoal = () => {
    if (subGoal.trim() === "") return;
    setUpdatedGoal({
      ...updatedGoal,
      subGoals: [...updatedGoal.subGoals, { subGoalName: subGoal, isCompleted: false }],
    });
    setSubGoal("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Edit Goal</h3>
        <input type="text" value={updatedGoal.name} className="w-full border rounded-lg p-2 mb-2" readOnly />
        <ul className="text-sm text-gray-700 mb-2">
          {updatedGoal.subGoals.map((sg, index) => (
            <li key={index} className="ml-2">- {sg.subGoalName}</li>
          ))}
        </ul>
        <div className="flex items-center space-x-2 mb-2">
          <input type="text" placeholder="New Subgoal" className="w-full border rounded-lg p-2" value={subGoal} onChange={(e) => setSubGoal(e.target.value)} />
          <button onClick={addSubGoal} className="bg-primaryRed text-white px-3 py-2 rounded-lg">+</button>
        </div>
        <div className="flex justify-between">
          <button onClick={() => onEditGoal(goal._id, updatedGoal)} className="bg-green-500 text-white px-4 py-2 rounded-lg">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Goals
