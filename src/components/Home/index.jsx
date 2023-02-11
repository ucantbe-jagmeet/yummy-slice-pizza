import React from "react";
import Pizza1 from "../../assets/pizza1.png";
const index = () => {
  return (
    <>
      <div
        id="home"
        className="home w-full  h-[93vh] md:flex md:justify-center md:items-center md:gap-36 md:scroll-mt-16 "
      >
        <div className=" md:flex md:flex-col flex flex-col justify-center items-center pt-12 md:p-0">
          <h1 className="text-[#379498] md:text-6xl sm:5xl text-4xl uppercase  ">
            Grab your next
            <br />
            <span className="font-bold md:text-[6rem] text-[#379598] tracking-wider text-[4rem] block pt-2 -mb-6 md:pt-0 md:-mb-14">
              pizza
            </span>
            <br />
            from here
          </h1>
          <h1 className="md:text-xl text-md  font-semibold mt-2 md:mt-5 text-gray-500 md:mr-80">
            Pick Your Slice
          </h1>
          <p className="my-4  hidden md:block w-[65vh] text-gray-500">
            Well duh, pizza has cheese, tomatoes, onions, veggies, pepperoni,
            sausage - I can see all the nutrients I need
          </p>
          <a
            href="#about"
            className=" px-4 py-2 rounded-lg text-white bg-[#379498] mt-4 hover:scale-105 hover:border-2 hover:bg-white duration-300 hover:border-[#42bbc0] hover:text-[#42bbc0] cursor-pointer mb-5"
          >
            View More
          </a>
        </div>
        <div className="pt-10">
          <img src={Pizza1} alt="" className="md:h-[75vh] h-[40vh] mx-auto " />
        </div>
      </div>
    </>
  );
};

export default index;
