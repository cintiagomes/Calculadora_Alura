var display = document.getElementById('display')

var operacaoUsada = prompt("Digite 1 para multiplicação, 2 para divisão, 3 para soma é 4 para subtração:")

var primeiroValor = parseInt(prompt('Digite o primeiro valor: '))

var segundoValor = parseInt(prompt('Digite o segundo valor: '))


if (operacaoUsada == 1){
    var resultado = primeiroValor * segundoValor
    resultadoFinal = primeiroValor + ' x ' + segundoValor + ' = ' + resultado.toFixed(2)
} else if (operacaoUsada == 2){
    resultado = primeiroValor / segundoValor
    resultadoFinal = primeiroValor + ' / ' + segundoValor + ' = ' + resultado.toFixed(2)
} else if (operacaoUsada == 3){
    resultado = primeiroValor + segundoValor
    resultadoFinal = primeiroValor + ' + ' + segundoValor + ' = ' + resultado.toFixed(2)
} else if (operacaoUsada == 4){
    resultado = primeiroValor - segundoValor
    resultadoFinal = primeiroValor + ' - ' + segundoValor + ' = ' + resultado.toFixed(2)
}else {
    resultadoFinal = ("Opção inválida!")
}


display.textContent = resultadoFinal
