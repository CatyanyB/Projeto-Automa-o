const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

//Saber se valor de peso1 é valor inteiro ou não
console.log(Number.isInteger(peso1))

//operação aritimética
const avaliacao1 = 9.871
const avaliacao2 = 6.871 
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
//controlando a quantidade de casas decimais que irá exibir (depois do ponto)
console.log(media.toFixed(2))

//converter valor numérico em string
console.log(media.toString())
//transformando em string valor binário (0 e 1)
console.log(media.toString(2))

console.log(typeof media)

//Existem várias funções para realizar com tipo number
