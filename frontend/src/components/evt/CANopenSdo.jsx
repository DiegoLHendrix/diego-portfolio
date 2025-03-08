import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../styles/evt/CANopenSdo.css";

// Import images
import mainLoop from "../../assets/evt/sdo/main-loop.png";
import receiveData from "../../assets/evt/sdo/receiveData.png";
import transferData from "../../assets/evt/sdo/transferData.png";
import SDOReceive from "../../assets/evt/sdo/SDOReceive.png";
import SDOTransfer from "../../assets/evt/sdo/SDOTransfer.png";
import registerCallBack from "../../assets/evt/sdo/registerCallBack.png";

function CANopenSdo() {
  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">CANopen Service Data Objects</h1>
      <p className="lead text-center"> 1/20/2024 </p>
      <p className="lead text-center">
        This project demonstrates communication between two STM32
        microcontrollers using the CANopen SDO protocol.
      </p>

      <hr />

      {/* Main Loop Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Main Loop</h2>
          <p>
            The client node receives data from the server every second and sends
            data back every five seconds.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={mainLoop}
            fluid
            alt="Main Loop Visualization"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      {/* receiveData Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>receiveData</h2>
          <p>Retrieves data from the server to the client:</p>
          <ol>
            <li>Instantiates an array to store the received values.</li>
            <li>
              Uses the <code>SDOReceive</code> method to request and validate
              the data.
            </li>
            <li>Logs errors or success messages via a UART Logger.</li>
          </ol>
        </Col>
        <Col md={5}>
          <Image
            src={receiveData}
            fluid
            alt="receiveData Code"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      {/* transferData Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>transferData</h2>
          <p>Sends data from the client to the server:</p>
          <ol>
            <li>
              Increments the first array element and doubles its value for the
              second element.
            </li>
            <li>
              Uses the <code>SDOTransfer</code> method to initiate the data
              transfer and checks for errors.
            </li>
            <li>Logs errors or success messages via a UART Logger.</li>
          </ol>
        </Col>
        <Col md={5}>
          <Image
            src={transferData}
            fluid
            alt="transferData Code"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      {/* SDOReceive Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>SDOReceive</h2>
          <p>
            This function initiates an SDO upload (read) request to retrieve
            data from the target CANopen node.
          </p>
          <ol>
            <li>
              Uses <code>COCSdoFind</code> to locate the target CANopen node.
            </li>
            <li>Registers a callback function for completion or errors.</li>
            <li>
              Sends the upload request and returns any corresponding error
              codes.
            </li>
          </ol>
        </Col>
        <Col md={5}>
          <Image
            src={SDOReceive}
            fluid
            alt="SDOReceive Diagram"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      {/* SDOTransfer Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>SDOTransfer</h2>
          <p>
            This function prepares and initiates an SDO download (write) request
            to send data to the target CANopen node.
          </p>
          <ol>
            <li>
              Uses <code>COCSdoFind</code> to locate the target CANopen node.
            </li>
            <li>
              Registers a callback function for monitoring completion or errors.
            </li>
            <li>
              Sends the download request and handles any errors that occur.
            </li>
          </ol>
        </Col>
        <Col md={5}>
          <Image
            src={SDOTransfer}
            fluid
            alt="SDOTransfer Diagram"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      {/* registerCallBack Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>registerCallBack</h2>
          <p>Assigns a user-defined callback function for SDO operations:</p>
          <ol>
            <li>
              <strong>Parameters:</strong>
              <ul>
                <li>
                  <code>CO_CSDO* csdo</code>: Pointer to the client SDO object.
                </li>
                <li>
                  <code>uint16_t index</code>: Object dictionary index.
                </li>
                <li>
                  <code>uint8_t sub</code>: Object dictionary subindex.
                </li>
                <li>
                  <code>uint32_t code</code>: Completion status (0 for success).
                </li>
              </ul>
            </li>
            <li>
              <code>AppContext</code> is a pointer to the CSDO node.
            </li>
          </ol>
        </Col>
        <Col md={5}>
          <Image
            src={registerCallBack}
            fluid
            alt="registerCallBack Diagram"
            className="hover-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CANopenSdo;
