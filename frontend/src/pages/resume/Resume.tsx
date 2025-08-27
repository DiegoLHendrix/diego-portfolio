import React from 'react';
import Headshot from '@assets/base/Headshot.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import the icons
import { HiOutlineCpuChip } from 'react-icons/hi2';

interface Docs {
  [key: string]: string;
}

const docs: Docs = {
  Resume: 'Diego_Lopez_ComputerEngineer.pdf',
};

type ISkills = {
  [key: string]: string | number;
};

const programmingLanguages: ISkills = {
  'C++': '/icons/cpp-svgrepo-com.svg',
  C: '/icons/c-svgrepo-com.svg',
  VHDL: '/icons/microcontroller.svg',
  Python: '/icons/python-svgrepo-com.svg',
  'ARM Assembly': '/icons/embedded-system.svg',
};

const environments: ISkills = {
  Git: '/icons/git-svgrepo-com.svg',
  GitHub: '/icons/github-svgrepo-com.svg',
  MATLAB: '/icons/matlab-svgrepo-com.svg',
  'Quartus Prime': '/icons/intel-svgrepo-com.svg',
  Modelsim: '/icons/intel-svgrepo-com.svg',
  'Ubuntu Linux': '/icons/ubuntu-svgrepo-com.svg',
  LTSpice: '/icons/circuit-board.svg',
};

const embeddedSystems: ISkills = {
  FPGA: 1,
  'STM32 Microcontrollers': 2,
  FreeRTOS: 3,
  UART: 4,
  I2C: 5,
  SPI: 6,
  'ThreadX RTOS': 7,
  'Logic Analyzer': 8,
  Oscilloscopes: 9,
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
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-3 ring-white dark:ring-black dark:bg-blue-900">
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
              <h3 className="flex items-center mb-1 text-lg font-semibold">
                Rochester Institute of Technology
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none">
                August 2021
              </time>
              <p className="mb-4">
                Started Bachelor of Science in Computer Engineering
              </p>
            </li>
            <li className="mb-5 ms-4">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-3 ring-white dark:ring-black dark:bg-blue-900">
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
              <h3 className="flex items-center mb-1 text-lg font-semibold">
                RIT Electric Vehicle Team
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none">
                September 2023
              </time>
              <p className="text-base font-normal">
                Joined the EVT firmware team.
              </p>
              <a
                href="/experience?tab=evt"
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
            <li className="mb-5 ms-4">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-3 ring-white dark:ring-black dark:bg-blue-900">
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
              <h3 className="flex items-center mb-1 text-lg font-semibold">
                Rauland Ametek
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none">
                June 2025
              </time>
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
        <div className="flex flex-col gap-6">
          <div className="bg-card-blue rounded-lg p-6 shadow-sm border w-full sm:w-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-dark-blue/10 text-dark-blue rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-terminal h-5 w-5"
                >
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" x2="20" y1="19" y2="19"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(programmingLanguages).map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-card-blue rounded-lg p-6 shadow-sm border w-full sm:w-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-dark-blue/10 text-dark-blue rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cog h-5 w-5"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.34-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .7.4 1.34 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.17.6.81 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">
                Environments and Software
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(environments).map((tool) => (
                <span
                  key={tool}
                  className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-card-blue rounded-lg p-6 shadow-sm border w-full sm:w-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-dark-blue/10 text-dark-blue rounded-md">
                <HiOutlineCpuChip className="h-7 w-7" />{' '}
                {/* Use the FaMicrochip icon */}
              </div>
              <h3 className="text-lg font-semibold">Embedded Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(embeddedSystems).map((tool) => (
                <span
                  key={tool}
                  className="inline-block px-3 py-1 bg-background border border-border rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>{' '}
        {/* Col 3 */}
      </div>
    </main>
  );
};

export default Resume;
