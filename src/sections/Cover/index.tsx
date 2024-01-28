import Container from "@/components/Container";
import { ComputerIcon } from "@/components/Icons/ComputerIcon";
import React from "react";

const Cover = () => {
  return (
    <>
      <div
        className=" bg-[url('/cover1.jpg')] w-full h-[500px] bg-cover bg-center bg-no-repeat relative 
    "
      >
        <div className="bg-gradient-to-r from-emerald-600 via-teal-400 to-emerald-900 h-full opacity-70" />
        <Container>
          <div className="flex justify-start items-center h-full absolute z-10 top-0">
            <div>
              <h1 className="text-7xl text-white"> Hello !</h1>
              <h1 className="text-7xl text-white font-bold mt-3">
                {" "}
                <span className="text-7xl font-normal">I'm</span> AhMed MaHer
              </h1>
              <div className="flex">
                <h1 className="text-white text-2xl mt-5">Frontend Developer</h1>
                <ComputerIcon />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cover;
