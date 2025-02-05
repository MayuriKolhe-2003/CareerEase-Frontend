import React from "react";
import {
  FaCircle,
  FaCheckCircle,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa"; // Import desired icons

function TimelineWithIcons() {
  return (
    <div className="max-w-screen mx-auto p-6 md:p-14 bg-white shadow-md m-10 rounded-md">
      {/* Timeline container */}
      <h1 className="text-primaryRed font-bold text-3xl text-center mb-20">
        Learning Roadmap
      </h1>

      <ol class="items-center sm:flex">
        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
              <FaCheckCircle className="w-2.5 h-2.5 text-primaryRed" />
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-primaryRed"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-primaryRed">
              Step 1: Learn Backend
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              Deadline : February 20, 2025
            </time>
            <p class="text-base font-normal">
              Backend development with Django and Simple backend API using
              Node.js and Express.js
            </p>
          </div>
        </li>

        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
              <FaCircle className="w-2.5 h-2.5 text-primaryRed" />
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-gray-400"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-primaryRed">
              {" "}
              Step 2: Learn Database
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              Deadline : March 20, 2025
            </time>
            <p class="text-base font-normal">
              PostgreSQL and optimize database queries and API design and
              development
            </p>
          </div>
        </li>

        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
              <FaCircle className="w-2.5 h-2.5 text-primaryRed" />
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-gray-400"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-primaryRed">
              Step 3: Proficiency
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              Deadline : April 20, 2025
            </time>
            <p class="text-base font-normal">
              Full-stack application using React, Node.js, and a database
            </p>
          </div>
        </li>

        <li class="relative mb-6 sm:mb-0">
          <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
              <FaCircle className="w-2.5 h-2.5 text-primaryRed" />
            </div>
            <div class="hidden sm:flex w-full h-0.5 bg-gray-400"></div>
          </div>
          <div class="mt-3 sm:pe-8">
            <h3 class="text-lg font-semibold text-primaryRed">
              Step 4: Network
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">
              Deadline :
            </time>
            <p class="text-base font-normal">
              Software engineering conference or meetups
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default TimelineWithIcons;
