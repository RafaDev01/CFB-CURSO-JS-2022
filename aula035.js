const caixa1 = document.getElementById("caixa01")
const caixa2 = document.getElementById("caixa02")
const botao = document.getElementById("btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
  el.addEventListener("click",(evt)=>{
    const curso = evt.target
    //toggle -> se tiver o selecionado no elemento ele tira, se nao tiver ele adiciona
    curso.classList.toggle("selecionado")
  })
})

botao.addEventListener("click",()=>{
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
  cursosSelecionados.map((el)=>{
    //appendChild -> anexa o filho ao elemento caixa2
    caixa2.appendChild(el)
  })
})



