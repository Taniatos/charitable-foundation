import React, { useState, useEffect } from "react";
import "./SlideShow.css";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/242/original/Frame_9.png?1697166751",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/245/original/Frame_10.png?1697167030",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/244/original/Frame_11.png?1697166761",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          className={`slide${index === currentIndex ? " active" : ""}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index}`} className="image" />
        </div>
      ))}
      <button onClick={goToPrevSlide} className="button-prev">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/207/original/prev.png?1697146454"
          alt="prev"
          width={60}
        />
      </button>
      <button onClick={goToNextSlide} className="button-next">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/206/original/next.png?1697146447"
          alt="next"
          width={60}
        />
      </button>
    </div>
  );
};

export default SlideShow;
