// let f = function(...valores){
//     let res =0
//     for(v of valores){
//         res+=v
//     }
//     return res
// }

const f= new Function("v1", "v2","v3", "return v1+v2+v3") //função Contrustor

console.log(f(10,5,15))