import React from "react";
import {
  locations,
  quickLinks,
  deliveryInfo,
  socialLinks,
} from "./data_footer";

const index = () => {
  const msg = "I'd like to chat with you";
  return (
    <>
      <div id="footer" className="h-[70vh] bg-[#379498] overflow-hidden">
        <div className="grid grid-cols-4 pl-28 pt-16 mb-24">
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Locations
            </h1>
            <ul>
              {locations.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="mt-4  cursor-pointer hover:scale-105 hover:text-[#56eef3]"
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Quick Links
            </h1>
            <ul>
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
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Delivery Info
            </h1>
            <ul>
              {deliveryInfo.map((links) => {
                const { id, text } = links;
                return (
                  <li
                    key={id}
                    className="mt-4 cursor-pointer hover:scale-105 hover:text-[#56eef3]"
                  >
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer hover:scale-105 hover:text-[#56eef3]">
              Follow Us
            </h1>
            <ul>
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
        <hr />
        <h1 className="text-center text-gray-300 text-2xl mt-7 cursor-none">
          Copyright©2023 By jagmeetsingh2921@gmail.com
        </h1>
      </div>
    </>
  );
};

export default index;
