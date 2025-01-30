import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const categories = ["Technology", "Career", "Education", "AI & ML", "Startup", "General"];

const discussions = [
  {
    id: 1,
    user: "Alice",
    avatar: "https://i.pravatar.cc/40?img=1",
    date: "March 5, 2024",
    topic: "How to start learning AI?",
    description: "I want to explore AI. What are the best resources to get started?",
    category: "AI & ML",
    replies: [
      { user: "John", avatar: "https://i.pravatar.cc/40?img=2", reply: "Start with Python and basic ML courses!" },
      { user: "Emma", avatar: "https://i.pravatar.cc/40?img=3", reply: "Try Google AI crash course." },
    ],
  },
  {
    id: 2,
    user: "Bob",
    avatar: "https://i.pravatar.cc/40?img=4",
    date: "March 4, 2024",
    topic: "Best practices for job interviews?",
    description: "How can I prepare effectively for tech job interviews?",
    category: "Career",
    replies: [
      { user: "Sophia", avatar: "https://i.pravatar.cc/40?img=5", reply: "LeetCode is a great resource!" },
      { user: "Michael", avatar: "https://i.pravatar.cc/40?img=6", reply: "Mock interviews help a lot!" },
    ],
  },
];

const Discussion = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h2 className="text-3xl font-bold text-center text-dark mb-6">💬 Discussions</h2>

      {/* Category Badges */}
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide mb-6">
        <button
          className={`px-4 py-2 text-sm rounded-full ${
            selectedCategory === "All" ? "bg-primaryRed text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm rounded-full ${
              selectedCategory === category ? "bg-primaryRed text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Discussion List */}
      <div className="space-y-6">
        {discussions
          .filter((discussion) => selectedCategory === "All" || discussion.category === selectedCategory)
          .map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedDiscussion(discussion)}
            >
              <div className="flex items-center space-x-3 mb-2">
                <img src={discussion.avatar} alt={discussion.user} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-gray-700 font-semibold">{discussion.user}</p>
                  <p className="text-xs text-gray-500">{discussion.date}</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold">{discussion.topic}</h4>
              <p className="text-sm text-gray-600 mt-1">{discussion.description}</p>
            </div>
          ))}
      </div>

      {/* Discussion Modal */}
      {selectedDiscussion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedDiscussion.topic}</h3>
              <button onClick={() => setSelectedDiscussion(null)} className="text-gray-500 hover:text-dark">
                ✖
              </button>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <img src={selectedDiscussion.avatar} alt={selectedDiscussion.user} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-gray-700 font-semibold">{selectedDiscussion.user}</p>
                <p className="text-xs text-gray-500">{selectedDiscussion.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{selectedDiscussion.description}</p>

            {/* Replies */}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-dark">Replies</h4>
              <div className="space-y-3 mt-2">
                {selectedDiscussion.replies.map((reply, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img src={reply.avatar} alt={reply.user} className="w-8 h-8 rounded-full" />
                    <div className="bg-gray-100 p-3 rounded-lg w-full">
                      <p className="text-sm text-gray-700 font-semibold">{reply.user}</p>
                      <p className="text-sm text-gray-600">{reply.reply}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedDiscussion(null)}
              className="mt-4 bg-primaryRed text-white px-4 py-2 rounded-lg w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussion;
