import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import NavigationBar from "./components/base/NavigationBar.jsx";
import Footer from "./components/base/Footer.jsx";
import Home from './pages/Home.jsx';

function App() {
    return (
        <div className="page-container"> {/* Flexbox Container */}
            <NavigationBar />
            <div className="content-wrap"> {/* Ensures main content expands */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
