import React from "react";
import {
  locations,
  quickLinks,
  deliveryInfo,
  socialLinks,
} from "./data_footer";

import Logo from "../../assets/logo1.png";

const index = () => {
  return (
    <>
      <div
        id="footer"
        className="md:h-[70vh] h-[80vh] grid md:grid-cols-2 bg-[#379498] overflow-hidden"
      >
        <div className="flex flex-col items-center justify-around m-10 md:mt-0 order-2 md:order-1 ">
          <div className=" h-[23vh] w-[78%] border-2 border-white rounded-lg flex flex-col md:flex-row items-center justify-around cursor-pointer  ">
            <img
              src={Logo}
              alt=""
              className="md:h-24 rounded-lg h-20  md:my-0 my-2"
            />
            <h1 className="text-white text-center ">
              Regards
              <br />
              <span className="block md:text-3xl text-2xl mb-2">
                Yummy Slice Pizza
              </span>
            </h1>
          </div>
          <h1 className=" text-gray-300 md:text-2xl md:-mb-10 mt-5 text-xs">
            Copyright©2023 By jagmeetsingh2921@gmail.com
          </h1>
        </div>

        <div className="grid md:grid-cols-4 md:pl-28 md:pt-16 md:mb-24 md:gap-0 grid-cols-2 gap-4 ml-11 md:ml-0 order-1 md:order-2 pt-4 ">
          <div className="text-white ">
            <h1 className="md:text-2xl text-lg cursor-pointer md:hover:scale-105 hover:text-[#56eef3]">
              Locations
            </h1>
            <ul className="inline-block  md:text-md text-sm">
              {locations.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="md:mt-4  cursor-pointer hover:scale-105 hover:text-[#56eef3] "
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white ">
            <h1 className="md:text-2xl text-lg cursor-pointer md:hover:scale-105 hover:text-[#56eef3] ">
              Quick Links
            </h1>
            <ul className="inline-block  md:text-md text-sm">
              {quickLinks.map((links) => {
                const { id, href, title } = links;
                return (
                  <li
                    key={id}
                    className="md:mt-4 cursor-pointer md:hover:scale-105 hover:text-[#56eef3]"
                  >
                    <a href={href}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white ">
            <h1 className="md:text-2xl text-lg cursor-pointer md:hover:scale-105 hover:text-[#56eef3]">
              Delivery Info
            </h1>
            <ul className="inline-block  md:text-md text-sm">
              {deliveryInfo.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="md:mt-4 cursor-pointer md:hover:scale-105 hover:text-[#56eef3] break-all "
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white ">
            <h1 className="md:text-2xl text-lg cursor-pointer md:hover:scale-105 hover:text-[#56eef3] ">
              Follow Us
            </h1>
            <ul className="inline-block  md:text-md text-sm">
              {socialLinks.map((links) => {
                const { id, href, title } = links;
                return (
                  <li
                    key={id}
                    className="md:mt-4 cursor-pointer md:hover:scale-105 hover:text-[#56eef3]"
                  >
                    <a href={href} target="_blank">
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
