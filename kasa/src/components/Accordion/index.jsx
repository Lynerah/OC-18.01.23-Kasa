import React, { useState } from 'react';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import '../../style/accordion.css'

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-item" style={{ width: '80%' }}>
        <div className="accordion-container">

          <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
            <h3>Titre de l'Accordion</h3>
          <button className="accordion-btn">
            {isOpen ? '-' : '+'}
          </button>
          </div>
        </div>
        {isOpen && (
          <div className="accordion-body">
            <p>Contenu de l'Accordion</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
