import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <div
        id="headerContainer"
        className="h-20 w-full p-2 bg-white border-b-2 sticky top-0 z-10"
      >
        <div id="navWrapper" className="h-16 p-2 w-full flex items-center ">
          <div id="logo" className="h-16 w-[10%] flex items-center">
            <a href="#">
              <img src={logo} alt="logo" className="h-16" />
            </a>
          </div>
          <div
            id="menuList"
            className=" h-16 w-[60%] p-2 pl-10 flex items-center"
          >
            <ul className="h-14 flex items-center justify-center gap-8">
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                <a href="#">Home</a>
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                <a href="#featureContainer">Tool</a>
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                About
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                Contact
              </li>
            </ul>
          </div>
          <div
            id="actionButtons"
            className="w-[30%] pr-8 py-2 flex items-center justify-end gap-5"
          >
            <button className="p-2 h-auto w-28 rounded-xl border-2 border-deepblue flex items-center justify-center hover:bg-deepblue hover:text-white font-medium ">
              Try for Free
            </button>
            <button className="p-2 h-auto w-28 rounded-xl flex items-center justify-center hover:bg-lightblue hover:text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
