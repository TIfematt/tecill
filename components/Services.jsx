import React from "react";
import { FaHouse } from "react-icons/fa6";

const Services = () => {
  const ServiceCard = ({ icon, title, text }) => {
    return (
      <div className="flex flex-col items-center md:items-start gap-7 max-w-max ">
        <div className="p-[0.94rem] md:px-[1.12rem] md:py-[1.09rem] bg-secondary text-primary">
          {icon}
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-heading text-lg font-bold tracking-[0.045rem]">
            {title}
          </h3>
          <p className="text text-center md:text-left w-[19.18rem] md:w-[13rem] lg:w-[17.16rem]">
            {text}
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="mt-small md:mt-medium lg:mt-large flex flex-col md:flex-row gap-small md:gap-medium lg:gap-large  px-4 lg:px-[5rem] items-center">
        <article className="flex flex-col md:flex-row w-full gap-5 md:justify-between">
          <div className="flex flex-col gap-5">
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
              Our Services
            </h3>
            <h1 className="heading  md:w-[63%] ">The Values We Give To You</h1>
          </div>
          <p className="text md:w-[45%]">
            With a focus on forward-thinking services, we seamlessly integrate
            the latest industry trends, cutting-edge technology, and modern
            design principles into every facet of your real estate experience.
            Whether you're seeking a new home, considering an investment, or
            looking to sell a property, our comprehensive approach ensures that
            you're not just a part of the market — you're at the forefront of it
          </p>
        </article>
      </section>
      <div className="md:w-full  mt-small md:mt-medium lg:mt-large flex flex-col md:flex-row flex-wrap items-center md:items-start justify-evenly gap-9 lg:gap-0">
        {ServiceCard({
          icon: <FaHouse />,
          title: "Buy A Home",
          text: "With a focus on forward-thinking services, we seamlessly integrate the latest industry trends, cutting-edge technology, and modern design ",
        })}
        {ServiceCard({
          icon: <FaHouse />,
          title: "Rent A Home",
          text: "With a focus on forward-thinking services, we seamlessly integrate the latest industry trends, cutting-edge technology, and modern design ",
        })}
        {ServiceCard({
          icon: <FaHouse />,
          title: "Sell Property",
          text: "With a focus on forward-thinking services, we seamlessly integrate the latest industry trends, cutting-edge technology, and modern design ",
        })}
        {ServiceCard({
          icon: <FaHouse />,
          title: "Become An Agent",
          text: "With a focus on forward-thinking services, we seamlessly integrate the latest industry trends, cutting-edge technology, and modern design ",
        })}
      </div>
    </>
  );
};

export default Services;
