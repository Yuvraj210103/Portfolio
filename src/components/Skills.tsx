/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const skillsArray = [
  { skillName: "React-Js", skillImgSrc: "/assets/images/react.png" },
  {
    skillName: "Next-Js",
    skillImgSrc: "/assets/images/next_js.svg",
    skillImgIsInvert: true,
  },
  { skillName: "Node-Js", skillImgSrc: "/assets/images/nodejs.png" },
  { skillName: "Javascript", skillImgSrc: "/assets/images/javascript.png" },
  { skillName: "Typescript", skillImgSrc: "/assets/images/typescript.png" },

  { skillName: "Firebase", skillImgSrc: "/assets/images/firebase.png" },
  { skillName: "Mongo-Db", skillImgSrc: "/assets/images/mongodb.png" },
  {
    skillName: "Express-Js",
    skillImgSrc: "/assets/images/express_js.png",
    skillImgIsInvert: true,
  },
  {
    skillName: "Tailwind-Css",
    skillImgSrc: "/assets/images/tailwind_css.png",
    skillImgIsInvert: true,
  },
  { skillName: "HTML", skillImgSrc: "/assets/images/html.png" },
  { skillName: "CSS", skillImgSrc: "/assets/images/css3.png" },

  {
    skillName: "Github",
    skillImgSrc: "/assets/images/github.png",
    skillImgIsInvert: true,
  },
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
                className="shadow-md shadow-[#040c16] hover:scale-[1.01] duration-500 flex flex-col justify-between gap-4 p-4"
              >
                <img
                  className={`w-20 min-h-20 mx-auto object-fill ${
                    data.skillImgIsInvert && "invert"
                  }`}
                  src={data.skillImgSrc}
                  alt="skill"
                />
                <div className="font-medium">{data.skillName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
