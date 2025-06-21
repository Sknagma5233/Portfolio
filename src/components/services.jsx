import React from 'react';

function Services() {
  return (
    <>
      <section className="bg-[#0d0635] min-h-screen px-4 py-10 mt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center pt-12 text-white">
          My <span className="text-cyan-400">Services</span>
        </h1>
        <p className="text-center text-gray-400 text-sm max-w-xl mx-auto mt-4">
          I offer complete web development services from UI design to backend logic and database integration.
        </p>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          
          {/* Frontend Development */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bx-code-alt text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Frontend Development</h2>
            <p className="text-sm text-gray-300 mb-4">
              Building responsive and dynamic user interfaces using React.js and Tailwind CSS, focusing on performance and user experience.
            </p>
          </div>

          {/* Backend Development */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bx-server text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Backend Development</h2>
            <p className="text-sm text-gray-300 mb-4">
              Developing RESTful APIs using Node.js and Express with focus on scalability, security, and clean architecture.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bx-palette text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-sm text-gray-300 mb-4">
              Creating visually appealing, user-friendly layouts using modern design systems and responsive frameworks.
            </p>
          </div>

          {/* Authentication & Authorization */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bx-lock-alt text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Authentication</h2>
            <p className="text-sm text-gray-300 mb-4">
              Implementing secure authentication using JWT, managing user sessions, and handling protected routes.
            </p>
          </div>

          {/* Git & GitHub */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bxl-git text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">Git & GitHub</h2>
            <p className="text-sm text-gray-300 mb-4">
              Managing code versions and collaboration using Git and GitHub, including branching, pull requests, and CI basics.
            </p>
          </div>

          {/* MongoDB Database */}
          <div className="bg-[#1d163e] p-6 rounded-lg text-white w-full max-w-sm hover:shadow-[0_0_20px_#0ef] transition">
            <i className="bx bxs-data text-cyan-400 text-4xl mb-4"></i>
            <h2 className="text-xl font-semibold mb-2">MongoDB Database</h2>
            <p className="text-sm text-gray-300 mb-4">
              Designing and managing NoSQL databases with MongoDB, focusing on CRUD operations, schema design, and Mongoose integration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
