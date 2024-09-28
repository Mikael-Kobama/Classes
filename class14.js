let colocacao = 1

switch (colocacao) {
    case 1:
        console.log("Primeiro Lugar")
        break
    case 2:
        console.log("Segundo Lugar")
        break
    case 3:
        console.log("Terceiro Lugar")
        break
    case 4: case 5: case 6:
        console.log("Premio de participação")
        break
    default:
        console.log("Não subiu ao podio")
        break
}