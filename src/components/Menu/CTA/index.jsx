import React from "react";
import Menu from "./menu.pdf";
const index = () => {
  return (
    <>
      <div className="cta mt-6 border-b-2 pb-7 text-center  ">
        <a
          href={Menu}
          download={true}
          className=" mx-3 py-2 px-3 bg-[#379498] outline-none rounded-lg text-white text-xl hover:text-[#47dde2] hover:bg-white  hover:border-[#47dde2] hover:border-2 transition cursor-pointer hover:scale-105 tracking-wider  duration-500"
        >
          Download Menu
        </a>
        <a
          href="#"
          className=" mx-3 py-2 px-3 bg-[#379498] outline-none rounded-lg text-white text-xl hover:text-[#47dde2] hover:bg-white hover:border-[#47dde2] hover:border-2 transition cursor-pointer hover:scale-105 tracking-wider  duration-500"
        >
          Today's Special
        </a>
      </div>
    </>
  );
};

export default index;
