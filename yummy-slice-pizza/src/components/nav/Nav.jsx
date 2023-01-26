import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";

const Nav = () => {
  return (
    <>
      <nav className="flex h-16  justify-between items-center border-b-2 shadow-lg">
        <ul className="flex">
          <li className="ml-10 text-xl text-[#379498] hover:text-[#47dde2] cursor-pointer font-bold hover:scale-105">
            Home
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-bold hover:scale-105">
            Menu
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-bold hover:scale-105">
            Offers
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-bold hover:scale-105">
            Reviews
          </li>
          <li className="ml-5 text-xl text-[#379498] hover:text-[#47dde2]  cursor-pointer font-bold hover:scale-105">
            Contact
          </li>
        </ul>
        <div className="-ml-24">
          <img src="../../assets/logo1.png" alt="Img here" />
        </div>
        <ul className="flex">
          <li className="ml-4 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105">
            <RiHandHeartLine />
          </li>
          <li className="ml-6 mr-10 text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer hover:scale-105">
            <MdDeliveryDining />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
