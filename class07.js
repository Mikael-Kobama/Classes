// && -> and else
// || -> or outerHeight
// ! -> not não

let  n1, n2, n3, n4
 n1=10
 n2=5
 n3=15
 n4=2

//  console.log((n1>n2) && (n1>n3)) //false
//  console.log((n1>n2) || (n1>n3)) //true
//  console.log(!((n1>n2)||(n1>n3))) //false

 if((n1>n2)&&(n3>n4)){
    console.log("verdadeiro")
 }else{
    console.log("falso")
 }
 
 if((n1>n2)||(n3>n4)){
    console.log("verdadeiro")
 }else{
    console.log("falso")
 }

 if(!((n1>n2)||(n3>n4))){
    console.log("FALSO")
 }else{
    console.log("verdadeiro")
 }