function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor);
    }
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
    return `${texto}!!!!!`;
}

function tornarLento(texto) {
    return texto.split('').join(' ');
}

const resultado = composicao(gritar, enfatizar, tornarLento);
console.log(resultado('cuidado com o buraco'));