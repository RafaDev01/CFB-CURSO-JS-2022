//função que retorna valor
//retonar o valor pra quem fez sua chamada
//a função so permite 1 retorno por execução, no caso podemos usar if para executar o retorno desejado

function canal(){
  let n1 = 11
  let n2 = 1
  let res = n1*n2
  if(res % 2== 0){
    return "par"
  }else{
    return "impar"
  }
}

let res = canal()
console.log(res)