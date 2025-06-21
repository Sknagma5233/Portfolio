import React from "react";
import TurfImage from "../assets/images/TurfImage.png";
import SpotifyImg from "../assets/images/SpotifyImg.png";
import TodoImg from"../assets/images/TodoImg.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const projectList = [
 {
  title: "Turf Booking Management Website",
  image: TurfImage,
  description:
    "A feature-rich full-stack MERN Turf Booking App with role-based access for users and admins. Includes real-time turf booking, secure authentication, chatbot integration, dark mode, live weather updates, booking history, and a fully responsive design optimized for all devices.\n\nTech Stack: MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT\n\n⚠️ Note: This project is currently not deployed due to some errors, but it runs perfectly on a local setup and can be shown on a laptop.",
  liveLink: "#",
  codeLink: "https://github.com/Turf-Management-Booking-System/Turf-Management-Booking-System-Website",
},
  {
  title: "Spotify Clone",
  image: SpotifyImg,
  description:
    "A responsive and sleek Spotify Clone built with React.js and Tailwind CSS, offering a smooth and modern music streaming experience across all devices. Key features include full music controls, interactive progress bar, dynamic album collections, global state management using Context API, and a functional search bar. Users can explore and play music by clicking between albums with visually rich layouts.\n\nTech Stack: React.js, Tailwind CSS, Context API",
  liveLink: "https://spotifyclone-7u17ybza3-sknagma5233-gmailcoms-projects.vercel.app/",
  codeLink: "https://github.com/Sknagma5233/Spotify-clone",
},
  {
    title: "To-Do List Website",
    image: TodoImg,
  description:
    "A responsive and user-friendly To-Do List App built with React.js. Allows users to add, update, and delete tasks with data persistence using localStorage. Includes category-based task management such as Study, Work, Social, and Personal, along with dynamic tracking of pending and total tasks for each category.\n\nTech Stack: React.js, Tailwind CSS, localStorage, React Icons",
    liveLink: "https://todo-5kfnoqpmx-sknagma5233-gmailcoms-projects.vercel.app/",
    codeLink: "https://github.com/Sknagma5233/Todo-App",
  },
 
];

function Projects() {
  return (
    <section className="bg-[#0d0635] py-20 px-6 mt-4">
      <h1 className="text-4xl sm:text-5xl text-center text-white font-bold mb-16">
        My <span className="text-cyan-400">Projects</span>
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-[#1d163e] rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-cyan-500/30"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between min-h-[260px]">
              <div>
                <h2 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="whitespace-pre-line text-white text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex justify-between gap-3 mt-auto">
  <a
    href={project.liveLink}
    className="bg-cyan-400 text-black rounded-full py-2 px-4 text-sm font-medium flex items-center gap-2 hover:bg-cyan-300 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FiExternalLink className="text-base" />
    Live
  </a>
  <a
    href={project.codeLink}
    className="border border-cyan-400 text-cyan-400 rounded-full py-2 px-4 text-sm font-medium flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-base" />
    Code
  </a>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
