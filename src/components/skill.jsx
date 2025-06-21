import React from "react";

function Skill() {
  return (
    <section className="w-full bg-[#0d0635] py-20 px-6 mt-4">
      <h1 className="text-4xl sm:text-5xl text-center text-white font-bold">
        My <span className="text-cyan-400">Skills</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-20 items-start mt-16 md:mx-20">
        {/* Technical Skills */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-white text-2xl mb-8 underline underline-offset-8">
            Technical Skills
          </h2>
          <div className="bg-[#1a1254] mt-10 p-6 rounded-xl shadow-md border border-cyan-400 space-y-5 text-white text-base  md:text-lg">
            <div>
              <span className="font-semibold text-cyan-400">Frontend:</span>{" "}
              HTML, CSS, JavaScript, React, Tailwind CSS
            </div>
            <div>
              <span className="font-semibold text-cyan-400">Backend:</span>{" "}
              Node.js, Express.js, MongoDB, Mongoose
            </div>
            <div>
              <span className="font-semibold text-cyan-400">
                State Management:
              </span>{" "}
              Redux
            </div>
            <div>
              <span className="font-semibold text-cyan-400">
                API Integration:
              </span>{" "}
              REST APIs using Axios / Fetch
            </div>
            <div>
              <span className="font-semibold text-cyan-400">
                Authentication:
              </span>{" "}
              Firebase Auth, JWT
            </div>
            <div>
              <span className="font-semibold text-cyan-400">
                Tools & Platforms:
              </span>{" "}
              Git, GitHub, Postman, VS Code
            </div>
            <div>
              <span className="font-semibold text-cyan-400">Deployment:</span>{" "}
              GitHub Pages, Vercel, Render
            </div>
            <div>
              <span className="font-semibold text-cyan-400">Other:</span> Python
              (Basics)
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="w-full md:w-1/2 px-6">
          <h2 className="text-white text-2xl mb-8  text-center md:text-left underline underline-offset-8">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-8 justify-center">
            {[
              { title: "Creativity", percent: 80 },
              { title: "Communication", percent: 85 },
              { title: "Problem Solving", percent: 70 },
              { title: "Team Work", percent: 90 },
              { title: "Adaptability", percent: 80 },
              { title: "Time Management", percent: 78 },
            ].map((skill, idx) => (
              <div className="text-center" key={idx}>
                <div className="rounded-full border-4 border-cyan-400 text-cyan-400 w-24 h-24 flex items-center justify-center mx-auto text-2xl font-semibold">
                  {skill.percent}%
                </div>
                <p className="text-white mt-4">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
