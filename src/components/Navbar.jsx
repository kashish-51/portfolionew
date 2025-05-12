import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border border-opacity-30 border-white rounded-md text-white fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-3xl font-bold">
          ARNA<span className="text-fuchsia-600">V</span>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li><a href="#home" className="hover-gradient-bg">About me</a></li>
          <li><a href="#skills" className="hover-gradient-bg">Skills</a></li>
          <li><a href="#projects" className="hover-gradient-bg">My work</a></li>
          <li><a href="#experience" className="hover-gradient-bg">Experience</a></li>
          <li>
            <a href="/resume.pdf" download="Arnav_Singh_Resume.pdf" className="hover-gradient-bg">
              Resume
            </a>
          </li>
          <a href="#contact">
            <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-4 rounded-full">
              Connect with me
            </button>
          </a>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col items-center bg-black bg-opacity-90 backdrop-blur-lg absolute top-full left-0 w-full shadow-md"
        >
          <ul className="flex flex-col items-center w-full py-4 space-y-2">
            <li><a href="#home" className="hover-gradient-bg w-full text-center">About me</a></li>
            <li><a href="#skills" className="hover-gradient-bg w-full text-center">Skills</a></li>
            <li><a href="#projects" className="hover-gradient-bg w-full text-center">My work</a></li>
            <li><a href="#experience" className="hover-gradient-bg w-full text-center">Experience</a></li>
            <li>
              <a href="/resume.pdf" download="Arnav_Singh_Resume.pdf" className="hover-gradient-bg w-full text-center">
                Resume
              </a>
            </li>
            <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2 px-4 rounded-full mt-2">
              Connect with me
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
