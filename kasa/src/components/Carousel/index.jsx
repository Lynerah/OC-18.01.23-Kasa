import React from 'react';

function Carousel({ images }) {
  return (
    <div className="carousel">
      {/* Affichez les images du carousel */}
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
}

export default Carousel;
