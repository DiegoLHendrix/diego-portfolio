import React from "react";
import {Container, Row, Col, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import "../../styles/evt/LVSS.css";

// Import images
import nucleo from "../../assets/evt/lvss/nucleo.png";
import HSSEVM from "../../assets/evt/lvss/HSSEVM.png";
import PCB from "../../assets/evt/lvss/LVSSPCB.png";

function LVSS({ skills }) {
  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">Low Voltage Sub-System (LVSS)</h1>
      <p className="lead text-center"> 2/10/2025 </p>

      {/* Skills Section */}
      <p className="text-center">
        <strong>Skills:</strong> {skills.join(", ")}
      </p>

      <p className="lead text-center">
        The Low Voltage Sub-System (LVSS) is a board designed to receive
        messages from the Vehicle Control Unit (VCU), indicating which boards on
        the bike needs to be turned on or off. The LVSS will include a
        DCM4623TD2K13E0T70 Vicor DCM Power Module to take the battery pack
        voltage and step it down to multiple 12-volt signals. Utilizing the
        TPS2HB35BQ high-side power switches, a state machine will be able to
        send out the 12-volt signals to each individual board. The power
        switches can sense the current, temperature, and fault status and use
        these values to ensure the health of the LVSS.
      </p>

      <hr />

      {/* Hardware Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Hardware Used</h2>
          <ul>
            <li>High Side Switch Motherboard Evaluation Module</li>
            <li>STM32 Nucleo</li>
            <li>LVSS PCB</li>
          </ul>
        </Col>
        <Col md={5}>
          <Row className="mt-3">
            <Col xs={6}>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>High Side Switch Evaluation Module</Tooltip>}
              >
                <Image src={HSSEVM} fluid alt="High Side Switch Evaluation Module" className="hover-image" />
              </OverlayTrigger>
            </Col>
            <Col xs={6}>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>STM32 Nucleo Development Board</Tooltip>}
              >
                <Image src={nucleo} fluid alt="STM32 Nucleo Development Board" className="hover-image" />
              </OverlayTrigger>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <OverlayTrigger
                placement="left"
                overlay={<Tooltip>LVSS Custom PCB</Tooltip>}
              >
                <Image src={PCB} fluid alt="LVSS Custom PCB" className="hover-image" />
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr />

      {/* Current Sensing Section */}
      <Row className="align-items-center justify-content-center">
        <Col md={12} className="text-center">
          <h2>Current Sensing</h2>
          <p>
            According to the datasheet, the relationship between output current
            (I<sub>OUT</sub>) and the corresponding typical sense current (I
            <sub>SNSI</sub>) is as follows: for an output current of 3A, the
            sense current is 1.5mA; for 1A, it is 0.5mA; for 300mA, it is
            0.150mA; for 100mA, it is 0.05mA; and for 50mA, it is 0.025mA. Based
            on this data, the equation governing this relationship is{" "}
            <i>
              I<sub>SNS</sub>
            </i>{" "}
            (in nA) × 2 ={" "}
            <i>
              I<sub>OUT</sub>
            </i>{" "}
            (in mA).
          </p>
        </Col>
      </Row>

      <hr />

      {/* Temperature Sensing Section */}
      <Row className="align-items-center">
        <Col md={12} className="text-center">
          <h2>Temperature Sensing</h2>
          <p>
            According to the datasheet, the equation for{" "}
            <i>
              I<sub>SNST</sub>
            </i>{" "}
            is given by:
            <br />
            <i>
              I<sub>SNST</sub>
            </i>{" "}
            = ({" "}
            <i>
              T<sub>J</sub>
            </i>{" "}
            − 25&deg;C ) × 0.011 + 0.85.
            <br />
            <br />
            Solving for junction temperature{" "}
            <i>
              T<sub>J</sub>
            </i>
            :
            <br />
            <i>
              T<sub>J</sub>
            </i>{" "}
            = ( ({" "}
            <i>
              I<sub>SNST</sub>
            </i>{" "}
            × 10<sup>3</sup> ) − 575 ) / 11.
          </p>
        </Col>
      </Row>

      <hr />

      {/* Fault Sensing Section */}
      <Row className="align-items-center">
        <Col md={12} className="text-center">
          <h2>Fault Sensing</h2>
          <p>
            In order to test if the power switch fault was working a calculation
            was made from reading the datasheet where I <sub>outMax</sub> * R1 /
            2000 &lt; 3.3V. This resulted in the resistor value needed to limit
            the voltage to be 366.67&#x2126; which was rounded down to
            330&#x2126;. With the voltage limited the STM32 microcontroller used
            for the circuit board would not be damaged. Next was to ensure the
            current limit was a safe value. To find the resistor value for this
            we used another equation from the datasheet <br /> R <sub>ILIM</sub>{" "}
            = K <sub>CL</sub> / I <sub>CL</sub>. The datasheet gave the value of
            K <sub>CL</sub> = 140 A * k&#x2126; and by coordinating with the
            electrical team designing the board the max output amperage was set
            to be 18A on each side which lead to the equation (140A * k&#x2126;)
            / 18A = 7.7k&#x2126;.
          </p>
        </Col>
      </Row>

      <hr />

      {/* To Do Section */}
      <Row className="align-items-center justify-content-center">
        <Col md={12} className="text-center">
          <h2>What Has to Be Done</h2>
          <ul className="list-unstyled">
            <li>Test code with high voltage</li>
          </ul>
        </Col>
      </Row>

    </Container>
  );
}

export default LVSS;
