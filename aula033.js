//querySelector -> retona o primeiro elemento que ele encontrar do que foi especificado

//querySelectorAll -> retorna todos elementos do que foi especificado, retorna um nodeList -> semelhante ao HTMLcolection

//não são métodos especificos pra um tipo de index/apontador -> ele é gernerico consegue retornar o elemento que eu especificar para ele

const divTodos = [...document.getElementsByTagName("div")]
const cursoTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

//utilizar spread "..." para transformar o retorno em um array
//abaixo retonará todas as divs que possuem o parametro class
//const query_divTodas = [...document.querySelectorAll("div[class]")]

//abaixo retornará div que tem elemento p dentro dela
const query_divTodas = [...document.querySelectorAll("div > p")]
const query_cursoTodos = [...document.querySelectorAll(".curso")]
const query_cursosC1 = [...document.querySelectorAll(".c1,p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
const query_cursoEspecial = document.querySelector("#c1")

console.log(query_divTodas)
console.log(query_cursosC1)
/*
console.log(query_cursoTodos)
console.log(query_cursosC2)
console.log(query_cursoEspecial)
*/

/*
console.log(divTodos)
console.log(cursoTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)
*/

/*
cursosC1.map((e)=>{
  e.classList.add("destaque")
})
*/