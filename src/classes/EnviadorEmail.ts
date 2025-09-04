
interface EnviadorDeEmail {
    enviar(destino: string, mensagem: string): void
}

class ServicoDeEmail implements EnviadorDeEmail{
   enviar(destino: string, mensagem: string): void {
    console.log(`Email enviado para
        ${destino}: ${mensagem}`)
   }
}

class CadastroDeUsuario {

    private servicoDeEmail: EnviadorDeEmail;

    constructor(servicoDeEmail: EnviadorDeEmail) {
        this.servicoDeEmail = servicoDeEmail
    }

    cadastrar(nome: string, email: string){
        console.log(`Usário ${nome} cadastrado!`)
        this.servicoDeEmail.enviar(email, "Bem vindo(a)!")
    }
}

const emailService = new ServicoDeEmail();
const cadastro = new CadastroDeUsuario(emailService)
cadastro.cadastrar("luana", "luana@gmail.com")