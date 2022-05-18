import "./response.css";

function Response ({text, num}){
return(
  <li className="response">
    <h3 className="response__text">{text}</h3>
    <span className="response__num"> {num} </span>
  </li>
)
}

export default Response;