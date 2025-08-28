import PortfolioCarousel from '@features/home/PortfolioCarousel';
import ProjectsGrid from '@features/home/ProjectsGrid';
import PortfolioFeaturette from '@features/home/PortfolioFeaturette';

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
