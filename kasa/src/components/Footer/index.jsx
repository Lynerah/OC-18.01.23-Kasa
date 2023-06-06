import { Link } from 'react-router-dom'
 
function Footer() {
    return (
        <nav>
            <h3>My footer</h3>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </nav>
    )
}

export default Footer