import React, { useState, useEffect, useRef } from "react";
import "./SlideShow.css";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const slideshowRef = useRef(null);

  const images = [
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/448/original/photo_1.png?1697247325",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/449/original/photo_2.png?1697247333",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/450/original/photo_3.png?1697247340",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/451/original/photo_4.png?1697247348",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/452/original/photo_5.png?1697247356",
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/453/original/photo_6.png?1697247363",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = e.touches[0].clientX;
    const touchXDiff = touchStartX - touchEndX;

    if (touchXDiff > 50) {
      // Swipe right, go to the next slide
      goToNextSlide();
    } else if (touchXDiff < -50) {
      // Swipe left, go to the previous slide
      goToPrevSlide();
    }

    setTouchStartX(null);
  };

  return (
    <div
      className="slideshow-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      ref={slideshowRef}
    >
      {images.map((image, index) => (
        <div
          className={`slide${index === currentIndex ? " active" : ""}`}
          key={index}
        >
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={`Slide ${index}`} className="image" />
          </a>
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
