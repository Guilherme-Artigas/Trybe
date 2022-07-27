let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const lista = [comida, animal, bebida]

console.log(`Exibindo a lista com um nome coerente ao seu respectivo conteúdo!`);
const [Animal, drink, food] = lista;
console.log(Animal, drink, food);
