import { styles } from "@/app/styles/style";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoCloseOutline } from "react-icons/io5";
import { format } from "timeago.js";
import CourseContentList from "../Course/CourseContentList";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import { useCreateOrderMutation } from "@/redux/features/orders/ordersApi";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

type Props = {
  data: any;
  stripePromise: any;
  clientSecret: string;
  setRoute: any;
  setOpen: any;
};

const CourseDetails = ({
  data,
  stripePromise,
  clientSecret,
  setRoute,
  setOpen: openAuthModal,
}: Props) => {
  const { data: userData, refetch } = useLoadUserQuery(undefined, {});
  const [createOrder] = useCreateOrderMutation();
  const [user, setUser] = useState<any>();
  const [open, setOpen] = useState(false);
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setUser(userData?.user);
  }, [userData]);

  const discountPercentage =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;

  const discountPercentagePrice = !Number.isNaN(discountPercentage)
    ? discountPercentage.toFixed(0)
    : 0;

  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id);

  const handleOrder = (e: any) => {
    if (user) {
      if (isPurchased) {
        toast.error("You have already purchased this course.");
      } else {
        if (data.price === 0) {
          setConfetti(true);
          createOrder({ courseId: data._id });
        } else {
          setOpen(true);
        }
      }
    } else {
      setRoute("Login");
      openAuthModal(true);
    }
  };

  useEffect(() => {
    if (confetti) {
      setTimeout(() => {
        setConfetti(false);
        window.location.reload();
      }, 4000);
    }
  }, [confetti]);

  return (
    <div>
      {confetti && (
        <div className="w-full">
          <Confetti
            width={(width && width - 40) || 100}
            height={height || 100}
            className="overflow-hidden z-[99999]"
          />
        </div>
      )}

      <div className="container">
        <div className="m-auto py-5">
          <div className="w-full flex flex-col-reverse 800px:flex-row">
            <div className="w-full 800px:w-[65%] 800px:pr-5">
              <h1 className="text-[3.2rem] font-bold text-[#262525] leading-none">{data.name}</h1>
              <p className="text-[1.3rem] text-black font-poppins font-[500] mt-5">
                {data.description}
              </p>
              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center">
                  <Ratings rating={data.ratings} />
                  <h5 className="text-black ">
                    {data.reviews?.length} Reviews
                  </h5>
                </div>
                <h5 className="text-black ">{data.purchased} Students</h5>
              </div>

              <br />
              <h1 className="text-[25px] font-Poppins font-[600] text-black ">
                What you will learn from this course?
              </h1>
              <div>
                {data.benefits?.map((item: any, index: number) => (
                  <div
                    className="w-full flex 800px:items-center py-2"
                    key={index}
                  >
                    <div className="w-[15px] mr-1">
                      <IoCheckmarkDoneOutline
                        size={20}
                        className="text-black "
                      />
                    </div>
                    <p className="pl-2 text-black ">{item.title}</p>
                  </div>
                ))}
                <br />
                <br />
              </div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black ">
                What are the prerequisites for starting this course?
              </h1>
              {data.prerequisites?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline size={20} className="text-black " />
                  </div>
                  <p className="pl-2 text-black ">{item.title}</p>
                </div>
              ))}
              <br />
              <br />
              <div>
                <h1 className="text-[25px] font-Poppins font-[600] text-black ">
                  Course Overview
                </h1>
                <CourseContentList data={data?.courseData} isDemo={true} />
              </div>
              <br />
              <br />
              {/* course description */}
              <div className="w-full">
                <h1 className="text-[25px] font-Poppins font-[600] text-black ">
                  Course Details
                </h1>
                <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black ">
                  {data.description}
                </p>
              </div>
              <br />
              <br />
              <div className="w-full">
                <div className="800px:flex items-center">
                  <Ratings rating={data?.ratings} />
                  <div className="mb-2 800px:mb-[unset]" />
                  <h5 className="text-[25px] font-Poppins text-black ">
                    {Number.isInteger(data?.ratings)
                      ? data?.ratings.toFixed(1)
                      : data?.ratings.toFixed(2)}{" "}
                    Course Rating • {data?.reviews?.length} Reviews
                  </h5>
                </div>
                <br />
                {(data?.reviews && [...data.reviews].reverse()).map(
                  (item: any, index: number) => (
                    <div className="w-full pb-4" key={index}>
                      <div className="flex">
                        <div className="w-[50px] h-[50px]">
                          <Image
                            src={
                              item.user.avatar
                                ? item.user.avatar.url
                                : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                            }
                            width={50}
                            height={50}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-cover"
                          />
                        </div>
                        <div className="hidden 800px:block pl-2">
                          <div className="flex items-center">
                            <h5 className="text-[18px] pr-2 text-black ">
                              {item.user.name}
                            </h5>
                            <Ratings rating={item.rating} />
                          </div>
                          <p className="text-black ">{item.comment}</p>
                          <small className="text-[#000000d1] dark:text-[#ffffff83]">
                            {format(item.createdAt)} •
                          </small>
                        </div>
                        <div className="pl-2 flex 800px:hidden items-center">
                          <h5 className="text-[18px] pr-2 text-black ">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                      </div>
                      {item.commentReplies.map((i: any, index: number) => (
                        <div
                          className="w-full flex 800px:ml-16 my-5"
                          key={index}
                        >
                          <div className="w-[50px] h-[50px]">
                            <Image
                              src={
                                i.user.avatar
                                  ? i.user.avatar.url
                                  : "https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png"
                              }
                              width={50}
                              height={50}
                              alt=""
                              className="w-[50px] h-[50px] rounded-full object-cover"
                            />
                          </div>
                          <div className="pl-2">
                            <div className="flex items-center">
                              <h5 className="text-[20px]">{i.user.name}</h5>{" "}
                              <VscVerifiedFilled className="text-[#0095F6] ml-2 text-[20px]" />
                            </div>
                            <p>{i.comment}</p>
                            <small className="text-[#ffffff83]">
                              {format(i.createdAt)} •
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-full 800px:w-[35%] relative">
              <div className="sticky top-[100px] left-0 z-50 w-full">
                <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
                <div className="flex items-center">
                  <h1 className="pt-5 text-[25px] text-black ">
                    {data.price === 0 ? "Free" : data.price + "₹"}
                  </h1>
                  <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black ">
                    {data.estimatedPrice}₹
                  </h5>

                  <h4 className="pl-5 pt-4 text-[22px] text-black ">
                    {discountPercentagePrice}% Off
                  </h4>
                </div>
                <div className="flex items-center">
                  {isPurchased ? (
                    <Link
                      className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                      href={`/course-access/${data._id}`}
                    >
                      Enter to Course
                    </Link>
                  ) : (
                    <div
                      className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson] text-white`}
                      onClick={handleOrder}
                    >
                      Buy Now {data.price}₹
                    </div>
                  )}
                </div>
                <br />
                <p className="pb-1 text-black ">• Source code included</p>
                <p className="pb-1 text-black ">• Full lifetime access</p>
                <p className="pb-1 text-black ">• Certificate of completion</p>
                <p className="pb-3 800px:pb-1 text-black ">• Premium Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        {open && (
          <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
              <div className="w-full flex justify-end">
                <IoCloseOutline
                  size={40}
                  className="text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="w-full">
                {stripePromise && clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckOutForm
                      setOpen={setOpen}
                      data={data}
                      user={user}
                      refetch={refetch}
                    />
                  </Elements>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default CourseDetails;
