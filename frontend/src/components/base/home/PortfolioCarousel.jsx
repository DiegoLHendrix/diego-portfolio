import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./PortfolioCarousel.css";

import SecureImage from "../../../components/api/SecureImage";

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="portfolio-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {/* Replace <img> with SecureImage for dynamic loading */}
          <SecureImage filename="base/carouselImage1.png" />
          <Carousel.Caption>
            <h3>Electric Vehicle Team</h3>
            <p>Designing firmware for an electric motorcycle.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SecureImage filename="base/carouselImage2.jpg" />
          <Carousel.Caption>
            <h3>Embedded Systems Design</h3>
            <p>Developing real-time, low-level software solutions.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <SecureImage filename="base/carouselImage3.png" />
          <Carousel.Caption>
            <h3>Digital Signal Processing</h3>
            <p>Enhancing data processing through advanced algorithms.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;
