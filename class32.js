const cursoTodos = [...document.getElementsByClassName('c')]
const cursoTodosC1 = [...document.getElementsByClassName('c1')]
const cursoTodosC2 = [...document.getElementsByClassName('c2')]
const elementoespecial = document.getElementsByClassName('c')[0]

console.log(cursoTodos)
console.log(cursoTodosC1)
console.log(cursoTodosC2)
console.log(elementoespecial)

cursoTodosC1.map((e, i) => {
    e.classList.add("destaque")

})