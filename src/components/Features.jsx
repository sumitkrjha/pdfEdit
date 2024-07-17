import React from "react";
import mergepdf from "../assets/mergepdf.svg";
import splitpdf from "../assets/splitpdf.svg";
import compresspdf from "../assets/compresspdf.svg";
import viewpdf from "../assets/viewpdf.svg";
import rotatepdf from "../assets/rotatepdf.svg";
import removepage from "../assets/removepage.svg";
import jpgtopdf from "../assets/jpgtopdf.svg";
import htmltopdf from "../assets/htmltopdf.svg";
import pngtopdf from "../assets/pngtopdf.svg";
import pdftopng from "../assets/pdftopng.svg";
import watermark from "../assets/watermark.svg";
import addnumber from "../assets/addnumber.svg";
import unlockpdf from "../assets/unlockpdf.svg";
import extractpdf from "../assets/extractpdf.svg";
import toast from "react-hot-toast";

const Features = () => {
  const tools = [
    {
      name: "View PDF",
      images: viewpdf,
      desc: "Quickly open and view your PDF documents with ease. Use our PDF viewer to read, zoom, and navigate through your PDF files effortlessly.",
    },
    {
      name: "Merge PDF",
      images: mergepdf,
      desc: "Combine PDFs in the order you want with the easiest PDF merger available. Effortlessly merge multiple PDF files into a single document.",
    },
    {
      name: "Split PDF",
      images: splitpdf,
      desc: "Separate one page or a whole set for easy conversion into independent PDF files. Customize your splits for precision and convenience.",
    },
    {
      name: "Rotate PDF",
      images: rotatepdf,
      desc: "Rotate your PDF pages to the desired orientation. Easily adjust the layout of your documents with our tool.",
    },
    {
      name: "Compress PDF",
      images: compresspdf,
      desc: "Reduce the file size of your PDF for easier sharing. Compress your PDF files for faster uploads and downloads without losing quality.",
    },
    {
      name: "Remove Pages",
      images: removepage,
      desc: "Remove specific pages from your PDF document quickly and easily.",
    },
    {
      name: "Extract Pages",
      images: extractpdf,
      desc: "Extract pages from your PDF to create new PDF documents.",
    },
    {
      name: "JPG to PDF",
      images: jpgtopdf,
      desc: "Convert your JPG images to PDF format. Create a single PDF from multiple JPG files in seconds.",
    },
    {
      name: "HTML to PDF",
      images: htmltopdf,
      desc: "Transform your HTML files into PDF documents. Preserve the original layout and design in the conversion.",
    },
    {
      name: "PNG to PDF",
      images: pngtopdf,
      desc: "Convert PNG images to PDF documents. Easily create a PDF from multiple PNG files.",
    },
    {
      name: "PDF to PNG",
      images: pdftopng,
      desc: "Convert each page of your PDF document into high-quality PNG images.",
    },
    {
      name: "Add Watermarks",
      images: watermark,
      desc: "Add custom watermarks to your PDF files. Secure and personalize your documents with text or image watermarks.",
    },
    {
      name: "Add Page Numbers",
      images: addnumber,
      desc: "Add page numbers to your PDF files for better organization and referencing. Customize the position and style of the numbers.",
    },
    {
      name: "Unlock PDF",
      images: unlockpdf,
      desc: "Remove password protection from your PDF files. Access the content of your locked PDFs with ease.",
    },
  ];

  const handleClick = () => {
    toast.success("This will take you to the desired tool page");
  };
  return (
    <>
      <div id="featureContainer" className="h-auto w-full p-10 pt-20">
        <h1
          id="featureTitle"
          className="mb-5 text-center text-3xl text-deepblue font-bold"
        >
          Get the most out of your PDF with PdfEdit
        </h1>
        <div
          id="keyPdfTools"
          className="w-full h-auto py-10 xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((items) => (
            <div
              id="tool"
              className="border-2 border-deepblue  p-5 rounded-lg shadow-box hover:scale-105 transition-transform"
            >
              <div id="image&title" className="flex items-center gap-3 mb-2">
                <img src={items.images} alt="" className="h-10" />
                <h1 className="text-xl font-bold text-deepblue">
                  {items.name}
                </h1>
              </div>
              <p>{items.desc}</p>
              <button
                className="mt-5 p-2 h-12 w-36 text-xl font-medium bg-deepblue text-white rounded-xl flex items-center justify-center hover:bg-lightblue"
                onClick={handleClick}
              >
                Try for free
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
