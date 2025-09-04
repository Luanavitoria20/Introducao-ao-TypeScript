
// Classe CaixaEletronico
class CaixaEletronico {
  // Atributo saldo é privado
  private saldo: number

  // Construtor define o saldo inicial (pode começar com 0 se quiser)
  constructor(saldoInicial: number) {
    this.saldo = saldoInicial
  }

  // Método para consultar o saldo
  public getSaldo(): number {
    return this.saldo
  }

  // Método para depositar um valor
  public depositar(valor: number): void {
    if (valor <= 0) {
      console.log("Erro: o valor do depósito deve ser maior que zero.")
    } else {
      this.saldo += valor
      console.log(`Depósito de R$${valor} realizado com sucesso.`)
    }
  }

  // Método para sacar um valor
  public sacar(valor: number): void {
    if (valor <= 0) {
      console.log("Erro: o valor do saque deve ser maior que zero.")
    } else if (valor > this.saldo) {
      console.log("Erro: saldo insuficiente para saque.")
    } else {
      this.saldo -= valor
      console.log(`Saque de R$${valor} realizado com sucesso.`)
    }
  }
}

// Testando a classe com os métodos
const caixa = new CaixaEletronico(100)

console.log("Saldo atual:", caixa.getSaldo()) // 100

caixa.depositar(50)    // Depósito válido
caixa.depositar(-10)   // Depósito inválido

caixa.sacar(30)        // Saque válido
caixa.sacar(200)       // Saque inválido (maior que o saldo)
caixa.sacar(-5)        // Saque inválido (negativo)

console.log("Saldo final:", caixa.getSaldo()) // Exibe o saldo atualizado
