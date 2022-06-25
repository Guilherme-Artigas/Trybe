// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];. 
// Valor esperado no retorno da função: 6. 

function menor (arg1) {
  let menor = null;
  for (let indice = 0; indice < arg1.length; indice += 1) {
    if (indice === 0) {
      menor = indice;
    } else if (arg1[indice] < menor) {
      menor = indice;
    };
  };
  return menor;
};
console.log(menor([2, 4, 6, 7, 10, 0, -3]));