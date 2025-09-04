import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Needed for URL-based routing

type ExperienceTabKey = 'evt' | 'rauland';

const Experience = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pull tab from query string, fallback to "evt"
  const queryTab =
    (new URLSearchParams(location.search).get('tab') as ExperienceTabKey) ||
    'evt';

  // State variable to hold the active tab, with the correct type.
  const [activeTab, setActiveTab] = useState<ExperienceTabKey>(queryTab);

  // Sync state with URL when tab is changed
  useEffect(() => {
    navigate(`?tab=${activeTab}`, { replace: true });
  }, [activeTab, navigate]);

  const tabData = {
    evt: {
      heading: 'Electric Vehicle Team',
      location: 'Rochester, New York',
      position: 'Firmware Engineer',
      date: 'Sept 2023 - Present',
      description: `The Electric Vehicle Team (EVT) is a student run organization at RIT that builds electric motorcycles. I have been part of the firmware team at EVT since my third year at RIT and I have had the opportunity to work on many awesome projects and meet amazing people. I am currently working on writing the core logic of the Low Voltage SubSystem which will take 400 V at 1 A and distribute that into multiple signals of 12 V at 45 A. Worked with a team to create a C++ abstraction layer to integrate an RTOS into a custom library built on top of STM32 HAL. Another thing I did is collaborated with circuit board designers to ensure functionality on Vehicle Control Unit (VCU) PCB.`,
    },
    rauland: {
      heading: 'Rauland Ametek',
      location: 'Mount Prospect, Illinois',
      position: 'Embedded Engineer Intern',
      date: 'June 2025 - December 2025',
      description:
        'Rauland is a division of Ametek that designs communication, workflow optimization, and life-safety systems for healthcare and education around the world. As an Embedded Engineer Intern at Rauland Ametek, I developed a C# application to analyze hexadecimal data from a proprietary RS-485 communication bus called the DNet. This tool enhanced the diagnostic capabilities for proprietary systems by implementing data filtering algorithms that suppressed empty poll replies, displayed specific poll replies, and excluded messages based on device IDs or types. By leveraging this custom data monitoring tool, I collaborated with senior engineers to troubleshoot and debug firmware issues, contributing to faster problem resolution and improved system stability. I designed and implemented a custom firmware using embedded C programming for a proprietary Ethernet Corridor Light. This project involved working with C programming language to process data from another RS-485 bus called the VNet. I created a VNet Dissector with data filters that could exclude messages based on specific VNet IDs and message types, streamlining the debugging process and improving system efficiency.',
    },
  };

  // Configure the tab names and their corresponding keys
  const tabButtons = [
    { key: 'evt', label: 'EVT' },
    { key: 'rauland', label: 'Rauland' },
  ];

  // Fill the current tab with the default data
  const currentTab = tabData[activeTab];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center border-gray-300">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="flex justify-center mb-6 space-x-4">
        {tabButtons.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as ExperienceTabKey)} // Type cast the button key
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-selected={activeTab === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">{currentTab.heading}</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Position Title</th>
                <th className="px-4 py-2 border">Date Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">{currentTab.location}</td>
                <td className="px-4 py-2 border">{currentTab.position}</td>
                <td className="px-4 py-2 border">{currentTab.date}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium mb-2">Description</h3>
        <p className="text-xl">
          {currentTab.description || <em>Coming soon...</em>}
        </p>
      </div>
    </div>
  );
};

export default Experience;
