const c1 = document.getElementById('c1')
const cursos = [...document.querySelectorAll('.c')]


// const controlEl = () => {
//     c1.addEventListener('click', (evt) => {
//         const el = evt.target
//         if (el.classList.contains('destaque')){
//             el.classList.remove('destaque')
//         } else {
//             el.classList.add('destaque')
//         }
//     })
// }

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const el = evt.target
        if (el.classList.contains('destaque')){
            el.classList.remove('destaque')
        } else {
            el.classList.add('destaque')
        }
    })
})


const msg = () => {
    alert("clicou")
}






