import React, { useState } from "react";
import "./Slider.scss";

const NavWithSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
    setDirection("prev");
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
    setDirection("next");
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav-slider">
     
      <div className={`slider ${direction}`}>
        <div className="list">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src="http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg"
                alt={`Slider ${index + 1}`}
              />
              <div className="content">
                <p>design</p>
                <h2>Slider {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>
            &lt;
          </button>
          <button id="next" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="thumbnail">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src="http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg"
                alt={`Thumbnail ${index + 1}`}
              />
              <div className="content">Name Slider</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavWithSlider;
