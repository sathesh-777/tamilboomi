"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Loader from "@/app/components/Loader/Loader";
import { styles } from "@/app/styles/style";
import Heading from "@/app/utils/Heading";
import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: any }) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  const { data, isLoading } = useGetSingleBlogQuery({ id: params.id });
  console.log(data.blog);
  return (
    <div>
      <Heading
        title={`Blog Details`}
        description="Elearning is a learning management system for helping programmers."
        keywords="programming,mern"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          <div className="w-[80%] m-auto py-10">
            <Image
              src={data?.blog?.thumbnailUrl?.url}
              alt=""
              className="w-full"
              width={800}
              height={500}
            />
            <br />
            <br />
            <h1 className={`${styles.title} !text-left`}>{data?.blog.title}</h1>
            <br />
            <br />

            {/* don't remove this ql-snow & ql-editor class it's giving style for the blog details */}
            <div className="ql-snow">
              <p className="text-gray-800 mt-2">
                <div
                  className="ql-editor"
                  dangerouslySetInnerHTML={{ __html: data?.blog?.content }}
                />
              </p>
            </div>
          </div>
          <br />
          <Footer />
        </div>
      )}
    </div>
  );
};




export default Page;
