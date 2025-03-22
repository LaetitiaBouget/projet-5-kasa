import { Link } from "react-router-dom"


function NotFound() {
    return <div className="not-found">
      <img src="src\assets\images\404.png" alt="Erreur 404"/>
      <p className="not-found__content"> Oups! La page que vous demandez n'existe pas. </p>
      <Link to="/" className="link__not-found">Retourner sur la page d'accueil</Link>
    </div>
  }
  
  export default NotFound
