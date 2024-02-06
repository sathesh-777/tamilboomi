import Link from "next/link";
import React, { FC, useState } from "react";

interface NotifyProps {
  text: string;
}

const Notify: FC<NotifyProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeNotification = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="w-full text-center bg-[#397CFD] py-2 md:text-md text-[12px]">
          <Link href={"https://chat.whatsapp.com/Dtt7HHvfBvvAzXYU8z4cWX"}>
            <span
              className={` font-Poppins font-[500] text-center text-white`}
            >
              {text}  <b className="underline">join our Whatsapp Teach community</b>
            </span>
          </Link>
          <button
            onClick={closeNotification}
            className="text-md cursor-pointer absolute right-2"
          >
            &#10006; {/* This is the close (X) icon */}
          </button>
        </div>
      )}
    </>
  );
};

export default Notify;
