/* eslint-disable react/jsx-no-comment-textnodes */
// src/components/Experience.tsx
import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "LivTech",
    role: "Full Stack Developer",
    duration: "March 2024 – Present",
    description: [
      "Worked on modern web applications using React.js, Node.js, and Firebase.",
      "Implemented scalable solutions and optimized performance for client projects.",
      "Collaborated directly with clients to deliver production-ready applications.",
    ],
  },
  {
    company: "Nearbuck Technologies",
    role: "Full Stack Developer",
    duration: "Dec 2022 – March 2024",
    description: [
      "Built an accounting software system to streamline financial processes.",
      "Developed the company’s core website to boost its digital presence.",
      "Optimized workflows and improved efficiency for business operations.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Experience
          </p>
          <p className="py-6 ">// Relevant professional work experience</p>
        </div>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-pink-400">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-300">{exp.company}</p>
              <span className="block text-sm text-gray-400 mb-4">
                {exp.duration}
              </span>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
