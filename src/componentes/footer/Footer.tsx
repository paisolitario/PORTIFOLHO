import './Footer.css'
function Footer(){
    return(
        <footer>
             <div className="footer-section">
    <h2>Links Importantes</h2>
    <ul>
      <li><a href="#">Suporte</a></li>
      <li><a href="#">Sobre Nós</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
 
  <div className="footer-section">
    <h2>Contato</h2>
      <ul>
        <li><a>Email: tabata.marques@estudante.ifms.edu.br</a></li>
        <li><a>Telefone: (67)984632707</a></li>
     </ul>
  </div>
 
  <div className="footer-section">
    <h2>Redes Sociais</h2>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </div>

        </footer>
    )
}
export default Footer