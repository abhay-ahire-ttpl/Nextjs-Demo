"use server";
import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/assets/banerImage.png";

const Banner = () => {
  return (
    <div className="flex mt-36 h-[44px] overflow-hidden">
      <Image src={bannerImage} alt="image" />

      <div className="animate-marquee whitespace-nowrap text-white flex gap-8 items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((_, index2) => (
          <span className="text-[1.2rem] font-bold  uppercase" key={index2}>
            lorem ipsum
          </span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
