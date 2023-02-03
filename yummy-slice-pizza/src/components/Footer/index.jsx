import React from "react";

const index = () => {
  const msg = "I'd like to chat with you";
  return (
    <>
      <div id="footer" className="h-[70vh] bg-[#379498] overflow-hidden">
        <div className="grid grid-cols-4 pl-28 pt-16 mb-24">
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer">Locations</h1>
            <ul>
              <li className="mt-4  cursor-pointer hover:scale-105">Gagret</li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                Amb (opening Soon)
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer">Quick Links</h1>
            <ul>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#nav">Home</a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#about">About</a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#menu">Menu</a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#offers">Offers</a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#reviews">Reviews</a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer">Delivery Info</h1>
            <ul>
              <li className="mt-4 cursor-pointer hover:scale-105">
                {" "}
                +91 95491-22320
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                {" "}
                +91 62302-22320
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                {" "}
                abhishek.kumar85808@gmail.com
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                {" "}
                Himachal Pradesh, India - 177201
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl cursor-pointer">Follow Us</h1>
            <ul>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a
                  href="https://instagram.com/pizzayummyslice?igshid=OGQ2MjdiOTE="
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="whatsapp://send?abid=919549122320 " target="_blank">
                  Whatsapp
                </a>
              </li>
              <li className="mt-4 cursor-pointer hover:scale-105">
                <a href="mailto:abhishek.kumar85808@gmail.com " target="_blank">
                  Gmail
                </a>
              </li>
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
