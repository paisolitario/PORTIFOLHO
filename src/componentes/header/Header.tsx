import './Header.css'
import fotoeo from "./eu.jpeg"
export default function Header() {
  return (
    <header>
      
      <div className='mama'>
      
        <div className="retangulo">
            <h3 className='inicio'>MEU PORTFOLHO</h3>
            <div className='eu1'> 
              <img src={fotoeo} className='eu'/>
            </div>
           
           
            
          
        </div>
      </div>
    </header>
  )
}
