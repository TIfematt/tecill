import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div className="w-full bg-secondary py-[4rem] md:py-4 flex flex-col md:flex-row items-center">
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            500+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Amazing Properties
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            300+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Happy Clients
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[8rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            50+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Award Winning
          </h2>
        </div>
        <div className="text-center flex flex-col items-center gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 md:px-[2.5rem] lg:px-[7.5rem] w-3/12 py-[3.75rem] md:py-0">
          <h1 className="text-primary font-bold tracking-[0.045rem]  md:text-2xl ">
            20+
          </h1>
          <h2 className="w-[6.25rem] text-text text-[1.125rem] md:text-[1.25rem]">
            Operating Years
          </h2>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default AboutUs;
