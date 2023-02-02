import React from "react";
import Menu from "./menu.pdf";
const index = () => {
  return (
    <>
      <div className="cta mt-6 border-b-2 pb-7 text-center">
        <a
          href={Menu}
          download={true}
          className=" mx-3 py-2 px-3 bg-[#379498] outline-none rounded-lg text-white text-xl hover:text-[#379498] hover:bg-white hover:border-[#379498] hover:border-2 transition cursor-pointer hover:scale-105 tracking-wider"
        >
          DownLoad Menu
        </a>
        <a
          href="#"
          className=" mx-3 py-2 px-3 bg-[#379498] outline-none rounded-lg text-white text-xl hover:text-[#379498] hover:bg-white hover:border-[#379498] hover:border-2 transition cursor-pointer hover:scale-105 tracking-wider"
        >
          Todays Special
        </a>
      </div>
    </>
  );
};

export default index;
