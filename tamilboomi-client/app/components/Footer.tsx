import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-black">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black ">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black  ">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-black  ">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black  ">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black  ">
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-black  ">
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black  ">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-black  ">
                  github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black pb-3">
              Contact Info
            </h3>
            <p className="text-base text-black   pb-2">Call Us: 1234567890</p>

            <p className="text-base text-black   pb-2">
              Address: xxx xxxx xxx chennai
            </p>

            <p className="text-base text-black    pb-2">
              Mail Us: text@email.com
            </p>
          </div>
        </div>
        <br />
        <p className="text-center text-black">
          Copyright © 2023 Tamilboomi | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
