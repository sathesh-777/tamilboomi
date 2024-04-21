import Ratings from "@/app/utils/Ratings";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  return (
    <div className="w-full">
      <div className="feature-course-item">
        <div className="course-card">
          <Link
            href={
              !isProfile ? `/course/${item._id}` : `course-access/${item._id}`
            }
          >
            <div className="hover:shadow-2xl bg-opacity-20 backdrop-blur border border-[#00000015] rounded-lg shadow-sm">
              <div className="relative w-full h-full">
                <Image
                  src={item.thumbnail?.url}
                  width={500}
                  height={300}
                  className="rounded w-full course-thumbnail"
                  alt="course thumbnail"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <h1 className="font-Poppins text-xl font-medium text-black">
                  {item.name}
                </h1>
                <div className="w-full flex items-center justify-between pt-2">
                  <Ratings rating={item.ratings} />
                  <h5
                    className={`text-black ${
                      isProfile && "hidden 800px:inline"
                    }`}
                  >
                    {item.purchased} Students
                  </h5>
                </div>
                <div className="w-full flex items-center justify-between pt-3">
                  <div className="flex">
                    <h3 className="text-black">
                      {item.price === 0 ? "Free" : item.price + "₹"}
                    </h3>
                    <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black">
                      {item.estimatedPrice}₹
                    </h5>
                  </div>
                  <div className="flex items-center pb-3">
                    <AiOutlineUnorderedList size={20} fill="#fff" />
                    <h5 className="pl-2 text-black">
                      {item.courseData?.length} Lectures
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
