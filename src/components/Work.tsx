/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface WorkItemProps {
  workName: string;
  workDemoUrl: string;
  workGithubUrl: string;
  workDescription: string;
}

const WorkItem = ({
  workDemoUrl,
  workGithubUrl,
  workName,
  workDescription,
}: WorkItemProps) => {
  return (
    <div className="flex flex-col h-full justify-between rounded-md overflow-hidden bg-[#122644]">
      <div className="flex flex-col gap-4 p-4">
        <div className="font-bold text-white text-lg">{workName}</div>
        <div className="text-base font-medium line-clamp-2">
          {workDescription}
        </div>
      </div>
      <div className=" flex items-center gap-4 w-full p-4 shadow-md">
        <a href={workGithubUrl} target="_blank">
          <FiGithub className="text-2xl font-semibold" />
        </a>
        <a href={workDemoUrl} target="_blank">
          <FiExternalLink className="text-2xl font-semibold" />
        </a>
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

        <div className="grid sm:grid-cols-2 gap-8">
          <WorkItem
            workDescription="Developed a dynamic notebook application using the MERN stack."
            workDemoUrl="https://iinotebook.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="iNotebook-cloud"
          />

          <WorkItem
            workDescription="Crafted a robust e-commerce platform using React.js, delivering an great online shopping experience."
            workDemoUrl="https://ecommerce-yuvraj.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="E-commerce Application"
          />

          <WorkItem
            workDescription="News application made with react.js which delivers daily latest news"
            workDemoUrl="https://daily-news-mocha.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="News Application"
          />

          <WorkItem
            workDescription="Text analyzer made using react.js, analyze you texts seamlessly on your fingertip"
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
