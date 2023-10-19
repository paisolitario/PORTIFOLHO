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
            titulo:"GATOS",
            sinopse:"eu gosto muito de gatos, eles me ajudaram em momentos sombrios",
            imagem:"/gatos.jpg"
        },
        {
            id:2,
            titulo:"VIDEO GAME",
            sinopse:"gosto de jogar com meu irmão, quando jogo esqueço dos problemas",
            imagem:"/game.jpg"
        },
        {
            id:3,
            titulo:"MUSICAS",
            sinopse:"escutar musica me acalma, meu cantor favorito é o lund",
            imagem:"/music.jpg"
        },
        {
            id:4,
            titulo:"ANIMES",
            sinopse:"gosto de ver animes variados, meu favorito é HxH",
            imagem:"/assistir.jpg"
        },
        {
            id:5,
            titulo:"DESENHAR",
            sinopse:"desenhar é muito legal, eu gosto",
            imagem:"/desenhar.jpg"
        }, 
        {
            id:6,
            titulo:"LER MANGÁ",
            sinopse:"ler manga é legal, te inspira a desenhar bem",
            imagem:"/manga.jpg"
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
                TABATA WENDY MENEZES MARQUES
            </h1>
          </div>
            <div className="pesquisa">
               
                
                    <p className='texto_digitado'>pesquisar: {texto}</p>
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
