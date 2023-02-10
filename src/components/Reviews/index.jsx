import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AVTR1 from "./images/AVTR1.png";
import AVTR2 from "./images/AVTR2.jpeg";
import AVTR3 from "./images/AVTR3.png";
import AVTR4 from "./images/AVTR4.png";

const data = [
  {
    avatar: AVTR1,
    name: "Jasmeet Singh",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR2,
    name: "Davy Singh",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR3,
    name: "Jagmeet Singh",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR4,
    name: "Pankaj Kumar",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
];

const index = () => {
  return (
    <>
      <div
        id="reviews"
        className="h-[100vh]  bg-[#379498] text-center scroll-mt-16"
      >
        <h1 className="text-white text-center pt-7 tracking-wider md:text-[1rem] text-xl">
          Reviews From Customers
        </h1>
        <h1 className="text-white text-center md:text-3xl uppercase tracking-widest text-4xl">
          What they Say
        </h1>
        <div className="md:pt-20 pt-16 ">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper md:h-[60vh] md:w-[70vw] bg-white md:rounded-2xl text-center h-[65vh] w-[90%] rounded-xl"
          >
            {data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-evenly items-center flex-col md:justify-center md:flex-row"
                >
                  <div className="">
                    <img
                      src={avatar}
                      alt="Image"
                      className="aspect-square rounded-[50%] md:w-64 md:ml-10  border-[0.65rem] border-[#379498] cursor-pointer hover:border-[#56eef3] duration-500 w-36 -mb-12 md:mb-0"
                    />
                  </div>

                  <div className="md:w-3/5 text-[#378498] ">
                    <h2 className="md:text-5xl uppercase tracking-wider text-3xl  hover:text-[#56eef3] cursor-pointer duration-300">
                      {name}
                    </h2>
                    <p className="md:mt-7 md:ml-10 mt-10 px-4 hover:text-[#56eef3] cursor-pointer duration-300">
                      {review}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default index;
