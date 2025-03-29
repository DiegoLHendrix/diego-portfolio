import React from "react";
import "../../../styles/base/home/PortfolioFeaturette.css";

// Import local images
import GreySquare from "../../../assets/base/Grey-Square.png";
import BlackSquare from "../../../assets/base/BlackSquare.jpg";
import EVTLogo from "../../../assets/evt/EVT-Logo.jpg";
import Thinkserver from "../../../assets/base/thinkserver.png";

function PortfolioFeaturette() {
  return (
    <div className="container featurette-grid">
      <hr className="featurette-divider" />

      {/* Section 1: Introduction */}
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Hello, I'm Diego Lopez!
            <br /> <span className="text-muted">About Me</span>
          </h2>
          <p className="lead">
            I am an embedded systems engineer with a deep passion for designing
            and integrating embedded software and hardware. I enjoy taking on
            new challenges and finding innovative and efficient solutions.
            <br />
            <br />
            Currently, I'm working on a computer vision system that will track a
            tennis ball in Blender and process the image using MATLAB and C++.
            My goal is to blend my skills in embedded systems with artificial
            intelligence to build advanced technology.
            <br />
            <br />
            Over time, I've developed a love for continuous learning, always
            seeking ways to expand my knowledge and improve the tools I create
            or work with. Whether it's through hands-on projects, team
            collaboration, or self-driven learning, I am always exploring new
            possibilities in both hardware and software development.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src={GreySquare}
            alt="Placeholder image"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* Section 2: Electric Vehicle Team */}
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Electric Vehicle Team <br />{" "}
            <span className="text-muted">Firmware Team</span>
          </h2>
          <p className="lead">
            I joined the firmware team in September 2023 and have had the
            opportunity to work on amazing projects and collaborate with
            incredible people.
            <br />
            <br />
            I’ve worked closely with a team of 3 other firmware engineers to
            write a C++ abstraction layer that integrated the ThreadX RTOS into
            a custom library built on top of the STM32 HAL.
            <br />
            <br />
            I've also collaborated with circuit board designers to ensure the
            functionality of the Vehicle Control Unit (VCU) PCB.
            <br />
            <br />
            Currently, I am working with a team of electrical engineers to write
            the firmware for the Low Voltage SubSystem (LVSS) PCB, contributing
            to a critical component of the vehicle's architecture.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <div className="evt-container">
            <img
              className="black-square"
              src={BlackSquare}
              alt="Black Square"
            />
            <img className="evt-logo" src={EVTLogo} alt="EVT Logo" />
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />

      {/* Section 3: Personal Life */}
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Skills & Personal Projects <br />
            <span className="text-muted">
              Creative & Technical Explorations
            </span>
          </h2>
          <p className="lead">
            Outside of academic and team projects, I enjoy working on personal
            projects. Managing a self-hosted server has given me hands-on
            experience with networking, automation, and cloud-based solutions.
            <br />
            <br />
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            src={Thinkserver}
            alt="Placeholder image"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioFeaturette;
