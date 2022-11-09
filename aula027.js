//funções geradoras -> tem o seu retorno adiado até o momento que a gente precisa desse retorno
//São o pilar da programçaõ assincrona em js
//pode ir retornando coisas ao longo da execução

//obrigatorio usar function*
function* contador(){
  let i=0
  while(true){
    yield i++
    if(i>10){
      break
    }
  }
}

const itc = contador()
for(let c of itc){
  console.log(c)
}

/*for(let i=0;i<10;i++){
  console.log(itc.next().value)
}*/


/*
function* perguntas(){
  const nome=yield 'Qual seu nome'
  const esporte=yield 'Qual seu esporte favorito'
  return 'Seu nome é '+nome+ ', seu esporte favorito é '+esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Rafael").value)
console.log(itp.next("futebol").value)
*/



/*
function* cores(){
  yield 'Vermelho'
  yield 'Verde'
  yield 'Azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/