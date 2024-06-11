import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css'; // Import CSS file for styling

const ImageCarousel = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [images.length, autoplayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div class="carousel-container">
     <div class="carousel-heading">
      <h2>STUDIO ONE</h2>
     </div>
      <div className="carousel">
        <button className='btn-pn' onClick={prevSlide}>&#8249;</button>
        <img src={images[currentIndex]} alt="carousel-img" />
        <button className='btn-pn' onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
