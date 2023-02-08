import React from "react";
import CTA from "./CTA";
import Cards from "./Cards";
const index = () => {
  return (
    <>
      <div id="menu" className="h-[100vh] scroll-mt-16 ">
        <h1 className="text-[#379498] text-5xl mt-6 text-center">
          Order Your Favourite Food
        </h1>
        <CTA />

        <div className="my__cards h-auto w-auto grid grid-cols-3 p-10 gap-10">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default index;
