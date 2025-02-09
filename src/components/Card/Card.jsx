import './Card.css'

export default function Card({obj}){
    return (
        <article>
            <h3>{obj.titulo}</h3>
            <img src={obj.imagem}/>
            <p>{obj.conteudo}</p>
            <a href={obj.link} target="_blank">Ler mais</a>
        </article>
    )
}
