import { morden_house } from "@/public/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex">
      <div className="bg-primary md:h-auto md:w-9/12 flex flex-col md:flex-row items-center md:py-[5.6rem] md:px-[2.38rem] lg:px-[7.5rem] gap-7 lg:gap-[3.8rem] pt-[2.38rem] px-[1.72rem]  ">
        <div className="flex flex-col gap-[0.94rem]">
          <h1 className="text-white text-[2rem] lg:text-[3rem] md:text-[2.5rem] font-semibold tracking-wider  md:tracking-normal lg:tracking-[0.12rem] md:w-[26.25rem] lg:w-[30.93rem] lg:leading-[5rem]">
            Your Dream Home, Now A Reality
          </h1>
          <p className="text-white text-sm lg:text-base tracking-[0.035rem] lg:tracking-[0.04rem] md:w-[19.25rem] lg:w-[31.68rem]">
            Discover a fusion of style and functionality in all our residences,
            From sleek architectural lines to smart home features, each space
            has been thoughtfully crafted to reflect the epitome of contemporary
            living for those who seek both elegance and convenience.
          </p>
          <a
            href="#contact"
            className="bg-secondary text-primary w-max h-max px-4 py-[1.12rem] md:py-5 font-semibold rounded-lg mt-8 md:mt-0"
          >
            Contact Us
          </a>
          {/* Mobile screen */}
          <div className="relative flex md:hidden top-12 w-full px-8 left-0">
            <Image
              className=" z-20 h-auto w-auto  md:pb-20"
              src={morden_house}
              unoptimized
              quality={80}
              alt="house image"
            />
          </div>
        </div>
        {/* Big screen image */}
        <Image
          className="hidden md:flex z-20 h-auto w-[50%] absolute mt-[5rem] right-0"
          src={morden_house}
          unoptimized
          quality={80}
          alt="house image"
        />
      </div>

      <div className="bg-secondary w-3/12 hidden md:flex outline-none "></div>
    </section>
  );
};

export default Hero;
