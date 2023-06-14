import { NavLink, Link } from 'react-router-dom'
import '../../style/header.css';

import logo from '../../assets/logo.svg';
import "../../style/header.css";


function Header() {
    return (
      <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img className="nav_logo" src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-nav_list">
        <li className="nav-item">
          <NavLink to="/" exact className="nav_item_link" activeClassName="active_nav_link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" exact className="nav_item_link" activeClassName="active_nav_link">About</NavLink>
        </li>
      </ul>
    </nav>


    )
}

export default Header