"use client";
import React, { useState } from "react";
import { navLinks } from "@/constant";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { blue_logo } from "@/public/images";
import Image from "next/image";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { motion } from "framer-motion";


const BlogNav = () => {
  const [toggle, setIsToggle] = useState(false);

  return (
    <nav className="flex sticky top-0 z-50 justify-evenly">
      {/* Mobile Nav */}
      <div className="bg-transparent flex md:hidden items-center justify-around w-full py-[0.31rem]">
        <HiMenuAlt1
          onClick={() => setIsToggle(!toggle)}
          className=" w-[2rem] h-[2rem] text-white"
        />
        <a href="/">
          <Image
            alt="logo"
            src={blue_logo}
            className="relative w-auto h-auto"
          />
        </a>
        <HiMagnifyingGlass className="text-white w-6 h-6" />
        {toggle && (
          <motion.div
            whileInView={[{ opacity: 1 }, { x: [-240, 0] }]}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[100vh] bg-primary absolute top-0 w-[80vw] left-0 z-10"
          >
            <HiX
              className="absolute right-0 text-white mr-[12px] top-[12px] w-[2rem] h-[2rem]"
              onClick={() => setIsToggle(!toggle)}
            />
            <ul className="flex flex-col gap-[2.5rem] mt-[3rem] pl-[2rem]">
              {navLinks.map((items) => {
                return (
                  <li key={items.key} className="flex flex-col gap-[3rem]">
                    <a
                      href={items.href}
                      key={`${items.key} + 1`}
                      className="text-white uppercase"
                    >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Big screen Nav */}
      <div className="hidden w-9/12 bg-transparent md:flex items-center justify-evenly py-3">
        <a href="/">
          <Image
            alt="logo"
            src={blue_logo}
            className="relative w-auto h-auto"
          />
        </a>
        <div className="items-center justify-evenly">
          <ul className="flex  gap-[2.5rem] items-center  ">
            {navLinks.map((items) => {
              return (
                <li key={items.key} className="flex flex-col gap-small">
                  <a
                    href={items.href}
                    key={`${items.key} + 1`}
                    className="text-white text-[1rem] md:text-xs font-[600] tracking-[0.04rem] capitalize"
                  >
                    {items.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center">
          <HiMagnifyingGlass className="mr-7" />
          En
          <LiaFlagUsaSolid />
        </div>
      </div>
      {/* <div className="hidden bg-secondary md:flex gap-7 w-3/12 items-center justify-evenly outline-none">
        <div className="flex items-center">
          <HiMagnifyingGlass className="mr-7" />
          En
          <LiaFlagUsaSolid />
        </div>
      </div> */}
    </nav>
  );
};

export default BlogNav;
