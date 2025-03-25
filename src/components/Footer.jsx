import logoFooter from '../assets/images/LOGO-footer.png';

function Footer() {
    return <footer>
      <div class="footer__content">
        <img src={logoFooter} alt="Logo footer"/>
        <p class="footer__copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  }
  
  export default Footer