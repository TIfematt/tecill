import React from "react";

const NewsLetter = () => {
  return (
    <section className="mt-small md:mt-medium lg:mt-large flex flex-col gap-7 bg-secondary py-[2.34rem] items-center justify-center">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="heading uppercase tracking-[0.0312rem]  font-normal">
          Sign Up for Our Newsletters
        </h1>
        <p className="text-heading text-base md:text-[1.25rem] lg:text-[1.5rem] md:leading-[2.5rem] px-8 md:px-0">
          Qorem ipsum dolor sit amet, consecteturQorem ipsum dolor si
        </p>
      </div>
      <form
        action=""
        method="post"
        className="flex flex-col md:flex-row items-center gap-7"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="px-6 py-[1.19rem] text-xl outline-none"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="px-6 py-[1.19rem] text-xl outline-none"
        />
        <button
          type="submit"
          className="uppercase text-white bg-primary rounded-xl px-8 py-5"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
