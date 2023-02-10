import React from "react";
import CTA from "./CTA";
import Cards from "./Cards";
const index = () => {
  return (
    <>
      <div id="menu" className="h-auto scroll-mt-16 overflow-hidden">
        <h1 className="text-[#379498] md:text-5xl md:mt-6 text-center text-[1.6rem] mt-4">
          Order Your Favourite Food
        </h1>
        <CTA />

        <div className="my__cards h-auto w-[100vw] grid grid-cols-3 grid-rows-3 md:grid-cols-3 md:grid-rows-2 p-3 gap-1">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default index;
