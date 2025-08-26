import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavigationBar: React.FC = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // State for dark mode toggle, defaulting to dark mode if no preference is set
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme === 'dark' : true; // Default to dark mode if no preference is set
  });

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the theme between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark or light theme
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="w-full px-4 py-4 flex items-center">
        {/* Brand */}
        <a href="/" className="text-2xl">
          Diego's Portfolio
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 ml-6">
          <a href="/" className="text-xl hover:text-gray-400">
            Home
          </a>
          <a href="/resume" className="text-xl hover:text-gray-400">
            About
          </a>
          <a href="/experience" className="text-xl hover:text-gray-400">
            Experience
          </a>
          <a href="/projects" className="text-xl hover:text-gray-400">
            Projects
          </a>
        </div>

        {/* Right Side (GitHub, LinkedIn, Theme Toggle) */}
        <div className="hidden lg:flex items-center ml-auto space-x-4">
          <a
            href="https://github.com/DiegoLHendrix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/dl4583"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={35} />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
          >
            <img
              src={isDarkMode ? '/sun.svg' : '/moon.svg'}
              alt="Toggle theme"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden items-center ml-auto space-x-4">
          <button
            onClick={toggleMobileMenu} // Add click handler to toggle menu
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`}
      >
        <div className="flex flex-col items-center space-y-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/resume" className="hover:text-gray-400">
            Resume
          </a>
          <a href="/experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="/projects" className="hover:text-gray-400">
            Projects
          </a>

          {/* Social Media Icons in Mobile */}
          <div className="flex items-center space-x-4 mt-4 pb-8">
            <a
              href="https://github.com/DiegoLHendrix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/dl4583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={35} />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
            >
              <img
                src={isDarkMode ? '/sun.svg' : '/moon.svg'}
                alt="Toggle theme"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
