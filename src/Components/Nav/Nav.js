import { NavLink } from 'react-router-dom';
import { Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription } from "../../Assets/img/Icons/Icons"

import "./nav.css"

function Nav  () {

  return (
    <nav className="nav-bar">
    <ul className="nav-bar__list">
    <NavLink className="nav-bar__item" to='/'> <Overview/> <p className="nav-bar__text">Overview</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/tickets'> <Tickets/> <p className="nav-bar__text">Tickets</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/ideas'> <Ideas/> <p className="nav-bar__text">Ideas</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/contacts'> <Contacts/> <p className="nav-bar__text">Contacts</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/agents'> <Agents/> <p className="nav-bar__text">Agents</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/articles'> <Articles/> <p className="nav-bar__text">Articles</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/settings'> <Settings/> <p className="nav-bar__text">Settings</p>  </NavLink>
    <NavLink className="nav-bar__item" to='/subscription'> <Subscription/> <p className="nav-bar__text">Subscription</p>  </NavLink>
    </ul>
    </nav>
    )
  }

  export default Nav;