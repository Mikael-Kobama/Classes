let n =0;
let max=1000;
let pares=0;

for(let i=n;n<max;i++){
    console.log("Valor da variavel é " + i)
    if(i%2!==0){
        continue;
    }
    pares++;
}
console.log("numero de pares: " + pares);
console.log("Fim do Código");
// while(n<max){
//     console.log("CODIGO RODANDO EM - " + n)
//     if(n>10){
//         break
//     }
//     n++;
// }