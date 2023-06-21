import { useState } from 'react';
import React from 'react';
import Data from '../../data.json';
import '../../style/carousel.css';

function Carousel({ pictures}) {
    const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    const lastIndex = pictures.length - 1;
    const newIndex = currentSlide === 0 ? lastIndex : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNextSlide = () => {
    const lastIndex = pictures.length - 1;
    const newIndex = currentSlide === lastIndex ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
<div className="carousel">
      
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      
      <button className='carousel_btn-prev' onClick={goToPrevSlide}></button>
      <button className='carousel_btn-next' onClick={goToNextSlide}></button>

      <div className="bullet-points">
        {pictures.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>

    // <div className="carousel">
    //   {/* Affichez les images du carousel */}
    //   {pictures.map((picture, index) => (
    //     <img key={index} src={picture} alt={`Slide ${index + 1}`} />
    //   ))}
    // </div>
  );
}

export default Carousel;
