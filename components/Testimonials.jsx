"use client";

import Image from "next/image";
import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { john_doe } from "@/public/images";

const Testimonials = () => {
  
  const [currentIndex, setCurrentIndex] = React.useState(0);


  const teminonies = [
    {
      title: "John Doe",
      text: "We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform.",
      image: john_doe,
    },
    {
      title: "Jane Smith",
      text: "We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform.",
      image: john_doe,
    },
    {
      title: "Foo Bar",
      text: "We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform.",
      image: john_doe,
    },
  ];

  const TestimonialCards = ({ index, name, image, text }) => {
    return (
      <div className={index === currentIndex ? "flex flex-col" : "hidden"}>
        <div className="bg-secondary relative w-[15.187rem] md:w-[15.75rem] md:h-[14.62rem] lg:w-[23rem] lg:h-[17.93rem] h-[14.38rem] p-[.94rem]">
          <Image
            fill
            src={image}
            alt={`Testimonial image of ${name}`}
            className=""
          />
        </div>
        <div className="relative z-10 bg-white w-[15rem] md:w-[14rem] h-[16.44rem] lg:w-[18.9rem] lg:h-[17.2rem] bottom-[6rem] left-12 md:bottom-[5rem] lg:bottom-[5rem] md:left-[5rem] lg:left-[6rem]">
          <div className="relative bottom-12 left-16 md:left-0 lg:left-16 max-w-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="101"
              height="101"
              viewBox="0 0 101 101"
              fill="none"
            >
              <g filter="url(#filter0_d_26_461)">
                <circle cx="50.5" cy="40.0283" r="35" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_d_26_461"
                  x="0.5"
                  y="0.0283203"
                  width="100"
                  height="100"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="7.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.137255 0 0 0 0 0.529412 0 0 0 0 0.752941 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_26_461"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_26_461"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="-mt-[2rem]">
            <h1 className="font-bold text-lg lg:text-xl pl-4">{name}</h1>
            <p className="text p-4">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-primary mt-small md:mt-medium lg:mt-large md:mx-6 lg:mx-medium flex flex-col md:flex-row md:justify-evenly px-4 pt-16 md:pt-0 md:px-0">
      <div className="md:mt-[5rem]">
        <h1 className="text-white text-2xl lg:text-4xl md:text-[1.5rem] font-semibold tracking-wider  md:tracking-[0.08rem] lg:tracking-[0.09rem] w-[16rem] md:w-[16rem] lg:w-[27.25rem]">
          What we have done And what our Customers say
        </h1>
        <p className="text-white opacity-80  text-sm lg:text-base tracking-[0.035rem] lg:tracking-[0.04rem] w-[19rem] md:w-[14rem] lg:w-[26.03125rem] mt-4 mb-8">
          We are to help you build a excellent build, with us nothing is
          impossible. See what we have done and what they have to say about our
          work perform.
        </p>
        {/* Medium and large screen button */}
        <div className="relative hidden md:flex top-20">
          <button
            className="py-4 px-[0.94rem]"
            onClick={() =>
              setCurrentIndex(
                currentIndex === 0 ? teminonies.length - 1 : currentIndex - 1
              )
            }
          >
            <IoIosArrowRoundBack className="text-white  w-8 h-8 lg:w-12 lg:h-12" />
          </button>
          <button
            className="py-4 px-[0.94rem] bg-white"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % teminonies.length)
            }
          >
            <IoIosArrowRoundForward className="text-primary  w-8 h-8 lg:w-12 lg:h-12" />
          </button>
        </div>
      </div>
      <div className="mt-12 relative ">
        {teminonies.map((testimonial, index) => (
          <TestimonialCards
            key={index}
            index={index}
            name={testimonial.title}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </div>
      {/* mobile screen button */}
      <div className="max-w-max flex md:hidden relative left-[10rem] bottom-8">
        <button
          className="py-4 px-[0.94rem]"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? teminonies.length - 1 : currentIndex - 1
            )
          }
        >
          <IoIosArrowRoundBack className="text-white w-6 h-6  " />
        </button>
        <button
          className="py-4 px-[0.94rem] bg-white hover:bg-secondary"
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % teminonies.length)
          }
        >
          <IoIosArrowRoundForward className="text-primary w-6 h-6 " />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
