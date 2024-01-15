'use client'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'
import Heading from '@/app/utils/Heading'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import UploadBlog from "@/app/components/Blog/UploadBlog";

const Page = () => {
  return (
    <div className='bg-[#010100]'>
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
               <UploadBlog /> 
            </div>
        </div>
    </div>
  )
}

export default Page