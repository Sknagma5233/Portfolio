import React from "react";
import myPic from "../assets/images/myPic.jpg";
import { FaUniversity, FaCalendarAlt, FaPercentage, FaGraduationCap } from "react-icons/fa";
import { HiOutlineAcademicCap, HiChartBar } from "react-icons/hi";

function About() {
  return (
    <>
      <section className="bg-[#0d0635] mt-4 w-full flex flex-col lg:flex-row items-center justify-center px-6 py-16 lg:py-24 gap-10 lg:gap-20 text-white">
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={myPic}
            alt="Profile"
            className="h-44 w-44 md:h-60 md:w-60 lg:h-[50vh] lg:w-[50vh] rounded-full shadow-[0_0_30px_#0ef] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
            MERN Stack Developer!
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6 px-2 lg:px-0">
  Hello! I'm Nagma Shaikh, a passionate full stack web developer who thrives on turning ideas into responsive and scalable digital products. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I enjoy crafting user-centric interfaces using Tailwind CSS. 
  <br /><br />
  From building intuitive frontends to developing robust backend systems, I love every part of the development lifecycle. I'm committed to writing clean, maintainable code and constantly seek out opportunities to learn and grow. I’ve worked on team-based projects using Git and GitHub, and I'm always excited to take on new challenges.
  <br /><br />
  Currently, I’m seeking an internship or entry-level full stack developer role where I can contribute, collaborate, and continue evolving in the tech world.
</p>

        </div>
      </section>

{/* Education Section */}
<section className="bg-[#0d0635] text-white px-6 py-12">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center lg:text-left">
      My <span className="text-white">Education</span>
    </h2>

    {/* Education Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      
      {/* HSC Card */}
      <div className="bg-[#1a1254] p-6 rounded-2xl border border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <HiOutlineAcademicCap className="text-cyan-400" size={24} />
          HSC (12th)
        </h3>
        <p className="mb-1 flex items-center gap-2">
          <FaUniversity className="text-cyan-300" /> <strong>College:</strong> Anjuman Islam College, Mumbai
        </p>
        <p className="mb-1 flex items-center gap-2">
          <FaCalendarAlt className="text-cyan-300" /> <strong>Year:</strong> 2021-2022
        </p>
        <p className="mb-1 flex items-center gap-2">
          <FaPercentage className="text-cyan-300" /> <strong>Percentage:</strong> 82%
        </p>
        <p className="mt-2 text-cyan-300 text-sm italic">
          Strong academic performance in Mathematics and IT subjects.
        </p>
      </div>

      {/* Graduation Card */}
      <div className="bg-[#1a1254] p-6 rounded-2xl border border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaGraduationCap className="text-cyan-400" size={24} />
          Graduation – B.Sc.IT 
        </h3>
        <p className="mb-1 flex items-center gap-2">
          <FaUniversity className="text-cyan-300" /> <strong>College:</strong> RD National College, Mumbai University
        </p>
        <p className="mb-1 flex items-center gap-2">
          <FaCalendarAlt className="text-cyan-300" /> <strong>Years:</strong> 2022 – 2025
        </p>
        <p className="mb-1 flex items-center gap-2">
          <HiChartBar className="text-cyan-300" /> <strong>Final Year CGPA:</strong> 9.20
        </p>
        <p className="mb-1 flex items-center gap-2">
          <FaGraduationCap className="text-cyan-300" /> <strong>Status:</strong> Graduated
        </p>
        <p className="mt-2 text-cyan-300 text-sm italic">
          Built a strong foundation in programming, web development, and computer fundamentals.
        </p>
      </div>
    </div>

    {/* Extra Note */}
    <div className="mt-8 text-center text-sm md:text-base text-gray-300">
      Consistently maintained good academic performance while actively developing real-world web projects and improving my technical skills.
    </div>
  </div>
</section>



    </>
  );
}

export default About;
