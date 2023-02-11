import React from "react";
import AVTR1 from "./images/pizza.jpg";
import AVTR2 from "./images/burgers.jpg";
import AVTR3 from "./images/sandwich.jpg";
import AVTR4 from "./images/shakes.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "Pizza",
    price: "59",
  },
  {
    avatar: AVTR2,
    name: "Burgers",
    price: "39",
  },
  {
    avatar: AVTR3,
    name: "Sandwich",
    price: "79",
  },
  {
    avatar: AVTR4,
    name: "Shakes",
    price: "79",
  },
  {
    avatar: AVTR1,
    name: "Pizza",
    price: "59",
  },
  {
    avatar: AVTR2,
    name: "Burgers",
    price: "39",
  },
  {
    avatar: AVTR3,
    name: "Sandwich",
    price: "79",
  },
  {
    avatar: AVTR4,
    name: "Shakes",
    price: "79",
  },
];

const index = () => {
  return (
    <>
      {data.map(({ avatar, name, price }, index) => {
        return (
          <div
            key={index}
            className="card md:h-44 md:w-80 border-2 flex flex-col md:flex-row bg-[#379498] rounded-lg cursor-pointer h-52 w-40 hover:bg-[#42bbc0] duration-500"
          >
            <img
              src={avatar}
              alt=""
              className=" md:w-[50%] md:h-[100%] md:rounded-tl-xl md:rounded-bl-xl h-[85%] md:rounded-r-none w-[100%]  mx-auto rounded-tl-lg rounded-tr-lg cursor-pointer "
            />
            <div className="card__item md:w-[50%] flex md:flex-col items-baseline justify-between md:items-start md:justify-evenly w-90% md:pl-2 pl-2">
              <h1 className="text-white md:text-2xl tracking-wider capitalize hover:scale-105 text-md ">
                {name}
              </h1>
              <h2 className="tracking-wide md:text-[0.75rem] md:-mt-4 md:ml-0 hidden md:block text-gray-300">
                Lorem ipsum dolor amet consectetur adipisicing dasa.
              </h2>
              <h1 className=" text-gray-200 md:text-[0.95rem] hover:scale-105 text-[0.6rem] md:pb-0 mr-2">
                Starting: ₹ {price}
              </h1>
              <h2 className="md:text-[0.7rem] md:items-start md:-mt-4 hidden md:block text-gray-300">
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
