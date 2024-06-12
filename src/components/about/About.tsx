"use server";
import Image from "next/image";
import React from "react";
import groupAboutImage from "../../../public/assets/groupAboutImage.png";
import groupImage from "../../../public/assets/groupImage.png";
import Card from "../card/Card";

const About = () => {
  return (
    <Card id="About">
      <div className=" opacity-0 w-full h-full absolute  hover:animate-onHover  ">
          <Image src={groupImage} alt="logo" objectFit="cover" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 transition-all  h-[25rem] items-center">
        
        <div className="h-[20rem] relative">
          <h1 className="uppercase text-white tracking-tight leading-none font-bold mb-4 text-[7rem]">
            About us
          </h1>

          <div className="absolute w-[320px] h-[320px] hover:opacity-0 block top-[6.1rem] left-[10rem]">
            <Image alt="image" className="" src={groupAboutImage} />
          </div>
        </div>
        <p className=" text-[#FFFFFF] opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Card>
  );
};

export default About;
