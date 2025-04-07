import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check for dark theme preference in localStorage or system preference on initial load
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("color-theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // Default to false in SSR or static rendering
  });

  useEffect(() => {
    const root = document.documentElement;
    console.log("Applying theme:", isDark ? "dark" : "light"); // Debugging

    // Apply or remove the dark class based on the isDark state
    if (isDark) {
      root.classList.add("dark");
      // localStorage.setItem("color-theme", "dark");
    } else {
      root.classList.remove("dark");
      // localStorage.setItem("color-theme", "light");
    }
    // Force reload to ensure styles apply correctly
    // window.location.reload();
  }, [isDark]); // Re-run effect whenever isDark changes

  const toggleTheme = () => {
    setIsDark((prev) => !prev); // Toggle theme state
  };

  const iconSrc = isDark ? "/moon.svg" : "/sun.svg";
  const altText = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
      aria-label={altText}
      title={altText}
    >
      <img
        src={iconSrc}
        alt={altText}
        width={30}
        height={30}
        className="w-8 h-8"
      />
    </button>
  );
};

export default ThemeToggle;
