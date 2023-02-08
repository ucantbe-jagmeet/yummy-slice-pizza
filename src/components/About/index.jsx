import React from "react";
import Abhi from "../../assets/abhi.jpg";
import Img from "../../assets/logo1.png";

const index = () => {
  return (
    <>
      <div id="about" className="bg-[#379498] h-[100vh] scroll-mt-16 ">
        <h1 className=" text-white text-center text-4xl pt-4">About Us</h1>

        <div className="content  grid grid-cols-2 ">
          <div className="card h-[70vh] w-[25vw] ml-[12rem] mt-16 border-white border-4 flex justify-center items-center flex-col rounded-xl hover:bg-[#42bbc0] duration-500">
            <div>
              <img src={Img} alt="Img here" className="h-14 mb-1 rounded-md" />
            </div>
            <h1 className="text-white uppercase text-2xl my-3 font-semibold tracking-wider ">
              A Dream By
            </h1>
            <img
              src={Abhi}
              alt="Owner's Image"
              className=" cursor-pointer h-[42vh] border-white border-4 hover:scale-105 hover:shadow-lg hover:shadow-[#56c7cb] hover:rounded-lg transition duration-500"
            />
            <h1 className="text-white  uppercase text-2xl my-3 font-semibold tracking-widest">
              Abhishek Kumar
            </h1>
          </div>
          <div className="para flex justify-center items-center flex-col h-44 w-[40vw] border-2 mt-[14rem] -mx-14 rounded-md">
            <h1 className="text-[#379498] h-16 pt-2 text-3xl upper block bg-white w-[100%] rounded-b-xl pl-4 ">
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
