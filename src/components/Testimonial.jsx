import React, { useState } from "react";
import previousbutton from "../assets/previousbutton.svg";
import nextbutton from "../assets/nextbutton.svg";
const Testimonial = () => {
  const testimony = [
    {
      description:
        "pdfedit has made managing my PDFs a breeze! The suite of tools is comprehensive and user-friendly, allowing me to effortlessly edit, convert, and merge documents all in one place.",
      name: "Sarah Jones",
      title: "Marketing Manager",
    },
    {
      description:
        "I was constantly struggling with editing PDFs before I discovered pdfedit. Now, I can easily adjust text, add images, and even create fillable forms – it's a game-changer for my workflow.",
      name: "David Lee",
      title: "Project Lead",
    },
    {
      description:
        "pdfedit's conversion feature is fantastic! I can seamlessly convert documents between various formats without any loss of quality. It's a lifesaver for collaborating with different teams.",
      name: "Emily Garcia",
      title: "Graphic Designer",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimony.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <h1
        id="testimonyTitle"
        className="text-4xl text-deepblue font-bold text-center"
      >
        Testimonials
      </h1>
      <section class="text-gray-600 body-font">
        {testimony.map(
          (testimony, index) =>
            index === current && (
              <div class="container px-5 py-14 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg">{testimony.description}</p>
                  <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-base">
                    {testimony.name}
                  </h2>
                  <p class="text-gray-500">{testimony.title}</p>
                </div>
              </div>
            )
        )}
        <section className="flex items-center justify-center">
          <img
            src={previousbutton}
            alt=""
            className="h-10 cursor-pointer"
            onClick={previous}
          />
          <img
            src={nextbutton}
            alt=""
            className="h-10 cursor-pointer"
            onClick={next}
          />
        </section>
      </section>
    </>
  );
};

export default Testimonial;
