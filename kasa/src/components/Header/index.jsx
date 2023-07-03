import { NavLink, Link } from 'react-router-dom'
import '../../style/header.css';

import logo from '../../assets/logo.svg';


function Header() {
    return (
      <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img className="nav_logo" src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-nav_list">
        <li className="nav-item">
          <NavLink to="/" exact="true" className="nav_item_link" activeclassname="active_nav_link">Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" exact="true" className="nav_item_link" activeclassname="active_nav_link">A Propos</NavLink>
        </li>
      </ul>
    </nav>


    )
}

export default Header