import React from "react";
import hero from "../assets/hero.png";
const HeroSection = () => {
  return (
    <div id="heroContainer" className="static h-auto w-full">
      <div
        id="heroWrapper"
        className="h-auto w-full py-20 px-28 flex items-center justify-center gap-2"
      >
        <div id="title&buttons" className="h-auto w-1/2 p-5 pr-20">
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
          <div id="buttons" className="w-full h-auto p-2 flex gap-5 ">
            <button className="p-2 h-14 w-44 text-2xl font-medium bg-deepblue text-white rounded-xl flex items-center justify-center hover:bg-lightblue ">
              Try for Free
            </button>
            <button className="p-2 h-14 w-44 text-2xl font-medium bg-lightblue text-white rounded-xl flex items-center justify-center hover:bg-deepblue ">
              Get Started
            </button>
          </div>
        </div>
        <div id="heroImage" className="h-auto w-1/2">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
