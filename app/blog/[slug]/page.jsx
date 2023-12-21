"use client";
import React from "react";
import { useRouter } from "next/router";
import { Footer, NewsLetter } from "@/components";

const BlogPost = ({ params: { slug } }) => {
  return (
    <section>
      <header
        className="flex h-[60vh] bg-cover relative items-left justify-center gap-4 flex-col"
        style={{ backgroundImage: `url('/images/blog_header.jpg')` }}
      >
        <div className="absolute inset-0 bg-primary opacity-50"></div>
        <h1 className="z-10 text-white  text-[1rem] md:text-[1.5rem] lg:text-[2rem] font-bold  lg:w-[44rem] px-4  md:w-[44.51956rem]">
          Qorem ipsum dolor sit amet, consecteturQorem ipsum dolor sit amet,
          consectetur
        </h1>
        <p className="text-white z-10 px-4 ">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit ints.
        </p>
        <div className="flex text-white z-10 items-start px-4 md:items-center flex-col md:flex-row">
          <p className="text-base font-semibold tracking-[0.04rem]">
            by John Doe
          </p>
          <div className="bg-secondary w-10 h-[0.0625rem]" />
          <p className="text-xs -[0.04rem]">2 Minutes Read</p>{" "}
          <div className="bg-secondary w-10 h-[0.0625rem]" />
          <p className="text-xs tracking-[0.04rem]">20th, Oct 2023</p>
        </div>
      </header>
      <section className="mt-small md:mt-medium lg:mt-large flex justify-evenly md:gap-4 md:px-7 lg:px-0 lg:gap-8">
        <div className="md:w-[53.37338rem] px-4 md:px-0">
          <p className="text text-justify leading-[1.75rem] md:leading-[2.5rem]">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus. Gorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
            amet lacinia. Aliquam in elementum tellusGorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
            sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
            eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque
            ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
            tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis
            diam sit amet lacinia. Aliquam in elementum tellus..
          </p>
        </div>
        <aside className="hidden md:flex w-[19.10938rem]">
          <div className="flex flex-col gap-7">
            <h1 className="text-heading lg:text-xl leading-[1.875rem] text-justify">
              Subscribe to our newsletter and receive a selection of cool
              articles every weeks
            </h1>
            <form
              action=""
              method="post"
              className="flex flex-col gap-7"
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="px-6 py-[1.19rem] text-xl border-2 border-black"
              />
              <button
                type="submit"
                className="uppercase text-white bg-primary rounded-xl px-8 py-5"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </aside>
      </section>
      <div className="md:hidden">
        <NewsLetter/>
      </div>
      <Footer/>
    </section>
  );
};

export default BlogPost;
