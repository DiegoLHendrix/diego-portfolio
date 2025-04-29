import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Needed for URL-based routing

const Experience: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // --- Pull tab from query string, fallback to "evt"
  const queryTab = new URLSearchParams(location.search).get("tab") || "evt";
  const [activeTab, setActiveTab] = useState(queryTab);

  // --- Sync state with URL when tab is changed
  useEffect(() => {
    navigate(`?tab=${activeTab}`, { replace: true });
  }, [activeTab]);

  const tabData = {
    evt: {
      heading: "Electric Vehicle Team",
      location: "Rochester, New York",
      position: "Firmware Engineer",
      date: "Sept 2023 - Present",
      description: `As a Firmware Engineer at EVT...`,
    },
    ametek: {
      heading: "Rauland Ametek",
      location: "Mount Prospect, Illinois",
      position: "Embedded Engineer Intern",
      date: "June 2025 - December 2025",
      description: "",
    },
  };

  const tabButtons = [
    { key: "evt", label: "EVT" },
    { key: "ametek", label: "Ametek" },
  ];

  const currentTab = tabData[activeTab];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center border-gray-300">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>

      <div className="flex justify-center mb-6 space-x-4">
        {tabButtons.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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

        <h3 className="text-xl font-medium mb-2">Description</h3>
        <p className="text-base">
          {currentTab.description || <em>Coming soon...</em>}
        </p>
      </div>
    </div>
  );
};

export default Experience;
