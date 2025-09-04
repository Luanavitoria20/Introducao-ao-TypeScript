
interface Usuario{
    id: number
    nome: string
    email: string
    idade?:number //se colocar o ? é opcional
}

function  criarUsuario(usuario: Usuario){
    console.log(`Usuario ${usuario.nome} criado!`)
}

criarUsuario ({
    id:1, 
    email:"luana@gmail.com",
    nome:"luana",
    idade: 20
})


interface Produto{
    id: number
    nome: string
    preco: number
    //emEstoque?: boolean
}

function exibirProduto(produto:Produto){
    console.log(`Produto 
    id:${produto.id} 
    nome:${produto.nome}
    preco:${produto.preco}
    `)
}

/*exibirProduto({
    id:1,
    nome: "kit de maquiagem",
    preco: 200
})
*/