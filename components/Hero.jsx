import { hero_house } from "@/public/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex">
      <div className="bg-primary md:w-9/12 flex flex-col md:flex-row items-center md:py-[5.6rem] md:px-[2.38rem] lg:px-[7.5rem] gap-7 lg:gap-[3.8rem] pt-[2.38rem] px-[1.72rem] md:pt-0">
        <div className="flex flex-col gap-[0.94rem]">
          <h1 className="text-white text-[2rem] lg:text-[3rem] md:text-[2.5rem] font-semibold tracking-wider  md:tracking-widest lg:tracking-[0.12rem] md:w-[26.25rem] lg:w-[30.93rem] lg:leading-[5rem]">
            Your Dream Home, Now A Reality
          </h1>
          <p className="text-white text-sm lg:text-base tracking-[0.035rem] lg:tracking-[0.04rem] md:w-[23.25rem] lg:w-[31.68rem]">
            Discover a fusion of style and functionality in all our residences,
            From sleek architectural lines to smart home features, each space
            has been thoughtfully crafted to reflect the epitome of contemporary
            living for those who seek both elegance and convenience.
          </p>
          <a
            href="#contact"
            className="bg-secondary text-primary w-max h-max px-4 py-[1.12rem] md:py-5 font-semibold rounded-lg"
          >
            Contact Us
          </a>
        </div>
        {/* <div className="relative w-[22.1rem] h-[17.8rem] md:w-[33.6rem] md:h-[28.125rem] lg:w-[46.76rem] lg:h-[37.5rem] z-20">
          <Image
            layout="responsive" // Set layout to responsive
            src={hero_house}
            alt="house image"
            width={1000} // Set a width that suits your image
            height={800} // Set a height that suits your image
            quality={100} // Adjust quality as needed
          />
        </div> */}
        {/* <div className="relative w-full h-[30rem] md:w-[40rem] lg:w-[50rem] z-20">
          <Image
            fill
             // Fill the parent container
            objectFit="cover" // Ensure image covers the container
            src={hero_house}
            alt="house image"
            quality={100} // Adjust quality as needed
          />
        </div> */}
        {/* <div      className="relative w-[22.1rem] h-[17.8rem] md:w-[33.6rem] md:h-[28.125rem] lg:w-[46.76rem] lg:h-[37.5rem] z-20" */}
{/* > */}
          <Image
          
            className="w-[22.1rem] h-[17.8rem] md:w-[33.6rem] md:h-[28.125rem] lg:w-[46.76rem] lg:h-[37.5rem] z-20"
            src={hero_house}
            alt="house image"
          />
        {/* </div> */}
      </div>

      <div className="bg-secondary w-3/12 hidden md:flex outline-none"></div>
    </section>
  );
};

export default Hero;
