import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import useWindowPosition from "../hooks/useWindowsPosition";
// import { HiOutlinePlus } from "react-icons/hi";

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

  // const handleClose = (e: any) => {
  //   if (e.target.id === "mobilescreen") {
  //     {
  //       setOpenSidebar(true);
  //     }
  //   }
  // };

  const windowPosition = useWindowPosition();
  return (
    <>
      <div className="hidden 991px:flex">
        {navItemsData &&
          navItemsData.map((i, index) => (
            <Link href={`${i.url}`} key={index} passHref>
              <span className={`nav-items ${activeItem === index ? "active" : ""}`}>
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
                <span
                  className={`${
                    activeItem === index
                      ? "dark:text-[#37a39a] text-[#397CFD] active"
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
