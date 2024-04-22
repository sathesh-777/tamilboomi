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
  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div className="relative hover:shadow-2xl bg-opacity-20 backdrop-blur border border-[#00000015] rounded-lg shadow-sm">
      <Link
        href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="h-48 overflow-hidden">
            <Image
              src={item.thumbnail?.url}
              width={400}
              height={195}
              objectFit="cover"
              className="rounded-t-lg course-thumbnail"
              alt="course thumbnail"
            />
          </div>
          <div className="p-5 flex flex-col grow">
            <div>
              <span
                className="text-xs text-[#007eff] px-2 py-1 rounded font-normal"
                style={{ backgroundColor: "rgb(141 181 247 / 50%)" }}
              >
                {item.level}
              </span>
            </div>
            <h1 className="font-Poppins text-xl font-medium text-black mt-2">
              {item.name}
            </h1>
            <p className="text-sm">
              {truncateText(item.description, 110)}
            </p>
            <div className="my-3 flex-grow">
              <div className="flex flex-row items-center">
                <div className="bg-[#f1f0f5] ps-2 pe-1 py-1 rounded-full">
                  <span className="text-sm">{item.stack}</span>
                  <span className="ms-2 text-sm bg-[#ffffff] px-2 py-1 rounded-full shadow">
                    {item.duration}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center mt-auto">
              <h3 className="text-black">
                {item.price === 0 ? "Free" : `${item.price}₹`}
              </h3>
              <h3 className="pl-3 text-[14px] line-through opacity-80 text-black">
              {item.estimatedPrice}₹
            </h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;

{
  /* <div className="w-full flex items-center justify-between pt-2">
<Ratings rating={item.ratings} />
<h5
  className={`text-black ${
    isProfile && "hidden 800px:inline"
  }`}
>
  {item.purchased} Students
</h5>
</div> 
                  <div className="flex items-center pb-3">
                    <AiOutlineUnorderedList size={20} fill="#fff" />
                    <h5 className="pl-2 text-black">
                      {item.courseData?.length} Lectures
                    </h5>
                  </div>

                  <h3 className="text-black">
                      {item.price === 0 ? "Free" : item.price + "₹"}
                    </h3>
*/
}
