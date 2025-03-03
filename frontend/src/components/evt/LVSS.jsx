import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import '../../styles/evt/CANopenSdo.css';

// Import images

function LVSS() {
  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">Low Voltage Sub-System (LVSS)</h1>
      <p className="lead text-center">
        The Low Voltage Sub-System (LVSS) is a board designed to receive messages from the Vehicle Control Unit (VCU), indicating which boards on the bike needs to be turned on or off. The LVSS will include a DCM4623TD2K13E0T70 Vicor DCM Power Module to take the battery pack voltage and step it down to multiple 12-volt signals. Utilizing the TPS2HB35BQ high-side power switches, a state machine will be able to send out the 12-volt signals to each individual board. The power switches can sense the current, temperature, and fault status and use these values to ensure the health of the LVSS.
      </p>

      <hr />

      {/* Main Loop Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Main Loop</h2>
          <p>The client node receives data from the server every second and sends data back every five seconds.</p>
        </Col>
        <Col md={5}>
          {/*<Image src={mainLoop} fluid alt="Main Loop Visualization" className="hover-image" />*/}
        </Col>
      </Row>

      <hr />
    </Container>
  );
}

export default LVSS;