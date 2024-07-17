import React from "react";
import hero from "../assets/hero.png";
import toast from "react-hot-toast";
const HeroSection = () => {
  return (
    <div id="heroContainer" className="static h-auto w-full">
      <div
        id="heroWrapper"
        className="h-auto w-full py-20 xl:px-28 flex flex-col xl:flex-row items-center justify-center xl:gap-2 gap-8"
      >
        <div id="title&buttons" className="h-auto w-full xl:w-1/2 p-5 xl:pr-20">
          <h1 className="text-5xl font-bold text-deepblue mb-4">
            Your Productivity <br />
            Lives at PdfEdit
          </h1>
          <p className="text-2xl font-semibold text-lightblue mb-4">
            Effortlessly manage all your PDF needs with our comprehensive suite
            of tools.
          </p>
          <p className="text-lg mb-4 text-deepblue">
            Securely work with your important files across all platforms and
            devices with the ultimate all-in-one document solution.
          </p>
          <div
            id="buttons"
            className="w-full h-auto p-2 flex flex-col items-center min-[400px]:flex-row gap-5 "
          >
            <a href="#featureContainer">
              <button className="p-2 h-14 w-44 text-2xl font-medium bg-deepblue text-white rounded-xl flex items-center justify-center hover:bg-lightblue ">
                Try for Free
              </button>
            </a>
            <button
              className="p-2 h-14 w-44 text-2xl font-medium bg-lightblue text-white rounded-xl flex items-center justify-center hover:bg-deepblue "
              onClick={() => {
                toast.success("This will take to the Login page");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div id="heroImage" className="h-auto xl:w-1/2">
          <img src={hero} alt="hero" className="shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
