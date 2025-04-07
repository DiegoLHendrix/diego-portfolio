import React from "react";

const Resume: React.FC = () => {
  return (
    <main
      role="main"
      className="h-auto flex justify-center items-center flex-col gap-4 p-4"
    >
      <iframe
        src="/Diego_Lopez_ComputerEngineer.pdf#zoom=74"
        width="55%"
        height="850px"
        className="border-none"
        title="Resume"
      />
    </main>
  );
};

export default Resume;
