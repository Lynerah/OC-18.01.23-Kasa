import React from 'react';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import { useParams } from 'react-router-dom';
 import cardData from '../data.json';


function ProductDetail() {
    const { id } = useParams(); // Utilisez le hook useParams pour obtenir la valeur de l'ID du produit
  
    // Utilisez l'ID pour récupérer les détails du produit à partir de votre source de données (par exemple, `cardData`)
  
    return (
      <div>
        <h2>Détails du produit {id}</h2>
        {/* Affichez les détails du produit */}
      </div>
    );
  }
  
  export default ProductDetail;
  