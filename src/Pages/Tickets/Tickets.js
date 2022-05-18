import React from "react";
import Header from "../../Components/Header/Header";
import TicketsMain from "../../Components/TicketsMain";
import TicketsTop from "../../Components/TicketsTop/TicketsTop";

import "./tickets.css";

const Tickets = () => {
  return (
    <div className="wrapper">
    <Header title="Tickets"/>

    <div className="content">
    <TicketsTop/>
    <TicketsMain/>
    </div>
    </div>

    )
  }

  export default Tickets;