import React from "react";
import {
  locations,
  quickLinks,
  deliveryInfo,
  socialLinks,
} from "./data_footer";

import Logo from "../../assets/logo1.png";

const index = () => {
  const msg = "I'd like to chat with you";
  return (
    <>
      <div
        id="footer"
        className="h-[70vh] grid grid-cols-2 bg-[#379498] overflow-hidden"
      >
        <div className="flex flex-col items-center justify-around">
          <div className=" h-[40%] w-[80%] border-2 border-white rounded-lg flex items-center justify-around cursor-pointer">
            <img src={Logo} alt="" className="h-24 rounded-lg" />
            <h1 className="text-white text-center">
              Regards
              <br />
              <span className="text-4xl">Yummy Slice Pizza</span>
            </h1>
          </div>
          <h1 className=" text-gray-300 text-2xl -mb-10">
            Copyright©2023 By jagmeetsingh2921@gmail.com
          </h1>
        </div>

        <div className="grid grid-cols-4 pl-28 pt-16 mb-24">
          <div className="text-white">
            <h1 className="text-2xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Locations
            </h1>
            <ul className="inline-block">
              {locations.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="mt-4  cursor-pointer hover:scale-105 hover:text-[#56eef3] "
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-2xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Quick Links
            </h1>
            <ul className="inline-block">
              {quickLinks.map((links) => {
                const { id, href, title } = links;
                return (
                  <li
                    key={id}
                    className="mt-4 cursor-pointer hover:scale-105 hover:text-[#56eef3]"
                  >
                    <a href={href}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white mr-5">
            <h1 className="text-2xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Delivery Info
            </h1>
            <ul className="inline-block ">
              {deliveryInfo.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="mt-4 cursor-pointer hover:scale-105 hover:text-[#56eef3] break-all "
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-2xl cursor-pointer hover:scale-105 hover:text-[#56eef3] ">
              Follow Us
            </h1>
            <ul className="inline-block">
              {socialLinks.map((links) => {
                const { id, href, title } = links;
                return (
                  <li
                    key={id}
                    className="mt-4 cursor-pointer hover:scale-105 hover:text-[#56eef3]"
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
