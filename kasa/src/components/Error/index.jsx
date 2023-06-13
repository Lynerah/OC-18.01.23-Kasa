import { Link } from "react-router-dom";
import '../../style/error.css'

function Error() {
    return (
        <div className="error-page_container">
            <h2 className="error-page_title">404</h2>
            <p className="error-page_text">
            Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error-page_link">Retourner sur la page d’accueil</Link>
        </div>
    )
}
 
export default Error