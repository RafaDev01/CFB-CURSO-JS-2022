//addEventListener -> são acontecimentos que acontecem na pagina,

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
  el.addEventListener('click',(evt)=>{
    const elemento = evt.target
    elemento.classList.add("destaque")
    console.log(elemento.id + " foi clicado")
    console.log(elemento.innerHTML + " foi clicado")
  })
})
