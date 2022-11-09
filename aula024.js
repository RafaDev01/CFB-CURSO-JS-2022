//funções anonimas
//são funcoes que elas não possuem um nome associado ao seu conteudo
//são funções que são chamadas em tempo de execução, ela será criada somente no momento da execução



/*
//precisa associar essa funçao a alguma variavel
const f = function(v1,v2){
  return v1 + v2
}

let novo = f(55,20)
console.log(f(10,50))
*/




/*
const f=function(...valores){
  let res = 0
  for(v of valores){
    res += v
  }
  return res
}

console.log(f(10,20,30,30))
*/

//podemos utilizar construtures
//quando usamos construtor com new, o Function precisa ser com F
const f = new Function("v1","v2","v3", "return v1+v2+v3")//Função construtor anonima

console.log(f(100,5,10))