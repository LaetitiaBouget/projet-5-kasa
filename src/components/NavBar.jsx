import { NavLink } from 'react-router-dom'
import logoDesktop from '../assets/images/LOGO.png'
import logoMobile from '../assets/images/LOGO-mobile.png'

function NavBar() {
    return <nav className="navbar">
        <img src={logoDesktop} alt="Logo KASA" className="logo logo__desktop" />
        <img src={logoMobile} alt="Logo KASA Mobile" className="logo logo__mobile" />
        <ul className ="navbar__link">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__active-link' : 'navbar__link'}>Accueil</NavLink >
            </li>
            <li>
                <NavLink  to="/about" className={({ isActive }) => isActive ? 'navbar__link navbar__active-link' : 'navbar__link'}>A propos</NavLink >
            </li>
        </ul>
    </nav>
  }
  
  export default NavBar