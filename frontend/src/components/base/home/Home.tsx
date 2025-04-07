import React from "react";

import PortfolioCarousel from "./PortfolioCarousel";
import ProjectsGrid from "./ProjectsGrid";
import PortfolioFeaturette from "./PortfolioFeaturette";

const Home: React.FC = () => {
  return (
    <main role="main">
      <PortfolioCarousel />
      <ProjectsGrid />
      <PortfolioFeaturette />
    </main>
  );
};

export default Home;
