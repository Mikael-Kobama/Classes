const caixa = document.querySelector("#caixa");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c")];


const brother = 0;

function nextBrother() {
    
    cursos.forEach(curso => {
        const next = curso.nextElementSibling;
        if(next) {
            console.log(next);
        }
    })
}

btn_c1.addEventListener("click", nextBrother) 
console.log(btn_c1.nextElementSibling)
