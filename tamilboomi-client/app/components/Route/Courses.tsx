import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseCard from "../Course/CourseCard";

type Props = {};

const Courses = (props: Props) => {
  const { data, isLoading } = useGetUsersAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);

  return (
    <div>
      <section className="my-10">
        <div className="container-2">
          <div className="flex flex-col justify-center items-center mb-3">
            <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl 800px:!leading-[60px] pt-2 text-[#000000ce] font-[700] tracking-tight">
              Level Up Your Coding <span className="text-gradient">Skills</span>{" "}
            </h1>
            <p className="text-[1.5rem] text-center pt-5">Whether you want to excel in web development or strengthen your fundamental software engineering skills, there is a course for you.</p>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses &&
              courses.map((item: any, index: number) => (
                <CourseCard item={item} key={index} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
