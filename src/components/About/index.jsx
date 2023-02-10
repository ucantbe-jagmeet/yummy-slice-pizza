import React from "react";
import Abhi from "../../assets/abhi.jpg";
import Img from "../../assets/logo1.png";

const index = () => {
  return (
    <>
      <div id="about" className="bg-[#379498] h-screen  scroll-mt-16 ">
        <h1 className=" text-white text-center text-4xl p-4 md:pt-4">
          About Us
        </h1>

        <div className="content  md:grid md:grid-cols-2 flex justify-center pt-5">
          <div className="card md:h-[70vh] md:w-[25vw] md:ml-[12rem] md:mt-16 border-white border-4 h-[50vh] w-[80vw] rounded-xl flex flex-col justify-around items-center hover:bg-[#42bbc0] duration-500 ">
            <div className="">
              <img
                src={Img}
                alt="Img here"
                className="md:h-14  rounded-md h-16 md:mt-4"
              />
            </div>
            <h1 className="text-white uppercase md:text-2xl md:my-3 font-semibold tracking-wider hidden md:block">
              A Dream By
            </h1>
            <img
              src={Abhi}
              alt="Owner's Image"
              className=" cursor-pointer md:h-[42vh] border-white border-4 hover:scale-105 hover:shadow-lg hover:shadow-[#56c7cb] hover:rounded-lg transition duration-500 h-[30vh] border-1"
            />
            <h1 className="text-white  uppercase md:text-2xl text-xl md:my-3 font-semibold tracking-widest pb-2">
              Abhishek Kumar
            </h1>
          </div>
          <div className="para  md:h-44 md:w-[40vw] border-2 md:mt-[14rem] md:-mx-14 rounded-md hidden  md:block">
            <h1 className="text-[#379498] md:h-16 md:pt-2 md:text-3xl upper block bg-white md:w-[100%] rounded-b-xl md:pl-4 text-xl h-10 pl-4 pt-1 ">
              What we Aim
            </h1>
            <p className="text-white px-3 py-2 hover:bg-[#42bbc0] duration-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique atque, error, consequuntur vero doloremque ullam nihil
              doloribus praesentium quasi veniam perferendis eius iusto eveniet
              fugiat inventore eos? Omnis unde recusandae ex temporibus libero
              commodi iusto, voluptate excepturi error, saepe dolore!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
