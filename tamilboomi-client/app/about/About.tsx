import React from "react";
import Image from "next/image";
import { styles } from "../styles/style";
import banner from '../../public/assests/site_feature.png'

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px] font-bold`}>
          About Tamilboomi Technologies
      </h1>
      <div className="flex flex-col justify-center items-center py-2">
        <Image
          src={banner}
          alt="Description"
          className="px-4"
        />
        <p className="text-black pt-3">Tamilboomi Technologies</p>
    </div>
      <br />
      <div className="w-[95%] 800px:w-[60%] m-auto text-black px-5">
        <p className="text-[18px] font-Poppins">
          Tamilboomi is an online training institution that was established in 2014 with the aim of providing high-quality education in the Tamil language, drawing on the expertise gained from industry experience.
          <br />
          <br />
          Our focus has been on training professionals from diverse backgrounds, assisting them in transitioning careers and advancing in their corporate journeys. Our areas of specialization include Data Engineering, Machine Learning, and Cloud (AWS/Azure) DevOps.
          <br />
          <br />
          At Tamilboomi, we believe in the transformative power of education. Our institution was founded with the vision of providing accessible and comprehensive learning opportunities to individuals from diverse backgrounds. We are dedicated to nurturing talents, expanding knowledge horizons, and equipping students with the skills and expertise needed to thrive in today's dynamic world.
          <br />
          <h2 className="font-bold pt-2">Here are some key highlights of Tamilboomi:</h2>
          <br />
            <ul className="ps-5">
              <li className="list-disc pb-2">Over the course of 8+ years, we have successfully trained more than 1000 students.</li>
              <li className="list-disc pb-2">Our students have awarded us a <a className="text-blue-800 font-bold underline" href="https://g.page/tamilboomi-technologies?share=&ref=tamilboomi.com">4.9 Google rating</a>, based on feedback from over 140 individuals.</li>
              <li className="list-disc pb-2">Our<a className="text-blue-800 font-bold underline" href="https://www.youtube.com/tamilboomi?ref=tamilboomi.com">YouTube channel</a> has amassed an impressive 1 million views on our educational content.</li>
            </ul>
          <br />
          <br />
            <h2 className="font-bold">Let's meet our dedicated team at Tamilboomi:</h2>
          <br />
          <br />
          <span className="font-bold">Arumugam. P </span> - Founder of Tamilboomi and a seasoned Data Engineer with over 11 years of experience in the IT industry, specifically in the insurance and banking sectors. Arumugam has a passion for guiding professionals in transforming their careers.
          <br />
          <br />
          <span className="font-bold">Sunder Raman. P</span> - Based in India, Sunder Raman oversees our operational activities. With over 15 years of industry experience in the insurance field, he specializes in customer support and problem-solving.
          <br />
          <br />
          <h2 className="font-bold">Trainers:</h2>
          <br />
          Trainers are the backbone of our success. Our team of trainers consists of highly experienced industry professionals who are dedicated, and committed, and go the extra mile to ensure your understanding of the concepts.
          <br />
          <br />
          Their expertise and passion enable them to explain complex topics in a simplified manner, making the learning process smooth and effective. One unique advantage we offer is conducting classes in Tamil, which provides many learners with the opportunity to grasp and implement the knowledge in an easier way.
          <br />
          <br />
          <h2 className="font-bold">Sudharshan</h2>
          <br />
          <h2 className="font-bold">Karthik</h2>
          <br />
          <h2 className="font-bold">Dinesh Krishna</h2>
          <br />
          We provide training in the following topics:
          <br />
          <br />
          Our curriculum is carefully designed to be relevant, practical, and aligned with industry standards, ensuring that our students receive an education that prepares them for real-world challenges.
          <br />
          <br />
          <ul className="ps-5">
            <li className="list-disc pb-2">AWS DevOps</li>
            <li className="list-disc pb-2">Azure DevOps</li>
            <li className="list-disc pb-2">Python</li>
            <li className="list-disc pb-2">Machine Learning</li>
            <li className="list-disc pb-2">Data Engineering</li>
          </ul>
          <br />
          <br />
          <a className="text-blue-800 font-bold underline" href="https://g.page/tamilboomi-technologies?share=&ref=tamilboomi.com" >Course Reviews:</a>
          <br />
          <br />
          We put our heart and soul into everything we do. We are passionate about providing the best education possible and creating an environment where students can thrive. Our dedicated team of educators goes above and beyond to ensure that each student receives the highest level of support and guidance.
          <br />
          <br />
          Our students' success is at the core of our mission, and we are driven by the satisfaction and achievements of those who have walked through our doors. Their positive feedback and remarkable results are a testament to the efforts we invest in providing a transformative educational experience.
          <br />
          <br />
          Explore our Google Reviews and discover the positive impact our courses have made in the lives and careers of our students: <a className="text-blue-800 font-bold underline" href="https://g.page/tamilboomi-technologies?share=&ref=tamilboomi.com">Google Review Link</a>
          <br />
          <br />
          Join our community of happy learners and experience the difference of high-quality education firsthand. <a className="text-blue-800 font-bold underline" href="https://chat.whatsapp.com/Bj8ERnYJPFp9i7YppR0o73?ref=tamilboomi.com">Join our Whatsapp Community!</a>
          <br />
          <br />
          We are proud of our strong track record of success, with many of our graduates achieving remarkable accomplishments in their chosen fields. Our institution's reputation for excellence is built on the achievements of our students and the support of our dedicated faculty and staff.
          <br />
          <br />
          At Tamilboomi, we are committed to fostering a vibrant and inclusive learning community. We welcome students from all walks of life, fostering a supportive environment where diversity is celebrated, and ideas are valued. Our institution is not just a place of learning but also a platform for meaningful connections, lifelong friendships, and personal growth.
          <br />
          <br />
            <h2>Contact us through the following channels:</h2>
          <br />
          <br />
          <ul className="ps-5">
            <li className="list-disc pb-2">Email: <a className="text-blue-800 font-bold underline" href="mailto:arumugam@tamilboomi.com">arumugam@tamilboomi.com</a></li>
            <li className="list-disc pb-2">WhatsApp: <a className="text-blue-800 font-bold underline" href="https://wa.me/message/EBWNGVF6IZFMJ1?ref=tamilboomi.com">WhatsApp Link</a> or +91 9619 663272</li>
            <li className="list-disc pb-2">Linked In : <a className="text-blue-800 font-bold underline" href="https://www.linkedin.com/company/tamilboomi-technologies/?ref=tamilboomi.com">Linked In Link</a></li>
            <li className="list-disc pb-2">Instagram: <a className="text-blue-800 font-bold underline" href="https://www.instagram.com/tamilboomitechnologies/?ref=tamilboomi.com">Instagram Link</a></li>
            <li className="list-disc pb-2">Twitter: <a className="text-blue-800 font-bold underline" href="https://twitter.com/TamilboomiT?ref=tamilboomi.com">Twitter Link</a></li>
            <li className="list-disc pb-2">Facebook: <a className="text-blue-800 font-bold underline" href="https://www.facebook.com/tamilboomiofficial">Facebook Link</a></li>
            <li className="list-disc pb-2">Podcast: <a className="text-blue-800 font-bold underline" href="https://open.spotify.com/show/30mKTaOI2tYEVvy6S7PDSo?si=435585f4e62b4213&ref=tamilboomi.com">Podcast Link</a></li>
          </ul>
          <br />
          <br />
          Thank you for considering Tamilboomi as your partner in education. We invite you to explore our website, learn more about our programs, and embark on an educational journey that will shape your future. Join us as we empower individuals and make a positive impact in the world through education.
          <br />
          <br />
          Welcome to Tamilboomi. Together, let's unlock your potential and achieve greatness.
        </p>
        {/* <br /> */}
        {/* <span className="text-[22px]">Shahriarsajeeb&apos;s</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Tamilboomi
        </h5> */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
