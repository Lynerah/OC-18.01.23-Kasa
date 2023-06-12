import Card from 'react-bootstrap/Card';
import '../../style/card.css'
import cardData from '../../data.json'

function CardItem() {
    return (
        <div className='card-list-box'>
          {cardData.map((card, index) => (
            <div key={index}>
              <div className='card-container'>
                <Card className="text-white card_item">
                  <Card.Img className='card_item_img' src={card.cover} alt={card.title} />
                  <Card.ImgOverlay className='overlay_container'
                  >
                    <Card.Text className='overlay_text'>{card.title}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </div>
          ))}
        </div>
      );
    }
export default CardItem;