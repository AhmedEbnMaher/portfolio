import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Menu } from "@/components/Icons/Menu";
interface Props {
  menuItem: any;
  scrollColor: string;
}

export default function Dropdown({ menuItem, scrollColor }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen
    ? "transition duration-1000 flex"
    : "transition duration-1000 hidden";

  return (
    <>
      <div className="relative">
        <button onClick={toggle}>
          <Menu scrollColor={scrollColor} />
        </button>
        <Container>
          <div
            className={`transition duration-1000 absolute top-15 right-5 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-white border-[1px] border-[#ccc] rounded-md ${transClass}`}
          >
            {menuItem.map((item: any) => (
              <Link
                key={item.route}
                className="text-gray-500 px-4 py-3"
                href={item?.route || ""}
                onClick={toggle}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>
      {isOpen ? (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
