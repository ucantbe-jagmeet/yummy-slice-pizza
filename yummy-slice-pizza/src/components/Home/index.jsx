import React from "react";
import Pizza1 from "../../assets/pizza1.png";
const index = () => {
  return (
    <>
      <div
        id="home"
        className="home flex h-[92vh] w-[100%] justify-evenly items-center scroll-mt-16"
      >
        <div className="">
          <h1 className="text-[#379498] text-6xl uppercase ">
            Grab your next
            <br />
            <span className="font-bold text-[6rem] text-[#379598] tracking-widest ">
              pizza
            </span>
            <br />
            from here
          </h1>
          <h1 className="text-xl font-semibold mt-2">Pick Your Slice</h1>
          <p className="my-4">
            Pizza comes in square box, but circle in shape and triangular in
            slices .<br />
            Its Easy to understand a Pizza but its impossible to understand a
            girl
          </p>
          <a
            href="#about"
            className=" px-4 py-2 rounded-lg text-white bg-[#379498] mt-4 hover:scale-105 hover:border-2 hover:bg-white duration-300 hover:border-[#42bbc0] hover:text-[#42bbc0] cursor-pointer "
          >
            View More
          </a>
        </div>
        <div>
          <img src={Pizza1} alt="" className="h-[75vh]" />
        </div>
      </div>
    </>
  );
};

export default index;
