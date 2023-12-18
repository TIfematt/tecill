import Image from "next/image";
import React from "react";
import { properties } from "@/public/images";

const Listings = () => {

  // properties card
  const Properties = ({image, title, address, price}) => {
    return(
      <div className="flex flex-col gap-7 items-start">
        <div className="bg-secondary relative w-[18.187rem] md:w-[18.75rem] md:h-[14.62rem] lg:w-[23rem] lg:h-[17.93rem] h-[17.38rem] p-[.94rem]">
          <Image 
            src={image}
            alt={`house listing in ${address}`}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-heading text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
            {title}
          </h1>
          <p className="text-base lg:text-xl text-primary tracking-wider">
            {address}
          </p>
          <p className="text-lg lg:text-xl text-primary tracking-wider">
            {price}
          </p>
        </div>
      </div>
    )
  }
  return (
    <section className="mt-small md:mt-medium lg:mt-large flex flex-col">
      <div className="flex flex-col gap-5 pl-4 md:pl-medium">
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
          Our Properties
        </h3>
        <h1 className="heading md:w-[21.125rem]">Most Popular Listings</h1>
      </div>
      <div className="mt-7 md:mt-10 flex flex-col md:flex-row md:flex-wrap items-center gap-8 md:justify-evenly">
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
        {Properties({
          image: properties,
          title: 'The Grand Estate',
          address: 'Wuse Zone 2',
          price: '#1.9million'
        })}
      
      </div>
    </section>
  );
};

export default Listings;
