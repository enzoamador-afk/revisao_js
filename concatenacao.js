//Ex1
 
// const resultado = '5' + 3
// console.log(resultado);
// console.log(typeof resultado)

//Ex2

// const resultado = '10' - 2;
// console.log(resultado);
// console.log(typeof resultado);

//Ex3

// const textoDecimal = '123.45'
// const numeroConvertido = Number(textoDecimal)
// const total = numeroConvertido + 10
// console.log(total);

//Ex4

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(100));
// console.log(Boolean("Gato"));

//Ex5

// let saldo = 100
// saldo += 50
// saldo -= 20
// saldo *= 2
// saldo /= 4
// console.log("Saldo Final:", saldo);

//Ex6

// const idade = 20
// const mensagem = idade >= 18 ? 'Pode' : 'Não'
// console.log(mensagem)

// const idade = 50
// const mensagem = idade >= 60 ? 'Aposenta' : 'Não aposenta'
// console.log(mensagem)

//Ex7

// const color = 'vermelho'
// switch (color) {
//     case 'vermelho': 
//      console.log('Pare');
//      break;
//     case 'amarelo': 
//      console.log('Atenção');
//      break;
//     case 'verde': 
//      console.log('Siga');
//      break;
// }

//Ex8

// const frutas = ['uva', 'pera', 'maçã'];
// for (const fruta of frutas) {
//     console.log("Fruta da vez:", fruta);
// }

//Ex9

// let j = 0;
// while (j < 3) {
//     console.log("Valor de j:", j);
//     j++;
// }

//Ex10

// let contador = 10;
// while (contador >= 0) {
//     console.log("Contagem:", contador);
//     contador--;
// }
// console.log("DECOLAR!");

//Ex11

// const nums =[1, 2, 3, 4];
// const triplo = nums.map(n => n * 3);
// console.log(triplo);

// const idades = [12, 17, 18, 22, 15, 30];
// const maiores = idades.filter(i => i >= 18);
// console.log(maiores);

//Ex12

const comidas = ["banana", "maçã", "uva", "limão", "abobora", "beterraba", "Rabanete"]

const frutas = comidas.map(c => c = ["banana", "maçã", "uva", "limão"])
const legumes = comidas.map(c => c = ["abobora", "beterraba", "rabanete"])

console.log(frutas);
console.log(legumes);

const salarios = [ 1200, 50, 100, 1350.00, 300, 1450]
const salariosAlto = salarios.filter(s => s >= 1000)
const salariosBaixo = salarios.filter(s => s < 1000)

console.log(salariosAlto);
console.log(salariosBaixo);