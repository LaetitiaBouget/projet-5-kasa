import { Link } from "react-router-dom"
import imageError from "../assets/images/404.png"


function NotFound() {
    return <div className="not-found">
      <img src= {imageError} alt="Erreur 404" className="image__error"/>
      <p className="not-found__content"> Oups! La page que vous demandez n'existe pas. </p>
      <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
    </div>
  }
  
  export default NotFound
