import { Link } from 'react-router-dom'
import '../../style/header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 
function Header() {
    return (
        // <nav>
        //     <a href="#"><img className='' src="./assets/LOGO.svg" alt="Logo" /></a>
        //     <Link to="/">Accueil</Link>
        //     <Link to="/about">About Kasa</Link>
        // </nav>
<>

      <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand to="/"><img className='' src="./assets/LOGO.svg" alt="Logo" /></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link><Link to="/">Accueil</Link></Nav.Link>
            <Nav.Link><Link to="/about">About Kasa</Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>

    )
}

export default Header