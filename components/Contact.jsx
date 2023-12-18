"use client";

import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-secondary mt-small md:mt-medium lg:mt-large flex flex-col md:flex-row justify-evenly py-8"
    >
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={[{ opacity: 1 }, { x: [-40, 0] }]}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col  gap-5"
      >
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
          Get in Touch
        </h3>
        <h1 className="heading pr-4 md:p-0">Contact Us </h1>
        <p className="text p-4 md:p-0 max-w-max md:max-w-[21rem] lg:max-w-[27.4rem]">
          Welcome to Tecil, where our commitment to excellence is woven into the
          fabric of our story. Established with a vision to red
        </p>
      </motion.article>
      <form method="POST" className="px-4 md:px-0 flex flex-col gap-7">
        <h1 className="text-heading font-semibold text-lg md:text-base lg:text-lg">
          Send Us a Message
        </h1>
        <div className="relative flex flex-col gap-[1.25rem] max-w-max">
          <input
            type="text"
            placeholder="Enter Your Name Here"
            className="p-[1.125rem] bg-white w-[18rem] md:w-[21rem] lg:w-[27rem]"
          />
          <input
            type="text"
            placeholder="Enter Your Email Here"
            className="p-[1.125rem] bg-white w-[18rem] md:w-[21rem] lg:w-[27rem]"
          />
          <textarea
            type="text"
            placeholder="Enter Your Message Here"
            className="p-[1.125rem] bg-white w-[18rem] h-[10.6rem] md:w-[21rem] lg:w-[27rem]"
          />
          <button className="bg-primary text-white p-4 md:max-w-max ">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
