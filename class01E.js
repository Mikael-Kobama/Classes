let valor  = 20
function incrementa (){
    valor= 20+30
}

incrementa()
console.log(valor)


function mostraNome(nomeDaPessoa){
    console.log(nomeDaPessoa)
}

mostraNome("rodolfo")

function soma(numero1, numero2) {
    const somaDosNumeros = numero1 + numero2
    return somaDosNumeros
}

const somaDosNum = soma(5, 10);
const somaDosNum2 = soma(45, 23);
console.log(somaDosNum)
console.log(somaDosNum2)

const multi = (valor1, valor2) => {
    const multiplicacao = valor1 * valor2;
    return multiplicacao
}

const multiplicacao = multi(2, 5);
console.log(multiplicacao)