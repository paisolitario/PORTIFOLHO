import './Header.css'
import fotoeo from "./eu.jpeg"
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <header>
      
      <div className='mama'>

          <div className='inisio'>
            <ul>
              <li ><Link className='letra' to ="/">INICIO</Link></li>
            </ul>
          </div>
      
        <div className="retangulo">
            <h3 className='inicio'>MEU PORTFOLIO</h3>
            <div className='eu1'> 
              <img src={fotoeo} className='eu'/>
              
              
            </div>
           
           
            
          
        </div>
      </div>
    </header>
  )
}
