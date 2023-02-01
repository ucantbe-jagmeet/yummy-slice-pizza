import React from "react";
import AVTR1 from "./images/pizza.jpg";
import AVTR2 from "./images/burgers.jpg";
import AVTR3 from "./images/sandwich.jpg";
import AVTR4 from "./images/shakes.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Pizza",
    price: "59 Rs",
  },
  {
    avatar: AVTR2,
    name: "Burgers",
    price: "39 Rs",
  },
  {
    avatar: AVTR3,
    name: "Sandwich",
    price: "79 Rs",
  },
  {
    avatar: AVTR4,
    name: "Shakes",
    price: "79 Rs",
  },
];

const index = () => {
  return (
    <>
      {data.map(({ avatar, name, price }, index) => {
        return (
          <div
            key={index}
            className="card h-60 w-96 border-2 flex bg-[#379498] rounded-lg cursor-pointer "
          >
            <img
              src={avatar}
              alt=""
              className=" w-[50%] h-56 rounded-3xl p-3 hover:scale-105 cursor-pointer "
            />
            <div className="card__item w-[50%] flex flex-col items-start justify-evenly ">
              <h1 className="text-white text-2xl tracking-wider uppercase hover:scale-105 pt-2">
                {name}
              </h1>
              <h2 className="tracking-wide text-[0.75rem] -mt-7 ml-1 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit dasa.
              </h2>
              <h1 className=" text-white text-2xl hover:scale-105  ">
                Starting: {price}
              </h1>
              <h2 className="text-[0.75rem] items-start -mt-6">
                *Prices may vary on size of product
              </h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default index;
