import { john_doe } from "@/public/images";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Agent",
      image: john_doe,
      facebookLink: "",
      instagramLink: "",
      linkedinLink: "",
    },
    {
      name: "Jane Smith",
      position: "Sales Director",
      image: john_doe,
      facebookLink: "",
      instagramLink: "",
      linkedinLink: "",
    },
    {
      name: "Foo Bar",
      position: "Marketing Director",
      image: john_doe,
      facebookLink: "",
      instagramLink: "",
      linkedinLink: "",
    },
  ];

  const TeamMembersCard = ({
    image,
    name,
    position,
    facebookLink,
    instagramLink,
    linkedinLink,
  }) => {
    return (
      <div className="flex flex-col max-w-max">
        <div className="relative bg-secondary w-[18.5rem] md:w-[19.75rem] md:h-[14.62rem] lg:w-[23rem] lg:h-[17.93rem] h-[14.38rem] p-[.94rem]">
          <Image
            fill
            src={image}
            alt={`Team member image of ${name}`}
            className=""
          />
        </div>
        <div className="py-3">
          <h1 className="font-bold text-heading tracking-wider text-lg lg:text-2xl ">
            {name}
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-heading font-semibold text-base lg:text-lg tracking-[0.045rem] max-w-[6rem] md:max-w-max">
            {position}
          </h3>
          {/* Socials */}
          <div className="flex gap-4">
            <a href={facebookLink} className="bg-secondary p-3 max-w-max">
              <FaFacebookF className="text-primary" />
            </a>
            <a href={instagramLink} className="bg-secondary p-3 max-w-max">
              <FaInstagram className="text-primary" />
            </a>
            <a href={linkedinLink} className="bg-secondary p-3 max-w-max">
              <FaLinkedinIn className="text-primary" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="mt-small md:mt-medium lg:mt-large">
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
          Our Team
        </h3>
        <h1 className="heading md:w-[33.125rem]">Meet Our Incredible Agents</h1>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center gap-8">
        {teamMembers.map((team, key) => (
          <TeamMembersCard
            key={key}
            name={team.name}
            image={team.image}
            position={team.position}
            facebookLink={team.facebookLink}
            instagramLink={team.instagramLink}
            linkedinLink={team.linkedinLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
