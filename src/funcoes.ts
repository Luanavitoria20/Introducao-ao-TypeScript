

function soma (num1: number, num2: number):number{
    return num1+num2
}

//Exercício Prático 01

//const calculation = [6,7,9,10]
function calculaMedia(notas: number[]): number{
  const total: number = notas.reduce((acc:number, nota:number) => acc + nota, 0)
  return total / notas.length
}

console.log(calculaMedia([6,7,9,10])) // ou ([6,7,9,10]) ou [10,5,7].tofixed(2)

