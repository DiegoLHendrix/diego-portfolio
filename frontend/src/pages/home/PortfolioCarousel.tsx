import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import carouselImage1 from '@assets/base/carouselImage1.png';
import carouselImage2 from '@assets/base/carouselImage2.jpg';
import carouselImage3 from '@assets/base/carouselImage3.png';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

const PortfolioCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      image: carouselImage1,
      title: 'Electric Vehicle Team',
      description: 'Designing firmware for an electric motorcycle.',
    },
    {
      image: carouselImage2,
      title: 'Embedded Systems Design',
      description: 'Developing real-time, low-level software solutions.',
    },
    {
      image: carouselImage3,
      title: 'Digital Signal Processing',
      description: 'Enhancing data processing through advanced algorithms.',
    },
  ];

  const goToPrev = () => {
    setIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full pt-2 z-0">
      {/* Carousel Wrapper */}
      <div className="relative h-80 md:h-[600px] overflow-hidden rounded-lg">
        {carouselItems.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-200 ease-linear ${
              idx === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute w-full h-full object-cover top-0 left-0"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-white via-transparent to-transparent w-full text-white dark:from-black">
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <FaChevronLeft className="text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <FaChevronRight className="text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default PortfolioCarousel;
