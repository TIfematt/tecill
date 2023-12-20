import React from "react";
import { blog_header } from "@/public/images";
import { BlogCard } from "@/components";
import { blogPost } from "@/constant";

const page = () => {
  return (
    <main>
      <header
        className="flex h-[60vh] bg-cover relative items-center justify-center"
        style={{ backgroundImage: `url('/images/blog_header.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="z-10 text-white text-center text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-bold  md:w-[29.6rem] lg:w-[44rem] px-4 md:px-0">
          Your Dream Home, Now A Reality
        </h1>
      </header>
      <section className="mt:small md:mt:medium lg:mt-large flex flex-col items-center gap-8">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap  md:justify-evenly gap-5 md:gap-10">
          {blogPost.map((post, key) => (
            <BlogCard
              key={key}
              name={post.name}
              image={post.image}
              title={post.title}
              date={post.date}
              text={post.text}
            />
          ))}
        </div>
        <button className="w-max border-2 border-primary text-primary font-semibold  px-8 py-[1.12rem] shadow-pCard">
          Load More{" "}
        </button>
      </section>

    </main>
  );
};

export default page;
