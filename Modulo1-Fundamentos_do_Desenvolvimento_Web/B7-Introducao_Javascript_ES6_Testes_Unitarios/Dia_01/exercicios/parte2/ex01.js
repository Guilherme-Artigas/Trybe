/*
  Crie uma função que receba um número e retorne seu fatorial.

  Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

  Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const fatorial = arg1 => {
  let resultado = arg1;
  for (let i = arg1 - 1; i > 1; i -= 1) {
    resultado *= i;
  }
  return resultado;
};
console.log(fatorial(6));