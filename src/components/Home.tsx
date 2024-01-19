/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div id="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col gap-1 justify-center h-full ">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yuvraj Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full stack developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Full stack developer specializing in building exceptional
          digital experience. Currently, I'm focused on building responsive
          full-stack web application
        </p>

        <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-100">
              <HiArrowNarrowRight className="ml-3 hover:" />
            </span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
