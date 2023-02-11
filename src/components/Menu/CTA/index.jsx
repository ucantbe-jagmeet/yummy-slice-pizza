import React from "react";
import Menu from "./menu.pdf";
const index = () => {
  return (
    <>
      <div className="cta md:mt-6 border-b-2 md:pb-7 text-center mt-3 flex flex-col items-center gap-y-2 md:block pb-4 ">
        <a
          href={Menu}
          download={true}
          className=" md:mx-3 md:py-2 md:px-3 bg-[#379498] outline-none rounded-lg  text-white md:text-xl py-1 px-2 text-md w-40 mx-2 hover:text-[#47dde2] hover:bg-white  hover:border-[#47dde2] hover:border-2 transition cursor-pointer md:hover:scale-105 tracking-wider  duration-500 "
        >
          Download Menu
        </a>
        <a
          href="#"
          className="md:mx-3 md:py-2 md:px-3 bg-[#379498] outline-none rounded-lg text-white md:text-xl py-1 px-2 text-md w-40 mx-2 hover:text-[#47dde2] hover:bg-white  hover:border-[#47dde2] hover:border-2 transition cursor-pointer md:hover:scale-105 tracking-wider  duration-500"
        >
          Today's Special
        </a>
      </div>
    </>
  );
};

export default index;
