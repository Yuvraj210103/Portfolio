/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

interface WorkItemProps {
  workName: string;
  workThumbnailUrl: string;
  workDemoUrl: string;
  workGithubUrl: string;
}

const WorkItem = ({
  workDemoUrl,
  workGithubUrl,
  workName,
  workThumbnailUrl,
}: WorkItemProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${workThumbnailUrl})`,
        backgroundSize: "100% 100%",
        objectFit: "cover",
        WebkitBackgroundSize: "cover",
      }}
      className="flex shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div bg-opacity-10 bg-inherit"
    >
      {/* Hover effects */}

      <div className="flex flex-col opacity-0 group-hover:opacity-100 justify-center items-center duration-500">
        <span className="py-2 px-4 rounded text-xl font-bold text-white bg-[#525d8de9] tracking-wider">
          {workName}
        </span>
        <div>
          <a href={workDemoUrl}>
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={workGithubUrl}>
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-purple-500 text-gray-200 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div id="work" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6 ">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <WorkItem
            workThumbnailUrl="assets/images/thumbnail_inotebook.png"
            workDemoUrl="https://iinotebook.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="iNotebook-cloud"
          />

          <WorkItem
            workThumbnailUrl="/assets/images/thumbnail_ecom.svg"
            workDemoUrl="https://ecommerce-yuvraj.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="E-commerce Application"
          />

          <WorkItem
            workThumbnailUrl="assets/images/thumbnail_news_app.jpg"
            workDemoUrl="https://daily-news-mocha.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="News Application"
          />

          <WorkItem
            workThumbnailUrl="assets/images/thumbnail_text_util.jpg"
            workDemoUrl="https://yuvraj210103.github.io/Text-Utils/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="Text Analyzer"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
