import React from "react";
import Pizza from "./images/pizza.jpg";
const index = () => {
  return (
    <>
      <div className="card h-60 w-96 border-2 flex bg-[#379498] rounded-lg cursor-pointer ">
        <img
          src={Pizza}
          alt=""
          className=" w-[50%] h-56 rounded-3xl p-3 hover:scale-105 cursor-pointer "
        />
        <div className="card__item w-[50%] flex flex-col items-start justify-evenly ">
          <h1 className="text-white text-2xl tracking-wider uppercase hover:scale-105 pt-2">
            Pizza
          </h1>
          <h2 className="tracking-wide text-[0.75rem] -mt-7 ml-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit dasa.
          </h2>
          <h1 className=" text-white text-2xl hover:scale-105  ">
            Price: 399 Rs
          </h1>
          <h2 className="text-[0.75rem] items-start -mt-5 ml-1">
            Prices may vary on size of pizza
          </h2>
        </div>
      </div>
    </>
  );
};

export default index;
