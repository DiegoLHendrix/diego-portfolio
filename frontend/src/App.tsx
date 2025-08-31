import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
const DynamicTitle = lazy(() => import('@utils/DynamicTitle'));
const NavigationBar = lazy(() => import('@components/NavigationBar'));
const Footer = lazy(() => import('@components/Footer'));
const NotFound = lazy(() => import('@components/NotFound'));

// Lazy Loaded pages
const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const Projects = lazy(() => import('@pages/Projects'));
const Experience = lazy(() => import('@pages/Experience'));

const App = () => {
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
            <Route path="/about" element={<About />} />
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
};

export default App;
