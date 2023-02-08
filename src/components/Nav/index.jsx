import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

import Img from "../../assets/logo1.png";
import { pageLinks } from "./data.js";
const Nav = () => {
  return (
    <>
      <nav
        id="nav"
        className="md:flex h-16 w-full bg-white md:justify-between md:items-center border-b-2 shadow-lg sticky top-0 "
      >
        <ul className="md:flex ">
          {pageLinks.map((link) => {
            const { id, href, title } = link;
            return (
              <li
                key={id}
                className="md:ml-10 md:text-xl text-[#379498] hover:text-[#47dde2] cursor-pointer font-medium hover:scale-105 sm:ml-4 duration-300"
              >
                <a href={href}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className="md:-ml-32">
          <img src={Img} alt="Img here" className="h-14 mb-1" />
        </div>

        <ul className="md:flex">
          <li className="ml-4 mr-2 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
            <a href="https://goo.gl/maps/pYDRx1DP9o5wRfAGA" target="_blank">
              <HiLocationMarker />
            </a>
          </li>
          <li className="ml-4 mr-2 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
            <a href="#reviews">
              <RiHandHeartLine />
            </a>
          </li>
          <li className="ml-4 mr-10 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer hover:scale-105 duration-300">
            <a href="#footer">
              <MdDeliveryDining />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
