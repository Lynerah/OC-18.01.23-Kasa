import { NavLink, Link } from 'react-router-dom'
import '../../style/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import "../../style/header.css";
import Banner from '../Banner/index';

function Header() {
    return (

<>

      <Navbar className='nav_container'>
        <Container>
        <Link to="/">
            <img className="nav_logo" src={logo} alt="Logo" />
        </Link>          
        <Nav className="nav_list">
        <NavLink to="/" exact className="nav_list_item" activeClassName="active_nav_link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav_list_item" activeClassName="active_nav_link">
            About Kasa
          </NavLink>
            </Nav>
        </Container>
      </Navbar>
      <Banner></Banner>

    </>

    )
}

export default Header