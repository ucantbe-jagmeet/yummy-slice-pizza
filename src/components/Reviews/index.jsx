import React from "react";
import { BsInstagram } from "react-icons/bs";
import AVTR1 from "./images/AVTR1.png";
import AVTR2 from "./images/AVTR2.jpeg";
import AVTR3 from "./images/AVTR3.png";
import AVTR4 from "./images/AVTR4.png";
import AVTR5 from "./images/AVTR5.jpeg";
import AVTR6 from "./images/AVTR6.png";
import AVTR7 from "./images/AVTR7.jpeg";
import AVTR8 from "./images/AVTR8.jpeg";
import AVTR9 from "./images/AVTR9.jpeg";

const data1 = [
  {
    avatar: AVTR1,
    name: "Jasmeet Singh",
    instagram: "@jasmeets_6575",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR2,
    name: "Davy Singh",
    instagram: "@davinder_s",
    review:
      "      egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR3,
    name: "Jagmeet Singh",
    instagram: "@jagmeets_6575",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus      egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
];
const data2 = [
  {
    avatar: AVTR4,
    name: "Pankaj Kumar",
    instagram: "@pankaj_sankhla",
    review:
      "  bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR5,
    name: "Prince Kumar",
    instagram: "@user_not_found",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR6,
    name: "Arun Kumar",
    instagram: "@arun_kumar",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi",
  },
];

const data3 = [
  {
    avatar: AVTR7,
    name: "Davy Singh",
    instagram: "@davinder_s",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR8,
    name: "Jagmeet Singh",
    instagram: "@jagmeets_6575",
    review:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus risus sed facilisis       egestas.      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
  {
    avatar: AVTR9,
    name: "Harsh Kumar",
    instagram: "@hypr_coffin",
    review:
      "Lorem Lorem ipsum dolor si      Nullam eu bibendum nisl, ut tincidunt metus. Curabitur CurabiturCurabiturmattis sem nisi, vel sollicitudin",
  },
];

const index = () => {
  return (
    <>
      <div
        id="reviews"
        className="h-[auto]  bg-[#379498] text-center scroll-mt-16 flex flex-col items-center pb-16"
      >
        <h1 className="text-white text-center pt-7 tracking-wider md:text-[1rem] text-lg">
          Reviews From Customers
        </h1>
        <h1 className="text-white text-center md:text-3xl uppercase tracking-widest text-3xl pt-2 mb-10">
          What they Say
        </h1>
        <div className="container w-[80%] h-90vh  p-5 grid grid-cols-3 gap-5 ">
          <ul className="space-y-5">
            {data1.map((links) => {
              const { id, avatar, name, instagram, review } = links;
              return (
                <>
                  <li key={id}>
                    <section className="card h-auto max-h-min py-2 bg-white rounded-lg">
                      <header className="flex items-center py-2">
                        <img
                          src={avatar}
                          alt=""
                          className=" w-14 rounded-full h-14 ml-4"
                        />
                        <div className="ml-5 ">
                          <h1 className=" text-xl tracking-wider ">{name}</h1>
                          <article className=" flex items-baseline justify-end">
                            <div className="text-sm text-red-500 mr-1 ">
                              <BsInstagram />
                            </div>
                            <p className="text-[13px]">{instagram}</p>
                          </article>
                        </div>
                      </header>
                      <p className=" h-auto py-3 max-h-min w-[90%] mx-auto text-sm text-slate-500">
                        {review}
                      </p>
                    </section>
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="space-y-5">
            {data2.map((links) => {
              const { id, avatar, name, instagram, review } = links;
              return (
                <>
                  <li key={id}>
                    <section className="card h-auto max-h-min py-2 bg-white rounded-lg">
                      <header className="flex items-center py-2">
                        <img
                          src={avatar}
                          alt=""
                          className=" w-14 rounded-full h-14 ml-4"
                        />
                        <div className="ml-5 ">
                          <h1 className=" text-xl tracking-wider ">{name}</h1>
                          <article className=" flex items-baseline justify-end">
                            <div className="text-sm text-red-500 mr-1 ">
                              <BsInstagram />
                            </div>
                            <p className="text-[13px]">{instagram}</p>
                          </article>
                        </div>
                      </header>
                      <p className=" h-auto py-3 max-h-min w-[90%] mx-auto text-sm text-slate-500">
                        {review}
                      </p>
                    </section>
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="space-y-5">
            {data3.map((links) => {
              const { id, avatar, name, instagram, review } = links;
              return (
                <>
                  <li key={id}>
                    <section className="card h-auto max-h-min py-2 bg-white rounded-lg">
                      <header className="flex items-center py-2">
                        <img
                          src={avatar}
                          alt=""
                          className=" w-14 rounded-full h-14 ml-4"
                        />
                        <div className="ml-5 ">
                          <h1 className=" text-xl tracking-wider ">{name}</h1>
                          <article className=" flex items-baseline justify-end">
                            <div className="text-sm text-red-500 mr-1 ">
                              <BsInstagram />
                            </div>
                            <p className="text-[13px]">{instagram}</p>
                          </article>
                        </div>
                      </header>
                      <p className=" h-auto py-3 max-h-min w-[90%] mx-auto text-sm text-slate-500 ">
                        {review}
                      </p>
                    </section>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default index;
