import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const ContactForm = () => {
  return (
    <div
      name="ContactForm"
      className="bg-[#0a192f] w-full h-full flex flex-col justify-center items-center p-4 py-12"
    >
      

      <form
        method="POST"
        action="https://getform.io/f/925f92fb-5a6a-4573-9127-892f9ca059ff"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>

          {/* contact icons */}

          <div className="flex my-12  md:hidden ">
        <div className="mx-2 list-none  flex flex-col">
          <a
            className="bg-blue-600 px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
            href="https://www.linkedin.com/in/yuvraj-singh-972877222/"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <div className=" mx-2 list-none flex flex-col">
          <a
            className="bg-blue-500 px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
            href="https://github.com/Yuvraj210103"
          >
            <FaGithub size={25} />
          </a>
        </div>
        <div className=" mx-2 list-none flex flex-col">
          <a
            className="bg-[#6fc2b0] px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
            href="https://mail.google.com/"
          >
            <HiOutlineMail size={25} />
          </a>
        </div>
        <div className=" mx-2 list-none flex flex-col">
          <a
            className="bg-[#565f69] px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
            href="/"
          >
            <BsFillPersonLinesFill size={25} />
          </a>
        </div>
      </div>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - ys146228@gmail.com
          </p>
        </div>

        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />

        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          id=""
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 hover:border-pink-600 my-3 ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};
