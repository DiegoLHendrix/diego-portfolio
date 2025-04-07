import React from "react";
import SecureImage from "../../api/SecureImage";

const PortfolioFeaturette: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Section 1: Introduction */}
      <hr className="my-8 border-t-2 border-gray-300" />

      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-7/12">
          <h2 className="text-3xl font-bold mb-4">
            Hello, I'm Diego Lopez!
            <br />
            <span className="text-gray-500">About Me</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
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
        <div className="md:w-5/12 mb-6 md:mb-0">
          <SecureImage
            filename="base/Grey-Square.png"
            alt="Placeholder image"
            className="w-full h-auto max-w-[500px] max-h-[500px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />

      {/* Section 2: Electric Vehicle Team */}
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-7/12 md:order-2">
          <h2 className="text-3xl font-bold mb-4">
            Electric Vehicle Team
            <br />
            <span className="text-gray-500">Firmware Team</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
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
        <div className="md:w-5/12 md:order-1">
          <div className="relative w-full max-w-[500px] h-auto max-h-[500px] bg-black rounded-lg shadow-lg">
            <SecureImage
              filename="base/BlackSquare.jpg"
              alt="Black Square"
              className="w-full h-full object-cover rounded-lg"
            />
            <SecureImage
              filename="evt/EVT-Logo.jpg"
              alt="EVT Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />

      {/* Section 3: Personal Life */}
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-7/12">
          <h2 className="text-3xl font-bold mb-4">
            Skills & Personal Projects
            <br />
            <span className="text-gray-500">
              Creative & Technical Explorations
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Outside of academic and team projects, I enjoy working on personal
            projects. Managing a self-hosted server has given me hands-on
            experience with networking, automation, and cloud-based solutions.
            <br />
            <br />
          </p>
        </div>
        <div className="md:w-5/12">
          <SecureImage
            filename="base/thinkserver.png"
            alt="Placeholder image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFeaturette;
