import React, { useState } from "react";
import "./Slider.scss";

const NavWithSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  // Define your slider items with different images and descriptions
  const sliderItems = [
    {
      src: "https://c4.wallpaperflare.com/wallpaper/667/630/482/burger-dinner-food-hamburger-wallpaper-preview.jpg",
      description: "Description for item 1",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg",
      description: "Description for item 2",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/997/408/959/tomato-leaves-vegetables-meat-beef-wallpaper-preview.jpg",
      description: "Description for item 3",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/325/393/217/food-lasagna-meal-pasta-wallpaper-preview.jpg",
      description: "Description for item 4",
    },
    {
      src: "https://c4.wallpaperflare.com/wallpaper/796/449/290/chicken-legs-close-up-three-plate-wallpaper-preview.jpg",
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
                <h2 style={{fontSize:"70px"}}>Slider {index + 1}</h2>
                <h4>{item.description}</h4>
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
