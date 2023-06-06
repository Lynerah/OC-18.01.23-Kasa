import { Link } from 'react-router-dom'
import '../../style/header.css';

 
function Header() {
    return (
        <nav>
            <a href="#"><img className='' src="./assets/LOGO.svg" alt="Logo" /></a>
            <Link to="/">Accueil</Link>
            <Link to="/about">About Kasa</Link>
        </nav>
    )
}

export default Header