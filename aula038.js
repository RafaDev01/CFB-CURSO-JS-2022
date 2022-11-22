//referenciando os elementos do DOM

const caixa1 = document.querySelector("#caixa1")
const btc_c = [...document.querySelectorAll(".curso")]

/*console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)*/
console.log(btc_c[0].getRootNode())
console.log(btc_c[0].ownerDocument)