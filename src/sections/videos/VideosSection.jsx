import './VideosSection.css'

export default function VideosSection(){
    return(
        <section id="videos">
            <h2>Dica do dia:</h2>
            <div id="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9q7WaQqtWK4?si=HdkAo7pEBkpURrLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Segundo a OMS, ser saudável é um conjunto completo de bem-estar físico, mental e social.
                 Drauzio traz recomendações para a manutenção da saúde.            </p>
            </div>
        </section>
    )
}