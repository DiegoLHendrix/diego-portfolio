import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <img
        src="/sp.svg" // Path to the SVG in the public folder
        alt="Loading..."
        className="w-12 h-12 animate-spin"
      />
    </div>
  );
};

export default Loader;
