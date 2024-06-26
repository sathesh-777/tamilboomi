"use client";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Link from "next/link";
import Header from "../components/Header";
import Heading from "../utils/Heading";
import { styles } from "../styles/style";
import "../styles/course.css";
import CourseCard from "../components/Course/CourseCard";
import Footer from "../components/Footer";

type Props = {};

const Page = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [courses, setcourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      setcourses(data?.courses);
    }
    if (category !== "All") {
      setcourses(
        data?.courses.filter((item: any) => item.categories === category)
      );
    }
    if (search) {
      setcourses(
        data?.courses.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [data, category, search]);

  const categories = categoriesData?.layout.categories;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
          <section className="course-overview">
            <div className="container-2">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-7xl">Courses</h2>
                  <div className="bread-crumbs mt-3 flex flex-row gap-x-2">
                    <Link href={"/"}>
                      <div className="ps-2">Home</div>
                    </Link>
                    <span>/</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-2">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <Heading
                      title={"All courses - Elearning"}
                      description={"Elearning is a programming community."}
                      keywords={
                        "programming community, coding skills, expert insights, collaboration, growth"
                      }
                    />
                    <br />
                    <div className="w-full flex items-center flex-wrap gap-5">
                      <div
                        className={`${
                          category === "All"
                            ? "bg-[#3773e8] text-[#fff]"
                            : "text-[#5d5a67]"
                        } px-3 py-1 rounded-full flex items-center font-medium  justify-center font-Poppins cursor-pointer`}
                        onClick={() => setCategory("All")}
                      >
                        All
                      </div>
                      {categories &&
                        categories.map((item: any, index: number) => (
                          <div key={index}>
                            <div
                              className={`h-[35px] ${
                                category === item.title
                                  ? "bg-[#3773e8] text-[#fff]"
                                  : "text-[#5d5a67]"
                              } px-3 py-1 rounded-full flex items-center justify-center font-Poppins cursor-pointer`}
                              onClick={() => setCategory(item.title)}
                            >
                              {item.title}
                            </div>
                          </div>
                        ))}
                    </div>
                    {courses && courses.length === 0 && (
                      <p
                        className={`${styles.label} justify-center min-h-[50vh] flex items-center`}
                      >
                        {search
                          ? "No courses found!"
                          : "No courses found in this category. Please try another one!"}
                      </p>
                    )}
                    <div className="flex flex-col items-center my-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses &&
                          courses.map((item: any, index: number) => (
                            <CourseCard item={item} key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
