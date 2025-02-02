import React,{useEffect, useState} from "react";
import { blogData, courseData } from "../Data";
import CourseCard from "../components/CourseCard";
const LearnSkills = () => {


  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <h2 className="text-3xl text-center font-bold text-dark mb-6"> 🎯 Learn Skills</h2>

      {/* Daily Challenge Section */}
      <div className="bg-primaryRed text-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-bold">🎯 Daily Challenge</h3>
        <p className="mt-2">
          Solve a real-world problem using **JavaScript** functions. Implement a
          function that reverses a string without using built-in methods. Can
          you do it?
        </p>
        <button className="mt-4 bg-white text-primaryRed px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Take Challenge
        </button>
      </div>

      {/* Recommended Courses Section */}
      <h3 className="text-3xl font-bold text-dark mb-4">
        📚 Recommended Courses
      </h3>
      <div className="relative mb-20">
        {/* Scrollable Container */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-custom scroll-smooth">
          {courseData.map((course, index) => (
            <CourseCard key={index} data={course} type="course" />
          ))}
        </div>
      </div>

      {/* Recommended Blogs Section */}
      <h3 className="text-3xl font-bold text-dark mb-4">
        📝 Recommended Blogs
      </h3>
      <div className="relative">
        {/* Scrollable Container */}
        <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-custom scroll-smooth">
          {blogData.map((course, index) => (
            <CourseCard key={index} data={course} type="course" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnSkills;
