import './Card.css'

export default function Card({obj}){
    return (
        <article className={obj.tipo == 'news' ? '':'profile'}>
            {obj.tipo == 'news' ? <h3>{obj.titulo}</h3>:''}
            <img src={obj.imagem}/>
            {obj.tipo != 'news' ? <h3>{obj.titulo}</h3>:''}
            <p>{obj.conteudo}</p>
            {
                obj.tipo == 'news' ? <a href={obj.link} target="_blank">Ler mais</a> : ''
            }
            
        </article>
    )
}
