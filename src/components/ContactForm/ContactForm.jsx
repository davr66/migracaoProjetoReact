import './ContactForm.css'

export default function ContactForm(){
    return(
        <form action="/enviar">
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu primeiro nome" required/>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="(ex. exemplo@gmail.com)" required />
                </div>
                <div>
                    <label for="assunto">Assunto:</label>
                    <input type="text" name="assunto" id="assunto" placeholder="Digite o assunto" required />
                </div>
                <div>
                    <label for="mensagem">Mensagem:</label>
                    <textarea name="mensagem" id="mensagem" cols="30" rows="10" spellcheck="true" required></textarea>
                </div>
                <input type="submit" value="Enviar" class="button"/>
                <input type="reset" value="Limpar" class="button"/>
        </form>
    )
}