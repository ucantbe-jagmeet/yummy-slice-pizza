import React from "react";
import Img from "./img.jpg";
const index = () => {
  return (
    <>
      <div id="contact" className="h-auto md:h-[100vh] scroll-mt-16">
        <h1 className="text-center text-[#379498] md:text-5xl text-3xl md:pt-5 pt-5 ">
          Contact
        </h1>
        <div className="h-auto flex justify-evenly items-center flex-col md:flex-row pt-10 ">
          <div className="left border-2 md:h-[74vh] md:w-[30vw] h-auto w-[90%] my-4 md:my-0 bg-[#379498] rounded-lg text-white hover:bg-[#42bbc0] duration-300 ">
            <h1 className="text-center uppercase text-4xl mt-5">Find Us </h1>
            <p className="ml-5 text-3xl tracking-widest mt-4">
              YUMMY SLICE PIZZA <br />
              <span className="text-md">NEAR MANGE DI HATTI GAGRET</span>
            </p>

            <h2 className="text-center pt-10 text-2xl">Opening Hours</h2>
            <p className="text-center tracking-wider pt-4">
              Mon-Fri: 10:00 AM - 10:00 PM
            </p>
            <p className="text-center tracking-wider pt-3">
              Sat-Sun: 11:00 AM - 10:00 PM
            </p>

            <div className="mt-28">
              <a
                href="#footer"
                className="border-2 px-4 py-1 text-xl text-[#379498] bg-white rounded-md  hover:scale-105 hover:bg-[#379498] hover:text-white hover:border-2 ml-10 "
              >
                Visit Us
              </a>
            </div>
            <p className="text-center tracking-wider py-3">Mob: 9459122320</p>
          </div>
          <div className="right ">
            <img
              src={Img}
              alt=""
              className="md:h-[70vh] md:w-[25vw] w-[60%] my-4 md:my-0 mx-auto md:mx-0 cursor-pointer outline-none rounded-2xl hover:shadow-2xl hover:shadow-[#378498] duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
