import Image from "next/image";
import React, { useState } from "react";
import Card from "../card/Card";
import plusIcon from "../../../public/assets/plusIcon.svg";
import minusIcon from "../../../public/assets/minus.svg";
import bannerImage from "../../../public/assets/banerImage.png";

const Accordion = () => {
  const [tabOpen, setTabOpen] = useState(0);
  return (
    <div className="gap-2 mt-4">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
        key={index}
          onClick={() => {
            if (index === tabOpen) setTabOpen(0);
            else setTabOpen(index);
          }}
        >
          {tabOpen === index && (
            <Image
              className="absolute w-[100%] h-[40px]"
              width={100}
              height={100}
              src={bannerImage}
              alt=""
            />
          )}
          <div className="container m-auto max-w-[1050px]  flex flex-col  relative p-6">
            <div className="flex cursor-pointer justify-between w-full h-[40px]">
              <p className="text-white font-medium uppercase text-[1rem] lg:text-[1rem]">
                LOREM IPSUM DOLOR SIT AMET
              </p>
              <Image
                className="text-white h-max"
                src={tabOpen === index ? plusIcon : minusIcon}
                alt=""
              />
            </div>
            {tabOpen === index && (
              <p className="text-[#a1a1a1] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
