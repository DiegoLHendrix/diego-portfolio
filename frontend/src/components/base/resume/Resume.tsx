import React from "react";
import Headshot from "../../../assets/base/Headshot.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import the icons

interface Docs {
  [key: string]: string;
}

const docs: Docs = {
  Resume: "Diego_Lopez_ComputerEngineer.pdf",
};

interface SkillIcons {
  [key: string]: string;
}

const skillIcons: SkillIcons = {
  "C++": "/icons/cpp-svgrepo-com.svg",
  C: "/icons/c-svgrepo-com.svg",
  VHDL: "/icons/microcontroller.svg",
  Python: "/icons/python-svgrepo-com.svg",
  "ARM Assembly": "/icons/embedded-system.svg",
  Git: "/icons/git-svgrepo-com.svg",
  GitHub: "/icons/github-svgrepo-com.svg",
  MATLAB: "/icons/matlab-svgrepo-com.svg",
  "Quartus Prime": "/icons/intel-svgrepo-com.svg",
  Modelsim: "/icons/intel-svgrepo-com.svg",
  Linux: "/icons/ubuntu-svgrepo-com.svg",
  LTSpice: "/icons/circuit-board.svg",
};

const Resume: React.FC = () => {
  return (
    <main
      role="main"
      className="h-auto flex pt-10 justify-center items-start flex-col gap-8 p-4"
    >
      <div className="w-full max-w-[1500px] grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-8 items-start">
        {/* Column 1: Card Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 self-start">
          <img
            className="rounded-t-lg w-full object-cover"
            src={Headshot}
            alt="Diego Lopez Headshot"
          />
          <div className="p-5">
            <h5 className="mb-2 text-3xl font-bold tracking-tight">
              Diego Lopez
            </h5>
            <p className="text-xl mb-3 font-normal">
              A motivated Computer Engineering student at Rochester Institute of
              Technology with a strong interest in embedded systems, firmware
              development, and electric vehicle technology. Seeking
              opportunities to apply my skills and contribute to innovative
              projects.
            </p>
            <ul className="text-l mb-4">
              <li className="py-2 flex items-center">
                <a
                  href="mailto:DiegoLHendrix@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaEnvelope size={20} className="mr-1" />
                  DiegoLHendrix@gmail.com
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a
                  href="https://www.linkedin.com/in/dl4583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaLinkedin size={20} className="mr-1" />
                  DL4583
                </a>
              </li>
              <li className="py-2 flex items-center">
                <a
                  href="https://github.com/DiegoLHendrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaGithub size={20} className="mr-1" />
                  DiegoLHendrix
                </a>
              </li>
            </ul>
            {/* Download Resume button */}
            <a
              href={docs.Resume}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              download={docs.Resume}
            >
              Download Resume
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Education Timeline */}
        <div className="col-span-1">
          <ol className="relative border-s border-gray-500 dark:border-gray-700">
            <li className="mb-5 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-black dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                August 2021
              </time>
              <h3 className="text-lg font-semibold">
                Rochester Institute of Technology
              </h3>
              <p className="mb-4">
                Started Bachelor of Science in Computer Engineering
              </p>
            </li>
            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                September 2023
              </time>
              <h3 className="text-lg font-semibold">
                RIT Electric Vehicle Team
              </h3>
              <p className="text-base font-normal">
                Joined the EVT firmware team.
              </p>
            </li>
            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none">
                June 2025
              </time>
              <h3 className="text-lg font-semibold">
                Embedded Engineer Intern at Rauland Ametek
              </h3>
              <p className="text-base font-normal">
                Started working as an Embedded Engineer Intern.
              </p>
              <a
                href="/experience?tab=ametek"
                className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>

        {/* Column 3: Skills Section */}
        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-3">Skills</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="mb-2 text-3xl font-bold tracking-tight">
                  Languages
                </h5>
                {Object.entries(skillIcons)
                  .filter(([skill, _]) =>
                    ["C++", "C", "VHDL", "Python", "ARM Assembly"].includes(
                      skill
                    )
                  )
                  .map(([skill, src]) => (
                    <div
                      className="flex text-2xl items-center mb-2"
                      key={skill}
                    >
                      <img src={src} alt={skill} className="w-20 h-20 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
              </div>
              <div>
                <h5 className="mb-2 text-xl font-bold tracking-tight">
                  Environments & Software
                </h5>
                {Object.entries(skillIcons)
                  .filter(([skill, _]) =>
                    [
                      "Git",
                      "GitHub",
                      "MATLAB",
                      "Quartus Prime",
                      "Modelsim",
                      "Linux",
                      "LTSpice",
                    ].includes(skill)
                  )
                  .map(([skill, src]) => (
                    <div className="flex items-center mb-2" key={skill}>
                      <img src={src} alt={skill} className="w-20 h-20 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
