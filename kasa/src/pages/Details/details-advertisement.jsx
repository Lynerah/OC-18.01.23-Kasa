import React from 'react';
import Carousel from '../../components/Carousel';
import Accordion from '../../components/Accordion';
import { useParams } from 'react-router-dom';
 import cardData from '../../data.json';
 import '../../style/tag.css';
  import '../../style/accordion-product.css';


function ProductDetail() {
    const { id } = useParams(); // Utilisez le hook useParams pour obtenir la valeur de l'ID du produit
  
    const product = cardData.find((card) => card.id === id);

    if (!product) {
      return <div>Produit non trouvé.</div>;
    }
  
    const { title,location, tags, pictures, description, equipments } = product;
  
    return (
      <div>
  
        <Carousel pictures={pictures} />
        <h2 className='product_title'>{title}</h2>
        <p className='product_location'>{location}</p>

        <div>
            <ul className='tag_list'>
            {tags.map((tag, index) => (
                <li className='tag_list-item' key={index}>{tag}</li>
            ))}
            </ul>
        </div>

        <div className='accordion_product_container'>
            <Accordion title="Description" content={description.description} />
            <Accordion title="Equipments" content={equipments.equipments} />
        </div>

      </div>
    );
  }
  
  export default ProductDetail;
  