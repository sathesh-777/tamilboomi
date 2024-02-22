'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
import "../../styles/hero.css";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data,isLoading } = useGetHeroDataQuery("Banner", {});
  const [search,setSearch] = useState("");
  const router = useRouter()
  
  const handleSearch = () => {
   if(search === ""){
    return
   }else{
    router.push(`/courses?title=${search}`);
   }
  }


  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
    <div className=" 1000px:flex 1000px:px-28 1000px:py-25 h-[92dvh] 1000px:flex-row-reverse justify-center items-center relative">
      <div className="flex justify-center items-center relative w-full">
        <Image
           src={require("../../../public/assests/triggerup.svg")}
          width={500}
          alt=""
          className="h-auto hero-image"
        />
        <Image
           src={require("../../../public/assests/book.svg")}
          width={150}
          alt=""
          className="w-50 h-auto hero-image absolute bottom-right floating"
        />
        <Image
           src={require("../../../public/assests/money.svg")}
          width={150}
          alt=""
          className="w-50 h-auto hero-image absolute top-left floating"
        />
        <Image
           src={require("../../../public/assests/target.svg")}
          width={150}
          alt=""
          className="w-50 h-auto hero-image absolute bottom-left floating"
        />
        <Image
           src={require("../../../public/assests/calender.svg")}
          width={150}
          alt=""
          className="w-50 h-auto hero-image absolute top-right floating"
        />
      </div>
      <div className="1000px:w-full relative px-4">
        {/* #5f5f5f */}
        <h2 className="text-7xl font-bold text-[#5f5f5f]	mb-5">Sharpen Your Mind you screw your Career</h2>
        <a href="#" className="px-5 bg-blue-700 rounded-lg pb-4 pt-3 cursor-pointer text-white">View Course</a>
      </div>
      <div className="w-full h-[100vh] absolute top-0 z-[-10]">
      <Image
        src="/assests/support-bg-2.svg"
        alt=""
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
      />
    </div>
    </div>
    )
   }
   </>
  );
};

export default Hero;