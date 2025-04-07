import React, { useState } from "react";
import SecureImage from "../../../components/api/SecureImage";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

const PortfolioCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  // Array of carousel items
  const carouselItems: CarouselItem[] = [
    {
      image: "base/carouselImage1.png",
      title: "Electric Vehicle Team",
      description: "Designing firmware for an electric motorcycle.",
    },
    {
      image: "base/carouselImage2.jpg",
      title: "Embedded Systems Design",
      description: "Developing real-time, low-level software solutions.",
    },
    {
      image: "base/carouselImage3.png",
      title: "Digital Signal Processing",
      description: "Enhancing data processing through advanced algorithms.",
    },
  ];

  // Handle the carousel item change
  const handlePrev = () => {
    setIndex(index === 0 ? carouselItems.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === carouselItems.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {carouselItems.map((item, idx) => (
          <div className="w-full flex-shrink-0 relative" key={idx}>
            <SecureImage
              filename={item.image}
              className="w-full object-cover h-80 sm:h-[500px] md:h-[600px]"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
        <button
          className="bg-gray-700 text-white p-2 rounded-full"
          onClick={handlePrev}
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
        <button
          className="bg-gray-700 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
