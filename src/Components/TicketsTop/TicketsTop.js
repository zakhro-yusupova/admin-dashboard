import { Sort, Filter } from "../../Assets/img/Icons/Icons";
import "./tickets-top.css";

const TicketsTop = () => {

  return (
    <div className="tickets-top">
    <h3 className="tickets-top__title">All tickets</h3>
    <div className="btns-info">
    <div className="tickets-top__btns"> <Sort/> <button className="tickets-top__sort">Sort</button> </div>
    <div className="tickets-top__btns"> <Filter/> <button className="tickets-top__filter">Filter</button> </div>
    </div>
    </div>
    )
  }

  export default TicketsTop;
