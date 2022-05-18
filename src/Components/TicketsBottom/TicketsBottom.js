import "./tickets-bottom.css";
import { Dropdown } from "../../Assets/img/Icons/Icons";

const TicketsBottom = ({icon}) => {
  return (
    <div className="tickets-bottom">
    <p className="text">Rows per page: 8</p>
    <Dropdown/>

    <img src={icon}/>
        </div>
  )
}

export default TicketsBottom;