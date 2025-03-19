import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Tabs, Tab, Form, Button } from "react-bootstrap";

import CANopenSdo from "../../components/evt/CANopenSdo.jsx";
import LVSS from "../../components/evt/LVSS.jsx";
import AUDIOPROC from "../../components/esd/audioProc.jsx";
import TRACKER from "../../components/esd/tennisTracker.jsx";

function PROJECTS() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectQuery = queryParams.get("project");

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [activeTab, setActiveTab] = useState("audio"); // Default to first project key

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
      component: <AUDIOPROC skills={["Embedded C", "VHDL"]} />,
      skills: ["Embedded C", "VHDL"].sort(),
    },
    {
      key: "canopen",
      title: "CANopen SDO",
      component: <CANopenSdo skills={["CAN Protocol", "Embedded C++"]} />,
      skills: ["CAN Protocol", "Embedded C++"].sort(),
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
          ]}
        />
      ),
      skills: [
        "PCB Schematic Analysis",
        "Circuit Analysis",
        "Hardware Testing",
        "Embedded C++",
        "CAN Protocol",
      ].sort(),
    },
    {
      key: "tracker",
      title: "Tennis Tracker",
      component: (
        <TRACKER skills={["MATLAB", "Embedded C++", "Blender", "VHDL"]} />
      ),
      skills: ["MATLAB", "Embedded C++", "Blender", "VHDL"].sort(),
    },
  ];

  // Extract unique skills for filtering
  const allSkills = [...new Set(projects.flatMap((p) => p.skills))].sort();

  // Toggle skill selection
  const toggleSkill = (skill) => {
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
          p.skills.some((skill) => selectedSkills.includes(skill))
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
    <Container>
      <h1 className="text-center my-4">Projects</h1>

      {/* Skill Filter Buttons */}
      <Form.Group className="mb-3 text-center">
        <Form.Label>
          <strong>Filter by Skills:</strong>
        </Form.Label>
        <div className="d-flex flex-wrap justify-content-center">
          {allSkills.map((skill) => (
            <Button
              key={skill}
              variant={
                selectedSkills.includes(skill) ? "primary" : "outline-primary"
              }
              className="m-1"
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </Button>
          ))}
        </div>
      </Form.Group>

      {/* Clear All Filters Button */}
      <div className="text-center mb-3">
        <Button variant="danger" onClick={clearFilters}>
          Clear All Filters
        </Button>
      </div>

      {/* Tabs for Filtered Projects */}
      <Tabs
        activeKey={activeTab}
        onSelect={(key) => setActiveTab(key)}
        id="project-tabs"
        className="mb-3"
      >
        {filteredProjects.map((project) => (
          <Tab key={project.key} eventKey={project.key} title={project.title}>
            {project.component}
          </Tab>
        ))}
      </Tabs>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <p className="text-center mt-4">
          No projects match the selected skills.
        </p>
      )}
    </Container>
  );
}

export default PROJECTS;
