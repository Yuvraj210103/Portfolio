/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200 z-20">
      <div>
        <img
          src="/assets/logo.png"
          alt=""
          className="w-[50px] h-[50px] mx-2 opacity-100 rounded-full"
        />
      </div>

      <div className="hidden md:flex">
        <ul className="flex">
          <li className="px-4 cursor-pointer">
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            {" "}
            <Link to="About" smooth={true} duration={500}>
              About{" "}
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            {" "}
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            {" "}
            <Link to="Work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            {" "}
            <Link to="ContactForm" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu */}

      <div onClick={handleClick} className="md:hidden z-20 cursor-pointer ">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10 md:hidden"
        }
      >
        <li className="py-6 text-4xl px-4 cursor-pointer">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl px-4 cursor-pointer">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            About{" "}
          </Link>
        </li>
        <li className="py-6 text-4xl px-4 cursor-pointer">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl px-4 cursor-pointer">
          <Link onClick={handleClick} to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl px-4 cursor-pointer">
          <Link
            onClick={handleClick}
            to="ContactForm"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="md:flex flex-row md:fixed md:flex-col md:top-[35%] md:left-0 hidden top-[80%] ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[100px] duration-300 px-4 cursor-pointer bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[100px] duration-300 px-4 cursor-pointer bg-blue-500">
            <a
              href="https://github.com/Yuvraj210103"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[100px] duration-300 px-4 cursor-pointer bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[100px] duration-300 px-4 cursor-pointer bg-[#565f69]">
            <a
              //href={resume}
              //download={resume}
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
