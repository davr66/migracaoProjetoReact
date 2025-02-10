import './NewsSection.css'
import Card from '../../components/Card/Card'

function NewsSection(){
    const cardData = [
        {titulo: 'Especialista dá dicas para manter o coração saudável',
        imagem: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/10/30/1140344065-coracao.png",
        conteudo: 'As doenças do coração estão entre as mais incidentes no Brasil e no mundo, sendo um problema de saúde pública que se manifesta no cotidiano...',
        link:'https://www.terra.com.br/vida-e-estilo/saude/especialista-da-dicas-para-manter-o-coracao-saudavel,c6d7a16d806657eab0ea33fa3c3ac843j8fs1w8n.html',
        tipo:'news'},
        {titulo: 'Psicóloga dá dicas para manter a saúde mental durante o Enem 2024',
        imagem: 'https://www.opiniaoce.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-31-at-16.56.01-1536x1023.jpeg',
        conteudo: 'A psicóloga indica aos participantes do Enem conferir o local de prova com antecedência e manter uma alimentação saudável...',
        link:'https://www.opiniaoce.com.br/psicologa-da-dicas-para-manter-a-saude-mental-durante-o-enem-2024-confira/',
        tipo:'news'},
        {titulo: 'Tempo seco no Brasil: 5 dicas para amenizar os problemas de saúde com a piora da qualidade do ar',
        imagem: 'https://s2-oglobo.glbimg.com/G6_e0e5neY3rN0ZMLQKtY5msk7o=/0x0:1039x706/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/A/s/XLWQKsT6GiCp01ydQBwA/poluicao-sp.png',
        conteudo: 'A cidade de São Paulo registrou nesta terça-feira a pior qualidade de ar do mundo pelo segundo dia consecutivo...',
        link:'https://oglobo.globo.com/saude/noticia/2024/09/10/tempo-seco-no-brasil-5-dicas-para-amenizar-os-problemas-de-saude-com-a-piora-da-qualidade-do-ar.ghtml',
        tipo:'news'}
    ]

    return(
        <section id = 'noticias'>
            <h2>Notícias</h2>
            <div id='cards'>
                {
                    cardData.map((card,index) => (
                        <Card key={index} obj = {card}></Card>
                    ))
                }
            </div>
        </section>
    )
}

export default NewsSection;