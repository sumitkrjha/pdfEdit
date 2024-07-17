import React, { useState } from "react";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id="headerContainer"
        className="h-20 w-full p-2 bg-white border-b-2 sticky top-0 z-10"
      >
        <div
          id="navWrapper"
          className="h-16 p-2 w-full flex items-center justify-between"
        >
          <div id="logo" className="h-16 flex items-center">
            <a href="#">
              <img src={logo} alt="logo" className="h-16" />
            </a>
          </div>
          <div
            id="menuList"
            className="hidden lg:flex h-16 p-2 pl-10 items-center"
          >
            <ul className="h-14 flex items-center justify-center gap-8">
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                Home
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                Tool
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
            className="hidden lg:flex w-auto pr-8 py-2 items-center justify-end gap-5"
          >
            <a href="#featureTitle">
              <button className="p-2 h-auto w-28 rounded-xl border-2 border-deepblue flex items-center justify-center font-medium hover:shadow-box hover:bg-white hover:text-deepblue hover:border-2 hover:border-deepblue hover:scale-105">
                Try for Free
              </button>
            </a>
            <button className="p-2 h-auto w-28 rounded-xl flex items-center justify-center hover:bg-lightblue hover:text-white font-medium">
              Get Started
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-2xl">
              &#9776;
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20"
          onClick={toggleSidebar}
        >
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-4 z-30">
            <button onClick={toggleSidebar} className="self-end mb-4 text-2xl">
              &times;
            </button>
            <ul className="flex flex-col gap-4">
              <a href="#">
                <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                  Home
                </li>
              </a>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                Tool
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                About
              </li>
              <li className="text-lg font-semibold cursor-pointer hover:text-lightblue">
                Contact
              </li>
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <a href="#featureContainer">
                <button className="p-2 h-auto w-full rounded-xl border-2 border-deepblue flex items-center justify-center font-medium hover:shadow-box hover:bg-white hover:text-deepblue hover:border-2 hover:border-deepblue hover:scale-105">
                  Try for Free
                </button>
              </a>
              <button className="p-2 h-auto w-full rounded-xl flex items-center justify-center hover:bg-lightblue hover:text-white font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
