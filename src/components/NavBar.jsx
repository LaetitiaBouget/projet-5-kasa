import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO.png'

function NavBar() {
    return <nav className="navbar">
        <img src={logo} alt="Logo KASA"></img>
        <ul className ="navbar__link">
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/about">A propos</Link>
            </li>
        </ul>
    </nav>
  }
  
  export default NavBar