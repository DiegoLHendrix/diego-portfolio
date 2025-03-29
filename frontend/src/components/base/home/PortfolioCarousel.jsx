import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../../styles/base/home/PortfolioCarousel.css";

// Import local images
import Image1 from "../../../assets/base/carouselImage1.png";
import Image2 from "../../../assets/base/carouselImage2.jpg";
import Image3 from "../../../assets/base/carouselImage3.png";

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="portfolio-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={Image1} alt="Electric Vehicle Team" />
          <Carousel.Caption>
            <h3>Electric Vehicle Team</h3>
            <p>Designing firmware for an electric motorcycle.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Image2} alt="Embedded Systems Design" />
          <Carousel.Caption>
            <h3>Embedded Systems Design</h3>
            <p>Developing real-time, low-level software solutions.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={Image3} alt="Digital Signal Processing" />
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
