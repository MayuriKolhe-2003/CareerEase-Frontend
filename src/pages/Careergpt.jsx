import React from "react";

const Careergpt = () => {
  return (
    <div className="flex flex-col flex-auto h-[90vh] p-14">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 relative">
        
        {/* Scrollable Chat Section */}
        <div className="flex flex-col h-full overflow-y-auto mb-4 pr-2">
          <div className="flex flex-col">
            <div className="grid grid-cols-12 gap-y-2">
              {/* Left-side messages */}
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primaryRed flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>Hey, how are you today?</div>
                  </div>
                </div>
              </div>

              {/* Right-side messages */}
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primaryRed flex-shrink-0">
                    B
                  </div>
                  <div className="relative mr-3 text-sm bg-light_primaryRed py-2 px-4 shadow rounded-xl">
                    <div>I'm good, what about you?</div>
                  </div>
                </div>
              </div>

              {/* More messages */}
              <div className="col-start-1 col-end-8 p-3 rounded-lg">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primaryRed flex-shrink-0">
                    A
                  </div>
                  <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                    <div>
                      What are some career options for someone interested in AI?
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primaryRed flex-shrink-0">
                    B
                  </div>
                  <div className="relative mr-3 text-sm bg-light_primaryRed py-2 px-4 shadow rounded-xl">
                    <div>
                      AI offers careers like Data Science, Machine Learning Engineer, and AI Researcher.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Input Box at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t rounded-b-2xl">
          <div className="flex flex-row items-center">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
            </div>
            <div className="ml-4">
              <button className="flex items-center justify-center bg-primaryRed hover:bg-indigo-600 rounded-xl text-white px-4 py-2 flex-shrink-0">
                <span>Send</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careergpt;
