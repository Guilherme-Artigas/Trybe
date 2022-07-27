// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// Dica: use parâmetro rest.

const soma = (...args) => args.reduce((ac, e) => ac + e);

console.log(soma(10, 20, 30, 45, 21, 74, 96, 85, 58, 23)); // 462
console.log(soma(10, 20)); // 30
