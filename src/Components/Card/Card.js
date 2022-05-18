import "./card.css";

function Card ({text, num}){
return(
  <li className="card">
    <h3 className="card__text">{text}</h3>
    <span className="card__num"> {num} </span>
  </li>
)
}

export default Card;