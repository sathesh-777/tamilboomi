'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../components/Loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Upcomming: FC<Props> = (props) => {
    const { data,isLoading } = useGetHeroDataQuery("Banner", {});

    return (
        <>
        {
         isLoading ? (
           <Loader />
         ) : (
            <div className="bg-[#ECF7FF] 1000px:py-20 1000px:px-40 px-[10px] py-5px py-[20px]">
                <div>
                  <h1 className="text-black text-md w-full 1000px:text-3xl text-xl font-bold mb-4">Upcomming Batch</h1>
                  <div >

                  </div>
                </div>
            <div className="1000px:flex justify-center items-center rounded-xl bg-[#397CFD]">
              <div className="flex justify-center items-center w-full">
                <Image
                  src={require("./../../public/assests/business-img.png")}
                  width={400}
                  height={400}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="1000px:w-full relative p-5">
                <h2 className="text-white text-md w-full 1000px:text-6xl font-bold">
                  Data Engineering
                </h2>
                <p className="text-[#edfff4] text-start font-Josefin 1000px:text-2xl">
                  From Design To Implementation
                </p>
          
                {/* List of Points */}
                <ul className="text-[#edfff4] text-start list-disc ml-4 font-Josefin 1000px:text-2xl mt-4">
                  <li>100% Placement Support</li>
                  <li>Industry Led Curriculum</li>
                  <li>Hands-on Training</li>
                  <li>20+ Projects</li>
                  <li>IIT-M Pravartak Certification</li>
                  <li>Official AWS Certification</li>
                </ul>

                <button className="text-[#edfff4] text-start border-[#edfff4] border-2 rounded-md font-Josefin text-[18px] mt-4 px-4 py-2">
  View
</button>

              </div>
            </div>
          </div>
          
         )
        }
        </>
       );
};

export default Upcomming;
