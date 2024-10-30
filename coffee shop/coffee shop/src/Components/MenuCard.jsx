import './style/menuCard.css';

function MenuCard(props) {
      return (
            <div className="Card" >
                  <img src={props.img} />
                  <div className='card-text'>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                  </div>
                  <h4> ${props.price}</h4>
            </div>
      );
}

export default MenuCard;