import '../../style/card.css'
import cardData from '../../data.json'
import { Link } from 'react-router-dom';


function CardItem() {
    return (
        <div className='card-list-box'>
          {/* Parcourir les données de la carte et générer des éléments de carte correspondants */}
          {cardData.map((card, index) => (
            <div key={index}>
              <div className='card-container'>
              <Link to={`/product/${card.id}`}>
                <div className="card-image card_item_img" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${card.cover})` }}>
                  <div className="card-overlay"></div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
              </Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
export default CardItem;