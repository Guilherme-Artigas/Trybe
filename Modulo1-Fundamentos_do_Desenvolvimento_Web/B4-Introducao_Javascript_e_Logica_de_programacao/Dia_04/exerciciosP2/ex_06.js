// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15. 

function somaTeto (arg1) {
  let soma = null;
  for (let i = 1; i <= arg1; i +=1) {
    soma += i;
  };
  return soma;
};
console.log(somaTeto(5));
