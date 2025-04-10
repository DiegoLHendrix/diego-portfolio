import React from "react";

const Resume: React.FC = () => {
  return (
    <main
      role="main"
      className="h-auto flex pt-10 justify-center items-center flex-col gap-4 p-4"
    >
      <iframe
        src="/Diego_Lopez_ComputerEngineer.pdf#zoom=100"
        width="55%"
        height="850px"
        className="border-none"
        title="Resume"
      />
    </main>
  );
};

export default Resume;
