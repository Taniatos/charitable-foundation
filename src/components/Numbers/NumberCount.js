import React, { useEffect, useState, useRef } from "react";

function NumberCount({ targetNumber }) {
  const [number, setNumber] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is within the viewport, start the animation
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      {
        threshold: 0.7, // Start the animation when 70% of the element is visible
      }
    );

    // Start observing the component
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean-up the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once

  useEffect(() => {
    let interval;

    if (startAnimation) {
      let speed;
      if (targetNumber < 100) {
        speed = 10; // for numbers less than 100, the interval between increments is 10 ms
      } else if (targetNumber < 500) {
        speed = 6; // for numbers from 100 to 499, the interval is 6 ms
      } else {
        speed = 1; // for numbers 500 and above, the interval is 3 ms
      }

      const maxCount = targetNumber;
      let currentCount = number;

      const incrementNumber = () => {
        if (currentCount < maxCount) {
          currentCount += 1;
          setNumber(currentCount);
        } else {
          clearInterval(interval);
        }
      };

      
      interval = setInterval(incrementNumber, speed);
    }

    return () => clearInterval(interval);
  }, [startAnimation, number, targetNumber]); 
  return <span ref={ref}>{number}</span>;
}

export default NumberCount;