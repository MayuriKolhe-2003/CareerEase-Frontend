import React, { useState, useEffect } from "react";
import axios from "../axios";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const categories = ["Technology", "Career", "Education", "AI & ML", "Startup", "General"];

const AddDiscussionModal = ({ onClose, onAddDiscussion }) => {
  const [discussion, setDiscussion] = useState({
    title: "",
    content: "",
    postImage: null,
  });

  const handleFileChange = (e) => {
    setDiscussion({ ...discussion, postImage: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (!discussion.title || !discussion.content) {
      toast.error("Please fill in both title and content.");
      return;
    }
    onAddDiscussion(discussion);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4">Start a New Discussion</h3>
        <input
          type="text"
          placeholder="Discussion Title"
          className="w-full border rounded-lg p-2 mb-2"
          value={discussion.title}
          onChange={(e) => setDiscussion({ ...discussion, title: e.target.value })}
        />
        <textarea
          placeholder="Discussion Content"
          className="w-full border rounded-lg p-2 mb-2"
          value={discussion.content}
          rows="4"
          onChange={(e) => setDiscussion({ ...discussion, content: e.target.value })}
        ></textarea>
        
        {/* Image Upload */}
        <input type="file" accept="image/*" className="w-full mb-4" onChange={handleFileChange} />

        <div className="flex justify-between">
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-lg">Start</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Discussion = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [discussions, setDiscussions] = useState([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState(null);
  
  
  
  const userId = localStorage.getItem("userId");

  // Fetch Discussions
  const fetchDiscussions = async () => {
    try {
      const response = await axios.get(`/discussion`, { withCredentials: true });
      console.log(response)
      setDiscussions(response.data.allPosts);
    } catch (error) {
      toast.error("Error fetching discussions.");
    }
  };

  useEffect(() => {
    fetchDiscussions();
  }, []);

  const addDiscussion = async (discussion) => {
    try {
      const formData = new FormData();
      formData.append("title", discussion.title);
      formData.append("content", discussion.content);
      if (discussion.postImage) {
        formData.append("postImage", discussion.postImage); // Attach image if provided
      }
  
      const response = await axios.post(
        `/discussion`, 
        formData,
        { 
          headers: { "Content-Type": "multipart/form-data" }, 
          withCredentials: true 
        }
      );
  
      toast.success("Discussion started successfully!");
      fetchDiscussions(); // Refresh discussions
    } catch (error) {
      console.error("Error starting discussion:", error);
      toast.error(error.response?.data?.message || "Error starting discussion.");
    } finally {
      setShowModal(false);
    }
  };

  // API Call to Post Comment
  const postComment = async () => {
    if (!commentText) {
      toast.error("Comment cannot be empty.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("text", commentText);
      if (commentImage) {
        formData.append("commentImage", commentImage);
      }

      await axios.post(`/discussion/${selectedDiscussion._id}/comment/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      toast.success("Comment posted successfully!");
      setCommentText("");
      setCommentImage(null);
      fetchDiscussions(); // Refresh discussions to show new comment
    } catch (error) {
      toast.error(error.response?.data?.message || "Error posting comment.");
    }
  };

  const handleCommentImageChange = (e) => {
    setCommentImage(e.target.files[0]);
  };

  

  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h2 className="text-3xl font-bold text-center text-dark mb-6">💬 Discussions</h2>

      {/* Start New Discussion Button */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
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
        <button onClick={() => setShowModal(true)} className="bg-primaryRed text-white px-4 py-2 rounded-lg">
          ➕ Start New Discussion
        </button>
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
                {discussion.avatar ? (
                  <img src={discussion.avatar} alt={discussion.user} className="w-10 h-10 rounded-full" />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-500" />
                )}
                <div>
                  <p className="text-gray-700 font-semibold">{discussion.user}</p>
                  <p className="text-xs text-gray-500">{discussion.date}</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold">{discussion.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{discussion.content}</p>
            </div>
          ))}
      </div>

      {/* Add Discussion Modal */}
      {showModal && <AddDiscussionModal onClose={() => setShowModal(false)} onAddDiscussion={addDiscussion} />}

      {/* Discussion Details Modal */}
      {selectedDiscussion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{selectedDiscussion.title}</h3>
              <button onClick={() => setSelectedDiscussion(null)} className="text-gray-500 hover:text-dark">✖</button>
            </div>
            <p className="text-sm text-gray-600 mt-2">{selectedDiscussion.content}</p>

            {/* Comments Section */}
            <h4 className="mt-4 text-lg font-semibold">Comments</h4>
            <div className="space-y-3 mt-3">
              {selectedDiscussion.comments.length > 0 ? (
                selectedDiscussion.comments.map((comment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gray-100 p-3 rounded-lg w-full">
                      <p className="text-sm font-semibold">{comment.createdBy?.name || "Anonymous"}</p>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                      {comment.imageURL && <img src={comment.imageURL} alt="Comment" className="mt-2 rounded-lg w-32" />}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>

            {/* Add Comment Form */}
            <div className="mt-4">
              <h4 className="text-md font-semibold text-dark">Post a Comment</h4>
              <textarea
                className="w-full border rounded-lg p-2 mt-2"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <input type="file" accept="image/*" className="w-full mt-2" onChange={handleCommentImageChange} />
              <button onClick={postComment} className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full">
                Post Comment
              </button>
            </div>

            {/* Close Button */}
            <button onClick={() => setSelectedDiscussion(null)} className="mt-4 bg-primaryRed text-white px-4 py-2 rounded-lg w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



/* Add Discussion Modal */


export default Discussion;
