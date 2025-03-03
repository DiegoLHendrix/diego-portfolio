import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home/PortfolioCarousel.css"; // Import the new CSS file

// Import local images
import GreySquare from "../../assets/base/Grey-Square.png";

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="portfolio-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={GreySquare} alt="Electric Vehicle Team" />
          <Carousel.Caption>
            <h3>Electric Vehicle Team</h3>
            <p>Engineering the future of transportation.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={GreySquare} alt="Embedded Systems" />
          <Carousel.Caption>
            <h3>Embedded Systems</h3>
            <p>Developing real-time, low-level software solutions.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={GreySquare} alt="Digital Signal Processing" />
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
