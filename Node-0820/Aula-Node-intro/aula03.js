function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}
function soma(numero1, numero2) {
    return (numero1 + numero2)
}
console.log(calcular(2,2, soma))

