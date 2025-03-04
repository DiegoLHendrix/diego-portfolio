import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import NavigationBar from "./components/base/NavigationBar.jsx";
import Footer from "./components/base/Footer.jsx";
import Home from './pages/base/Home.jsx';
import Resume from './pages/base/Resume.jsx'
import Contact from './pages/base/Contact.jsx'
import EVT from './pages/evt.jsx';

function App() {
    return (
        <div className="page-container"> {/* Flexbox Container */}
            <NavigationBar />
            <div className="content-wrap"> {/* Ensures main content expands */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/evt" element={<EVT />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
