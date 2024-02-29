import Link from "next/link";
import React, {useState } from "react";

import Image from "next/image";
import useWindowPosition from "../hooks/useWindowsPosition";
import { HiOutlinePlus } from "react-icons/hi";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Blogs",
    url: "/blog",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [_, setOpenSidebar] = useState(false);

  const handleClose = (e: any) => {
    if (e.target.id === "mobilescreen") {
      {
        setOpenSidebar(true);
      }
    }
  };

  const windowPosition = useWindowPosition();
  return (
    <>
      <div className="hidden 991px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`text-[16px] px-6 font-Poppins font-[400]  text-white
                //  ${windowPosition > 0 ? "text-white" : "text-black"}
                `}
              >
                {i.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="991px:hidden mt-5">
             <div className="w-full flex flex-row items-center justify-between text-center py-3 px-5 mb-4">
                <Link href={"/"}>
                  <Image
                    src={require("../../public/assests/trigger-logo.svg")}
                    alt=""
                    width={120}
                    height={300}
                    className="w-100 h-auto rounded-full cursor-pointer"
                    />
                </Link>
                <HiOutlinePlus
                  size={30}
                  className= "p-1 rounded"
                  style={{
                    color: '#fff',
                    background: '#315aef',
                    cursor: 'pointer',
                  }}
                  id="mobilescreen"
                  onClick={handleClose}
                />
            </div>
            {navItemsData &&
              navItemsData.map((i, index) => (
                <Link href={`${i.url}`} passHref key={index}>
                  <span
                    className={`${
                      activeItem === index
                        ? "dark:text-[#37a39a] text-[#397CFD]"
                        : "text-black"
                    } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                  >
                    {i.name}
                  </span>
                </Link>
              ))}
              
          </div>
      )}
    </>
  );
};

export default NavItems;
