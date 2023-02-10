import React from "react";
import CTA from "./CTA";
import Cards from "./Cards";
const index = () => {
  return (
    <>
      <div id="menu" className="h-auto scroll-mt-16 ">
        <h1 className="text-[#379498] md:text-5xl md:mt-6 text-center text-3xl mt-4">
          Order Your Favourite Food
        </h1>
        <CTA />

        <div className="my__cards h-auto w-auto grid grid-cols-2 md:grid-cols-3 p-10 gap-10">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default index;
