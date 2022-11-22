//Criando novos elementos e adicionando DOM em js

const caixa1 = document.getElementById("caixa1")
const btc = [...document.querySelectorAll(".curso")]
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","React Native"]

cursos.map((el,index)=>{
  const novoElemento =  document.createElement("div")
  novoElemento.setAttribute("id","c"+(index+1))
  novoElemento.setAttribute("class","curso c1")
  novoElemento.innerHTML = el
  
  caixa1.appendChild(novoElemento) 
})
