'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Loader from "../Loader/Loader";
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
      <div className=" 1000px:flex 1000px:px-32 1000px:py-20 1000px:flex-row-reverse justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <Image
           src={require("../../../public/assests/hero.svg")}
          width={400}
          height={400}
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="1000px:w-full relative ">
        <h2 className="dark:text-white text-[#000000c7] text-[30px] w-full 1000px:text-[70px] font-[600] font-Josefin  ">
        Knowledge for everyone, everywhere.
        </h2>
        <p className="dark:text-[#edfff4] text-start text-[#000000ac] font-Josefin font-[600] text-[18px]">
        Accessible education for all.
        </p>
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
          <input
            type="search"
            placeholder="Search Courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border rounded-[5px] p-2 w-full h-full outline-none text-[#000] text-[20px] font-[500] font-Josefin"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 rounded-r-[5px]"
          onClick={handleSearch}
          >
            <BiSearch className="text-white bg-[#397CFD] p-[2px] rounded-lg " size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
          <Image
            src={require("../../../public/assests/client-1.jpg")}
            alt=""
            className="rounded-full "
          />
          <Image
            src={require("../../../public/assests/client-2.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          />
          <Image
            src={require("../../../public/assests/client-3.jpg")}
            alt=""
            className="rounded-full ml-[-20px]"
          />
          <p className="font-Josefin text-[#000000b3] 1000px:pl-3 1000px:text-[18px] 1000p:font-[600]">
            500K+ People already trusted us.{" "}
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[#397CFD]"
            >
              View Courses
            </Link>{" "}
          </p>
        </div>
        <br />

      </div>
    </div>
    )
   }
   </>
  );
};

export default Hero;
