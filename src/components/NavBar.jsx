import { Link } from 'react-router-dom'

function NavBar() {
    return <nav>
        <img src="src\assets\images\LOGO.png" alt="Logo KASA"></img>
        <ul>
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