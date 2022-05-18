import React from "react";
import Bottom from "../../Components/Bottom/Bottom";
import Header from "../../Components/Header/Header";
import Cardlist from "../../Components/List/List";
import Trends from "../../Components/Trends/Trends";

import "./overview.css";

const Overview = () => {
  return (
    <div className="content">
    <Header title="Overview"/>
    <Cardlist/>
    <Trends/>
    <Bottom/>
    </div>
  )
}

export default Overview;