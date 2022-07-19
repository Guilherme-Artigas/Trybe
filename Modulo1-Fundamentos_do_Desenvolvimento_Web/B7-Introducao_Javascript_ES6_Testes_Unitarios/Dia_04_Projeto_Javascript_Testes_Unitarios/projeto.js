// function average(array) {
//   let soma = null;
//   if (array.length > 0) {
//     for (let indice of array) {
//       if (typeof indice !== 'number') {
//         return undefined;
//       } else {
//         soma += indice;
//       };
//     };
//   } else {
//     return undefined;
//   };
//   return Math.round(soma / array.length);
// };
// const array2 = [2, 2, 5, 8, 12, 18];
// console.log(average(array2));

// function vqv(nome, idade) {
//   if (nome === undefined || idade === undefined) {
//     return undefined;
//   } else {
//     return `Oi, meu nome é ${nome}!
// Tenho ${idade} anos,
// trabalho na Trybe e mando muito em programação!
// #VQV!`
//   };
// };
// console.log(vqv());

// function createStudent(nome) {
//   const obj = {
//     name: nome,
//     feedback: function () {
//       return 'Eita pessoa boa!';
//     },
//   };
//   return obj;
// };
// console.log(createStudent('Guilherme'));

// function calculator (numero1, numero2) {
//   return {
//     sum: numero1 + numero2,
//     mult: numero1 * numero2,
//     div: Math.floor(numero1 / numero2),
//     sub: numero1 - numero2,
//   };
// };
// console.log(calculator(1, 2));

// function arrayGenerator (tipo, objeto) {
//   if (tipo === 'keys') return Object.keys(objeto);
//   if (tipo === 'values') return Object.values(objeto);
//   if (tipo === 'entries') return Object.entries(objeto);
// };
// console.log(arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }));
