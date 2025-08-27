import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white text-xl py-1 mt-auto z-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center gap-1">
          <p className="m-0">&copy; Diego Lopez 2025</p>
          <div className="flex justify-center items-center gap-1">
            <a
              href="https://github.com/DiegoLHendrix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/dl4583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:diegolhendrix@gmail.com"
              target="_blank"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
