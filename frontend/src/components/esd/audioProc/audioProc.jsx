import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./audioProc.css";

import SecureImage from "../../api/SecureImage";

function AUDIOPROC({ skills }) {
  // State to toggle between VHDL and C code
  const [showVHDL, setShowVHDL] = useState(true);

  // Toggle function to switch between VHDL and C code
  const toggleCode = () => {
    setShowVHDL(!showVHDL);
  };

  return (
    <Container className="project-content">
      <h1 className="display-4 text-center">
        Embedded VHDL and C Audio Processor
      </h1>
      <p className="lead text-center"> 11/12/2024 </p>

      {/* Skills Section */}
      <p className="text-center">
        <strong>Skills:</strong> {skills.join(", ")}
      </p>

      <p className="lead text-center">
        This project focuses on the design and implementation of digital filters
        using VHDL on the Intel Cyclone V FPGA. The objective is to develop both
        low-pass and high-pass Finite Impulse Response (FIR) filters, which will
        be used for audio signal processing in future applications. The filters
        are implemented using shift registers, multipliers, and adders,
        following a structured design to enable efficient real-time signal
        filtering. A testbench was created using ModelSim to verify the design
        by processing waveform data and comparing results against expected
        outputs. The project integrates knowledge of digital signal processing
        (DSP), hardware description languages, and FPGA-based system design.
      </p>

      <hr />

      <h1 className="display-4 text-center">
        Now Showing: {showVHDL ? "VHDL" : "C Code"}
      </h1>

      {/* Button to toggle between VHDL and C code */}
      <Button
        onClick={toggleCode}
        variant="primary"
        className="mb-4 d-block mx-auto"
      >
        {showVHDL ? "Show C Code" : "Show VHDL Code"}
      </Button>

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

      {/* Conditional rendering of VHDL or C Code */}
      {showVHDL ? (
        // VHDL Section
        <>
          <Row className="align-items-center">
            <Col md={7}>
              <h2>Audio Filter Component Entity</h2>
            </Col>
            <Col md={5}>
              <SecureImage
                filename="esd/vhdl/filter_entity.png"
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
              <SecureImage
                filename="esd/vhdl/filter_arch.png"
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
                Determines the destination of the .wav file data. If the address
                is 0, the data bypasses both filters and is sent directly to the
                output. If the address is 1, the data is processed by one of the
                filters.
              </p>
            </Col>
            <Col md={5}>
              <SecureImage
                filename="esd/vhdl/filter_data_in.png"
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
                respective coefficients. The process selects the appropriate
                array of coefficients based on the filter select vector.
              </p>
            </Col>
            <Col md={5}>
              <SecureImage
                filename="esd/vhdl/filter_coeffs.png"
                fluid
                alt="VHDL Audio Processor"
                className="hover-image"
              />
              <SecureImage
                filename="esd/vhdl/filter_coeff_proc.png"
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
                The shift register (delay_reg) sequentially delays the input
                data, allowing the filter to process a sequence of input
                samples. This delay is essential for implementing Finite Impulse
                Response (FIR) filters, where previous input samples are
                multiplied by coefficients and summed to produce the output.
              </p>
            </Col>
            <Col md={5}>
              <SecureImage
                filename="esd/vhdl/filter_shift_reg.png"
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
                corresponding coefficient. Since the input and output signals
                are 16 bits, a for-loop is used to instantiate 16 multipliers.
              </p>
            </Col>
            <Col md={5}>
              <SecureImage
                filename="esd/vhdl/filter_multiplier.png"
                fluid
                alt="VHDL Audio Processor"
                className="hover-image"
              />
            </Col>
          </Row>
        </>
      ) : (
        // C Code Section
        <Row className="align-items-center">
          {/* Left Column - Summary */}
          <Col md={7}>
            <h2>Variables and Pointers</h2>
            <p>
              The code defines several global variables and pointers that manage
              the audio processing system. The primary components include:
              <ul>
                <li>
                  <strong>Global Variables:</strong>
                  <ul>
                    <li>
                      <strong>MAX_SAMPLES:</strong> Defines the maximum number
                      of samples (16-bit each) that can be stored in SDRAM.
                    </li>
                    <li>
                      <strong>ECHO_CNT and SAMPLE_CNT:</strong> Counters for
                      indexing into the audio buffer and tracking which sample
                      is being processed.
                    </li>
                    <li>
                      <strong>CHANNELS:</strong> Keeps track of the audio
                      channels (not fully used in the snippet).
                    </li>
                    <li>
                      <strong>TOGGLE:</strong> A flag used for toggling between
                      audio states.
                    </li>
                    <li>
                      <strong>FIRST_TIME:</strong> A flag to check if the code
                      is running for the first time (used for loading files into
                      SRAM).
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Pointer Definitions:</strong>
                  <ul>
                    <li>
                      <strong>SdramPtr:</strong> Points to the base of the SDRAM
                      where the audio data is stored.
                    </li>
                    <li>
                      <strong>AudioPtr:</strong> Points to the audio
                      configuration registers.
                    </li>
                    <li>
                      <strong>TimerPtr:</strong> Points to the timer
                      configuration registers, likely used for generating audio
                      interrupts or timings.
                    </li>
                    <li>
                      <strong>PinPtr, AudioVideoPtr, FilterPtr:</strong> Point
                      to various hardware peripherals for pin configurations,
                      audio/video settings, and audio filter configurations.
                    </li>
                    <li>
                      <strong>KEYPtr, SWPtr, LEDRPtr:</strong> Point to user
                      interface hardware (keys, switches, and LEDs) to interact
                      with the system.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Custom Data Types:</strong>
                  The code defines several standard embedded data types to
                  handle signed and unsigned integers of various sizes, as well
                  as floating-point numbers.
                </li>
              </ul>
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={5}>
            <SecureImage
              filename="esd/vhdl/preCompiler.png"
              fluid
              alt="Variables and Pointers"
              className="hover-image"
            />
          </Col>

          <hr />

          <Col md={7}>
            <h2>Timer ISR Summary</h2>
            <p>
              This Interrupt Service Routine (ISR) handles the audio sample
              processing by toggling the audio output and filtering the audio
              samples. The timer interrupt is set for 20.83 µs, corresponding to
              a sampling rate of 48 kHz, ensuring that no samples are missed and
              preventing the audio output FIFO from overflowing. The ISR handles
              low-pass and high-pass filtering based on the selected filter
              mode, and outputs the processed samples to both the left and right
              audio channels.
            </p>
          </Col>
          <Col md={5}>
            <SecureImage
              filename="esd/vhdl/timerISR.png"
              fluid
              alt="Timer ISR"
              className="hover-image"
            />
          </Col>

          <hr />

          {/* Left Column - Summary */}
          <Col md={7}>
            <h2>read_file Function</h2>
            <p>
              The `read_file` function is responsible for reading a .wav file
              and storing the data in SDRAM. The function performs the following
              tasks:
              <ul>
                <li>
                  <strong>File Handling:</strong> Opens the file
                  `audioTones.wav` from the host filesystem.
                </li>
                <li>
                  <strong>Header Parsing:</strong> Reads the file's header to
                  extract information like the chunk ID, format, sample rate,
                  and bits per sample.
                </li>
                <li>
                  <strong>Data Storage:</strong> If the file is valid, it reads
                  audio data (16-bit samples) into the SDRAM.
                </li>
                <li>
                  <strong>Sample Rate & Bit Rate:</strong> Ensures the file has
                  a 48KHz sample rate and 16-bit data format before processing.
                </li>
              </ul>
              The function uses a while loop to read the data into the
              `SdramPtr` until the maximum sample limit (`MAX_SAMPLES`) is
              reached. After reading, it outputs a success message.
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={5}>
            <SecureImage
              filename="esd/vhdl/readFile.png"
              fluid
              alt="read_file Function"
              className="hover-image"
            />
          </Col>

          <hr />

          {/* Left Column - Summary */}
          <Col md={7}>
            <h2>sw_isr Function</h2>
            <p>
              The `sw_isr` (switch interrupt service routine) function handles
              the user input from switches. It performs the following:
              <ul>
                <li>
                  <strong>Switch Input Processing:</strong> Reads the value of
                  the switches and processes it.
                </li>
                <li>
                  <strong>Filter Selection:</strong> If specific switches are
                  pressed, it selects different filters (Low Pass or High Pass)
                  for the audio processing.
                </li>
                <li>
                  <strong>LED Indicators:</strong> Controls the LEDs based on
                  the switch input. The LEDs are used to indicate the filter
                  state.
                </li>
              </ul>
              The function directly writes to the `FilterPtr` and `LEDRPtr` to
              update the audio filter selection and LED states based on the
              switches' values.
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={5}>
            <SecureImage
              filename="esd/vhdl/switchISR.png"
              fluid
              alt="sw_isr Function"
              className="hover-image"
            />
          </Col>

          <hr />

          {/* Left Column - Summary */}
          <Col md={7}>
            <h2>main Function</h2>
            <p>
              The `main` function is the entry point of the ESD-I Audio Demo
              program and performs the following tasks:
              <ul>
                <li>
                  <strong>Initialization:</strong> Initializes the system and
                  outputs a startup message.
                </li>
                <li>
                  <strong>Interrupt Setup:</strong> Registers interrupt service
                  routines for the timer and switches.
                </li>
                <li>
                  <strong>LED Control:</strong> Turns off all LEDs at the start.
                </li>
                <li>
                  <strong>File Read:</strong> Calls the `read_file` function to
                  load audio data if it is the first time running.
                </li>
                <li>
                  <strong>Timer Setup:</strong> Initializes a timer interrupt at
                  48kHz to handle periodic tasks.
                </li>
              </ul>
              The function enters an infinite loop (`while (1)`) to continuously
              run the program. This main loop can be used for ongoing audio
              processing or other tasks.
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={5}>
            <SecureImage
              filename="esd/vhdl/mainFunction.png"
              fluid
              alt="main Function"
              className="hover-image"
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AUDIOPROC;
