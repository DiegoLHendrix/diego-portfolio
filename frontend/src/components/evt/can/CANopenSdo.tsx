import React from "react";

interface CANopenSdoProps {
  skills: string[];
}

const CANopenSdo: React.FC<CANopenSdoProps> = ({ skills }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        CANopen Service Data Objects (SDO)
      </h1>
      <p className="text-xl text-center text-gray-600">1/20/2024 - Present</p>

      {/* Skills Section */}
      <div className="text-center my-4">
        <strong className="font-semibold">Skills:</strong>{" "}
        <span className="text-gray-700">{skills.join(", ")}</span>
      </div>

      <p className="text-xl text-center text-gray-700 my-4">
        This project demonstrates communication between two STM32
        microcontrollers using the CANopen SDO protocol. It is designed to
        showcase how devices can exchange data reliably using the CANopen
        protocol, focusing on sending and receiving data between client and
        server nodes.
      </p>

      <p className="text-xl text-center text-gray-700 my-4">
        The project focuses on the implementation of the CANopen protocol for
        inter-device communication. Specifically, it involves the use of Service
        Data Objects (SDOs) to manage data exchange between a client and a
        server using the CANopen protocol. The client node regularly
        communicates with the server by receiving data every second and sending
        data back every five seconds, thus demonstrating continuous data
        exchange in a microcontroller environment.
      </p>

      <hr className="my-8 border-t-2 border-gray-200" />

      <p className="text-xl text-center text-gray-700 my-4">
        The Main Loop in the system is at the heart of communication, ensuring
        that the client node and server are continuously exchanging data. The
        client receives data from the server every second and responds back
        every five seconds. This ongoing interaction illustrates the protocol’s
        ability to facilitate real-time communication in embedded systems.
      </p>

      <p className="text-xl text-center text-gray-700 my-4">
        The receiveData function is dedicated to retrieving data from the
        server. It works by instantiating an array to hold the received data,
        using the SDOReceive method to request and validate the data.
        Additionally, it logs any errors or success messages via a UART Logger,
        ensuring that the data retrieval process is transparent and can be
        monitored effectively.
      </p>

      <p className="text-xl text-center text-gray-700 my-4">
        The transferData function is responsible for sending data from the
        client to the server. This function first modifies the data array,
        incrementing the first element and doubling the value of the second
        element. It then uses the SDOTransfer method to initiate the transfer
        and checks for errors in the process. Like the receiveData function, any
        errors or successful transfers are logged, ensuring the communication is
        handled efficiently and can be debugged if necessary.
      </p>

      {/* Corrected Ordered List Section */}
      <div className="text-center my-4">
        <p className="text-xl text-gray-700">
          Below are key functions used in the system:
        </p>
        <ol className="list-decimal pl-8 text-xl text-gray-700 my-4 space-y-2">
          <li>
            <strong className="font-semibold">SDOReceive:</strong> This function
            initiates an SDO upload (read) request to retrieve data from the
            target CANopen node. It uses the COCSdoFind method to locate the
            node and registers a callback function to handle the process. This
            function returns error codes corresponding to any issues that arise
            during the data retrieval process.
          </li>
          <li>
            <strong className="font-semibold">SDOTransfer:</strong> Conversely,
            SDOTransfer initiates an SDO download (write) request to send data
            to the target node. It follows a similar approach by locating the
            target node with COCSdoFind, registering a callback, and handling
            errors that may occur during the transfer.
          </li>
          <li>
            <strong className="font-semibold">registerCallBack:</strong> This
            function allows the assignment of user-defined callback functions to
            handle SDO operations. It requires the specification of several
            parameters, including the client SDO object pointer, object
            dictionary index and subindex, and the completion status. This
            ensures that the correct actions are taken once an SDO operation is
            completed, whether it is successful or not.
          </li>
        </ol>
      </div>

      <p className="text-xl text-center text-gray-700 my-4">
        This project highlights the robust communication capabilities of the
        CANopen protocol, specifically through its Service Data Objects (SDOs).
        By implementing functions such as receiveData, transferData, SDOReceive,
        SDOTransfer, and registerCallBack, the project demonstrates how to
        manage data exchanges between embedded devices effectively. The system
        ensures reliable communication, clear error handling, and effective
        monitoring, which are crucial for embedded systems operating in
        real-world applications.
      </p>
    </div>
  );
};

export default CANopenSdo;
