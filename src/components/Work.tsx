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
        {workGithubUrl && (
          <a href={workGithubUrl} target="_blank">
            <FiGithub className="text-2xl font-semibold" />
          </a>
        )}
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
            workDescription="Built and maintained a full-stack ERP platform for security agencies to manage guards,shifts, patrols, and operations. Key features include drag-and-drop shift scheduling, patrol creation and tracking, invoicing, paystub generation, and attendance management."
            workDemoUrl="https://tactiqapp.com/"
            workGithubUrl=""
            workName="Tactiq – ERP Tool for Security Agencies"
          />
          <WorkItem
            workDescription="CareerEase is a career preparation platform built with React.js and TypeScript. It helps users set up their profile, generate AI-powered resumes, prepare for interviews, scrape and track jobs, and automate job applications."
            workDemoUrl="https://careerease.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103/CareerEase"
            workName="CareerEase"
          />

          <WorkItem
            workDescription="Developed a web app for attendance tracking with class, student, and faculty management. Implemented location-verified QR code marking for secure, real-time sessions."
            workDemoUrl="https://attendlytics.vercel.app"
            workGithubUrl="https://github.com/Yuvraj210103/attendify"
            workName="Attendlytics"
          />

          <WorkItem
            workDescription="Developed a dynamic notebook application using the MERN stack."
            workDemoUrl="https://iinotebook.vercel.app/"
            workGithubUrl="https://github.com/Yuvraj210103"
            workName="iNotebook-cloud"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
