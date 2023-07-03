import { useState } from 'react';
import React from 'react';
import Data from '../../data.json';
import '../../style/carousel.css';

function Carousel({ pictures}) {
  // Utilisation du hook useState pour gérer l'état du slide courant
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour changer le slide en fonction de l'index donné
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fonction pour passer au slide précédent
  const goToPrevSlide = () => {
    const lastIndex = pictures.length - 1;
    const newIndex = currentSlide === 0 ? lastIndex : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  // Fonction pour passer au slide suivant
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
  );
}

export default Carousel;
