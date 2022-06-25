// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];. 
// Valor esperado no retorno da função: Fernanda. 

function maiorNome (arg1) {
  let maior = null;
  let nome = null;
  for (let indice = 0; indice < arg1.length; indice += 1) {
    if (indice === 0) {
      maior = arg1[indice].length;
    } else if (arg1[indice].length > maior) {
      maior = arg1[indice].length;
      nome = arg1[indice];
    };
  };
  return nome;
};
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));