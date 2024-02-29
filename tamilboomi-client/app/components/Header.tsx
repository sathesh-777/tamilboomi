"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { HiOutlineMenuAlt3, HiOutlineUserCircle, HiUser } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import "../styles/navbar.css";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import Image from "next/image";
import avatar from "../../public/assests/avatar.png";
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./Loader/Loader";
import { colors } from "@mui/material";
import useWindowPosition from "../hooks/useWindowsPosition";
import Logo from '../../public/assests/trigger-logo.svg';
import StickyTrigger from '../../public/assests/sticky-trigger.svg';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const {data:userData,isLoading,refetch} = useLoadUserQuery(undefined,{});
  const { data } = useSession();
  const windowPosition = useWindowPosition();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if(!isLoading){
      if (!userData) {
        if (data) {
          socialAuth({
            email: data?.user?.email,
            name: data?.user?.name,
            avatar: data.user?.image,
          });
          refetch();
        }
      }
      if(data === null){
        if(isSuccess){
          toast.success("Login Successfully");
        }
      }
      if(data === null && !isLoading && !userData){
          setLogout(true);
      }
    }
  }, [data, userData, isLoading, socialAuth, refetch, isSuccess]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      {
        setOpenSidebar(false);
      }
    }
  };

  return (
   <>
   {
    isLoading ? (
      <Loader />
    ) : (
      <header  className={`${
        active
          ? windowPosition > 0 && "fix-header sticky"
          : "header-nav"
      }`}
    >
      <div className="container">
          <div className="w-full h-[80px] flex items-center justify-between" style={{ flexBasis: 'auto' }}>
            <div>
                <Link href={"/"}>
                  <Image
                    src={active && windowPosition > 0 ? StickyTrigger : Logo}
                    alt=""
                    width={150}
                    height={50}
                    className="w-100 cursor-pointer py-2"
                    />
                </Link>
            </div>
            <div className="flex items-center nav-items-list">
              <NavItems activeItem={activeItem} isMobile={false} />
              
              {/* only for mobile */}
              <div className="991px:hidden">
                <HiOutlineMenuAlt3
                  size={35}
                  className="cursor-pointer rounded-sm color-[#1d4ed8] bg-white p-2 mr-4"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
            </div>
            <div className="flex items-center">
              {userData ? (
                <Link href={"/profile"} className="select-none ml-2">
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full cursor-pointer select-none"
                    style={{border: activeItem === 5 ? "2px solid #37a39a" : "none"}}
                  />
                </Link>
              ) : (
                  <>
                    <div className="px-3 hidden 426px:flex text-white rounded-lg pb-2 pt-1 cursor-pointer"
                         onClick={() => setOpen(true)} style={{border: '2px solid rgb(255 255 255 / 20%)'}} >
                      Signup
                    </div>
                    <HiUser
                      size={40}
                      className="block 426px:hidden rounded-full cursor-pointer dark:text-white p-2 text-black"
                      onClick={() => setOpen(true)} style={{border: '2px solid #fff'}}
                    />
                  </>
              )}
            </div>
          </div>

        {/* mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[100%] 768px:w-[40%] fixed z-[999999999] h-screen bg-white top-0 right-0">
              <NavItems activeItem={activeItem} isMobile={true} />
              {userData?.user ? (
                <Link href={"/profile"}>  
                  <Image
                    src={userData?.user.avatar ? userData.user.avatar.url : avatar}
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
                    style={{border: activeItem === 5 ? "2px solid #37a39a" : "none"}}
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={25}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )}
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                Copyright © 2023 ELearning
              </p>
            </div>
          </div>
        )}
      </div>
      {route === "Login" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
              refetch={refetch}
            />
          )}
        </>
      )}

      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}

      {route === "Verification" && (
        <>
          {open && (
            <CustomModal
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </header>
    )
   }
   </>
  );
};

export default Header;
