import React from "react";
import ecommerce from "./Assets/ecommerceThumbnail.png";
import newsapp from "./Assets/newsAppThumbnail.png";
import textutils from "./Assets/text-utils.jpg";
import iNotebookThumbnail from "./Assets/iNotebookThumbnail.png";

export const Work = () => {
  return (
    <div name="Work" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6 ">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            style={{ backgroundImage: `url(${iNotebookThumbnail})`,backgroundSize:"100% 100%" }}
            className="flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div bg-opacity-10"
          >
            {/* Hover effects */}

            <div className="flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center">
              <span className="text-2xl font-bold text-white bg-[#525d8d63] tracking-wider">
                iNotebook-cloud
              </span>
              <div>
                <a href="https://iinotebook.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Yuvraj210103">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ecommerce})`,backgroundSize:"100% 100%" }}
            className="flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center">
              <span className="text-2xl font-bold text-white bg-[#525d8d63] tracking-wider">
                E-commerce Application
              </span>
              <div>
                <a href="https://ecommerce-yuvraj.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Yuvraj210103">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${newsapp})`,backgroundSize:"100% 100%"}}
            className="flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center">
              <span className="text-2xl font-bold text-white bg-[#525d8d63] tracking-wider">
                News Application
              </span>
              <div>
                <a href="https://daily-news-mocha.vercel.app/ ">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Yuvraj210103">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${textutils})`,backgroundSize:"100% 100%" }}
            className="flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center">
              <span className="text-2xl font-bold text-white bg-[#525d8d63] tracking-wider  ">
                Text Analyzer
              </span>
              <div>
                <a href="https://yuvraj210103.github.io/Text-Utils/">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Yuvraj210103">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
