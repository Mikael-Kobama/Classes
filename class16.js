let num=[10, 20, 30 ,40, 50]
const objs=document.getElementById("div")


for(o of objs) {
    console.log(o)
}
for(o in objs){
    console.log(o.innerHTML="Cursos")
}

// for(n of num) {
//     console.log(n)
// }
// for(n in num){
//     console.log(num(n))
// }

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }