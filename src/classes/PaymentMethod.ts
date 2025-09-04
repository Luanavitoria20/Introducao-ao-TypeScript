
abstract class PaymentMethod {
    abstract processPayment(amount: number): string;
}

class CreditCard extends PaymentMethod {
    processPayment(amount: number): string{
        return  `Pagamento de R$${amount} via Cartão de Crédito`
    } 
}

class Pix extends PaymentMethod{
    processPayment(amount: number): string {
        return  `Pagamento de R$${amount} via Pix!`
    }
}

const creditpayment = new CreditCard()
const pixPayment = new Pix()
console.log(creditpayment.processPayment(600.00))
console.log(pixPayment.processPayment(150.00))