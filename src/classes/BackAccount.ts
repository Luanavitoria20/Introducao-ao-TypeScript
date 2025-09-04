
class BackAccount {

    private balance: number

    constructor(initialBalance: number) {
        this.balance = initialBalance
    }
     //Definir métodos getters e Setters 

    public getBalance(): number{
        return this.balance
    } 
    // Deposito
    public deposit(amount: number){
       if(amount>0) this.balance += amount
    }

    //Saque
    public withdrawal(amount: number){
       if(amount>0) this.balance -= amount
    }

}

const contaBancaria1 = new BackAccount(100.00)

//Mostrar o saldo
console.log(contaBancaria1.getBalance())

// Depositar 100 reais ao saldo
contaBancaria1.deposit(100)

// Sacar 50
contaBancaria1.withdrawal(50)

// Mostrar o saldo
console.log(contaBancaria1.getBalance())