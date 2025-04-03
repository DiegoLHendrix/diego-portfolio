import React from "react";
import { Container, Tabs, Tab, Table } from "react-bootstrap";

function Experience() {
  return (
    <Container className="text-center">
      <h1 className="my-4">Experience</h1>

      <Tabs
        id="experience-tabs"
        className="mb-3"
        defaultActiveKey="experience-evt"
        mountOnEnter
      >
        <Tab eventKey="experience-evt" title="EVT">
          <h2 className="my-4">Electric Vehicle Team</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Location</th>
                <th>Position Title</th>
                <th>Date Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rochester, New York</td>
                <td>Firmware Engineer, Firmware Team</td>
                <td>Sept 2023 - Present</td>
              </tr>
            </tbody>
          </Table>
          <h3 className="my-4">Description</h3>
          <p className="fs-5">
            At EVT, I work with the firmware team to build software systems that
            ensure a competitive race bike. Since I've joined I have worked with
            3 other software engineers on integrating the ThreadX real time
            operating system (RTOS) into a custom library by creating a C++
            abstraction layer. I also created a custom class for making UART
            communication safe to use with the RTOS.
          </p>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Experience;
