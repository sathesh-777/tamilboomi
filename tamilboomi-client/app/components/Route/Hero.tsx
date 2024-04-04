'use client'
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
// import { BiSearch } from "react-icons/bi";
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
    <section className="hero-banner-1">
      {/* shape */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <Image
            src={require("../../../public/assests/shape-1.png")}
            width="100%"
            height="100%"
            alt=""
            className="b-shape-1-bg"
          />
        </div>
        <div className="b-shape-2">
          <Image
            src={require("../../../public/assests/shape-2.png")}
            width="100%"
            height="100%"
            alt=""
            className="b-shape-2-bg"
          />
        </div>
        <div className="b-shape-3">
          <Image
            src={require("../../../public/assests/shape-3.png")}
            width="100%"
            height="100%"
            alt=""
            className="b-shape-3-bg"
          />
        </div>
        <div className="b-shape-4">
          <Image
            src={require("../../../public/assests/shape-4.png")}
            width="100%"
            height="100%"
            alt=""
            className="b-shape-4-bg"
          />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center trigger-hero-wrap">
          <div className="md:w-7/12 lg:w-7/12 px-3">
            <h2 className="text-6xl font-bold text-wrap text-[#2c234d] mb-5 hero-txt">Learn The Art of Programming</h2>
            <p className="mb-5 text-wrap">Discover the journey of mastering programming syntax and logic, where every line of code unlocks new possibilities.</p>
            <Link  href={'#'}>
              <button className="px-5 bg-blue-700 rounded-lg pb-4 pt-3 cursor-pointer text-white">
                View Course
              </button>
            </Link>
          </div>
          <div className="md:w-12/12 lg:w-7/12 px-3">
            <div className="flex justify-center items-center relative w-full" style={{ width: '100%' }}>
              <Image
                src={require("../../../public/assests/triggerup-hero.svg")}
                width="100%"
                height="100%"
                alt=""
                className="hero-image"
                layout="responsive"
              />
              <Image
                src={require("../../../public/assests/book.svg")}
                width={100}
                alt=""
                className="w-50 h-auto hero-image absolute bottom-right floating"
              />
              <Image
                 src={require("../../../public/assests/money.svg")}
                width={100}
                alt=""
                className="w-50 h-auto hero-image absolute top-left floating"
              />
              <Image
                 src={require("../../../public/assests/target.svg")}
                width={100}
                alt=""
                className="w-50 h-auto hero-image absolute bottom-left floating"
              />
              <Image
                 src={require("../../../public/assests/calender.svg")}
                width={100}
                alt=""
                className="w-50 h-auto hero-image absolute top-right floating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
   }
   </>
  );
};

export default Hero;
