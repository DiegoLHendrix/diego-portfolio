import AboutCard from '@features/about/AboutCard';
import AboutTimeline from '@features/about/AboutTimeline';

const About = () => {
  return (
    <main
      role="main"
      className="flex pt-10 justify-center flex-col md:flex-row gap-8 p-4"
    >
      <AboutCard />
      <div className="w-full md:w-1/2">
        <AboutTimeline />
      </div>
    </main>
  );
};

export default About;
