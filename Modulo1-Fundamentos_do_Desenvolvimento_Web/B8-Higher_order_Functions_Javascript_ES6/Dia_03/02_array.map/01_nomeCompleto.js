const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// Criando um novo array de nomes completos usando o for...
// const nomeCompleto = [];
// for (let i of persons) {
//   nomeCompleto.push(i.firstName + ' ' + i.lastName);
// };
// console.log(nomeCompleto);

const nomeCompleto = persons.map((e) => e.firstName + ' ' + e.lastName);
console.log(nomeCompleto);