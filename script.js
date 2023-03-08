let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

let som = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let multi = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let restDiv = Number(numberOne) % Number(numberTwo)

alert(`A soma dos dois números é: ${som}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div.toFixed(2)}`)
alert(`o resto da divisão dos dois números é: ${restDiv}`)

if(som % 2 == 0){
    alert("A soma dos números é par")
}else{
    alert("A soma dos números é impar")
}

if(numberOne == numberTwo){
    alert("Os dois números inseridos são iguais")
}else{
    alert("Os dois números inseridos são diferentes")
}