import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/base/home/ProjectsGrid.css"; // Import the CSS file

const ProjectsGrid = () => {
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
              <a className="btn btn-secondary" href="/evt?modal=lvss">
                View details &raquo;
              </a>
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
              <a className="btn btn-secondary" href="/evt?modal=can">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>

        <div className="col-lg-4 project-item">
          <div className="project-content">
            <h2>VHDL Audio Processor</h2>
            <p>
              Programmed an FPGA to process audio input and output it through
              high-pass and low-pass filters.
            </p>
            <p>
              <a className="btn btn-secondary" href="/esd?modal=filter">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
