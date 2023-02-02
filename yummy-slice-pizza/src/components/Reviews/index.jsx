import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import AVTR1 from "./images/AVTR1.jpeg";
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
      <div id="reviews" className="h-[100vh]  bg-[#379498] text-center">
        <h1 className="text-white text-center pt-7 tracking-wider">
          Review From Customers
        </h1>
        <h1 className="text-white text-center text-3xl uppercase tracking-widest">
          What they Say
        </h1>
        <div className="flex justify-center items-center pt-20">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[60vh] w-[70vw] bg-white rounded-2xl text-center"
          >
            {data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div>
                    <img
                      src={avatar}
                      alt="Image"
                      className="aspect-square rounded-[50%] w-64 ml-10 border-[0.65rem] border-[#379498]"
                    />
                  </div>

                  <div className="w-3/5 text-[#378498]">
                    <h2 className="text-5xl uppercase tracking-wider">
                      {name}
                    </h2>
                    <p className="mt-7 ml-10">{review}</p>
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
