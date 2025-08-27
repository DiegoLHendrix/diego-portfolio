import React, { useState } from 'react';
import {
  FaShareAlt,
  FaPrint,
  FaDownload,
  FaCopy,
  FaPlus,
} from 'react-icons/fa'; // Using more semantic icons

const SpeedDial: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-dial-init
      className="fixed end-6 bottom-6 group z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Speed Dial Menu with Text Outside Button and Tooltips */}
      <div
        id="speed-dial-menu-text-outside-button"
        className={`flex flex-col items-center mb-4 space-y-2 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="relative">
          <button
            type="button"
            data-tooltip-target="tooltip-share-hover"
            data-tooltip-placement="left"
            className="relative w-12 h-12 text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-md dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >
            <FaShareAlt className="w-5 h-5 mx-auto" aria-hidden="true" />
            <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -start-14 top-1/2">
              Share
            </span>
          </button>
          <div
            id="tooltip-share-hover"
            role="tooltip"
            className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Share
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        type="button"
        aria-controls="speed-dial-menu-text-outside-button"
        aria-expanded={isOpen}
        className="flex items-center justify-center text-white bg-blue-700 rounded-lg w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <FaPlus
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
