import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Utilities
import { DynamicTitle } from "./components/base/DynamicTitle.ts";

// Components
import NavigationBar from "./components/base/NavigationBar.tsx";
import Footer from "./components/base/Footer.tsx";

// Lazy Loaded Components
const Home = lazy(() => import("./components/base/home/Home.tsx"));
const Resume = lazy(() => import("./components/base/Resume.tsx"));
const NotFound = lazy(() => import("./components/base/NotFound.tsx"));
const Projects = lazy(() => import("./components/projects/Projects.tsx"));
const Experience = lazy(() => import("./components/projects/Experience.tsx"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="page-container">
        {/* Flexbox Container */}
        <NavigationBar />
        <div className="content-wrap">
          <Suspense>
            {/* Ensures main content expands */}
            <DynamicTitle /> {/* This will update the title dynamically */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              {/* Catch-all route for undefined pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
