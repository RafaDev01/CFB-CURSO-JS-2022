let n1 = 13
let n2 = 14

//São operadores que operam no binario
//Operções bitwese
//& , | , ^

//^ -> Só retorna 1 aonde tiver 1 sem nenhuma equivalencia

//& -> aonde tiver equivalencia de bit 1 nos dois valores ele retorna 1

//| -> aonde tiver 1 sera retornando 1 independente de equivalencia

//<< , >>
//deslocar o bit para >> corta o valor pela metade
//deslocar o bit para << dobra o valor
let res = n1 ^ n2

console.log(res)