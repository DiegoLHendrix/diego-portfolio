import React from "react";

interface TRACKERProps {
  skills: string[];
}

const TRACKER: React.FC<TRACKERProps> = ({ skills }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center">
        Tennis Tracker System
      </h1>
      <p className="text-xl text-center">3/17/2025 - Present</p>

      {/* Skills Section */}
      <p className="text-center my-4">
        <strong>Skills:</strong> {skills.join(", ")}
      </p>

      <p className="text-xl text-center my-4">
        An FPGA-based tennis ball tracking system designed for high accuracy in
        various conditions.
      </p>

      <p className="text-xl text-center my-4">
        This project is part of the Embedded Systems Design II course and aims
        to develop a precise tennis ball tracking system using FPGA technology.
        Designed as a replacement for the Hawk-Eye system, it ensures reliable
        tracking even in challenging environments such as windy conditions.
      </p>

      <p className="text-xl text-center my-4">
        The project consists of multiple phases, including design reviews,
        technical and financial analysis, and the development of a fully
        functional demonstration. Key features include:
      </p>

      <ul className="list-none pl-6 text-xl mb-4">
        <li>Camera calibration for improved tracking accuracy</li>
        <li>System accuracy analysis for both static and dynamic conditions</li>
        <li>Ball restitution measurement</li>
        <li>LED-based visual feedback for real-time game analysis</li>
        <li>Real-time tracking and instant replay integration using Blender</li>
      </ul>

      <p className="text-xl text-center my-4">
        Check out the full project on{" "}
        <a
          href="https://github.com/ESD-II/Tennis-Tracker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub
        </a>
        .
      </p>

      <hr className="my-8" />

      {/* Roles Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Team Roles</h2>
        <ul className="list-none space-y-2">
          <li>
            <strong>Diego Lopez:</strong> C/C++, Python/Matlab
          </li>
          <li>
            <strong>Benjamin Fauteux:</strong> VHDL, GUI
          </li>
          <li>
            <strong>Leila Daly:</strong> C++, Python/Matlab
          </li>
          <li>
            <strong>Siare Williams:</strong> Matlab, VHDL
          </li>
          <li>
            <strong>Keyon Vassell:</strong> Python/Matlab, C/C++
          </li>
          <li>
            <strong>Saeed Sharifi:</strong> Business, VHDL
          </li>
          <li>
            <strong>Jackson Reed:</strong> Business, Blender
          </li>
        </ul>
      </div>

      <hr className="my-8" />

      {/* Hardware Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Hardware Used</h2>
          <ul className="list-none pl-6">
            <li>Intel Cyclone V FPGA</li>
            <li>Speakers</li>
          </ul>
        </div>
      </div>

      <hr className="my-8" />

      {/* Software Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Software Used</h2>
          <ul className="list-none pl-6">
            <li>AMD Vivado</li>
            <li>MATLAB</li>
            <li>Blender</li>
          </ul>
        </div>
      </div>

      <hr className="my-8" />

      {/* MATLAB Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">MATLAB Image Processing</h2>
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
        </div>
        <div>{/* Image or content */}</div>
      </div>

      <hr className="my-8" />

      {/* Blender Section */}
      <div className="grid md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Blender</h2>
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
        </div>
        <div>{/* Image or content */}</div>
      </div>

      <hr className="my-8" />

      {/* To Do Section */}
      <div className="grid md:grid-cols-1 gap-1">
        <div>
          <h2 className="text-2xl font-semibold">What Has to Be Done</h2>
          <ul className="list-none pl-6">
            <li>Write C++</li>
            <li>Write VHDL</li>
            <li>Test with hardware</li>
          </ul>
        </div>
        <div>{/* Image or content */}</div>
      </div>
    </div>
  );
};

export default TRACKER;
