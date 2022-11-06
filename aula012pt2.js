//retorna um html coletion que so recebe elementos html
const objs1 = document.getElementsByTagName("div")

//retorna um array que pode receber varios tipos de elementos
const objs2 = [...document.getElementsByTagName("div")]

//não é possivel fazer isso com o objs1
objs2.forEach(element => {
  element.innerHTML="Novo texto"
});

//O ... pegará os valores na sequencia e ira relacionar com cada parametro
console.log(objs1)
console.log(objs2)
