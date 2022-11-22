//stopPropagation -> para a propagação do evento

const caixa1 = document.getElementById("caixa01")
const btn_c1 = document.getElementById("c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt)=>{
  console.log("clicou")
})

//o stop parou a propagação do evento na div cujo id é c1, todas as outras divs irão disparar o evento acima
btn_c1.addEventListener("click", (evt)=>{
  evt.stopPropagation()
})

cursos.map((evt)=>{
    evt.addEventListener("click", (evt)=>{
    evt.stopPropagation()
  })
})


