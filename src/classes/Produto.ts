class Produto{
    name: string; //private,  public, readonly(apenas de leitura)
    preco: number; // protected 
    estoque: number; 
    
    // Construtor
 constructor(
      name:string, 
      preco:number, 
      estoque: number
    ){
       this.name = name
       this.preco = preco
       this.estoque = estoque
    }
    // Metodos 
    comprar(qtd:number):number{
        this.estoque =  this.estoque - qtd
        return this.estoque // estoque atualizado
    }
     repor(qtd:number):number{
        this.estoque =  this.estoque + qtd
        // this.estoque += qtd
        return this.estoque // estoque atualizado
    }
}

const  paes = new Produto("Pão",  1.00 , 10 )

console.log(
    `Comprando 2 paes . Estoque atual
     ${paes.repor(2)}` //8
)
console.log(
    `Repondo 6 paes . Estoque atual
     ${paes.repor(6)}` // 14
)
