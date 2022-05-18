import Card from "../Card/Card";

import "./list.css";

function Cardlist (){
  return(
    <ul className="card__list">
    <Card text="Unresolved" num="60" />
    <Card text="Overdue" num="16" />
    <Card text="Open" num="43" />
    <Card text="On hold" num="64" />
  </ul>
  )
}

export default Cardlist;