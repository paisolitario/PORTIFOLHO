import "./Contato.css"
import {useState} from 'react';
function Contato() {
    function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setNome(e.target.value)
    }
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    function mudaMensagem(e:React.ChangeEvent<HTMLTextAreaElement>){
        console.log(e.target.value)
        setMensagem(e.target.value)
    }
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [mensagem,setMensagem] = useState("")

    return (
      <main className="contato">
            <div className="contatos-container">
                <h2>ENTRE EM CONTATO</h2>
                <p>Envie-nos uma mensagem:</p>
            <form className="contatos-form">
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
            </div>
            <div className="form-group">
                <input className="popo" type="text" id="nome" name="nome" placeholder="Seu nome" onChange={mudaNome} />
                <p>skidabdu{nome}</p>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
            </div>
            <div>
                <input className="popo" type="email" id="email" name="email" placeholder="Seu email" onChange={mudaEmail}  />
                <p>skidabdu{email}</p>
            </div>
            <div className="form-group">
                <label className="popo" htmlFor="mensagem">Mensagem:</label>
                
            </div>
            <div>
                <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" onChange={mudaMensagem} ></textarea>
                <p>skidabdu{mensagem}</p>
            </div>
                <button className= "envio" type="submit">Enviar</button>
                
          </form>
            </div>
      </main>
    );
  }
  export default Contato
