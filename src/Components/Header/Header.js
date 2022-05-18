import { Search } from "../../Assets/img/Icons/Icons";
import { Notification } from "../../Assets/img/Icons/Icons";

import "./header.css";

function Header ({title}) {
  return (
    <header className="header">
    <div className="header__inner">
    <h2 className="header__title">{title}</h2>
    <div className="header__right">
    <button className="btn"> <Search/> </button>
    <button className="btn"> <Notification/> </button>
    <p className="avatar">Jones Ferdinand</p>
    </div>
    </div>
    </header>
    )
  }

  export default Header;
