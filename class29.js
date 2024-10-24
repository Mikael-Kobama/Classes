function aluno(nome, nota) {
    this.nome=nome
    this.nota=nota

    this.dadosAnonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }
    this.dadosArrow=function(){
        setTimeout(() =>{
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
    
    // console.log(nome)
    // console.log(nota)
}
const aluno1=new aluno("Carlos", 10)
aluno1.dadosAnonimo()
aluno1.dadosArrow()