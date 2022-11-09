//parametros rest em funções
//não precisa especificar a quantidade de parametros que queremos mandar para dentro da função


/*
//valores vira um array
function soma(...valores){
  let tamanho = valores.length
  let res = 0;
  for(let i=0;i<tamanho;i++){
    res+=valores[i]
  }
  return res 
}
console.log(soma(10,5,50,1000))
*/

//paremetros rest precisa utlizar -> ...
function soma(...valores){
  let res = 0
  for(let n of valores){
    res+=n
  }
  return res
}

console.log(soma(10,20,30,30))