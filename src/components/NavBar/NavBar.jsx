import './NavBar.css'

export default function NavBar(){
    return(
        <>
            <nav>
                <img id="logo" src="./src/assets/logo.png" alt="Logo da página"/>
                <ul>
                    <li><a href="#introducao">Inicio</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#videos">Dica do dia</a></li>
                    <li><a href="#especialistas">Especialistas</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div id="search">
                    <input type="text"/>
                    <button type="submit"><img src="./src/assets/search.png" alt="Pesquisar"/></button>    
                </div>
            </nav>
        </>
    )
}