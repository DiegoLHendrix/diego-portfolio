import React from "react";
import "./Home.css";

import PortfolioCarousel from "./PortfolioCarousel.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import PortfolioFeaturette from "./PortfolioFeaturette.jsx";

const Home = () => {
  return (
    <main role="main">
      <PortfolioCarousel />
      <ProjectsGrid />
      <PortfolioFeaturette />
    </main>
  );
};

export default Home;
