import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Utilities
import { DynamicTitle } from "./components/base/DynamicTitle.ts";
import SpinnerLoader from "./components/base/SpinnerLoader.jsx";

// Components
import NavigationBar from "./components/base/NavigationBar.jsx";
import Footer from "./components/base/Footer.jsx";

const Home = lazy(() => import("./pages/base/Home.jsx"));
const Resume = lazy(() => import("./pages/base/Resume.jsx"));
const Contact = lazy(() => import("./pages/base/Contact.jsx"));
const NotFound = lazy(() => import("./pages/base/NotFound.jsx"));
const Projects = lazy(() => import("./pages/projects/projects.jsx"));
const Experience = lazy(() => import("./pages/projects/Experience.jsx"));

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        {/* Flexbox Container */}
        <NavigationBar />
        <div className="content-wrap">
          <Suspense fallback={<SpinnerLoader />}>
            {/* Ensures main content expands */}
            <DynamicTitle /> {/* This will update the title dynamically */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
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
