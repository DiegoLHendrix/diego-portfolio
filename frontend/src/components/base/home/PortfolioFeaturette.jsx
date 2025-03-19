import React from "react";
import "../../../styles/base/home/PortfolioFeaturette.css";

// Import local images
import GreySquare from "../../../assets/base/Grey-Square.png";
import BlackSquare from "../../../assets/base/BlackSquare.jpg";
import EVTLogo from "../../../assets/evt/EVT-Logo.jpg";

function PortfolioFeaturette() {
  return (
    <div className="container featurette-grid">
      <hr className="featurette-divider" />

      {/* Section 1: Introduction */}
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Hello, I'm Diego!</h2>
          <p className="lead">
            I am an embedded systems engineer with a passion for designing and
            integrating embedded software and hardware. Currently I am working
            on a computer vision system that will track a tennis ball in blender
            and process the image using MATLAB and C++.
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
            opportunity to work on amazing projects and meet incredible people.
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
            Personal Life <br /> <span className="text-muted">Interests</span>
          </h2>
          <p className="lead">
            I have a passion for continuous learning and applying new knowledge.
            In my free time, I enjoy working on personal projects, including
            managing my own server.
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
    </div>
  );
}

export default PortfolioFeaturette;
