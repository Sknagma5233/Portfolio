import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="bg-[#0d0635] fixed top-0 left-0 right-0 w-full py-4 md:py-6 flex justify-between items-center z-20 shadow-lg">
        <Link to="/" className="text-2xl ml-4 md:ml-10 text-white no-underline font-semibold cursor-default opacity-0 animate-slideRight">
          Portfolio
        </Link>
        <nav className="hidden lg:flex gap-6 mr-4 md:mr-20">
          <NavLink to="/" className={() => `custom-link`}>Home</NavLink>
          <NavLink to="/about" className={() => `custom-link`}>About</NavLink>
          <NavLink to="/skill" className={() => `custom-link`}>Skill</NavLink>
          <NavLink to="/projects" className={() => `custom-link`}>Portfolio</NavLink>
          <NavLink to="/services" className={() => `custom-link`}>Services</NavLink>
          <NavLink to="/contacts" className={() => `custom-link`}>Contact</NavLink>
        </nav>
        <button className="lg:hidden mr-4 md:mr-10" onClick={handleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-white text-2xl" />
        </button>
      </header>

      {isMenuOpen && (
  <div
    id="nav-dialog"
    className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm md:hidden"
    onClick={handleMenu} 
  >
    <div
      className="bg-[#0d0635] w-64 h-full p-6 flex flex-col gap-4 transform transition-transform duration-300 translate-x-0"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="text-cyan-400 text-xl font-bold mb-4">Portfolio</div>

      {/* Nav Links */}
      <NavLink
        to="/"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/skill"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/projects"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/services"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/contacts"
        onClick={() => setIsMenuOpen(false)}
        className={({ isActive }) =>
          `text-white font-medium text-base py-2 px-2 rounded-md ${
            isActive ? 'bg-cyan-400 text-black' : 'hover:bg-cyan-400 hover:text-black'
          }`
        }
      >
        Contact
      </NavLink>
    </div>
  </div>
)}

    </>
  );
}

export default Navbar;
