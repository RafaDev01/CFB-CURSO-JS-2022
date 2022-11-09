//funções parametrizadas
//precisa entrar com parametros dentro da nossa função

const VALOR_PADRAO = 0

let valor = 0

function add(v){
  return valor + v
}
valor = add(10)
console.log(valor)
valor = add(50)
console.log(valor)

function soma(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    let res = n1 + n2
    return res
}

let resultado_Soma = soma(66)
console.log(resultado_Soma)