import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0d0635] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        {/* Name & Role */}
        <h2 className="text-xl font-semibold">Nagma Shaikh</h2>
        <p className="text-sm text-gray-300">MERN Stack Developer</p>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/Sknagma5233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shaikhnagma5233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sknagma5233@gmail.com"
            className="text-white hover:text-cyan-400 transition text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6 text-center">
          &copy; {new Date().getFullYear()} Nagma Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
