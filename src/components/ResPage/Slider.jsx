import React, { useState } from "react";
import "./Slider.scss";

import img1 from "./images/img1.png";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

const NavWithSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Define your slider items with different images and descriptions
  const sliderItems = [
    {
      src: img1,
      description: "Description for item 1",
    },
    {
      src: img2,
      description: "Description for item 2",
    },
    {
      src: img3,
      description: "Description for item 3",
    },
    {
      src: img4,
      description: "Description for item 4",
    },
    {
      src: img5,
      description: "Description for item 5",
    },
    // Add more slider items as needed
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
    );
    setDirection("prev");
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
    );
    setDirection("next");
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="my-slider">
      <div className={`slider ${direction}`}>
        <div className="list">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={item.src} alt={`Slider ${index + 1}`} />
              <div className="content">
                <h2>Slider {index + 1}</h2>
                <p>{item.description}</p>
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
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={item.src} alt={`Thumbnail ${index + 1}`} />
              <div className="content">{`Slider ${index + 1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavWithSlider;
