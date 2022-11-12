//map -> percorre arrays
//utilizamos map quando precisamos trabalhar elemento por elemento de uma coleção, diferentes dos loops o map vai iterar toda coleção, não tem opção de parar no meio

/*
let el = document.getElementsByTagName("div");
el = [...el]
console.log(el)
el.map((e,i)=>{
  e.innerHTML = "CFB cursos"
})
*/

/*
//outra forma de fazer oq está acima
const el = document.getElementsByTagName("div");
const val = Array.prototype.map.call(el,({innerHTML})=>
innerHTML)
*/

//recebe um valor e retona o valor convertido
const converterInt=(el)=>parseInt(el)
const dobrar=(e)=>e*2

let num = ['1','2','3','4','5'].map(dobrar)

console.log(num)





/*
const cursos = ["HTML","CSS","JavaScript","PHP","React"]

//podemos passar parametros
//1ª é o elemnto da coleção a cada iteração
//2ª posição do elemento dentro da coleção
//3ª retorna todo o array

let c = cursos.map((el,i)=>{
  //console.log("Curso: "+el+ " Posição do curso no array: "+i)
  return el
})

console.log(c)
*/