/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { ConstContactDetails } from "@/constants/ConstContactDetails";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#0a192f] w-full h-full flex flex-col justify-center items-center p-4 py-12"
    >
      <form
        method="POST"
        action="https://getform.io/f/b114f452-8a0a-41d7-8b08-748fc3c875d5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>

          {/* contact icons */}

          <div className="flex my-12">
            <div className="mx-2 list-none  flex flex-col">
              <a
                className="bg-blue-600 px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
                href="https://www.linkedin.com/in/yuvraj-singh-972877222/"
                target="_blank"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
            <div className=" mx-2 list-none flex flex-col">
              <a
                className="bg-blue-500 px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
                href="https://github.com/Yuvraj210103"
                target="_blank"
              >
                <FaGithub size={25} />
              </a>
            </div>
            <div className=" mx-2 list-none flex flex-col">
              <a
                className="bg-[#6fc2b0] px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
                href={`mailto:${ConstContactDetails.CONST_EMAIL_ID}?subject=Let's Connect&body=Hey Yuvraj Singh`}
                target="_blank"
              >
                <HiOutlineMail size={25} />
              </a>
            </div>
            <div className=" mx-2 list-none flex flex-col">
              <a
                className="bg-[#565f69] px-4 py-2 rounded-sm shadow-lg shadow-[#040c16] hover:scale-110 duration-500 "
                href="/assets/my_resume.pdf"
                download={"Yuvraj_Singh_Resume.pdf"}
              >
                <BsFillPersonLinesFill size={25} />
              </a>
            </div>
          </div>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -{" "}
            {ConstContactDetails.CONST_EMAIL_ID}
          </p>
        </div>

        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          required
          minLength={2}
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          id=""
          rows={10}
          placeholder="Message"
          required
          minLength={3}
        />

        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 hover:border-pink-600 my-3 ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
