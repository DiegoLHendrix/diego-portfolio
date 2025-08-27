import React from 'react';

// Import all your image assets directly
import Headshot from '@assets/base/Headshot.jpg';
import EVTLogo from '@assets/evt/EVT-Logo.jpg';
import ThinkServer from '@assets/base/thinkserver.png';
import BlackSquare from '@assets/base/BlackSquare.jpg';

interface FeaturetteItem {
  // Now 'image' and 'overlayImage' will directly hold the imported image paths (strings)
  image: string;
  title: string;
  description?: string;
  overlayImage?: string; // For cases like the EVT logo over a black square
}

const PortfolioFeaturette: React.FC = () => {
  const featuretteItems: FeaturetteItem[] = [
    {
      image: Headshot, // Directly use the imported image variable
      title: 'Headshot',
      description: 'A picture of Diego Lopez.',
    },
    {
      image: BlackSquare, // Directly use the imported image variable
      overlayImage: EVTLogo, // Directly use the imported image variable for the logo
      title: 'Electric Vehicle Team',
      description: `I joined the firmware team in September 2023 and have had the
        opportunity to work on amazing projects and collaborate with
        incredible people. I’ve worked closely with a team of 3 other firmware
        engineers to write a C++ abstraction layer that integrated the ThreadX RTOS
        into a custom library built on top of the STM32 HAL. I've also
        collaborated with circuit board designers to ensure the functionality
        of the Vehicle Control Unit (VCU) PCB. Currently, I am working with a
        team of electrical engineers to write the firmware for the Low Voltage
        Subsystem (LVSS) PCB, contributing to a critical component of the
        vehicle's architecture.`,
    },
    {
      image: ThinkServer, // Directly use the imported image variable
      title: 'Skills & Personal Projects',
      description: `Outside of academic and team projects, I enjoy working on personal
        projects. Managing a self-hosted server has given me hands-on
        experience with networking, automation, and cloud-based solutions.
        I'm always exploring new possibilities in both hardware and software
        development, expanding my knowledge and improving the tools I create or work with.`,
    },
  ];

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
          <p className="text-lg mb-6">
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
          <img
            className="rounded-t-lg w-full object-cover"
            src={featuretteItems[0].image}
            alt={featuretteItems[0].title}
          />
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />

      {/* Section 2: Electric Vehicle Team */}
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-7/12 md:order-2">
          <h2 className="text-3xl font-bold mb-4">
            {featuretteItems[1].title}
            <br />
            <span className="text-gray-500">Firmware Team</span>
          </h2>
          <p className="text-lg mb-6">{featuretteItems[1].description}</p>
        </div>
        <div className="md:w-5/12 md:order-1">
          <div className="relative w-full max-w-[500px] h-auto max-h-[500px] bg-black rounded-lg shadow-lg">
            <img
              src={featuretteItems[1].image}
              alt="Black Square"
              className="w-full h-full object-cover rounded-lg"
            />
            {featuretteItems[1].overlayImage && (
              <img
                src={featuretteItems[1].overlayImage}
                alt="EVT Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto object-contain"
              />
            )}
          </div>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />

      {/* Section 3: Personal Life */}
      <div className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-7/12">
          <h2 className="text-3xl font-bold mb-4">
            {featuretteItems[2].title}
            <br />
            <span className="text-gray-500">
              Creative & Technical Explorations
            </span>
          </h2>
          <p className="text-lg mb-6">
            {featuretteItems[2].description}
            <br />
            <br />
          </p>
        </div>
        <div className="md:w-5/12">
          <img
            src={featuretteItems[2].image}
            alt={featuretteItems[2].title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFeaturette;
