
class User{
    //Propriedades
    name: String ;
    age: Number ;

// Construtor
 constructor(name:string, age:number){
    this.name = name
    this.age = age
 }
    // Metodos 
    greet():string{
        return `Olá, sou a ${this.name}`
    }
}

const user1 = new User ("Luana", 20)
console.log(user1.name)
console.log(user1.age)
console.log(user1.greet())

