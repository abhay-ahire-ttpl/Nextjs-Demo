"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import { menu } from "../../utils/constant";

const Header = () => {
  return (
    <section className="w-full p-4 ">
      <header className="text-white flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="/">
            <Image src={logo} alt="logo" width={35} height={30} />
          </Link>
          <p className="font-semibold text-[1rem]">Lorem</p>
        </div>
        <div className="flex gap-2">
          {menu.map((item: string, index: number) => (
            <Link
              href={`#${item}`}
              className="text-[1rem] font-semibold hover:text-gray-300 pr-2"
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
      </header>
    </section>
  );
};

export default Header;
