import React, { useState } from "react";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Contacts() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xzzgakaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ An error occurred.");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="min-h-screen bg-[#0d0635] mt-8 text-white px-6 py-16 flex flex-col justify-center items-center">
      
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h1>
        <p className="text-gray-400 mt-2">Feel free to drop a message or reach out on socials</p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white text-black p-10 rounded-3xl shadow-xl grid md:grid-cols-2 gap-10">
        
        {/* Left Side */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#0d0635] mb-3">Let's connect!</h2>
            <p className="text-gray-700">
              I'm available for internships, freelance work or just a friendly tech chat.
            </p>
          </div>
          <div className="space-y-4">
  <h2 className="text-2xl font-semibold text-[#0d0635]">Thanks for visiting! 👋</h2>
  <p className="text-gray-700">
    I’m passionate about building meaningful and user-friendly web applications.
    Whether you're looking for an intern, collaborator, or just want to say hello —
    feel free to reach out!
  </p>
  <blockquote className="italic text-cyan-500 border-l-4 border-cyan-400 pl-4">
    "Code with purpose, build with passion."
  </blockquote>
</div>

          {/* Styled Social Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://wa.me/919137441613"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://github.com/Sknagma5233"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.instagram.com/sk_nagmaa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/nagma-shaikh-2a1382321/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border-2 border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ef]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ef]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ef] resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#0ef] hover:bg-cyan-300 text-black py-3 px-6 rounded-full font-bold shadow-md hover:shadow-lg transition duration-300 w-full"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm font-medium text-gray-600 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contacts;
