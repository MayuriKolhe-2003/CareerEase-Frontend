import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ data, type }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-auto sm:h-[400px] flex-shrink-0">
      {/* Image */}
      <img src={data.image} alt={data.title} className="w-full h-32 sm:h-40 object-cover rounded-t-lg" />

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
        <p className="text-sm text-gray-600 mt-2 flex-grow line-clamp-2">
          {data.description}
        </p>

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
