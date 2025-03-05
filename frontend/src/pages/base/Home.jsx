import React from "react";
import "../../styles/base/home/Home.css";

import PortfolioCarousel from "../../components/base/home/PortfolioCarousel.jsx";
import ProjectsGrid from "../../components/base/home/ProjectsGrid.jsx";
import PortfolioFeaturette from "../../components/base/home/PortfolioFeaturette.jsx";

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
