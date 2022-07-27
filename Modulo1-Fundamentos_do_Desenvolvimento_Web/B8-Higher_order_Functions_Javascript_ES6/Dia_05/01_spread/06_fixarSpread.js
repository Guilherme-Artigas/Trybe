// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Melancia', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Maça', 'Abacaxi', 'Morango'];

const fruitSalad = (fruit, additional) => {
  let newArray = [];
  return newArray = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
