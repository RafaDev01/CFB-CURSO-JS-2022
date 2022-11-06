//Spread ... -> Quebra um conjutno de elementos e devolve elemento por elemento
//permite copiar um array

const jogador1 = {nome: "bruno",energia:100,vidas:3,magia:150}
const jogador2 = {nome: "bruce",energia:100,vidas:5,velocidade:80}

//ele receberá as propriedades comuns de cada jogador e também as incomuns
//O que se repetir será mantido o ultimo declarado np spread
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)

/*
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]

console.log("n1: "+ n1)
console.log("n2: "+ n2)
console.log("n3: "+ n3)
console.log(typeof(n3))
*/