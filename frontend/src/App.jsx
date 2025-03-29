import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Utilities
import { DynamicTitle } from "./components/base/DynamicTitle.ts";

// Components
import NavigationBar from "./components/base/NavigationBar.jsx";
import Footer from "./components/base/Footer.jsx";
import Home from "./pages/base/Home.jsx";
import Resume from "./pages/base/Resume.jsx";
import Contact from "./pages/base/Contact.jsx";
import Projects from "./pages/projects/projects.jsx";

function App() {
  return (
    <div className="page-container">
      {" "}
      {/* Flexbox Container */}
      <NavigationBar />
      <div className="content-wrap">
        {" "}
        {/* Ensures main content expands */}
        <BrowserRouter>
          <DynamicTitle /> {/* This will update the title dynamically */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
