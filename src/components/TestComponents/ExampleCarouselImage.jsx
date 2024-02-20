import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div className="carousel-image-container">
      <img src="./hxh.jpg" alt={text} className="carousel-image" />
      <p className="carousel-image-caption">{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;