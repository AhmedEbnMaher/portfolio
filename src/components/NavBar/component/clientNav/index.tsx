"use client";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

const ClientNav = () => {
  const [scrollVlue, setScrollValue] = useState(0);
  const variant = scrollVlue
    ? "transition duration-500 w-full fixed z-50 min-h-20 bg-white text-gray-500 flex justify-center items-center"
    : "transition duration-500 w-full fixed z-50 min-h-20 bg-transparent text-white flex justify-center items-center";

  const handleScroll = () => {
    setScrollValue(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={`${variant}`}>
        <Container>
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl ">
                <span className="text-blue-600">Dan</span>
                <span>GER</span>
                <span className="text-pink-500">ous</span>
              </h1>
            </div>
            <div className="w-2/3">
              <ul className="flex justify-between w-full">
                <li className="cursor-pointer ">About</li>
                <li className="cursor-pointer ">Projects</li>
                <li className="cursor-pointer ">Technical Skills</li>
                <li className="cursor-pointer ">Contact</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientNav;
