// import React, { useState } from 'react';
import arrowUpIcon from '../../assets/arrow-up.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import '../../style/accordion.css'

// function Accordion() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion">
//       <div className="accordion-item" style={{ width: '80%' }}>
//         <div className="accordion-container">

//           <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
//             <h3>Titre de l'Accordion</h3>
//           <button className="accordion-btn">
//             {isOpen ? '-' : '+'}
//           </button>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="accordion-body">
//             <p>Contenu de l'Accordion</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Accordion;
import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  console.log('Valeur actuelle de isOpen :', isOpen);
  return (
    <div className="accordion accordion-product">
      <div className="accordion-item accordion-container accordion-product-item">
        <div className="accordion-content">
          <h3 className="accordion-title">
          {title}
           
          </h3>
          <button className="accordion-btn" onClick={toggleAccordion}>
          {isOpen ? (
              <img src={arrowUpIcon} alt="Arrow Up" className="accordion-icon" />
            ) : (
              <img src={arrowDownIcon} alt="Arrow Down" className="accordion-icon" />
            )}
          </button>
          
        </div>
        {isOpen && (
          <div className="accordion-body">
            <p>Contenu de l'Accordion</p>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default Accordion;
