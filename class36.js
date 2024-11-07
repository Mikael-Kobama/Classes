const caixa = document.querySelector("#caixa");
const btn_c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".c")];

caixa.addEventListener("click", (evt) => {
  console.log(evt.target);
});

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    evt.stopImmediatePropagation();
  });
});
