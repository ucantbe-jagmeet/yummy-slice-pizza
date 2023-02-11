import React from "react";
import CTA from "./CTA";
import Cards from "./Cards";
const index = () => {
  return (
    <>
      <div
        id="menu"
        className="h-auto md:h-auto md:scroll-mt-16 overflow-hidden mb-10"
      >
        <h1 className="text-[#379498] md:text-5xl md:mt-6 text-center text-[1.6rem] mt-4">
          Order Your Favourite Food
        </h1>
        <CTA />

        <div className="my__cards h-auto w-[100vw] grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-2 ml-2 gap-y-2 md:ml-12 md:gap-x-5 md:gap-y-5 md:pt-5 pt-3">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default index;
