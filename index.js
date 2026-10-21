
//Ex1

// const mesadas = [5, 10, 15]
// .map ((mesadas) => mesadas * 2);

// console.log(mesadas);

//Ex2

// const pontos = [3, 7, 10]
// .map ((pontos) => pontos + 5);

// console.log(pontos);

//Ex3

// const  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// .filter ((numero) => numero % 2 === 0)

// console.log(numeros);

//Ex 4

// const precos = [15, 30, 8, 22, 12]
// .filter ((preco) => preco <= 20)

// console.log(precos);

//Ex 5

// const colegas = ["Lara", "Enzo", "Julya", "Mariana", "Leticia"]
// colegas.forEach ((colega) => console.log(colega + "!"))

//Ex 6

// const figurinhas = ['Leão', 'Tigre', 'Urso']
// figurinhas.forEach ((figurinha) => console.log("Eu tenho a figurinha do " + figurinha))

//Ex 7

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// .filter ((numero) => numero % 2 !== 0)
// .map ((numero) => numero * 2)

// console.log(numeros);

//Ex 8

// const lista = [1, 2, 3, 4, 5, 6]
// .filter ((n) => n % 2 === 0)
// .map ((n) => n * 2)

// console.log(lista);

//Ex 9

// const mochila1 = ['lápis', 'caderno'];
// const mochila2 = ['borracha', 'régua'];
// const mochilas = [...mochila1, ...mochila2]

// console.log(mochilas);

//Ex 10

const heroi = { 
    nome: 'Raio Azul',
    poder: 'velocidade', 
    nivel: 7
}

const { nome, poder } = heroi

console.log(`${nome} tem o poder de ${poder}`)