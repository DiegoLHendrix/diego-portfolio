import React from "react";

const BackgroundAudio: React.FC = () => {
  return (
    <audio autoPlay loop hidden>
      <source src="/path/to/your/file.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundAudio;
