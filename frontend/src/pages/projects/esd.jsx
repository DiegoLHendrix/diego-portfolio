import React, { useState } from "react";
import { Container, Tabs, Tab, Form } from "react-bootstrap";

import AUDIOPROC from "../../components/esd/audioProc.jsx";
import TRACKER from "../../components/esd/tennisTracker.jsx";

function ESD() {
  const [selectedSkill, setSelectedSkill] = useState("All");

  // Project data with skills
  const projects = [
    {
      key: "audio",
      title: "Audio Processor",
      component: <AUDIOPROC />,
      skills: ["Embedded C"].sort(),
    },
    {
      key: "tracker",
      title: "Tennis Tracker",
      component: <TRACKER />,
      skills: ["MATLAB", "Embedded C++", "Blender"].sort(),
    },
  ];

  // Extract unique skills for filtering
  const allSkills = ["All", ...new Set(projects.flatMap((p) => p.skills))];

  // Filter projects based on selected skill
  const filteredProjects =
    selectedSkill === "All"
      ? projects
      : projects.filter((p) => p.skills.includes(selectedSkill));

  return (
    <Container>
      <h1 className="text-center my-4">Embedded Systems Design</h1>

      {/* Filter Dropdown */}
      <Form.Group className="mb-3 text-center">
        <Form.Label>
          <strong>Filter by Skill:</strong>
        </Form.Label>
        <Form.Select
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
          className="mx-auto w-50"
        >
          {allSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Tabs for Filtered Projects */}
      <Tabs
        defaultActiveKey={
          filteredProjects.length > 0 ? filteredProjects[0].key : ""
        }
        id="esd-tabs"
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
          No projects match the selected skill.
        </p>
      )}
    </Container>
  );
}

export default ESD;
