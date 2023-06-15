import React from 'react';
import Accordion from './Accordion';

function AccordionList() {
  const accordionsData = [
    {
      title: 'Accordion 1',
      content: 'Contenu de l\'Accordion 1'
    },
    {
      title: 'Accordion 2',
      content: 'Contenu de l\'Accordion 2'
    },
    {
      title: 'Accordion 3',
      content: 'Contenu de l\'Accordion 3'
    },
    {
      title: 'Accordion 4',
      content: 'Contenu de l\'Accordion 4'
    }
  ];

  return (
    <div>
      <h2>Liste des Accordions</h2>
      <div className="accordion-list">
        {accordionsData.map((accordion, index) => (
          <Accordion key={index} title={accordion.title} content={accordion.content} />
        ))}
      </div>
    </div>
  );
}

export default AccordionList;
