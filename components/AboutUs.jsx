import { window_house } from "@/public/images";
import Image from "next/image";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const AboutUs = () => {
  return (
    <section>
      <div className="w-full bg-secondary py-[4rem] md:py-4 flex flex-col md:flex-row items-center">
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            500+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Amazing Properties
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            300+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Happy Clients
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            50+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Award Winning
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[7.5rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            20+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Operating Years
          </h2>
        </div>
      </div>
      {/* About us */}
      <div className="mt-small md:mt-medium lg:mt-large flex flex-col md:flex-row gap-small md:gap-medium lg:gap-large md:justify-around px-2 md:px-8 items-center">
        <article className="flex flex-col md:w-[97%] lg:w-[35%] gap-5">
          <h3 className="text-primary text-base md:text-xl lg:text-2xl flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="16"
              viewBox="0 0 103 16"
              fill="none"
            >
              <path
                d="M102.038 8.70711C102.428 8.31658 102.428 7.68342 102.038 7.29289L95.6737 0.928932C95.2832 0.538408 94.65 0.538408 94.2595 0.928932C93.869 1.31946 93.869 1.95262 94.2595 2.34315L99.9164 8L94.2595 13.6569C93.869 14.0474 93.869 14.6805 94.2595 15.0711C94.65 15.4616 95.2832 15.4616 95.6737 15.0711L102.038 8.70711ZM0.330566 9H101.331V7H0.330566V9Z"
                fill="#140F78"
              />
            </svg>{" "}
            About Us
          </h3>
          <h1 className="heading ">
            We Are Committed To Selling The Best Properties
          </h1>
          <p className="text ">
            Welcome to Tecil Homes, where our commitment to excellence is woven
            into the fabric of our story. Established with a vision to redefine
            the real estate experience, we take pride in offering more than just
            properties; we provide a journey toward finding a home that
            resonates with your aspirations.
          </p>
        </article>
        <div className="">
          <Image alt="window house" src={window_house} className="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
