import React from "react";
import Abhi from "../../assets/abhi.jpg";
import Img from "../../assets/logo1.png";

const index = () => {
  return (
    <>
      <div
        id="about"
        className="bg-[#379498] h-[92vh] md:h-[100vh] scroll-mt-16 "
      >
        <h1 className=" text-white text-center text-4xl p-4 md:pt-4">
          About Us
        </h1>

        <div className="content  md:grid md:grid-cols-2 flex items-center  flex-col  md:flex-row  pt-5">
          <div className="card md:h-[70vh] md:w-[25vw] md:ml-[12rem] md:mt-16 border-white border-4 h-[50vh] w-[80vw] rounded-xl flex flex-col justify-around items-center hover:bg-[#42bbc0] duration-500 ">
            <div className="">
              <img
                src={Img}
                alt="Img here"
                className="md:h-14  rounded-md h-12 md:mt-4 hidden md:block"
              />
            </div>
            <h1 className="text-white uppercase md:text-2xl md:my-3 font-semibold tracking-wider ">
              A Dream By
            </h1>
            <img
              src={Abhi}
              alt="Owner's Image"
              className=" cursor-pointer md:h-[42vh] border-white border-4 hover:scale-105 hover:shadow-lg hover:shadow-[#56c7cb] hover:rounded-lg transition duration-500 h-[40vh] border-1"
            />
            <h1 className="text-white  uppercase md:text-2xl text-xl md:my-3 font-semibold tracking-widest pb-2">
              Abhishek Kumar
            </h1>
          </div>
          <div className="para  md:h-48 md:w-[40vw] border-2 md:mt-0 md:-mx-14 rounded-md   md:block h-32 w-[80%]  mt-10  ">
            <h1 className="text-[#379498] md:h-16 md:pt-2 md:text-3xl upper block bg-white md:w-[100%] rounded-b-xl md:pl-4 text-xl h-10 pl-4 pt-1 ">
              What we Aim
            </h1>
            <p className="text-white px-3  hover:bg-[#42bbc0] duration-500 py-3 hidden md:block">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique atque, error, consequuntur vero doloremque ullam nihil
              doloribus praesentium quasi veniam perferendis eius iusto eveniet
              fugiat inventore eos? Omnis unde recusandae ex temporibus libero
              commodi iusto, voluptate excepturi
            </p>
            <p className=" px-3  hover:bg-[#42bbc0] duration-500  md:hidden pt-2 text-gray-200">
              Being a chef is all about feeding people's soul , which is a part
              of the story of all humanity
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
