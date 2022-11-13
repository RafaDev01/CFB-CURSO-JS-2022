//getElementsByClassName -> permite obter os elementos do DOM que utiliza uma classe especifica
//retorna um conjunto de elementos

//utilizar spread "..." para transformar a coleção em array quando quiser utilizar methods relacionados 
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[6]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC1.map((e)=>{
  e.classList.add("destaque")
})