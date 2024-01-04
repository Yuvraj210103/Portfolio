/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const skillsArray = [
  { skillName: "HTML", skillImgSrc: "/assets/html.png" },
  { skillName: "CSS", skillImgSrc: "/assets/css3.png" },
  { skillName: "Javascript", skillImgSrc: "/assets/javascript.png" },
  { skillName: "React-Js", skillImgSrc: "/assets/react.png" },
  {
    skillName: "Github",
    skillImgSrc: "/assets/github.png",
    skillImgIsInvert: true,
  },
  { skillName: "Node-Js", skillImgSrc: "/assets/nodejs.png" },
  {
    skillName: "Tailwind-Css",
    skillImgSrc: "/assets/tailwind_css.png",
    skillImgIsInvert: true,
  },
  { skillName: "Mongo-Db", skillImgSrc: "/assets/mongodb.png" },
];

export const Skills = () => {
  return (
    <div id="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  py-4 font-bold border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies i have worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsArray.map((data, index) => {
            return (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-[1.01] duration-500 "
              >
                <img
                  className={`w-20 mx-auto ${
                    data.skillImgIsInvert && "invert"
                  }`}
                  src={data.skillImgSrc}
                  alt=""
                />
                <p className="my-4">{data.skillName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
