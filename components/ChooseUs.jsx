import { tall_house } from "@/public/images";
import Image from "next/image";
import React from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrShieldSecurity, GrStatusGood } from "react-icons/gr";
import { SlSupport } from "react-icons/sl";

const ChooseUs = () => {
  const ServiceCard = ({ icon, title, text }) => {
    return (
      <div className="flex items-start md:items-start gap-7  md:max-w-max ">
        <div className="p-[0.94rem] md:px-[1.12rem] md:py-[1.09rem] bg-secondary text-primary">
          {icon}
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h3 className="text-heading text-lg font-bold tracking-[0.045rem]">
            {title}
          </h3>
          <p className="text text-left w-[14rem] lg:w-[20.44106rem]">{text}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="mt-small md:mt-medium lg:mt-large flex flex-col-reverse md:flex-row gap-4 md:justify-around">
      <div className="">
        <Image priority src={tall_house} alt="Tall House" className="" />
      </div>
      <div className="flex flex-col max-w-full ">
        <article className="flex flex-col gap-5 w-full px-4  md:w-[24.31606rem] lg:w-[31.6875rem] ">
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
          <h1 className="heading ">What Makes Us Different </h1>
          <p className="text ">
            Welcome to Tecil, where our commitment to excellence is woven into
            the fabric of our story. Established with a vision to redefine the
            real estate experience, we take pride in offering more than just
            properties; we provide a journey toward finding a home that
            resonates with your aspirations.
          </p>
        </article>
        <div className="flex flex-col mt-4 gap-6 pl-4">
          {ServiceCard({
            icon: <IoPricetagsOutline />,
            title: "Best Price",
            text: "Our unwavering commitment to putting clients first shapes every decision we make",
          })}
          {ServiceCard({
            icon: <GrStatusGood />,
            title: "Best Interest",
            text: "Our unwavering commitment to putting clients first shapes every decision we make",
          })}
          {ServiceCard({
            icon: <SlSupport />,
            title: "Client-Centric Philosophy",
            text: "Our unwavering commitment to putting clients first shapes every decision we make",
          })}
          {ServiceCard({
            icon: <GrShieldSecurity />,
            title: "Security",
            text: "Our unwavering commitment to putting clients first shapes every decision we make",
          })}

          <a
            href="#contact"
            className="bg-primary text-white font-bold px-4 md:px-8 py-5 rounded-xl max-w-max"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
