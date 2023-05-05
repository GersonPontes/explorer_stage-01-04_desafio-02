// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")


// 2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const sumNumOne = 5
const sumNumTwo = 10

const sum = sumNumOne + sumNumTwo

console.log(`${sumNumOne} somado ${sumNumTwo} = ${sum}`)


// 3 - Crie um script que declare uma variável e verifique se o seu valor é um número.
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let value1 = 3

console.log(`${value1} ${typeof value1 == "number" ? "É um número" : "Não é um número"}`)

value1 = "Gerson"
console.log(`${value1} ${typeof value1 == "number" ? "É um número" : "Não é um número"}`)


// 4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. 
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let value2 = "Gerson"
console.log(`${value2} ${typeof value2 == "string" ? "É uma string" : "Não é uma string"}`)
value2 = 50
console.log(`${value2} ${typeof value2 == "string" ? "É uma string" : "Não é uma string"}`)

// 5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let value3 = true
console.log(`${value3} ${typeof value3 == "boolean" ? "É um booleano" : "Não é um booleano"}`)

value3 = 10 
console.log(`${value3} ${typeof value3 == "boolean" ? "É um booleano" : "Não é um booleano"}`)


// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subNumOne = 25
const subNumTwo = 10

const sub = subNumOne - subNumTwo

console.log(`${subNumOne} subtraido ${subNumTwo} = ${sub}`)


// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multNumOne = 25
const multNumTwo = 10

const mult = multNumOne * multNumTwo

console.log(`${multNumOne} multiplicado por ${multNumTwo} = ${mult}`)


// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divNumOne = 25
const divNumTwo = 10

const div = divNumOne / divNumTwo

console.log(`${divNumOne} dividido por ${divNumTwo} = ${div}`)


// 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. 
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let num1 = 9
console.log(`${num1} ${num1 % 2 == 0 ? "É um número par" : "Não é um número par"}`)

num1 = 10
console.log(`${num1} ${num1 % 2 == 0 ? "É um número par" : "Não é um número par"}`)


// 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let num2 = 9
console.log(`${num2} ${num2 % 2 != 0 ? "É um número ímpar" : "Não é um número ímpar"}`)

num2 = 10
console.log(`${num2} ${num2 % 2 != 0 ? "É um número ímpar" : "Não é um número ímpar"}`)