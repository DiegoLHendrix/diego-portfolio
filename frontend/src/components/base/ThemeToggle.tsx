import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const iconSrc = isDarkMode ? "/moon.svg" : "/sun.svg";

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      aria-label="Toggle theme"
      style={{
        padding: 0,
        border: "none",
        background: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={iconSrc}
        alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        width={30}
        height={30}
      />
    </button>
  );
};

export default ThemeToggle;
