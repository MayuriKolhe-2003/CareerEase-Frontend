import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ data, type }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-[400px] w-[320px] flex-shrink-0">
      {/* Image */}
      <img src={data.image} alt={data.title} className="w-full h-40 object-cover" />

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          {/* Category Badge */}
          <span className="inline-block bg-light_primaryRed text-primaryRed text-xs font-semibold px-3 py-1 rounded-full">
            {data.category}
          </span>

          {/* Duration */}
          <span className="text-sm text-gray-500">{data.duration}</span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-semibold mt-2">{data.title}</h4>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 flex-grow">{data.description}</p>

        {/* Button at the Bottom */}
        <Link to={data.link}>
          <button className="mt-4 bg-primaryRed text-white px-4 py-2 rounded-lg font-semibold w-full">
            {type === "course" ? "Start Course" : "Read More"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
