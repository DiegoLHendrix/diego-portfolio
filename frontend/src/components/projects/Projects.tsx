import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CANopenSdo from "../evt/can/CANopenSdo.jsx";
import LVSS from "../evt/lvss/LVSS.jsx";
import AudioProc from "../../components/esd/audioProc/audioProc.jsx";
import Tracker from "../esd/tennisTracker.jsx";

function Projects() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectQuery = queryParams.get("project");

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("audio"); // Default to first project key

  useEffect(() => {
    if (projectQuery) {
      setActiveTab(projectQuery);
    }
  }, [projectQuery]);

  // Project data with skills
  const projects = [
    {
      key: "audio",
      title: "Audio Processor",
      component: <AudioProc skills={["Embedded C", "VHDL"]} />,
      skills: ["Embedded C", "VHDL"].sort(),
    },
    {
      key: "canopen",
      title: "CANopen SDO",
      component: (
        <CANopenSdo skills={["CAN Protocol", "Embedded C++", "EVT"]} />
      ),
      skills: ["CAN Protocol", "Embedded C++", "EVT"].sort(),
    },
    {
      key: "lvss",
      title: "LVSS",
      component: (
        <LVSS
          skills={[
            "PCB Schematic Analysis",
            "Circuit Analysis",
            "Hardware Testing",
            "Embedded C++",
            "CAN Protocol",
            "EVT",
          ]}
        />
      ),
      skills: [
        "PCB Schematic Analysis",
        "Circuit Analysis",
        "Hardware Testing",
        "Embedded C++",
        "CAN Protocol",
        "EVT",
      ].sort(),
    },
    {
      key: "tracker",
      title: "Tennis Tracker",
      component: (
        <Tracker skills={["MATLAB", "Embedded C++", "Blender", "VHDL"]} />
      ),
      skills: ["MATLAB", "Embedded C++", "Blender", "VHDL"].sort(),
    },
  ];

  // Extract unique skills for filtering
  const allSkills = [...new Set(projects.flatMap((p) => p.skills))].sort();

  // Toggle skill selection
  const toggleSkill = (skill: string) => {
    setSelectedSkills(
      (prev) =>
        prev.includes(skill)
          ? prev.filter((s) => s !== skill) // Remove skill if already selected
          : [...prev, skill] // Add skill if not selected
    );
  };

  // Filter projects based on selected skills
  const filteredProjects =
    selectedSkills.length === 0
      ? projects
      : projects.filter((p) =>
          selectedSkills.every((skill) => p.skills.includes(skill))
        );

  // Automatically switch the active tab if the currently selected project is filtered out
  useEffect(() => {
    if (!filteredProjects.some((p) => p.key === activeTab)) {
      setActiveTab(filteredProjects.length > 0 ? filteredProjects[0].key : "");
    }
  }, [selectedSkills, filteredProjects]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-semibold my-4">Projects</h1>

      {/* Skill Filter Buttons */}
      <div className="text-center mb-6">
        <strong className="mr-2">Filter by Skills:</strong>
        <div className="flex flex-wrap justify-center gap-2">
          {allSkills.map((skill) => (
            <button
              key={skill}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedSkills.includes(skill)
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Clear All Filters Button */}
      <div className="text-center mb-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={clearFilters}
        >
          Clear All Filters
        </button>
      </div>

      {/* Custom Tabs for Filtered Projects */}
      <ul className="flex flex-wrap text-sm font-medium text-center border-gray-500">
        {filteredProjects.map((project) => (
          <li key={project.key} className="me-2">
            <button
              onClick={() => setActiveTab(project.key)}
              className={`inline-block p-4 rounded-lg transition-colors ${
                activeTab === project.key
                  ? "text-white bg-gray-600 border"
                  : "text-gray-600 hover:text-white hover:bg-gray-500"
              }`}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      <hr className="h-px my-2 bg-gray-200 border-1/2 dark:bg-gray-700" />

      {/* Display Selected Project */}
      {filteredProjects.map(
        (project) =>
          project.key === activeTab && (
            <div key={project.key} className="text-center mt-6">
              {project.component}
            </div>
          )
      )}

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <p className="text-center mt-4 text-lg text-red-500">
          No projects match the selected skills.
        </p>
      )}
    </div>
  );
}

export default Projects;
