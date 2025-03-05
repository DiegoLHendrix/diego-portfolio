import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/esd/audioProc.css";

function TRACKER() {
  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">Tennis Tracker System</h1>
      <p className="lead text-center">
        An FPGA-based tennis ball tracking system designed for high accuracy in
        various conditions.
      </p>

      <p className="text-center">
        This project is part of the Embedded Systems Design II course and aims
        to develop a precise tennis ball tracking system using FPGA technology.
        Designed as a replacement for the Hawk-Eye system, it ensures reliable
        tracking even in challenging environments such as windy conditions.
      </p>

      <p className="text-center">
        The project consists of multiple phases, including design reviews,
        technical and financial analysis, and the development of a fully
        functional demonstration. Key features include:
      </p>

      <ul>
        <li>Camera calibration for improved tracking accuracy</li>
        <li>System accuracy analysis for both static and dynamic conditions</li>
        <li>Ball restitution measurement</li>
        <li>LED-based visual feedback for real-time game analysis</li>
        <li>Real-time tracking and instant replay integration using Unity</li>
      </ul>

      <p className="text-center">
        Check out the full project on{" "}
        <a
          href="https://github.com/ESD-II/Tennis-Tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <hr />

      {/* Hardware Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Hardware Used</h2>
          <ul>
            <li>Intel Cyclone V FPGA</li>
            <li>Speakers</li>
          </ul>
        </Col>
      </Row>

      <hr />

      {/* Software Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Software Used</h2>
          <ul>
            <li>AMD Vivado</li>
            <li>MATLAB</li>
            <li>Blender</li>
          </ul>
        </Col>
      </Row>

      <hr />

      {/* MATLAB Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>MATLAB Image Processing</h2>
          <p>
            MATLAB is used to develop a GUI for determining the distance of a
            tennis ball using stereo images. The system processes images
            generated from Blender, identifies the ball's centroid in each
            image, and calculates the 3D coordinates (X, Y, Z) of the ball.
            Various techniques such as color space conversion, shape detection,
            and blob analysis enhance accuracy.
          </p>
          <p>
            Additionally, the system generates a plot of distance vs. accuracy
            for images taken from 3 to 5 meters away, ensuring the reliability
            of the tracking system.
          </p>
        </Col>
        <Col md={5}>
          {/*<Image src={filterEntity} fluid alt="VHDL Audio Processor" className="hover-image" />*/}
        </Col>
      </Row>

      <hr />

      {/* Blender Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Blender</h2>
          <p>
            Blender is used to generate realistic 3D images of a tennis court
            and ball, which are essential for testing the accuracy of the
            tracking system. The software provides stereo image pairs that
            simulate real-world scenarios, allowing the MATLAB-based tracking
            algorithm to process and analyze the ball’s position in 3D space.
          </p>
          <p>
            The generated images are used for distance estimation, calibration,
            and accuracy testing, ensuring that the tracking system performs
            well under various conditions. This integration with MATLAB helps
            refine the algorithms needed for precise ball detection.
          </p>
        </Col>
        <Col md={5}>
          {/*<Image src={filterEntity} fluid alt="Blender Tennis Simulation" className="hover-image" />*/}
        </Col>
      </Row>

      <hr />

      {/* To Do Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>What Has to Be Done</h2>
          <ul>
            <li>Write C++</li>
            <li>Write VHDL</li>
            <li>Test with hardware</li>
          </ul>
        </Col>
        <Col md={5}>
          {/*<Image src={mainLoop} fluid alt="Main Loop Visualization" className="hover-image" />*/}
        </Col>
      </Row>
    </Container>
  );
}

export default TRACKER;
