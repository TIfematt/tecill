import React from "react";
import { footerLinks } from "@/constant";
import Image from "next/image";
import { white_logo } from "@/public/images";
import { CiMail } from "react-icons/ci";
import { getFullYear } from "@/constant";

const Footer = () => {
  return (
    <footer className=" bg-primary w-full py:[2.5rem] md:py-[4.6rem] pl-4 md:pr-0 pt-8 ">
      <div className="flex flex-col md:flex-row items-start justify-evenly">
        <a href="/" className="flex relative w-[11rem] h-[5rem]">
          <Image fill alt="logo" src={white_logo} className="" />
        </a>
        <div className="flex flex-wrap gap-[5rem] md:gap-[3rem] lg:gap-[10.56rem]  md:justify-center pb-8 ">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h1 className="font-[700] uppercase text-[.875rem] text-white mb-[0.69rem]">
                {section.title}
              </h1>
              <ul className="flex flex-col gap-[.75rem]">
                {section.links.map((link, key) => {
                  if (typeof link === "object" && "title" in link) {
                    // For title links
                    return (
                      <li key={key}>
                        <a
                          href={link.href}
                          className="text-white opacity-[.79] text-[.75rem] hover:opacity-10"
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  } else {
                    // For non-title links
                    return (
                      <li key={key}>
                        <p
                          className="text-white opacity-[.79] text-[.75rem]"
                          href=""
                        >
                          {link}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          ))}
        </div>
        {/* Address */}
        <div className="flex flex-col">
          {/* <h1 className="text-white text-base">Head Office</h1>
          <p className="text-[0.875rem] text-white opacity-75 w-[18.87rem] md:w-[12.8rem] lg:w-[18.87rem]">
            Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22,
            Charlottesville, CA 45565
          </p> */}
          {/* News letter */}
          <form action="" method="post" className="flex flex-col mt-12">
            <h3 className="text-white text-base ">News letter</h3>
            <div className="flex">
              <input
                placeholder="Enter your email address"
                className="py-[1.12rem] text-white opacity-75 border-b-2 border-b-white bg-transparent w-[16rem] lg:w-[20rem] "
              />
              <button className="relative right-8">
                <CiMail className="text-white w-[1.43rem] h-[1.05rem]" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-evenly mt-[4rem] md:mt-[3rem] gap-[3rem] md:gap-0">
        <a
          href="mailto:contact@tecillhomes.com"
          className="text-white opacity-75 border-b-2 border-b-white pb-3 text-lg font-light"
        >
          contact@tecillhomes.com
        </a>
        <a
          href="tel:+234819004001"
          className="text-white opacity-75 border-b-2 border-b-white pb-3 text-lg font-light"
        >
          +234 915 9999 994
        </a>
        <p className="text-white text-sm md:text-xs opacity-75  pb-3 lg:text-lg font-normal md:w-[12rem] lg:w-max">
          © {getFullYear()} Tecill Homes Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
