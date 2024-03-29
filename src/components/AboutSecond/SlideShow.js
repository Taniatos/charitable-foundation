import React, { useState, useEffect } from "react";
import "./SlideShow.css";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/448/original/photo_1.png?1697247325",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/449/original/photo_2.png?1697247333",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/450/original/photo_3.png?1697247340",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/451/original/photo_4.png?1697247348",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/452/original/photo_5.png?1697247356",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/453/original/photo_6.png?1697247363",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/106/831/original/photo_7.png?1702332030",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/106/832/original/photo_8.png?1702332039",
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
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/783/original/prev.png?1697415327"
          alt="prev"
          width={60}
        />
      </button>
      <button onClick={goToNextSlide} className="button-next">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/784/original/prev-1.png?1697415335"
          alt="next"
          width={60}
        />
      </button>
    </div>
  );
};

export default SlideShow;
