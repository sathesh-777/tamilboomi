import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
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
