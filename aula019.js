//break e continue
//break encerra o loop imediatamente
//continue pula a execução atual

let n=0
let max=1000
let pares=0

for(let i=n; i<max; i++){
  if(i%2!=0){
    continue
  }
  pares++
}

console.log("Quantidade de pares: "+ pares)

console.log("===============================")

for(let i=n; i<max; i++){
  if((i>10) && (i<900)){
    continue
  }
  console.log("CFB Cusos - " + i)
}

/*
while(n<max){
  console.log("CFB Cursos " + n)
  if(n > 10){
    break
  }
  n++
}
*/

console.log("Fim do programa")