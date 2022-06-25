// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

function palindromo (arg1) {
  let palavraInvertida = arg1.split("").reverse().join("");
  if (arg1 === palavraInvertida) {
    return true;
  } else {
    return false;
  };
};
console.log(palindromo('desenvolvimento'));