import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Utilities
import { DynamicTitle } from "./components/base/DynamicTitle.ts";
import SpinnerLoader from "./components/base/loader/SpinnerLoader.jsx";

// Components
import NavigationBar from "./components/base/NavigationBar.jsx";
import Footer from "./components/base/footer/Footer.jsx";

const Home = lazy(() => import("./components/base/home/Home.jsx"));
const Resume = lazy(() => import("./components/base/resume/Resume.jsx"));
const Contact = lazy(() => import("./components/base/contact/Contact.jsx"));
const NotFound = lazy(() => import("./components/base/NotFound.jsx"));
const Projects = lazy(() => import("./components/projects/Projects.jsx"));
const Experience = lazy(() => import("./components/projects/Experience.jsx"));

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
