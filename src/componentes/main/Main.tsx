import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'




type ProjetoType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")


    const projeto:ProjetoType[] = [
        {
            id:1,
            titulo:"conversas",
            sinopse:"oni e seu eu interior estão conversando",
            imagem:"/oni.jpeg"
        },
        {
            id:2,
            titulo:"springtrap",
            sinopse:"springtrap comemorando aniverssarios",
            imagem:"/homiruim.jpg"
        },
        {
            id:3,
            titulo:"jacare triste",
            sinopse:"ele esta triste com a vida adulta",
            imagem:"/jare.jpg"
        }


    ]
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
           <div className='Myname'>
            <h1>
                DESENHOS DA TABATA WENDY
            </h1>
          </div>
            <div className="pesquisa">
               
                
                    <p className='texto_digitado'>pesquisar projeto: {texto}</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                </div>
            </div>






           






            <main className="content-main">
                {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetoType)=>
                    <Projeto key={projeto.id}
                           titulo={projeto.titulo}
                           sinopse={projeto.sinopse}
                           imagem={projeto.imagem}
                    />
                    )
                }


               
            </main>
        </>
    )
}
