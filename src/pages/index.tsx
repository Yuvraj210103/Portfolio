/* eslint-disable react/no-unescaped-entities */
import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import { Skills } from "@/components/Skills";
import Work from "@/components/Work";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
