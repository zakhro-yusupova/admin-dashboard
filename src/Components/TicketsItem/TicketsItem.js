import "./tickets-item.css";


const Item = ({avatar, text, status, name, day, time, hour, state, color, vector} ) => {
  return (
    <div className="item">
    <div className="details">
    <img className="img" src={avatar}/>

    <div className="details__info">
    <strong className="title">{text}</strong>
    <span className="time">{status}</span>
    </div>
    </div>

    <div className="customer">
    <h3 className="title">{name}</h3>
    <span className="time">{day}</span>
    </div>

    <div className="date">
    <strong className="title">{time}</strong>
    <span className="time">{hour}</span>
    </div>

    <div className="priority">
    <button className={`tickets__btn ${color} `}>{state}</button>
    <span className="icon"> <img className="vector" src={vector}/></span>
    </div>
    </div>
    )
  }

  export default Item;