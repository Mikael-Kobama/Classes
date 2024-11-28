const caixa = document.querySelector("#caixa");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c")];
const c1_2 = document.querySelector("#c1_2");
const cursosArray = cursos.map((id) => id.textContent);
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector(".btn");

const moverCursos = () => {
  cursosArray.map((elemento, index) => {
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = elemento;
    novoElemento.setAttribute("id", "c" + index + 1);
    novoElemento.classList.add("c", "c1");
    caixa2.appendChild(novoElemento);
  });
};

btn.addEventListener("click", moverCursos);
