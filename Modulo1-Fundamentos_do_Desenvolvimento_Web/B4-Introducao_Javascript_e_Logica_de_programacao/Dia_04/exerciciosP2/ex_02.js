// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function maiorValor (arg1) {
  let maior = null;
  for (let indice = 0; indice < arg1.length; indice += 1) {
    if (indice === 0) {
      maior = arg1[indice];
    } else if (arg1[indice] > maior) {
      maior = indice;
    };
  };
  return maior;
};
console.log(maiorValor([2, 3, 6, 7, 10, 1]));