"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Blog from "./components/Route/Blog";
import Footer from "./components/Footer";
import Notify from "./utils/Notify";
import Upcomming from "./utils/UpcommingCourses";
import Contact from "./contact/contact";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Tamilboomi"
        description="TamilBoomi is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />

      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      {/* <Notify text="Welcome to Tamilboomi technologies, to get latest updates and couching  " /> */}
      <Hero />
      <Upcomming />
      <Courses />
      <Blog />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Page;