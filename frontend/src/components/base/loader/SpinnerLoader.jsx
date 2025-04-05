import React, { useEffect, useState } from "react";
import "./SpinnerLoader.css";

function SpinnerLoader() {
  // State to control the text message displayed after loading
  const [text, setText] = useState("");

  // State to determine whether to show the loading spinner image
  const [ShowImg, setShowImg] = useState(true);

  useEffect(() => {
    // Set a timeout to change the UI after 3 seconds
    setTimeout(() => {
      setText("Loaded in 3 seconds"); // Update the text message
      setShowImg(false); // Hide the spinner image
    }, 3000);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="fullscreen-spinner">
      {ShowImg ? (
        // Show the spinner image while loading
        <img src="./sp.svg" alt="Loading..." className="spinner-img" />
      ) : (
        // Show the text message after loading completes
        <h3 className="loading-text">{text}</h3>
      )}
    </div>
  );
}

export default SpinnerLoader;
