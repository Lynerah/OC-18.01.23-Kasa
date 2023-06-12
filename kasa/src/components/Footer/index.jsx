import '../../style/footer.css'
import logo from '../../assets/logo-footer.svg';
 
function Footer() {
    return (
        <footer>
            <img className="footer_logo" src={logo} alt="Logo" />
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer