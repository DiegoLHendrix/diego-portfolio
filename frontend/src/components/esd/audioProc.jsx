import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../styles/esd/audioProc.css";

// Import images
import filterEntity from "../../assets/esd/vhdl/filter_entity.png";
import filterArch from "../../assets/esd/vhdl/filter_arch.png";
import filterDataIn from "../../assets/esd/vhdl/filter_data_in.png";
import filterCoeffs from "../../assets/esd/vhdl/filter_coeffs.png";
import filterCoeffProc from "../../assets/esd/vhdl/filter_coeff_proc.png";
import filterShiftReg from "../../assets/esd/vhdl/filter_shift_reg.png";
import filterMultiplier from "../../assets/esd/vhdl/filter_multiplier.png";

function AUDIOPROC() {
  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">
        Embedded VHDL and C Audio Processor
      </h1>
      <p className="lead text-center"></p>

      <hr />

      {/* Hardware Section */}
      <Row className="align-items-center">
        <Col md={7}>
          <h2>Hardware Used</h2>
          <ul>
            <li>Intel Cyclone V FPGA</li>
            <li>Speakers</li>
          </ul>
        </Col>
      </Row>

      <hr />

      {/* VHDL Section */}

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Audio Filter Component Entity</h2>
        </Col>
        <Col md={5}>
          <Image
            src={filterEntity}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Audio Filter Component Architecture</h2>
        </Col>
        <Col md={5}>
          <Image
            src={filterArch}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Filter Data Input Process</h2>
          <p>
            Determines the destination of the .wav file data. If the address is
            0, the data bypasses both filters and is sent directly to the
            output. If the address is 1, the data is processed by one of the
            filters.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={filterDataIn}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Filter Coefficients Process</h2>
          <p>
            Fills the arrays for the high and low pass filters with their
            respective coefficients. The process selects the appropriate array
            of coefficients based on the filter select vector.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={filterCoeffs}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
          <Image
            src={filterCoeffProc}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Shift Register Process</h2>
          <p>
            The shift register (delay_reg) sequentially delays the input data,
            allowing the filter to process a sequence of input samples. This
            delay is essential for implementing Finite Impulse Response (FIR)
            filters, where previous input samples are multiplied by coefficients
            and summed to produce the output.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={filterShiftReg}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>

      <hr />

      <Row className="align-items-center">
        <Col md={7}>
          <h2>Multiplier Generator Process</h2>
          <p>
            The multiplier takes the input signal and multiplies it by the
            corresponding coefficient. Since the input and output signals are 16
            bits, a for-loop is used to instantiate 16 multipliers.
          </p>
        </Col>
        <Col md={5}>
          <Image
            src={filterMultiplier}
            fluid
            alt="VHDL Audio Processor"
            className="hover-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AUDIOPROC;
