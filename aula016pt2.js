const objs = document.getElementsByTagName("div")

let num = [10,20,30,40,50]

//retorna os elementos que temos dentro da div
for(o of objs){
  console.log(o.innerHTML = "Curso novo texto")
}

//retorna a posicao dos elementos se nao passar objs[o]
for(o in objs){
  console.log(objs[o].innerHTML)
}