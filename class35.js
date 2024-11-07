

const caixa2 = document.getElementById("caixa2");
const cursos = [...document.querySelectorAll(".c")];
const btnCopiar = document.getElementById("btn_copiar");
const btnVoltar = document.getElementById("btn_devolver");
const caixa = document.getElementById("caixa");

cursos.forEach((el) => {
  el.addEventListener("click", (evt) => {
    const clickedElement = evt.target;
    clickedElement.classList.toggle("destaque");

    if (caixa2.contains(clickedElement)) {
      clickedElement.classList.toggle("destaque2");
    }
  });
});

const moverParaCaixa2 = () => {
    const destacados = document.querySelectorAll(".destaque");

    if(destacados.length === 0) {
        alert("Nenhuma div selecionada para mover");
        return;
    }

    destacados.forEach((el) => {
        caixa2.appendChild(el);
        el.classList.remove("destaque")
    });
};

btnCopiar.addEventListener("click", moverParaCaixa2);

const moverDeVolta = () => {
    const selecionados = document.querySelectorAll(".destaque2");

    selecionados.forEach((tg) => {
        caixa.appendChild(tg);
        tg.classList.remove("destaque2");
    });
};

btnVoltar.addEventListener("click", moverDeVolta);
