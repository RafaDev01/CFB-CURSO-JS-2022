//for in for of
let num = [10,20,30,40,50]

for(let i=0;i<num.length;i++){
  console.log(num[i])
}

console.log("==========================\n")

//for in vai no index 
//se quiseer pegar as posições usar o for in
for(n in num){
  console.log(num[n])
}

console.log("==========================\n")

//for of vai dentro do elemento da coleção que ele está iterando
//se quiser pegar os elementos usar o for of
for(n of num){
  console.log(n)
}