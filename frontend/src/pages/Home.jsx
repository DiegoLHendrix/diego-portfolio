import React from "react";
import "../styles/Home/Home.css";

import PortfolioCarousel from "../components/Home/PortfolioCarousel.jsx";
import ProjectsGrid from "../components/Home/ProjectsGrid.jsx";
import PortfolioFeaturette from "../components/Home/PortfolioFeaturette.jsx";

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
