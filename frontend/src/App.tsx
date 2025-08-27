import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import { DynamicTitle } from '@components/DynamicTitle.ts';
const NavigationBar = lazy(() => import('@components/NavigationBar.tsx'));
const Footer = lazy(() => import('@components/Footer.tsx'));
const NotFound = lazy(() => import('@components/NotFound.tsx'));

// Lazy Loaded pages
const Home = lazy(() => import('@pages/home/Home.tsx'));
const Resume = lazy(() => import('@pages/resume/Resume.tsx'));
const Projects = lazy(() => import('@pages/projects/Projects.tsx'));
const Experience = lazy(() => import('@pages/projects/Experience.tsx'));

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavigationBar />
      </header>

      <div className="page-container">
        {/* Flexbox Container */}
        <main className="content-wrap">
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
          {/* </Suspense> */}
        </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
