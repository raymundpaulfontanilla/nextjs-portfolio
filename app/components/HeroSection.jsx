"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center text-center sm:text-left place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Raymund",
              2000,
              "Fullstack Web Developer",
              2000,
              "with technologies",
              2000,
              "NextJS in Frontend",
              2000,
              "Python Flask in Backend",
              2000,
              "MySQL in Database",
              2000,
              "and",
              2000,
              "Postman in API",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          ;
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          A Fullstack Web Developer with passion for programming and love for
          work development.
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 w-full sm:w-fit rounded-full mr-4">
            Hire Me
          </button>
          <button className="bg-transparent hover:bg-slate-800 text-white mt-3 px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/hero_image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
