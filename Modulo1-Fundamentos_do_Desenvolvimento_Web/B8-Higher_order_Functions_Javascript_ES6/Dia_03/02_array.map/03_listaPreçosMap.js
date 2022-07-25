const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listaPrecos = products.map((e, i, a) => ({[e]: prices[i]}));
console.log(listaPrecos);