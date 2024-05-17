import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import useWindowPosition from "../hooks/useWindowsPosition";
import { HiHome, HiOutlineMap, HiBookOpen, HiUserGroup, HiMail } from "react-icons/hi";
import { Icon } from "@mui/material";


export const navItemsData = [
  {
    name: "Home",
    url: "/",
    icon: HiHome,
  },
  {
    name: "Courses",
    url: "/courses",
    icon: HiOutlineMap,
  },
  {
    name: "Blogs",
    url: "/blog",
    icon: HiBookOpen,
  },
  {
    name: "About",
    url: "/about",
    icon: HiUserGroup,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: HiMail,
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {


  const windowPosition = useWindowPosition();
  return (
    <>
      <div className="hidden 991px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span
                className={`nav-items ${activeItem === index ? "active" : ""}`}
              >
                <span
                  className={`text-[16px] px-6 font-Poppins font-[400] text-white ${
                    windowPosition > 0 ? "text-white" : "text-black"
                  }`}
                >
                  {i.name}
                </span>
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="991px:hidden mt-5">
          {navItemsData &&
            navItemsData.map((i, index) => (
              <Link href={`${i.url}`} passHref key={index}>
                <div
                  className={`flex flex-row items-center px-3 ${
                    activeItem === index ? "dark:text-black text-black bg-[#f0f0f0] mx-3 rounded-lg" : "text-[#7f7f7f]"
                  }`}
                >
                  {i.icon && <i.icon className={`nav-item-icon`} />}
                  <span className={`block py-5 text-[1rem] px-6 font-Poppins font-[400]`}>
                    {i.name}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
