import React from "react";

interface AUDIOPROCProps {
  skills: string[];
}

const AUDIOPROC: React.FC<AUDIOPROCProps> = ({ skills }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center">
        Embedded VHDL and C Audio Processor
      </h1>
      <p className="text-xl text-center my-2">11/12/2024</p>

      {/* Skills Section */}
      <p className="text-center my-4">
        <strong>Skills:</strong> {skills.join(", ")}
      </p>

      <p className="text-xl text-center my-4">
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

      <p className="text-xl text-center my-4">
        Check out the full project on{" "}
        <a
          href="https://github.com/DiegoLHendrix/CPET561/tree/main/Labs/lab9/filters_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub
        </a>
      </p>

      <hr className="my-8" />

      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Goal</h2>
        <p className="text-xl max-w-3xl mx-auto">
          The goal of this project was to design and verify both a high pass and
          a low pass FIR filter in VHDL. These filters will be used to process
          an audio signal in the next lab.
        </p>
      </div>

      <hr className="my-8" />

      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Methodology</h2>

        <p className="text-l max-w-3xl mx-auto my-4">
          The methodology for this project started with creating the VHDL
          implementation. The VHDL implementation centers on a modular audio
          filter system designed to perform real-time digital filtering of
          16-bit audio signals. At the heart of this system is a parameterized
          17-tap Finite Impulse Response (FIR) filter that can switch between
          low-pass and high-pass configurations. The architecture consists of
          five primary processes: data input, coefficient loading, shift
          register management, multiplication, and accumulation.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          First, the data input process determines the destination of incoming
          audio samples, which are written based on address inputs. When the
          address equals zero, the data bypasses filtering; when it is one, the
          input proceeds to the filter logic. Coefficients for both filters are
          hardcoded and selected dynamically using a control signal. A shift
          register (delay line) stores the previous 16 samples of audio input,
          enabling the FIR filter to access past values necessary for
          convolution.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          Multipliers are generated using a loop that instantiates one
          multiplier per coefficient. Each multiplier takes a delayed input
          sample and multiplies it by the corresponding coefficient. These
          products are then sequentially accumulated using a pipelined adder
          structure. The sum of these values forms the final output sample,
          which is made available to the system through the{" "}
          <code className="bg-gray-200 p-1 rounded">readdata</code> port. This
          modular design enables efficient parallel processing of filter stages
          and leverages the spatial architecture of the FPGA for real-time
          performance.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          The design was simulated using ModelSim to verify correct behavior.
          Simulations ensured the filters responded correctly to input waveforms
          and switched properly between high-pass and low-pass modes. The
          modular approach and clear signal separation facilitated both
          debugging and extension of the system for future processing tasks.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          To implement real-time audio playback and filtering, the system uses
          embedded C software running on a Nios II processor. The main software
          is located in{" "}
          <code className="bg-gray-200 p-1 rounded">audio_demo.c</code>, which
          integrates audio file parsing, interrupt handling, and filter control.
          Audio samples from a 48kHz, 16-bit stereo WAV file are first read into
          SDRAM using the{" "}
          <code className="bg-gray-200 p-1 rounded">read_file()</code> function.
          This function parses the WAV file header and loads audio data into
          memory, enabling rapid access during real-time playback.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          Real-time playback is managed using a hardware timer configured to
          generate interrupts every 20.83 microseconds—matching the 48kHz
          sampling rate. Within the{" "}
          <code className="bg-gray-200 p-1 rounded">timer_isr()</code> interrupt
          service routine, audio samples are read sequentially from SDRAM. If
          filtering is enabled, each sample is passed to the VHDL audio filter
          IP core before being output to the audio interface. The filtered or
          raw samples are written to the audio FIFO for stereo playback.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          Hardware switches are used to control filtering behavior via the{" "}
          <code className="bg-gray-200 p-1 rounded">sw_isr()</code>. When switch
          0 is active, the system applies a low-pass filter by setting the
          filter control signal to mode 0. If switch 1 is toggled, the filter
          switches to high-pass mode. When both switches are active, filtering
          is bypassed, and the raw audio is played. LEDs on the FPGA board
          indicate the current filter mode, providing visual feedback.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          In the <code className="bg-gray-200 p-1 rounded">main()</code>{" "}
          function, interrupts are registered for both the timer and switch
          inputs. If <code className="bg-gray-200 p-1 rounded">FIRST_TIME</code>{" "}
          is enabled, the audio file is loaded into SDRAM at startup. The system
          then enters an infinite loop, relying entirely on interrupt-driven
          processing to manage playback and filtering, which minimizes CPU
          overhead and ensures smooth, glitch-free audio output.
        </p>

        <p className="text-l max-w-3xl mx-auto my-4">
          This embedded-software-driven approach complements the hardware
          design, enabling flexible, real-time control over audio playback and
          processing. By leveraging both VHDL for filtering and C for system
          orchestration, the project demonstrates a practical and effective use
          of FPGA technology in digital signal processing applications.
        </p>
      </div>

      <hr className="my-8" />
    </div>
  );
};

export default AUDIOPROC;
