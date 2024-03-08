"use client";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import Heading from "@/app/utils/Heading";
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/app/components/Blog/UploadBlog"),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Heading
        title="Elearning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <DynamicComponentWithNoSSR />
        </div>
      </div>
    </div>
  );
};

export default Page;
