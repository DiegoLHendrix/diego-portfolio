import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Utilities
import { DynamicTitle } from "./components/base/DynamicTitle.ts";

// Components
import NavigationBar from "./components/base/NavigationBar.tsx";
import Footer from "./components/base/Footer.tsx";
import LoadingCircleSpinner from "./components/base/LoadingCircleSpinner.tsx";

// Lazy Loaded Components
const Home = lazy(() => import("./components/base/home/Home.tsx"));
const Resume = lazy(() => import("./components/base/resume/Resume.tsx"));
const NotFound = lazy(() => import("./components/base/NotFound.tsx"));
const Projects = lazy(() => import("./components/projects/Projects.tsx"));
const Experience = lazy(() => import("./components/projects/Experience.tsx"));

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavigationBar />
      </header>

      <div className="page-container">
        {/* Flexbox Container */}
        <main className="content-wrap">
          <Suspense fallback={<LoadingCircleSpinner />}>
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
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
