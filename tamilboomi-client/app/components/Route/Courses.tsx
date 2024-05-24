import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { styles } from "../../styles/style";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";

type Props = {};

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
  const searchParams = useSearchParams();
  const search = searchParams?.get("title");
  const [courses, setcourses] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      let filteredCourses = [];
      const maxCourses = Math.floor(data?.courses.length / 3) * 3;
      filteredCourses = data?.courses.slice(0, maxCourses);
      setcourses(filteredCourses);
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
      <section className="my-10">
        <div className="container-2">
          <div className="flex flex-col justify-center items-center mb-3">
            <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl 800px:!leading-[60px] pt-2 text-[#000000ce] font-[700] tracking-tight">
              Level Up Your <span className="text-gradient">Skills</span>{" "}
            </h1>
            <p className="text-[1.5rem] text-center pt-5 w-9/12">
              Whether you want to excel in web development or strengthen your
              fundamental software engineering skills, there is a course for
              you.
            </p>
          </div>
          <br />
          <br />
          <div className="w-full flex items-center justify-center flex-wrap gap-5">
            <div
              className={`${
                category === "All"
                  ? "bg-[#3773e8] text-[#fff]"
                  : "text-[#5d5a67]"
              } px-3 py-1 rounded flex items-center font-medium  justify-center font-Poppins cursor-pointer`}
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
                    } px-3 py-1 rounded flex items-center justify-center font-Poppins cursor-pointer`}
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
        <div className="flex justify-center align-items-center pt-5">
        <Link href={'/courses'} >
          <button className="bg-[#3773e8] text-[#fff] px-4 py-3 rounded flex items-center justify-center font-Poppins cursor-pointer">
            Explore Courses
          </button>
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;
