"use client";
import Container from "@/components/Container";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavList from "../dropDown";
import { menuItems } from "../MenuItems";
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
    <div className="scroll-smooth">
      <div className={`${variant}`}>
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <h1 className="font-bold text-2xl ">
                  <span className="text-blue-600">Dan</span>
                  <span>GER</span>
                  <span className="text-pink-500">ous</span>
                </h1>
              </Link>
            </div>
            <div className="hidden w-4/5 lg:block">
              <ul className="flex justify-between w-full">
                {menuItems.map((item: any, index: number) => (
                  <div key={item.route + index}>
                    <Link href={`${item.route}`}>
                      <li className="cursor-pointer">{item.title}</li>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <div className="block lg:hidden ">
              <NavList
                menuItem={menuItems}
                scrollColor={scrollVlue ? "rgb(107 114 128)" : "white"}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ClientNav;
