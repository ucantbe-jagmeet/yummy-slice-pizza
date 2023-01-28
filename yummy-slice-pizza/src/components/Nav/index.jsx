import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

import Img from "../../assets/logo1.png";

const Nav = () => {
  return (
    <>
      <nav className="flex h-16  justify-between items-center border-b-2 shadow-lg">
        <ul className="flex">
          <li className="ml-10 text-xl text-[#379498] hover:text-[#47dde2] cursor-pointer font-medium hover:scale-105">
            Home
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-medium hover:scale-105">
            Menu
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-medium hover:scale-105">
            Offers
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-medium hover:scale-105">
            Reviews
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-medium hover:scale-105">
            Contact
          </li>
        </ul>
        <div className="-ml-32">
          <img src={Img} alt="Img here" className="h-14 mb-1" />
        </div>
        <ul className="flex">
          <li className="ml-4 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105">
            <a href="https://goo.gl/maps/pYDRx1DP9o5wRfAGA" target="_blank">
              <HiLocationMarker />
            </a>
          </li>
          <li className="ml-4 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105">
            <RiHandHeartLine />
          </li>
          <li className="ml-4 mr-10 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer hover:scale-105">
            <MdDeliveryDining />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
