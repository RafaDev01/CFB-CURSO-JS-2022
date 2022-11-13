//getElementById -> obtem elementos da pagina via ID
//retorna somente 1 elemento

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]

//sempre de preferencia ao map pois é mais simples e mais moderno
arrayElementos.map((e,i)=>{
  //e.innerHTML = "CFB Cursos"
  console.log(e,i)
})

for(d of arrayElementos){
  if(d.innerHTML === "CSS" || d.id === "c6"){
    continue
  }
  d.innerHTML = "CFB cursos"
}

console.log(arrayElementos)

/*
console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)
dc1.innerHTML = "CFB Cursos"
dc2.style.backgroundColor = "blue"
*/
