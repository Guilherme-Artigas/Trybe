// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];. 
// Valor esperado no retorno da função: 2. 

function repete1 (arg1) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let i in arg1) {
    let verificaNumero = arg1[i];
    for (let i2 in arg1) {
      if (verificaNumero === arg1[i2]) {
        contNumero += 1;
      };
    };
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = i;
    };
    contNumero = 0;
  };
  return arg1[indexNumeroRepetido];
};
console.log(repete1([2, 3, 2, 5, 8, 2, 3]));


// Opção 2
function maisRepetido(numeros) {
  let num = {};

  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));