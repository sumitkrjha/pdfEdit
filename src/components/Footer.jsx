import React from "react";
import logo from "../assets/logo.png";
import twitter from "../assets/socialsLinks/twitter.svg";
import linkedin from "../assets/socialsLinks/linkedin.svg";
import gmail from "../assets/socialsLinks/gmail.svg";
import instagram from "../assets/socialsLinks/instagram.svg";
import thread from "../assets/socialsLinks/thread.svg";
import toast from "react-hot-toast";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      svg: twitter,
    },
    {
      name: "Linkedin",
      svg: linkedin,
    },
    {
      name: "Instagram",
      svg: instagram,
    },
    {
      name: "Thread",
      svg: thread,
    },
    {
      name: "Email",
      svg: gmail,
    },
  ];
  const page = ["Home", "Tool", "About", "Contact"];
  return (
    <>
      <div
        id="footerContainer"
        className="absolute h-auto w-full py-5 px-4 lg:px-20 mt-20 border-t-2 border-deepblue rounded-3xl flex flex-col items-center"
      >
        <div
          id="contactMe"
          className="relative bottom-[80px] h-auto w-11/12 py-8 px-4 lg:px-20 bg-white border-2 border-deepblue rounded-2xl flex flex-col lg:flex-row items-center justify-between shadow-box hover:scale-105"
        >
          <h1 className="text-4xl text-center lg:text-left w-full lg:w-52 text-deepblue font-bold mb-4 lg:mb-0">
            Contact Us
          </h1>
          <p className="text-lg text-center text-deepblue font-medium mb-4 lg:mb-0 lg:px-4">
            Reach out to us and let our PDF wizards transform your document
            experience!
          </p>
          <button className="h-14 w-4/5 lg:w-40 border-2 border-deepblue text-deepblue rounded-2xl font-bold hover:shadow-box hover:scale-105">
            Let's Connect
          </button>
        </div>
        <div
          id="contactDetails"
          className="h-auto w-full p-5 flex flex-col items-center justify-center"
        >
          <img src={logo} alt="icon" className="h-24 mb-5" />
          <ul
            id="importantPages"
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {page.map((items, index) => (
              <li
                key={index}
                className="text-xl font-semibold text-deepblue hover:text-lightblue cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
          <div
            id="socialLinks"
            className="flex items-center justify-center gap-5"
          >
            {socials.map((items, index) => (
              <img
                key={index}
                src={items.svg}
                alt={items.name}
                className="h-8 cursor-pointer"
                onClick={() => {
                  toast.success(`This will take to the ${items.name}`);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
