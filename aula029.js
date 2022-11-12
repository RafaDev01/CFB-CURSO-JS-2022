//operador this dentro de funções
//no js as funções podem ser tratadas como objs

function aluno(nome,nota){
  //this.nome é como se fosse uma variavel declarada para a função aluno
  this.nome = nome;
  this.nota = nota;

  this.dados_anonimo = function(){
    //setTimeou gera um atraso na execução
    setTimeout(function(){
      console.log(this.nome)
      console.log(this.nota)
    },2000)
  }

  this.dados_arrow = function(){
    //setTimeou gera um atraso na execução
    //a arrow function não usa o contexto da execução atual, ira usar o contexto do pai
    //prefira sempre a arrow function quando for utilizar funções anonimas
    setTimeout(()=>{
      console.log(this.nome)
      console.log(this.nota)
    },2000)
  }
}

const aluno1 = new aluno("Rafael",100)

aluno1.dados_anonimo()
aluno1.dados_arrow()
