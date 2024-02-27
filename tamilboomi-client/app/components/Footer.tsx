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
                <Link href="/courses" className="text-base text-black  ">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-base text-black  ">
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
                <Link href="https://www.youtube.com/@Tamilboomi" className="text-base text-black  ">
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/tamilboomitechnologies" className="text-base text-black  ">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/tamilboomi-tech-118783277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-base text-black  ">
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black pb-3">
              Contact Info
            </h3>
            <p className="text-base text-black   pb-2">Call Us: +91 9619663272</p>

            <p className="text-base text-black   pb-2">
              Address: Chennai
            </p>

            <p className="text-base text-black    pb-2">
              Mail Us: info@tamilboomi.com
            </p>
          </div>
        </div>
        <br />
        <p className="text-center text-black">
          Copyright © 2024 Tamilboomi | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
