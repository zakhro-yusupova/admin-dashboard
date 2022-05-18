import "./requests.css";

function Requests ({text, num, border}){
  return(
    <li className={`requests ${border}`}>
      <h3 className="requests__text">{text}</h3>
      <span className="requests__num"> {num} </span>
    </li>
  )
  }

  export default Requests;