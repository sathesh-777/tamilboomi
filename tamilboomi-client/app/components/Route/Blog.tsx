import { styles } from "@/app/styles/style";
import { useGetAllBlogsQuery } from "@/redux/features/blogs/blogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "timeago.js";

type Props = {};

const Blog = (props: Props) => {
  const { data } = useGetAllBlogsQuery({});
  console.log(data);


  return (
    <div className="w-[90%] 800px:w-[85%] m-auto my-4">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Technology Blog
            <br />
            Explore the Latest in Tech
          </h3>
          <br />
          <p className={styles.label}>
            Stay informed about the ever-evolving world of technology. Our blog
            covers a wide range of topics, from AI and web development to
            blockchain and data science.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {data &&
          data.blogs.map((post: any, index: any) => (
            <Link
              href={`/blog/${post._id}`}
              key={index}
              className="bg-white rounded shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post?.thumbnailUrl?.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm">
                  By {post.author.name} on {format(post.createdAt)}
                </p>
              </div>
            </Link>
          ))}
      </div>
      <div className={`flex items-center justify-center mt-20`}>
        <span
          className={`h-[35px] rounded-full bg-gray-400 m-3 px-3 max-w-300px flex items-center justify-center font-Poppins cursor-pointer`}
        >
          View All
        </span>
      </div>
    </div>
  );
};

export default Blog;
