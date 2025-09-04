interface LVSSProps {
  skills: string[];
}

const LVSS = ({ skills }: LVSSProps) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center">
        Low Voltage Sub-System (LVSS)
      </h1>
      <p className="text-xl text-center my-2">February 10th, 2025</p>

      {/* Skills Section */}
      <p className="text-center my-4">
        <strong>Skills:</strong> {skills.join(', ')}
      </p>

      <p className="text-xl text-center my-4">
        The Low Voltage Sub-System (LVSS) is a board designed to receive
        messages from the Vehicle Control Unit (VCU), indicating which boards on
        the bike need to be turned on or off. The LVSS will include a
        DCM4623TD2K13E0T70 Vicor DCM Power Module to take the battery pack
        voltage and step it down to multiple 12-volt signals. Utilizing the
        TPS2HB35BQ high-side power switches, a state machine will be able to
        send out the 12-volt signals to each individual board. The power
        switches can sense the current, temperature, and fault status and use
        these values to ensure the health of the LVSS.
      </p>

      <hr className="my-8" />

      {/* Hardware Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Hardware Used</h2>
          <p className="text-xl">
            High Side Switch Motherboard Evaluation Module
          </p>
          <p className="text-xl">STM32 Nucleo</p>
          <p className="text-xl">LVSS PCB</p>
        </div>
      </div>

      <hr className="my-8" />

      {/* Current Sensing Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Current Sensing</h2>
        <p className="text-xl max-w-3xl mx-auto">
          According to the datasheet, the relationship between output current (I
          <sub>OUT</sub>) and the corresponding typical sense current (I
          <sub>SNSI</sub>) is as follows: for an output current of 3A, the sense
          current is 1.5mA; for 1A, it is 0.5mA; for 300mA, it is 0.150mA; for
          100mA, it is 0.05mA; and for 50mA, it is 0.025mA. Based on this data,
          the equation governing this relationship is{' '}
          <i>
            I<sub>SNS</sub>
          </i>{' '}
          (in nA) × 2 ={' '}
          <i>
            I<sub>OUT</sub>
          </i>{' '}
          (in mA).
        </p>
      </div>

      <hr className="my-8" />

      {/* Temperature Sensing Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Temperature Sensing</h2>
        <p className="text-xl max-w-3xl mx-auto">
          According to the datasheet, the equation for{' '}
          <i>
            I<sub>SNST</sub>
          </i>{' '}
          is given by:
          <br />
          <i>
            I<sub>SNST</sub>
          </i>{' '}
          = ({' '}
          <i>
            T<sub>J</sub>
          </i>{' '}
          − 25&deg;C ) × 0.011 + 0.85.
          <br />
          <br />
          Solving for junction temperature{' '}
          <i>
            T<sub>J</sub>
          </i>
          :
          <br />
          <i>
            T<sub>J</sub>
          </i>{' '}
          = ( ({' '}
          <i>
            I<sub>SNST</sub>
          </i>{' '}
          × 10<sup>3</sup> ) − 575 ) / 11.
        </p>
      </div>

      <hr className="my-8" />

      {/* Fault Sensing Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">Fault Sensing</h2>
        <p className="text-xl max-w-3xl mx-auto">
          In order to test if the power switch fault was working a calculation
          was made from reading the datasheet where I <sub>outMax</sub> * R1 /
          2000 &lt; 3.3V. This resulted in the resistor value needed to limit
          the voltage to be 366.67&#x2126; which was rounded down to
          330&#x2126;. With the voltage limited the STM32 microcontroller used
          for the circuit board would not be damaged. Next was to ensure the
          current limit was a safe value. To find the resistor value for this we
          used another equation from the datasheet
          <br />R <sub>ILIM</sub> = K <sub>CL</sub> / I <sub>CL</sub>. The
          datasheet gave the value of K <sub>CL</sub> = 140 A * k&#x2126; and by
          coordinating with the electrical team designing the board the max
          output amperage was set to be 18A on each side which lead to the
          equation (140A * k&#x2126;) / 18A = 7.7k&#x2126;.
        </p>
      </div>

      <hr className="my-8" />

      {/* To Do Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold">What Has to Be Done</h2>
        <p className="text-xl">Test code with high voltage</p>
      </div>
    </div>
  );
};

export default LVSS;
