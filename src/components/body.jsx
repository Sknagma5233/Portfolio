import React, { useEffect } from "react";
import TechClouds from "../assets/images/TechClouds.png";
import Typed from "typed.js";
import About from "./about.jsx";
import Skill from "./skill.jsx";
import Projects from "./projects";
import Services from "./services";
import Contacts from "./contacts.jsx";

function Body() {
  useEffect(() => {
    const options = {
      strings: ["MERN Stack Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(".text", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className="relative w-full min-h-screen bg-[#0d0635] flex flex-col items-center justify-center p-4 md:p-8 lg:p-16 pt-16 md:pt-24">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
          <div className="max-w-lg flex flex-col items-center lg:items-start lg:mr-8">
            <h2 className="text-2xl md:text-3xl text-white">Hi there !</h2>
            <h1 className="text-4xl md:text-5xl text-white">
              I'm Nagma Shaikh
            </h1>
            <h2 className="text-2xl md:text-3xl text-white">
              A <span className="text-cyan-400 text"></span>
            </h2>
            <p className="text-white mt-4 text-sm md:text-base px-4 lg:px-0">
              A Full Stack Web Developer skilled in the MERN stack and tools
              like Tailwind CSS, Git, and Firebase. I love building responsive,
              user-friendly apps and writing clean, efficient code. Currently
              seeking an internship or junior role to grow and contribute to
              real-world projects.
            </p>
            <div class="mt-5">
              <a
                href="https://wa.me/919137441613"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent text-[#0ef] text-xl border-2 border-[#0ef] rounded-full m-7.5 mr-4 hover:bg-[#00eeffd0] hover:text-black hover:shadow-[0_0_10px_#0ef]"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/sk_nagmaa"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent text-[#0ef] text-xl border-2 border-[#0ef] rounded-full m-7.5 mr-4 hover:bg-[#00eeffd0] hover:text-black hover:shadow-[0_0_10px_#0ef]"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://github.com/Sknagma5233"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent text-[#0ef] text-xl border-2 border-[#0ef] rounded-full m-7.5 mr-4 hover:bg-[#00eeffd0] hover:text-black hover:shadow-[0_0_10px_#0ef]"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shaikhnagma5233/"
                className="inline-flex justify-center items-center w-10 h-10 bg-transparent text-[#0ef] text-xl border-2 border-[#0ef] rounded-full m-7.5 mr-4 hover:bg-[#00eeffd0] hover:text-black hover:shadow-[0_0_10px_#0ef]"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
            <div className="mt-7">
              <a
                href="/About"
                className=" bg-cyan-400 text-black rounded-full py-3 px-4 md:py-3 md:px-6 font-semibold text-sm md:text-lg hover:shadow-[0_0_20px_#0ef]"
              >
                More About Me
              </a>
            </div>
          </div>
          <div className="mt-5">
            <img
              src={TechClouds}
              alt="Profile"
              className="h-44 w-44 md:w-48 md:h-48 lg:w-[50vh] lg:h-[50vh] rounded-[15rem] border-0 border-[#0ef] transition-all duration-300 ease-in-out shadow-[0_0_0px_#0ef]"
            />
          </div>
        </div>
      </main>
      <About />
      <Skill />
      <Projects />
      <Services />
      <Contacts/>
    </>
  );
}

export default Body;
