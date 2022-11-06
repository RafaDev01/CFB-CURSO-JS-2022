"use strict"

//var eleva a variavel até o topo de onde ela foi implementada, a varialvel estará acessível em qualquer bloco, qualquer escopo.

//let só é acessivel do escopo que foi criada para frente, e não para traz

function teste(){
  let nome = "Bruno"
  if(true){
    //aceitavel acima
    console.log("dentro do if do teste "+ nome)
  }
  //aceitavel mesmo local
  console.log("Dentro de teste "+ nome)
}

teste()

//erro, está em um escopo anterior da declarada
//console.log("fora de teste" + nome)

//const o valor não pode ser modificado ao longo do programa
const curso = "JavaScript"
//curso = "html"    -     //erro

console.log(curso)