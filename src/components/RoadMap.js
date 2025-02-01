import React from 'react';
import { FaCheckCircle, FaCode, FaRocket, FaUsers } from 'react-icons/fa'; // Import desired icons



function TimelineWithIcons() {
    return (
        <div className="max-w-screen mx-auto p-14 bg-white shadow-md m-10 rounded-md">
            {/* Timeline container */}
            <h1 className='text-primaryRed font-bold text-3xl text-center mb-20'>Learning Roadmap</h1>

            <ol class="items-center sm:flex">
                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
                           <FaCheckCircle className='w-2.5 h-2.5 text-primaryRed' />
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-primaryRed">Learn React</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">Deadline : February 2, 2025</time>
                        <p class="text-base font-normal">Get started with dozens of web components and interactive elements.</p>
                    </div>
                </li>

                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
                           <FaCheckCircle className='w-2.5 h-2.5 text-primaryRed' />
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-primaryRed">Learn React</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">Deadline : February 2, 2025</time>
                        <p class="text-base font-normal">Get started with dozens of web components and interactive elements.</p>
                    </div>
                </li>

                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
                           <FaCheckCircle className='w-2.5 h-2.5 text-primaryRed' />
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-primaryRed">Learn React</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">Deadline : February 2, 2025</time>
                        <p class="text-base font-normal">Get started with dozens of web components and interactive elements.</p>
                    </div>
                </li>

                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
                           <FaCheckCircle className='w-2.5 h-2.5 text-primaryRed' />
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-primaryRed">Learn React</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500 ">Deadline : February 2, 2025</time>
                        <p class="text-base font-normal">Get started with dozens of web components and interactive elements.</p>
                    </div>
                </li>

                <li class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-dark sm:ring-8 dring-gray-900 shrink-0">
                           <FaCheckCircle className='w-2.5 h-2.5 text-primaryRed' />
                        </div>
                        <div class="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pe-8">
                        <h3 class="text-lg font-semibold text-primaryRed">Learn React</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-500">Deadline : February 2, 2025</time>
                        <p class="text-base font-normal">Get started with dozens of web components and interactive elements.</p>
                    </div>
                </li>
               
            </ol>


        </div>
    );
}

export default TimelineWithIcons;