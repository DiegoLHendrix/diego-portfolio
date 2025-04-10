import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsGrid: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectKey: string) => {
    navigate(`/projects?project=${projectKey}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Item 1 */}
        <div className="project-item bg-lightBg dark:bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="project-content">
            <h2 className="text-xl font-semibold mb-2 text-lightText dark:text-darkText">
              Low Voltage SubSystem
            </h2>
            <p className="text-lightGray dark:text-darkGray mb-4">
              Created the core logic for an LVSS which converts a 400 VDC
              battery pack into several 12 VDC outputs that are then distributed
              throughout the bike.
            </p>
            <button
              className="btn bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-2 rounded"
              onClick={() => handleProjectClick("lvss")}
            >
              View details &raquo;
            </button>
          </div>
        </div>

        {/* Project Item 2 */}
        <div className="project-item bg-lightBg dark:bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="project-content">
            <h2 className="text-xl font-semibold mb-2 text-lightText dark:text-darkText">
              CANopen SDO Sample
            </h2>
            <p className="text-lightGray dark:text-darkGray mb-4">
              Designed a CANopen sample that teaches members how to use Service
              Data Objects to transmit and receive from a client to a server
              node.
            </p>
            <button
              className="btn bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-2 rounded"
              onClick={() => handleProjectClick("canopen")}
            >
              View details &raquo;
            </button>
          </div>
        </div>

        {/* Project Item 3 */}
        <div className="project-item bg-lightBg dark:bg-darkBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="project-content">
            <h2 className="text-xl font-semibold mb-2 text-lightText dark:text-darkText">
              VHDL Audio Processor
            </h2>
            <p className="text-lightGray dark:text-darkGray mb-4">
              Programmed an FPGA to process audio input and output it through
              high-pass and low-pass filters.
            </p>
            <button
              className="btn bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 px-4 py-2 rounded"
              onClick={() => handleProjectClick("audio")}
            >
              View details &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
