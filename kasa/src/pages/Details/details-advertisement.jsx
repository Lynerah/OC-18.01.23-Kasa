import React from 'react';
import Carousel from '../../components/Carousel';
import Accordion from '../../components/Accordion';
import { useParams } from 'react-router-dom';
 import cardData from '../../data.json';
 import '../../style/tag.css';
  import '../../style/accordion-product.css';
  import '../../style/product-page.css';

  function renderRatingStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled"></span>);
      } else {
        stars.push(<span key={i} className="star"></span>);
      }
    }
    return stars;
  }
  
  
  function ProductDetail() {
    const { id } = useParams(); 
    const product = cardData.find((card) => card.id === id);
    const rating = product.rating;

    if (!product) {
      return <div>Produit non trouvé.</div>;
    }
  
    const { title, location, tags, pictures, description, equipments, host } = product;
  
    return (
      <div>
  
        <Carousel pictures={pictures} />

        <div className='product-info_container'>
          <div className='product-info'>
            <h2 className='product_title'>{title}</h2>
            <p className='product_location'>{location}</p>
          </div>
          <div className='host_container'>
            <div className='host_info'>

            <p className='host_name'>{host.name}</p>
            <img className='host_img' src= {host.picture} alt="" />
            </div>
            <div className="rating">
              {renderRatingStars(rating)}
            </div>
          </div>
        </div>

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
  