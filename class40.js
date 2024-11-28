const caixa = document.querySelector("#caixa");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c")];
const c1_2 = document.querySelector("#c1_2");
const cursosArray = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySQL",
  "ReactNative",
];
const caixa2 = document.querySelector("#caixa2");

cursosArray.map((elemento, index) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + index);
  novoElemento.classList.add("c", "c1");
  novoElemento.innerHTML = elemento;
  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "./lixeira.png");
  btn_lixeira.setAttribute("class", "btn_lixeira");
  novoElemento.appendChild(btn_lixeira);

  btn_lixeira.addEventListener("click", (evt) => {
    const removeDiv = evt.target.closest("div")
    if (removeDiv) {
        caixa.removeChild(removeDiv);
      }
  })

  caixa.appendChild(novoElemento);
});


// novoElemento.addEventListener("click", (evt) => {
//   console.log(evt.target);
//   caixa.removeChild(evt.target);
// });
