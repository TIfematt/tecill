"use client";

import Image from "next/image";
import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { LuQuote } from "react-icons/lu";
import { john_doe } from "@/public/images";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={[{ opacity: 1 }, { x: [40, 0] }]}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="bg-secondary relative w-[15.187rem] md:w-[15.75rem] md:h-[14.62rem] lg:w-[23rem] lg:h-[17.93rem] h-[14.38rem] p-[.94rem]"
        >
          <Image
            fill
            src={image}
            alt={`Testimonial image of ${name}`}
            className=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={[{ opacity: 1 }, { x: [-40, 0] }]}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="relative z-10 bg-white w-[15rem] md:w-[14rem] h-[16.44rem] lg:w-[18.9rem] lg:h-[17.2rem] bottom-[6rem] left-12 md:bottom-[5rem] lg:bottom-[5rem] md:left-[5rem] lg:left-[6rem]"
        >
          <div className="relative bottom-8 left-16 md:left-0 lg:left-16 max-w-max bg-secondary rounded-[50%] shadow-card p-4">
            <LuQuote className="text-primary" />
          </div>
          <div className="-mt-[2rem]">
            <h1 className="font-bold text-lg lg:text-xl pl-4">{name}</h1>
            <p className="text p-4">{text}</p>
          </div>
        </motion.div>
      </div>
    );
  };
  return (
    <section className="bg-primary mt-small md:mt-medium lg:mt-large md:mx-6 lg:mx-medium flex flex-col md:flex-row md:justify-evenly px-4 pt-16 md:pt-0 md:px-0">
      <div className="md:mt-[5rem]">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-white text-2xl lg:text-4xl md:text-[1.5rem] font-semibold tracking-wider  md:tracking-[0.08rem] lg:tracking-[0.09rem] w-[16rem] md:w-[16rem] lg:w-[27.25rem]"
        >
          What we have done And what our Customers say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-white opacity-80  text-sm lg:text-base tracking-[0.035rem] lg:tracking-[0.04rem] w-[19rem] md:w-[14rem] lg:w-[26.03125rem] mt-4 mb-8"
        >
          We are to help you build a excellent build, with us nothing is
          impossible. See what we have done and what they have to say about our
          work perform.
        </motion.p>
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
