'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BlogCard = ({ image, title, name, date, text }) => {
  const router = useRouter()

  return (
    <div className="w-[18rem] md:w-[20rem] lg:w-[25rem] flex flex-col gap-8">
      <div className="w-[18rem] h-[15.7rem] md:w-[20rem] md:h-[15.75rem] lg:w-[25rem] lg:h-[21rem] relative mt-5">
        <Image src={image} fill alt="Blog image" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold leading-[2.5rem] text-heading text-xl lg:text-2xl w-[16.7rem] lg:w-[23rem]">
          {title}
        </h1>
        <span className="flex items-center">
          <h4 className="text-xl text-heading">{name}</h4>
          <div className="bg-secondary w-10 h-[0.0625rem]" />
          <p className="text-xs text-heading tracking-[0.04rem]">{date}</p>
        </span>
        <p className="text leading-[2rem]">{text}</p>
      </div>
      <Link
        href={`/blog/${title}`}
        className="font-semibold leading-[2.5rem] text-heading text-sm lg:text-lg underline underline-offset-4 "
      >
        View Post
      </Link>
    </div>
  );
};

export default BlogCard;
