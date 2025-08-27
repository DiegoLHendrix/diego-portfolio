import Headshot from '@assets/base/Headshot.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import the icons

function Resume() {
  const docs = {
    Resume: 'Diego_Lopez_ComputerEngineer.pdf',
  };

  return (
    <main
      role="main"
      className="h-auto flex pt-10 justify-center items-start flex-col gap-8 p-4"
    >
      <div className="w-full max-w-[750px] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5">
          <h2 className="text-2xl font-bold mb-4">Timeline</h2>
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
      </div>
    </main>
  );
}

export default Resume;
