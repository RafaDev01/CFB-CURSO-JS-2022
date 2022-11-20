//addEventListener -> são acontecimentos que acontecem na pagina,

const c1 = document.getElementById("c1")

const msg = () =>{
  alert("clicoaaaau")
}


/*
//addEventListener recebe o tipo de evento e o evento que será executado
c1.addEventListener("click",msg)
*/

//podemos usar uma função anonima
//ao executar o evento de um elemento eu posso capturar o evento que foi ocorrido
//no evento eu posso saber quem disparou esse evento
c1.addEventListener("click",(evt)=>{
  const elemento = evt.target
  elemento.classList.add("destaque")
})