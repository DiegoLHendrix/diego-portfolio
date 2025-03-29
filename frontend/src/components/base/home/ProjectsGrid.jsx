import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/base/home/ProjectsGrid.css"; // Import the CSS file

const ProjectsGrid = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectKey) => {
    navigate(`/projects?project=${projectKey}`);
  };

  return (
    <div className="container projects-grid">
      <div className="row">
        <div className="col-lg-4 project-item">
          <div className="project-content">
            <h2>Low Voltage SubSystem</h2>
            <p>
              Created the core logic for an LVSS which converts a 400 VDC
              battery pack into several 12 VDC outputs that are then distributed
              throughout the bike.
            </p>
            <p>
              <button
                className="btn btn-secondary"
                onClick={() => handleProjectClick("lvss")}
              >
                View details &raquo;
              </button>
            </p>
          </div>
        </div>

        <div className="col-lg-4 project-item">
          <div className="project-content">
            <h2>CANopen SDO Sample</h2>
            <p>
              Designed a CANopen sample that teaches members how to use Service
              Data Objects to transmit and receive from a client to a server
              node.
            </p>
            <p>
              <button
                className="btn btn-secondary"
                onClick={() => handleProjectClick("canopen")}
              >
                View details &raquo;
              </button>
            </p>
          </div>
        </div>

        <div className="col-lg-4 project-item">
          <div className="project-content">
            <h2>VHDL Audio Processor</h2>
            <p>
              Programmed an FPGA to process audio input and output it through
              high-pass and low-pass filters.
              <br />
              <br />
            </p>
            <p>
              <button
                className="btn btn-secondary"
                onClick={() => handleProjectClick("audio")}
              >
                View details &raquo;
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
