import { React, useState } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { RiHandHeartLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

import Img from "../../assets/logo1.png";
import { pageLinks } from "./data.js";
const Nav = () => {
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <>
      <nav
        id="nav"
        className="flex h-16 w-full  bg-white justify-between items-center border-b-2 shadow-lg sticky top-0 z-50  "
      >
        <ul className="md:flex hidden  ">
          {pageLinks.map((link) => {
            const { id, href, title } = link;
            return (
              <li
                key={id}
                className="md:ml-10 md:text-md text-[#379498] hover:text-[#47dde2] cursor-pointer  hover:scale-105 sm:ml-4 duration-300"
              >
                <a href={href}>{title}</a>
              </li>
            );
          })}
        </ul>
        <div className="md:-ml-60 ml-[8.05rem] ">
          <img src={Img} alt="Img here" className="h-14 mb-1 " />
        </div>

        <ul className="md:flex hidden">
          <li className="ml-4 mr-2 text-2xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
            <a href="https://goo.gl/maps/pYDRx1DP9o5wRfAGA" target="_blank">
              <HiLocationMarker />
            </a>
          </li>
          <li className="ml-4 mr-2 text-2xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
            <a href="#reviews">
              <RiHandHeartLine />
            </a>
          </li>
          <li className="ml-4 mr-10 text-2xl text-[#379498] hover:text-[#47dde2]  cursor-pointer hover:scale-105 duration-300">
            <a href="#footer">
              <MdDeliveryDining />
            </a>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block md:hidden text-[#379498] pr-2 cursor-pointer"
        >
          {!Nav ? <RiMenuUnfoldLine size={25} /> : <RiMenuFoldLine size={25} />}
        </div>
        <div
          className={
            Nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r  bg-[#fff] ease-in-out duration-500  flex flex-col justify-between"
              : " fixed left-[-100%] "
          }
        >
          <div className="">
            <img src={Img} alt="Img here" className="h-14 mx-auto mt-2" />
            <ul className="w-full  font-bold text-[#379498] ">
              {pageLinks.map((link) => {
                const { id, href, title } = link;
                return (
                  <li key={id} className="p-4 border-b border-[#379498]">
                    <a href={href}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className=" flex justify-evenly p-8">
            <li className=" text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
              <a href="https://goo.gl/maps/pYDRx1DP9o5wRfAGA" target="_blank">
                <HiLocationMarker />
              </a>
            </li>
            <li className=" text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer  hover:scale-105 duration-300">
              <a href="#reviews">
                <RiHandHeartLine />
              </a>
            </li>
            <li className="  text-3xl text-[#379498] hover:text-[#47dde2]  cursor-pointer hover:scale-105 duration-300">
              <a href="#footer">
                <MdDeliveryDining />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
